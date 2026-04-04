import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

const Courses = () => {
    return (
        <div className="min-h-screen bg-[#faf5ff] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-x-hidden flex flex-col">
            <Navbar />
            
            <main className="flex-1 w-full bg-gradient-to-br from-purple-500 to-pink-400 py-24 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6">Our Popular Courses</h1>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg font-medium leading-relaxed mb-20">
                        Explore our comprehensive library of courses crafted to help you acquire the most in-demand skills in the tech industry today.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Course Card 1 */}
                        <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-white dark:bg-slate-900 p-5 rounded-[32px] text-left shadow-2xl relative border border-white/40 dark:border-slate-700 cursor-pointer">
                            <img src="/images/java.png" alt="Java Full Stack" className="w-full h-52 object-cover rounded-2xl mb-5 shadow-inner" />
                            <div className="absolute top-[200px] right-8 bg-purple-100 text-purple-600 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">1230!</div>
                            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">JAVA</h3>
                            <p className="font-bold text-slate-600 dark:text-slate-400 mb-2">Full Stack Development</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium line-clamp-2">Return the sorted string. If there are multiple answers, return any of them.</p>
                            <p className="font-black text-slate-900 dark:text-white text-xl">$123.68</p>
                        </motion.div>

                        {/* Course Card 2 */}
                        <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-white dark:bg-slate-900 p-5 rounded-[32px] text-left shadow-2xl relative border border-white/40 dark:border-slate-700 cursor-pointer">
                            <img src="/images/python.png" alt="Python Full Stack" className="w-full h-52 object-cover rounded-2xl mb-5 shadow-inner" />
                            <div className="absolute top-[200px] right-8 bg-pink-100 text-pink-600 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">1230!</div>
                            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Python</h3>
                            <p className="font-bold text-slate-600 dark:text-slate-400 mb-2">Full Stack Development</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium line-clamp-2">Return the sorted string. If there are multiple answers, return any of them.</p>
                            <p className="font-black text-slate-900 dark:text-white text-xl">$123.68</p>
                        </motion.div>

                        {/* Course Card 3 */}
                        <motion.div whileHover={{ y: -15, scale: 1.02 }} className="bg-white dark:bg-slate-900 p-5 rounded-[32px] text-left shadow-2xl relative border border-white/40 dark:border-slate-700 cursor-pointer">
                            <img src="/images/python.png" alt="Html & Css" className="w-full h-52 object-cover rounded-2xl mb-5 shadow-inner" />
                            <div className="absolute top-[200px] right-8 bg-purple-100 text-purple-600 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">1230!</div>
                            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Html & Css</h3>
                            <p className="font-bold text-slate-600 dark:text-slate-400 mb-2">Full Stack Development</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 font-medium line-clamp-2">Return the sorted string. If there are multiple answers, return any of them.</p>
                            <p className="font-black text-slate-900 dark:text-white text-xl">$123.68</p>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Courses;
