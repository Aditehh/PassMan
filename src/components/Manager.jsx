import React, { useEffect } from 'react';
import { useRef, useState } from 'react';

const Manager = () => {
    const ref = useRef();
    const [form, setform] = useState({ password: "", email: "", username: "" })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {
        console.log(form)
        let passwords = localStorage.getItem("password")
        let passwordArray;
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])

    const users = [
        { email: form.email },
        { username: form.username },
        { password: form.password }
    ]




    const showPassword = () => {
        if (ref.current.innerText == "Show") {

            ref.current.innerText = "Hide"
        }
        else {
            ref.current.innerText = "Show"
        }
    }

    const savePassword = (e) => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray]))
        console.log([...passwordArray])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
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
                                <input value={form.email} onChange={handleChange} name='email'
                                    className="w-full font-mono bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                    type="text"
                                    placeholder='example@gmail.com'
                                />
                            </div>

                            <div className='flex space-x-3'>
                                <input value={form.username} onChange={handleChange} name='username'
                                    className="flex-1 font-mono bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                    type="text"
                                    placeholder='Username'
                                />
                                <div className='relative'>
                                    <input value={form.password} onChange={handleChange} name='password'
                                        className="flex-1 bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                        type="password"
                                        placeholder='Password'
                                    />
                                    <button ref={ref} className='absolute right-3 top-3 cursor-pointer text-gray-400 font-mono ' onClick={showPassword}>

                                        Show</button>
                                </div>
                            </div>
                        </div>

                        <button onClick={savePassword} className=" flex justify-center items-center cursor-pointer px-5 py-2.5 bg-gradient-to-r from-[#b58e73] to-[#ba9273] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-200">
                            <lord-icon
                                src="https://cdn.lordicon.com/efxgwrkc.json"
                                trigger="hover"
                            >
                            </lord-icon> Add Password
                        </button>
                    </div>
                </div>


                <div className="min-h-full bg-[rgba(226,221,221,0.93)] flex  justify-center w-[80vw] ">
                    <div className="w-screen">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border-2 border-black/50">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-orange-100">
                                        <th className="px-8 py-5 text-left text-sm font-semibold text-gray-800 tracking-wide uppercase">
                                            Email/URL
                                        </th>
                                        <th className="px-8 py-5 text-left text-sm font-semibold text-gray-800 tracking-wide uppercase">
                                            Username
                                        </th>
                                        <th className="px-8 py-5 text-left text-sm font-semibold text-gray-800 tracking-wide uppercase">
                                            Passwords
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100/80">
                                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                                        <td className="px-8 py-3 text-gray-900 font-medium">
                                            The Sliding Mr. Bones (Next Stop, Pottersville)
                                        </td>
                                        <td className="px-8 py-3 text-gray-700">
                                            Malcolm Lockyer
                                        </td>
                                        <td className="px-8 py-3 text-gray-600 font-mono">
                                            1961
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                                        <td className="px-8 py-6 text-gray-900 font-medium">
                                            Witchy Woman
                                        </td>
                                        <td className="px-8 py-6 text-gray-700">
                                            The Eagles
                                        </td>
                                        <td className="px-8 py-6 text-gray-600 font-mono">
                                            1972
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                                        <td className="px-8 py-6 text-gray-900 font-medium">
                                            Shining Star
                                        </td>
                                        <td className="px-8 py-6 text-gray-700">
                                            Earth, Wind, and Fire
                                        </td>
                                        <td className="px-8 py-6 text-gray-600 font-mono">
                                            1975
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Manager