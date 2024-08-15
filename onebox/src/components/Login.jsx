import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/appSlice'

const Login = () => {
    const dispatch=useDispatch();
    const signInWithGoogle=async ()=>{
        try{
            const result=await signInWithPopup(auth,provider);
            console.log(result);
            dispatch(setUser({
                displayName:result.user.displayName,
                email:result.user.email,
                photoURL:result.user.photoURL
            }))
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-black'>
            <div className='p-8 bg-gray-800 flex flex-col gap-3  rounded-md'>
                <h1 className='text-center text-xl text-white font-medium mb-5'>LOGIN</h1>
                <GoogleButton onClick={signInWithGoogle}/>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white mt-10 text-2xl'>Its the begging of legendary pipelining</h1>
            <h3 className='text-white'>Start your world for inbounds emails!</h3>
            </div>
           
    </div>
  )
}

export default Login