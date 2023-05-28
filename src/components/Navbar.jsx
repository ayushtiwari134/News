import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMode = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <>
            <nav className='flex  justify-between items-center text-[1.2rem] text-white px-4 py-3 bg-blue-700'>
                <div className="logo ml-5 ">
                    <Link to="./">NewsUtils</Link>
                </div>
                <div className="links ">
                    <ul className=' sm:flex hidden'>
                        <Link to="./business"><li className='px-3 hover:text-gray-400'>Business</li></Link>
                        <Link to="./sports"><li className='px-3 hover:text-gray-400'>Sports</li></Link>
                        <Link to="./entertainment"><li className='px-3 hover:text-gray-400'>Entertainment</li></Link>
                        <Link to="./science"><li className='px-3 hover:text-gray-400'>Science</li></Link>
                    </ul>
                </div>
                <div onClick={toggleMode} className=" icons sm:hidden z-50">
                    <FaBars className={mobileMenu ? 'hidden' : 'cursor-pointer'} />
                    <FaTimes className={mobileMenu ? 'cursor-pointer text-white' : 'hidden'} />
                </div>

                <ul className={mobileMenu ? 'sm:hidden z-40 absolute top-0 left-0 flex flex-col w-full justify-center items-center h-screen  bg-black text-white ease-in-out duration-300' : 'sm:hidden z-40 absolute top-0 left-[-100%] flex flex-col w-full justify-center items-center h-screen  bg-black text-white ease-in-out duration-300'}>
                    <Link to="./"><li onClick={toggleMode} className='py-12  text-3xl hover:text-gray-500'>NewsUtils</li></Link>
                    <Link to="./business"><li onClick={toggleMode} className='py-6  text-3xl hover:text-gray-500'>Business</li></Link>
                    <Link to="./sports"><li onClick={toggleMode} className='py-6  text-3xl hover:text-gray-500'>Sports</li></Link>
                    <Link to="./entertainment"><li onClick={toggleMode} className='py-6  text-3xl hover:text-gray-500'>Entertainment</li></Link>
                    <Link to="./science"><li onClick={toggleMode} className='py-6  text-3xl hover:text-gray-500'>Science</li></Link>
                </ul>

            </nav>

        </>
    )
}

export default Navbar