import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, GraduationCap, Award, Briefcase, Star, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#faf5ff] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                {/* Background Blobs for Glassmorphism */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300 blur-[100px] opacity-40"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-300 blur-[100px] opacity-40"></div>
                </div>

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
                        "Unlock your <br /> Potential with us <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">
                            - Explore, Learn, <br /> and Grow!"
                        </span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 max-w-lg text-lg leading-relaxed font-medium">
                        "Welcome to AI Builder Website, where your journey to knowledge begins! A comprehensive range of courses, curated by experts, to help you achieve your personal goals. Join our community and unlock your full potential with interactive and engaging learning experiences."
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-1 transition-all">
                            Get a Proposal
                        </button>
                        <button className="px-8 py-3.5 rounded-full border-2 border-purple-400 text-purple-600 font-semibold hover:bg-purple-50 transition-all flex items-center gap-2">
                            Try Now! <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                {/* Right Content / Image with Floating Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-[380px] h-[380px] md:w-[480px] md:h-[480px] flex justify-center items-center">
                        {/* Circle Background */}
                        <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-pink-300 transform rotate-12 scale-110"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-200 to-purple-300 opacity-30 shadow-2xl shadow-purple-500/20"></div>

                        {/* Main Student Image */}
                        <img src="/images/hero.png" alt="Student" className="relative z-10 w-[80%] h-[90%] rounded-full object-cover object-top drop-shadow-2xl" />

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-[10%] left-[-5%] z-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 dark:border-slate-700/50 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <GraduationCap />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 dark:text-slate-200">1000+</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Students</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute bottom-[20%] right-[-5%] z-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 dark:border-slate-700/50 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                <Award />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 dark:text-slate-200">100+</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Mentors</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            {/* Banner Segment */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 py-6">
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center opacity-80 text-white font-semibold text-lg flex-wrap gap-6">
                    <div className="flex items-center gap-2"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4V9h-4V7z" /></svg> Apple</div>
                    <div className="flex items-center gap-2"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4V9h-4V7z" /></svg> Microsoft</div>
                    <div className="flex items-center gap-2"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4V9h-4V7z" /></svg> Google</div>
                    <div className="flex items-center gap-2 font-black italic tracking-tighter">tcs <span className="text-[10px] uppercase font-normal tracking-wide pl-1 mt-1">Consultancy Services</span></div>
                    <div className="flex items-center gap-2"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4V9h-4V7z" /></svg> Zoho</div>
                </div>
            </div>



            <Footer />
        </div>
    );
};

export default Home;
