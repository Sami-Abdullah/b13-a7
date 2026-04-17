'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { RiHome2Line } from 'react-icons/ri'
import { LuClock3 } from 'react-icons/lu'
import { ImStatsDots } from 'react-icons/im'
import { IconContext } from 'react-icons'

export function Links() {
  const pathname = usePathname()

  return (
    <div className='grid grid-flow-col gap-6'>
      <Link className={`${pathname === '/' ? 'bg-[#244d3fFF] text-white' : 'text-gray-400'} flex items-center gap-1 font-semibold btn `} href="/">
        <IconContext.Provider value={{ size:"1.5em" }}>
          <div>
            <RiHome2Line />
          </div>
        </IconContext.Provider>
          Home
      </Link>
      <Link className={`${pathname === '/about' ? 'bg-[#244d3fFF] text-white' : 'text-gray-400'} flex items-center gap-1 font-semibold btn `} href="/about">
        <IconContext.Provider value={{ size:"1.5em" }}>
          <div>
            <LuClock3 />
          </div>
        </IconContext.Provider>
          Timeline
      </Link>
      <Link className={`${pathname === '/stats' ? 'bg-[#244d3fFF] text-white' : 'text-gray-400'} flex items-center gap-1 font-semibold btn `} href="/stats">
        <IconContext.Provider value={{ size:"1.5em" }}>
          <div>
            <ImStatsDots />
          </div>
        </IconContext.Provider>
          Stats
      </Link>

    </div>
  )
}