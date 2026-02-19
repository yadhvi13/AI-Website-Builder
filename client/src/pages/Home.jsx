import React from 'react'
import { useState } from 'react'
import { motion } from "motion/react"
import LoginModal from '../components/LoginModal'

const Home = () => {

    const highlights = [
        "AI Generated Code",
        "Fully Responsive Layouts",
        "Production Ready Output",
    ]

    // use state for login modal
    const [openLogin, setOpenLogin] = useState(false)

    return (
        <div className='relative min-h-screen bg-[#040404] text-white overflow-hidden'>

            {/* HEADER SECTION */}
            <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10'>

                <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                    {/* left side */}
                    <div className='text-lg font-semibold'>
                        GenWeb.ai
                    </div>

                    {/* right side */}
                    <div className='flex items-center gap-5'>
                        {/* pricing */}
                        <div className='hidden md:inline text-sm text-zinc-400 hover:text-white cursor-pointer'>
                            Pricing
                        </div>

                        <button className='px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm' onClick={()=>setOpenLogin(true)}>
                            Get Started
                        </button>
                    </div>

                </div>

            </motion.div>

            {/* HERO SECTION */}
            <section className='pt-44 pb-32 px-6 text-center'>
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-4xl md:text-7xl font-bold tracking-right'
                >
                    Build Stunning Websites
                    <br />
                    <span className='bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>with AI</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg">
                    Describe your idea and let AI generate a modern, responsive, production-ready website.
                </motion.p>


                <button className='mt-12 px-10 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition'>Get Started</button>
            </section>

            {/* CARDS */}

            <section className='max-w-7xl mx-auto px-6 pb-32'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {highlights.map((h, i) => {
                        return (
                            <motion.div
                                key={i}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='rounded-2xl bg-white/5 border border-white/10 p-8'
                            >
                                <h1 className='text-xl font-semibold mb-3'>{h}</h1>
                                <p className='text-sm text-zinc-400'>GenWeb.ai builds real websites - clean code, animations, responsiveness and scalable structure.</p>
                            </motion.div>
                        )
                    })}
                </div>
            </section>


            {/* FOOTER */}
            <footer className='border-t border-white/10 py-10 text-center text-sm text-zinc-500 '>
                &copy; {new Date().getFullYear()} GenWeb.ai
            </footer>

            {openLogin && <LoginModal open={openLogin} onClose={()=>setOpenLogin(false)}/>}
        </div>
    )
}

export default Home
