import React from 'react';
import { FaPencilAlt, FaRegStar } from "react-icons/fa";
import { MdOutlineWatchLater, MdExpandMore } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { SlEnvolopeLetter } from "react-icons/sl";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItems = [
    {
        icon: <FaPencilAlt size={'24px'} />,
        text: "Inbox"
    },
    {
        icon: <FaRegStar size={'24px'} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={'24px'} />,
        text: "Snoozed"
    },
    {
        icon: <IoMdSend size={'24px'} />,
        text: "Sent"
    },
    {
        icon: <SlEnvolopeLetter size={'24px'} />,
        text: "Draft"
    },
    {
        icon: <MdExpandMore size={'24px'} />,
        text: "More"
    }
]

const Sidebar = () => {
    const dispatch = useDispatch();

    return (
        <div className='w-[15%] bg-gray-800 text-gray-300'>
            <div className='p-3'>
                <button 
                    onClick={() => dispatch(setOpen(true))} 
                    className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-blue-600 text-white hover:bg-blue-700'
                >
                    <FaPencilAlt size={"24px"} />
                    Compose
                </button>
            </div>
            <div>
                {
                    sidebarItems.map((item, index) => (
                        <div 
                            key={index} 
                            className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-700 my-2'
                        >
                            {item.icon}
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;
