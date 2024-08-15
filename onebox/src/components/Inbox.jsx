import React, { useState } from 'react';
import { MdCropSquare } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import Messages from './Messages';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const mailType = [
    {
        icon: <MdOutlineForwardToInbox size={"20px"} />,
        text: "Primary"
    },
    {
        icon: <GoTag size={"20px"} />,
        text: "Promotion"
    },
    {
        icon: <FaUserFriends size={"20px"} />,
        text: "Social"
    }
]

const Inbox = () => {
    const [mailTypeSelected, setMailTypeSelected] = useState(0);

    return (
        <div className='flex-1  rounded-xl mx-5'>
            <div className='flex items-center justify-between px-4 bg-gray-900'>
                <div className="flex items-center gap-2 text-gray-200 py-2">
                    <div className='flex items-center gap-1'>
                        <MdCropSquare size={'20px'} />
                        <FaCaretDown size={'20px'} />
                    </div>

                    <div className='p-2 rounded-full hover:bg-gray-700 cursor-pointer'>
                        <IoMdRefresh size={'20px'} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-700 cursor-pointer'>
                        <MdExpandMore size={'20px'} />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-sm text-gray-400'>1-50 of 1000</p>
                    <button className='hover:rounded-full hover:bg-gray-700'><FaAngleLeft /></button>
                    <button className='hover:rounded-full hover:bg-gray-700'><FaAngleRight /></button>
                </div>
            </div>
            <div className='h-[90vh] overflow-y-auto bg-black'>
                <div className='flex items-center gap-1 bg-gray-700'>
                    {
                        mailType.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`flex items-center gap-5 p-4 ${mailTypeSelected === index ? 'border-b-4 border-b-blue-400 text-blue-400' : 'border-b-4 border-b-transparent text-gray-400'} w-52 hover:bg-gray-700`}
                                    onClick={() => {
                                        setMailTypeSelected(index)
                                    }}
                                >
                                    {item.icon}
                                    <span>{item.text}</span>
                                </button>
                            )
                        })
                    }
                </div>
                <Messages />
            </div>
        </div>
    )
}

export default Inbox;
