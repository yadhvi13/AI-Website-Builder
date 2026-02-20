import React from 'react'
import { AnimatePresence, motion } from "motion/react";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import axios from 'axios';

const LoginModal = ({ open, onClose }) => {

    // handle google login
    const handleGoogleAuth = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            console.log(result);
            const { data } = await axios.post(`${serverUrl}/api/auth/google`,
                {
                    name: result.user.displayName,
                    email: result.user.email,
                    avatar: result.user.photoURL
                },
                { withCredentials: true })
                console.log(data);
                

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={onClose}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4'>


                    {/* login card */}
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.88, opacity: 0, y: 60 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        className='relative w-full max-w-md p-[1px] rounded-3xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent'
                    >
                        {/* card */}
                        <div
                            className='relative rounded-3xl bg-[#0b0b0b]
 border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.8)] 
 overflow-hidden '>

                            {/* animated Gloww */}
                            <motion.div
                                animate={{ opacity: [0.25, 0.4, 0.25] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className='absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]' />

                            <motion.div
                                animate={{ opacity: [0.25, 0.35, 0.2] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className='absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/30 blur-[140px]' />

                            <button
                                onClick={onClose}
                                className='absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg'>
                                X
                            </button>

                            <div className='relative px-8 pt-14 pb-10 text-center'>
                                <h1 className='inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300'>AI-powered website builder</h1>
                                <h2 className='text-3xl font-semibold loading-tight mb-3 space-x-2'>
                                    <span>Welcome to</span>
                                    <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>Elvora.ai</span>
                                </h2>

                                <motion.button
                                    className='group relative w-full h-13 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden'
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={handleGoogleAuth}
                                >
                                    <div className='relative flex items-center justify-center gap-3'>
                                        <img
                                            className='h-5 w-5'
                                            src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="" /> Continue with Google
                                    </div>
                                </motion.button>

                                {/* divider */}
                                <div className='flex items-center gap-4 my-10'>
                                    <div className='h-px flex-1 bg-white/10' />
                                    <span className='text-xs text-zinc-500 tracking-wide'>Secure Login</span>
                                    <div className='h-px flex-1 bg-white/10' />
                                </div>

                                <p className='text-xs text-zinc-500 leading-relaxed'>
                                    By continuing, you agree to our{" "}
                                    <span className='hover:underline cursor-pointer hover:text-zinc-300'>Terms of Service</span>{" "}
                                    and{" "}
                                    <span className='hover:underline cursor-pointer hover:text-zinc-300'>Privacy Policy</span>.
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>}
        </AnimatePresence>


    )
}

export default LoginModal
