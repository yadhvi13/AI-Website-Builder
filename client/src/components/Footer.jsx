import React from 'react';
import { motion } from 'motion/react';
import { MonitorPlay, GraduationCap, Award } from 'lucide-react';

const Footer = () => {
    return (
        <section className="bg-white dark:bg-slate-900 py-32 px-8 relative overflow-hidden transition-colors">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-800 dark:text-slate-100 leading-[1.2] tracking-tight">
                        We're thrilled to have you join us <br /> on this exciting <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 underline decoration-pink-300 decoration-4 underline-offset-8">journey.</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed mt-6">
                        Feel free to reach out if you have any <br /> questions or need further assistance. <br />
                        We're here to help every step of the way.
                    </p>
                    <button className="mt-8 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-purple-500/30 hover:scale-105 transition-all">
                        Let's Join us
                    </button>

                    <div className="flex items-center gap-5 mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
                        <div className="w-14 h-14 bg-slate-900 dark:bg-slate-800 rounded-full flex items-center justify-center text-white font-bold tracking-tighter shadow-lg">
                            <MonitorPlay className="w-6 h-6 text-pink-400" />
                        </div>
                        <div>
                            <h4 className="font-black text-slate-800 dark:text-slate-100 text-xl">Website Designs</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold tracking-wide">by Yogeeta</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 relative flex justify-center items-center h-[500px]">
                    {/* Circle Background */}
                    <div className="absolute inset-x-0 bottom-0 top-[10%] rounded-t-full border-[3px] border-dashed border-purple-300 transform scale-110"></div>
                    <div className="absolute inset-x-0 bottom-0 top-[10%] rounded-t-full bg-gradient-to-t from-purple-500 to-pink-300 opacity-80 shadow-2xl"></div>

                    {/* Main Student Image */}
                    <img src="/images/hero.png" alt="Student" className="relative z-10 w-[70%] h-auto drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)] translate-y-16 rounded-full object-cover object-top" />

                    {/* Floating elements */}
                    <motion.div
                        animate={{ x: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="absolute top-[30%] left-[-5%] z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white dark:border-slate-700/50 p-3.5 rounded-[20px] shadow-2xl shadow-purple-500/20 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">1000+</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Students</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ x: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                        className="absolute bottom-[10%] right-[-10%] z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white dark:border-slate-700/50 p-3.5 rounded-[20px] shadow-2xl shadow-pink-500/20 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                            <Award className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">100+</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Mentors</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
