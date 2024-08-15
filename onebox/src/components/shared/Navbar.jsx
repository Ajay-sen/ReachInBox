import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../redux/appSlice';
import { auth } from '../../firebase';
import { AnimatePresence, motion } from 'framer-motion';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const { user } = useSelector(store => store.appSlice);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        dispatch(setSearchText(input));
    }, [input]);

    return (
        <div className='flex items-center justify-between mx-3 h-16 bg-gray-800'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-700 cursor-pointer'>
                        <GiHamburgerMenu size={"20px"} className="text-white" />
                    </div>
                    <img className='w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oegc1Jl4CTMC5wisK0XhLfI8pFPFkxjqug&s" alt="gmail-logo" />
                    <h1 className='text-2xl text-white font-medium'>Onebox</h1>
                </div>
            </div>
            <div className='md:block hidden w-[50%]'>
                <div className='flex items-center bg-gray-700 px-2 py-3 rounded-full'>
                    <FaSearch className="text-white" />
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Search Mail" 
                        className="rounded-full w-full bg-transparent outline-none px-1 text-white" 
                    />
                </div>
            </div>
            <div className='md:block hidden'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-700 cursor-pointer'>
                        <CiCircleQuestion size={"24px"} className="text-white" />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-700 cursor-pointer'>
                        <IoMdSettings size={"24px"} className="text-white" />
                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-700 cursor-pointer'>
                        <TbGridDots size={"24px"} className="text-white" />
                    </div>
                    <div className='relative cursor-pointer'>
                        <Avatar 
                            onClick={() => setToggle(!toggle)} 
                            src={user?.photoURL} 
                            size="40" 
                            round={true} 
                        />
                        <AnimatePresence>
                            {toggle && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.1 }}
                                    className='absolute right-2 z-20 shadow-lg bg-white rounded-md'
                                >
                                    <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
