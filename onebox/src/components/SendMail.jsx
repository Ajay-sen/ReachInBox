import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from "../redux/appSlice";
import { db } from '../firebase';
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';

const SendMail = () => {
    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: ""
    });

    const open = useSelector(store => store.appSlice.open);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "emails"), {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            createdAt: serverTimestamp(),
        });
        dispatch(setOpen(false));
        setFormData({
            to: "",
            subject: "",
            message: ""
        });
    };

    return (
        <div className={`${open ? 'block' : 'hidden'} bg-gray-900 text-gray-200 max-w-6xl shadow-xl shadow-black rounded-t-md`}>
            <div className='flex px-3 py-2 bg-gray-800 justify-between rounded-t-md'>
                <h1>New Message</h1>
                <div onClick={() => dispatch(setOpen(false))} className='p-2 rounded-full hover:bg-gray-700 cursor-pointer'>
                    <RxCross2 size={"10px"} />
                </div>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
                <input 
                    onChange={changeHandler} 
                    value={formData.to} 
                    name="to" 
                    type="text" 
                    placeholder="To" 
                    className='outline-none py-1 bg-gray-800 text-gray-200 placeholder-gray-400' 
                />
                <input 
                    onChange={changeHandler} 
                    value={formData.subject} 
                    name="subject" 
                    type="text" 
                    placeholder="Subject" 
                    className='outline-none py-1 bg-gray-800 text-gray-200 placeholder-gray-400' 
                />
                <textarea 
                    onChange={changeHandler} 
                    value={formData.message} 
                    name="message" 
                    cols={'30'} 
                    rows={'10'} 
                    className='outline-none py-1 bg-gray-800 text-gray-200 placeholder-gray-400' 
                ></textarea>
                <button 
                    type='submit' 
                    className='bg-blue-600 hover:bg-blue-700 rounded-full w-fit px-4 text-white font-medium'
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default SendMail;
