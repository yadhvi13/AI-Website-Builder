import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#faf5ff] dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans overflow-x-hidden flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-7xl mx-auto px-8 py-20 w-full relative">
                <div className="absolute top-[20%] right-0 w-[40%] h-[40%] rounded-full bg-purple-300 blur-[120px] opacity-30 -z-10"></div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-8"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Touch</span>
                    </motion.h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                        Have a question about our courses? Want to partner? We would love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 md:p-16 rounded-[40px] shadow-2xl border border-white dark:border-slate-700/50">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 mb-6">Contact Information</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-slate-600 dark:text-slate-300">+91 8744092297</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-slate-600 dark:text-slate-300">support@navskills.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-slate-600 dark:text-slate-300">123 Education Lane, DL 10001</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                            <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                            <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all font-medium" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="button" className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-xl shadow-purple-500/30 hover:scale-[1.02] transition-transform">
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Contact;
