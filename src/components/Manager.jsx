import React from 'react';
import { useRef } from 'react';

const Manager = () => {
    const ref = useRef();
    const showPassword=  () => {
        // alert("passowrd")
        if(ref.current.innerText == "Show"){
        ref.current.innerText = "Hide"
        }
       else{
        ref.current.innerText = "Show"
        }

    }
    return (
        <>
            <div className="absolute top-0 z-[-2] h-full w-full bg-[rgba(226,221,221,0.93)] bg-[radial-gradient(rgba(226,221,221,0.93))] bg-[size:20px_20px]"></div>
            <div className='min-h-full flex flex-col items-center  px-4 '>
                <div className=' p-8 w-[80vw]  text-white'>
                    <div className='text-center mb-8'>
                        <h1 className='text-4xl font-bold text-gray-700 bg-clip-text mb-2'>
                            PassMan
                        </h1>
                        <p className='text-gray-900 font-light'>Won't let you forget</p>
                    </div>

                    <div className="space-y-6">
                        <div className='flex flex-col space-y-4'>
                            <div className='relative'>
                                <input
                                    className="w-full font-mono bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                    type="text"
                                    placeholder='example@gmail.com'
                                />
                            </div>

                            <div className='flex space-x-3'>
                                <input
                                    className="flex-1 font-mono bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                    type="text"
                                    placeholder='Username'
                                />
                                <div className='relative'>
                                    <input
                                        className="flex-1 bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                        type="password"
                                        placeholder='Password'
                                    />
                                    <span ref={ref} className='absolute right-3 top-3 cursor-pointer text-gray-400 font-mono ' onClick={showPassword}> Show</span>
                                </div>
                            </div>
                        </div>

                        <button class=" flex justify-center items-center cursor-pointer px-5 py-2.5 bg-gradient-to-r from-[#b58e73] to-[#ba9273] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-200">
                            <lord-icon
                                src="https://cdn.lordicon.com/efxgwrkc.json"
                                trigger="hover"

                            >
                            </lord-icon> Add Password
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}
export default Manager