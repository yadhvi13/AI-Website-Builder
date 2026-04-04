import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Users, Target, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-[#faf5ff] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-x-hidden flex flex-col">
            <Navbar />
            
            <main className="flex-1 max-w-7xl mx-auto px-8 py-20 w-full relative">
                {/* Background Blobs for Glassmorphism */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300 blur-[120px] opacity-30"></div>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8"
                    >
                        Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Minds</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-xl text-slate-600 dark:text-slate-400 font-medium"
                    >
                        We are passionate about bridging the gap between talent and opportunity through world-class educational accessible to everyone globally.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div whileHover={{ y: -10 }} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[32px] shadow-xl border border-white dark:border-slate-700/50">
                        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 shadow-inner">
                            <Users className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Community First</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            We build thriving communities where learners collaborate and support each other through their journeys.
                        </p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[32px] shadow-xl border border-white dark:border-slate-700/50">
                        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-6 shadow-inner">
                            <Target className="w-8 h-8 text-pink-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Goal Oriented</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            Every program is designed with specific outcomes, from new skills to direct career transitions.
                        </p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-[32px] shadow-xl border border-white dark:border-slate-700/50">
                        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 shadow-inner">
                            <BookOpen className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Expert Curated</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            Our curriculums are designed by industry veterans bringing real-world requirements to education.
                        </p>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
