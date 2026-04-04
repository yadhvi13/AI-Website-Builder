import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Briefcase, ArrowRight } from 'lucide-react';

const Internships = () => {
    return (
        <div className="min-h-screen bg-[#faf5ff] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-x-hidden flex flex-col">
            <Navbar />
            
            <main className="flex-1 max-w-7xl mx-auto px-8 py-20 w-full relative">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-300 blur-[150px] opacity-40 -z-10"></div>
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-bold px-4 py-2 rounded-full text-sm inline-block mb-6 tracking-wide">WE'RE HIRING</span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8"
                    >
                        Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Career</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                        Join our rigorous, placement-driven internship programs. Get hands-on experience by building real-world products under expert mentorship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                     <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border border-white dark:border-slate-700/50 cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 bg-gradient-to-bl from-purple-500 to-transparent w-32 h-32 opacity-10 rounded-bl-[100px]"></div>
                        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 shadow-inner">
                            <Briefcase className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2">Frontend Engineering</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-bold mb-6 text-sm">3 Months • Remote • Paid</p>
                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                            Master React, Next.js and modern CSS frameworks while building out user interfaces for thousands of users.
                        </p>
                        <button className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 hover:text-pink-600 transition-colors">
                            Apply Now <ArrowRight className="w-4 h-4"/>
                        </button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border border-white dark:border-slate-700/50 cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 bg-gradient-to-bl from-pink-500 to-transparent w-32 h-32 opacity-10 rounded-bl-[100px]"></div>
                        <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 shadow-inner">
                            <Briefcase className="w-7 h-7 text-pink-600" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-2">Backend Architecture</h3>
                        <p className="text-pink-600 dark:text-pink-400 font-bold mb-6 text-sm">6 Months • Remote • Paid</p>
                        <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">
                            Work directly with Node.js, Express, databases and AWS. Build scalable apis serving our core platform.
                        </p>
                        <button className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200 hover:text-pink-600 transition-colors">
                            Apply Now <ArrowRight className="w-4 h-4"/>
                        </button>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Internships;
