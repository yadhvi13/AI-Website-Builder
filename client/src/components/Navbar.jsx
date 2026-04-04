import React, { useState } from 'react';
import { MonitorPlay, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import LoginModal from './LoginModal';

const Navbar = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto w-full relative z-50">
                <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all">
                        <MonitorPlay className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">Website Builder.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <Link to="/about" className={`${location.pathname === '/about' ? 'text-purple-600 dark:text-purple-400' : 'hover:text-purple-600 dark:hover:text-purple-400'} transition-colors`}>Who we are?</Link>
                    <Link to="/builder" className={`${location.pathname === '/builder' ? 'text-pink-500' : 'text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] hover:text-pink-400'} transition-all`}>AI Builder ✨</Link>
                    <Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'text-purple-600 dark:text-purple-400' : 'hover:text-purple-600 dark:hover:text-purple-400'} transition-colors`}>Portfolio</Link>
                    <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-purple-600 dark:text-purple-400' : 'hover:text-purple-600 dark:hover:text-purple-400'} transition-colors`}>Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:shadow-md transition-all"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <button onClick={() => setOpenLogin(true)} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold tracking-wide hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5">
                        Sign in
                    </button>
                </div>
            </nav>
            {openLogin && <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />}
        </>
    );
};

export default Navbar;
