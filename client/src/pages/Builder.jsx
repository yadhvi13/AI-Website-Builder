import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'motion/react';
import axios from 'axios';
import { serverUrl } from '../App';
import { Loader2, Sparkles, Code, Play } from 'lucide-react';

const Builder = () => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [generatedCode, setGeneratedCode] = useState(null);
    const [activeTab, setActiveTab] = useState("preview");

    const handleGenerate = async (e) => {
        e.preventDefault();
        if(!prompt.trim()) return;

        setLoading(true);
        try {
            const { data } = await axios.post(`${serverUrl}/api/ai/generate`, { prompt });
            setGeneratedCode(data.code);
            setActiveTab("preview");
        } catch (error) {
            console.error("Failed to generate website", error);
            alert("Error connecting to AI Server.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#faf5ff] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-x-hidden flex flex-col">
            <Navbar />
            <main className="flex-1 w-full mx-auto px-4 sm:px-8 py-8 flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-100px)]">
                
                {/* Left Panel: Prompt Input */}
                <div className="w-full lg:w-1/3 flex flex-col lg:h-full bg-white dark:bg-slate-900 rounded-[32px] p-6 lg:p-8 shadow-xl border border-white dark:border-slate-800">
                    <div className="mb-8">
                        <div className="w-14 h-14 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-inner py-1">
                            <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-800 dark:text-white leading-tight">Describe your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Dream Site</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 font-medium text-sm">Tell our AI exactly what kind of layout, components, and colors you want.</p>
                    </div>

                    <form onSubmit={handleGenerate} className="flex-1 flex flex-col h-full min-h-[300px]">
                        <textarea 
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="flex-1 w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 resize-none text-slate-700 dark:text-slate-300 font-medium h-full"
                            placeholder="A premium glassmorphic landing page for a coffee shop..."
                        ></textarea>
                        
                        <button 
                            disabled={loading || !prompt.trim()}
                            type="submit" 
                            className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-xl shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-3">
                            {loading ? <><Loader2 className="w-6 h-6 animate-spin"/> Generating...</> : <><Sparkles className="w-5 h-5"/> Generate Website</>}
                        </button>
                    </form>
                </div>

                {/* Right Panel: Preview / Code */}
                <div className="w-full lg:w-2/3 lg:h-full h-[600px] bg-slate-100 dark:bg-slate-900/50 rounded-[32px] overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800 flex flex-col relative">
                    
                    {/* Header */}
                    <div className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center px-6 justify-between shrink-0">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        {generatedCode && (
                            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                                <button onClick={() => setActiveTab('preview')} className={`px-4 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500'}`}><Play className="w-4 h-4"/> Preview</button>
                                <button onClick={() => setActiveTab('code')} className={`px-4 py-1.5 rounded-md text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'code' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm' : 'text-slate-500'}`}><Code className="w-4 h-4"/> Code</button>
                            </div>
                        )}
                        <div className="w-10"></div>
                    </div>

                    {/* Content area */}
                    <div className="flex-1 relative overflow-hidden bg-white dark:bg-slate-950">
                        {!generatedCode && !loading && (
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 font-bold select-none text-xl p-8 text-center">
                                AI Generated Render Will Appear Here
                            </div>
                        )}

                        {loading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-sm z-10">
                                <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
                                <p className="font-bold text-slate-600 dark:text-slate-300 animate-pulse">Building your website...</p>
                            </div>
                        )}

                        {generatedCode && !loading && activeTab === 'preview' && (
                            <iframe 
                                className="w-full h-full bg-white border-none"
                                srcDoc={generatedCode}
                                title="Generated Preview"
                                sandbox="allow-scripts allow-same-origin"
                            />
                        )}

                        {generatedCode && !loading && activeTab === 'code' && (
                            <div className="p-6 bg-slate-950 h-full overflow-auto">
                                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                                    <code>{generatedCode}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Builder;
