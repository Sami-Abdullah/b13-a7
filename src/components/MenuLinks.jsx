'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuBurger } from 'react-icons/ci';
const MenuLinks = () => {
  const pathname = usePathname()
  const [clicked,setIsclicked] = useState(false)
  return (
    <div>
      <button className='btn' onClick={()=>{setIsclicked(!clicked)}}><CiMenuBurger /></button>
      <div className = {`${!clicked ? 'hidden':''} grid grid-flow-row gap-6 bg-gray-300 absolute left-0 top-17.5 p-10`}>
        <Link className={`${pathname === '/' ? 'bg-[#244d3fFF] text-white' : 'text-gray-400'} flex items-center gap-1 font-semibold btn `} href="/">

          Home
        </Link>
        <Link className={`${pathname === '/timeline' ? 'bg-[#244d3fFF] text-white' : 'text-gray-400'} flex items-center gap-1 font-semibold btn `} href="/timeline">

          Timeline
        </Link>
        <Link className={`${pathname === '/stats' ? 'bg-[#244d3fFF] text-white' : 'text-gray-400'} flex items-center gap-1 font-semibold btn `} href="/stats">

          Stats
        </Link>

      </div>
    </div>
  );
};

export default MenuLinks;