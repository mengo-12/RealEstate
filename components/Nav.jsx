import { px } from 'framer-motion';
import React from 'react';




function Nav() {
  return (
    <nav className="flex relative h-[500px] mx-auto">
      <div className="absolute inset-0 bg-[url('/images/house.jpg')] bg-cover bg-center opacity-60 z-0" />


      <div className='container mx-auto inline-flex py-2 justify-between z-10'>
        <h1 className='text-white font-bold text-5xl'>patrix</h1>


        <ul className='inline-flex space-x-3 text-stone-400 text-2xl py-2'>
          <li className='hover:text-white'>About</li>
          <li className='hover:text-white'>Why us</li>
          <li className='hover:text-white'>Services</li>
          <li className='pl-24 hover:text-white '>Contact</li>
        </ul>


      </div>


    </nav>
  );
}

export default Nav