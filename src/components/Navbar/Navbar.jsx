import React from 'react'
import { logo, notification, profile, searchIcon } from '../../assets'
import { navLinks } from '../../constants'

const Navbar = () => {
    return (
        <nav className='py-5 px-7 grid grid-cols-12 '>
            <div className='col-span-2'>
                <img src={logo} className='w-52' alt="Learn In Box" />
            </div>
            <ul className='col-span-4 flex justify-end gap-7'>
                {navLinks?.map((nav) => (
                    <li className='navLinks' key={nav?.id}>{nav?.title}</li>
                ))}
            </ul>
            <div className='col-span-3 flex justify-end bg-gray-50 rounded-lg py-2 px-3'>
                <input type="text" className='placeholder:text-sm' placeholder='Search Anything' />
                <img src={searchIcon} className='w-5 h-5' alt="Icon" />
            </div>
            <div className='col-span-3 flex justify-end gap-2 items-center'>
                <img src={profile} className='w-10 h-10 rounded-lg' alt="Profile" />
                <div>
                    <h1 className='font-semibold'>Behzad pashaei</h1>
                    <h1 className='text-xs text-gray-500'>ui & ux designer</h1>
                </div>
                <img src={notification} className='ml-16 w-5 h-5' alt="Notification" />
            </div>
            <div>
            </div>
        </nav>
    )
}

export default Navbar