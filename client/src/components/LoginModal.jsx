import React from 'react'
import { AnimatePresence, motion } from "motion/react";

const LoginModal = ({ open, onClose }) => {
    return (
        <AnimatePresence>
            {open && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={onClose()}
                exit={{opacity:0}}
                className='fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-xl px-4'>
                
            </motion.div>}
        </AnimatePresence>


    )
}

export default LoginModal
