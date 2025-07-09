import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
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

    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.innerText == "Show") {
            passwordRef.current.type = "text"
            ref.current.innerText = "Hide"

        }
        else {
            ref.current.innerText = "Show"
            passwordRef.current.type = "password"
        }
    }

    const copyText = (text) => {
        // alert("the this is copied to your clipboard")
        navigator.clipboard.writeText(text)
    }


    const savePassword = (e) => {
        if (
            form.email.length > 3 &&
            form.username.length > 3 &&
            form.password.length > 3
        ) {
            const newEntry = { ...form, id: uuidv4() };
            const updatedArray = [...passwordArray, newEntry];
            setpasswordArray(updatedArray);
            localStorage.setItem("password", JSON.stringify(updatedArray));

            toast('Saved successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        } else {
            toast('Error: Invalid Inputs', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    }


    const deletePassword = (id) => {
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        toast('Deleted successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"

        });
    }

    const editPassword = (id) => {
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }



    const notify = () => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"

        });
        console.log("hehe")
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value  })
    }


    return (
        <>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
                 /> */}
            <ToastContainer
                theme='dark' />


            <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-[rgba(226,221,221,0.93)] bg-[radial-gradient(rgba(226,221,221,0.93))] bg-[size:20px_20px]"></div>
            <div className="w-full px-4 max-w-6xl mx-auto">
                <div className=' min-h-full flex flex-col items-center  px-4 '>
                    <div className=' p-8 w-[80vw]  text-white'>
                        <div className='text-center mb-8'>
                            <h1 className='text-4xl font-bold text-gray-700 bg-clip-text mb-2'>
                                PassMan
                            </h1>
                            <p className='text-gray-900 font-light'>Won't let you forget</p>
                        </div>

                        <div className="space-y-6 flex-col flex">
                            <div className='flex flex-col space-y-4'>
                                <div className='relative'>
                                    <input value={form.email} onChange={handleChange} name='email'
                                        className="w-full font-mono bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                        type="text"
                                        placeholder='example@gmail.com'
                                    />
                                </div>

                                <div className='flex flex-col sm:flex-row sm:space-x-3 space-y-4 sm:space-y-0'>
                                    <input value={form.username} onChange={handleChange} name='username'
                                        className="flex-1 font-mono bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                        type="text"
                                        placeholder='Username'
                                    />
                                    <div className='relative'>
                                        <input ref={passwordRef} value={form.password} onChange={handleChange} name='password'
                                            className="flex-1 bg-white/10 backdrop-blur-sm text-black border border-slate-600/50 rounded-lg px-4 py-3 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200 hover:bg-white/15"
                                            type="password"
                                            placeholder='Password'
                                        />
                                        <button ref={ref} className='absolute right-3 top-3 cursor-pointer text-gray-400 font-mono ' onClick={showPassword}>
                                            Show</button>
                                    </div>
                                </div>
                            </div>

                            <button onClick={savePassword} className="flex justify-center items-center cursor-pointer px-5 py-2.5 bg-gradient-to-r from-[#b58e73] to-[#ba9273] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-200">
                                <lord-icon
                                    src="https://cdn.lordicon.com/efxgwrkc.json"
                                    trigger="hover"
                                >
                                </lord-icon> Add Password
                            </button>
                        </div>
                    </div>

                    <div>
                        <span className='font-extrabold text-3xl px-2 '>Your passwords</span>
                        {passwordArray.length === 0 && <div>no passwords to show </div>}
                        {passwordArray.length != 0 &&
                            <div className="min-h-full bg-[rgba(226,221,221,0.93)] flex  justify-center w-[80vw] ">
                                <div className="w-screen">
                                    <div className="w-full overflow-x-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border-2 border-black/50">
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
                                                    <th className="px-8 py-5 text-left text-sm font-semibold text-gray-800 tracking-wide uppercase">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100/80">
                                                {passwordArray.map((item, index) => {
                                                    return <tr key={index}
                                                        className="hover:bg-gray-50/50 transition-colors duration-200">
                                                        <td className="px-8 py-3 text-gray-900 font-medium ">
                                                            <div className='flex items-center'>
                                                                <a href="{item.email}" target='_blank'>{item.email}
                                                                </a>
                                                                <div onClick={() => { copyText(item.email); notify(); }}>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.8}
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5 py-0.5 px-0.5 cursor-pointer"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-8 py-3 text-gray-700 ">
                                                            <div className='flex items-center'>
                                                                <span> {item.username}</span>
                                                                <div onClick={() => { copyText(item.username); notify(); }}>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.8}
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5 py-0.5 px-0.5 cursor-pointer"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-8 py-3 text-gray-600 font-mono">
                                                            <div className='flex items-center'>
                                                                <span> {"*".repeat(item.password.length)}</span>
                                                                <div onClick={() => { copyText(item.password); notify(); }}>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.8}
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5 py-0.5 px-0.5 cursor-pointer"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>


                                                        <td className="px-8 py-3 flex gap-3 text-gray-600 font-mono">

                                                            <span onClick={() => deletePassword(item.id)}>

                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-6 h-10 text-gray-500 hover:text-black-700 cursor-pointer transition duration-150"
                                                                    viewBox="0 0 24 24"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 3a1 1 0 0 0-1 1v1H5.5a.5.5 0 0 0 0 1H6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6h.5a.5.5 0 0 0 0-1H16V4a1 1 0 0 0-1-1H9Zm1 2V4h4v1h-4ZM8 6h8v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6Zm2 2a.5.5 0 0 1 1 0v8a.5.5 0 0 1-1 0V8Zm3-.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0v-9Z" />
                                                                </svg>

                                                            </span>

                                                            <span onClick={() => editPassword(item.id)}>

                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="w-5 h-8 cursor-pointer text-gray-500 hover:text-black-700 transition duration-150 py-0.5"
                                                                    viewBox="0 0 24 24"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M16.862 3.487a1.66 1.66 0 0 1 2.348 2.348l-1.033 1.033-2.348-2.348 1.033-1.033Zm-2.048 2.048L5 15.349V19h3.65l9.814-9.814-2.65-2.65Zm-9.814 14.88A1.44 1.44 0 0 1 3.56 19v-3.651c0-.382.152-.749.423-1.02L14.37 3.94a2.66 2.66 0 0 1 3.76 0l1.93 1.93a2.66 2.66 0 0 1 0 3.76L9.672 20.44a1.44 1.44 0 0 1-1.02.423H3.65Z" />
                                                                </svg>

                                                            </span>
                                                        </td>

                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Manager