import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='w-svw h-[8svh] bg-white flex flex-col justify-end items-center'>
        <div className='flex flex-row justify-center items-start gap-[15px] py-1'>
            <Link to='/' className='w-auto hover:border-b-8 hover:border-purple-600'>Questions</Link>
            <Link to='/result' className='w-auto hover:border-b-8 hover:border-purple-600'>Responses</Link>
        </div>
    </nav>
  )
}

export default Navbar