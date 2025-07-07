import React from 'react'

const Navbar = () => {
    return (
        <>
        <nav className='bg-neutral-800 flex items-center justify-betweenflex justify-around  py-2 h-16 '>
            <div className="logo font-extrabold text-yellow-50">PassMan</div>
            <ul >
                <li className='flex gap-5 text-white'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contacts</a>
                    <a href="">Login</a>
                </li>
            </ul>
        </nav>
        </>
    )
    
}

export default Navbar
