import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-[#faf5ff] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-x-hidden flex flex-col">
            <Navbar />
            
            <main className="flex-1 max-w-7xl mx-auto px-8 py-20 w-full relative">
                 <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300 blur-[120px] opacity-30 -z-10"></div>
                 
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6"
                    >
                        Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Success</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                        See what our alumni have been able to build and achieve after graduating from our programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <motion.div whileHover={{ y: -10 }} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-[32px] shadow-xl border border-white dark:border-slate-700/50">
                        <img src="/images/java.png" alt="Project 1" className="w-full h-64 object-cover rounded-2xl mb-6 shadow-sm" />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Enterprise Resource Dashboard</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-4 font-medium">Built by Sarah T. using modern Next.js and Tailwind.</p>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-[32px] shadow-xl border border-white dark:border-slate-700/50">
                        <img src="/images/python.png" alt="Project 2" className="w-full h-64 object-cover rounded-2xl mb-6 shadow-sm" />
                        <div className="p-4">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Automated ML Pipeline Tool</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-4 font-medium">Built by Rahul S. using Python and React.</p>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Portfolio;
