
import React from 'react';
import { Links } from './Links';
import Image from 'next/image';
import logo from '../../public/assets/logo.png'
import MenuLinks from './MenuLinks';

const Navbar = () => {

  return (
    <div className="py-4 bg-base-100  max-w-11/12 mx-auto">
      <div className='flex items-center w-full justify-between gap-2'>

        <ul className=' sm:hidden md:hidden'>
          <MenuLinks></MenuLinks>
        </ul>
        <div >
          <Image src={logo} alt='logo'></Image>
        </div>

        <ul className="hidden sm:block md:block">
          <Links></Links>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;