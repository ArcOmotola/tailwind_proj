import React from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {HiOutlineMenuAlt4} from 'react-icons/hi';

export default function Navbar() {
    return (
        <div className='flex justify-between items-center h-20 px-4 bg-cyan-300'>
            <div>
                <h1>BEACHES.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch size={20}/>
                <BsPerson size={20}/>
            </div>
            <div className='md:hidden'>
                <HiOutlineMenuAlt4 />
            </div>
        </div>
    )
}
