import Link from 'next/link';
import React from 'react';

export default function footer() {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 bg-indigo-600'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <h1 className='text-2xl sm:text-2xl text-white'>Tonfeera</h1>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <Link href='/'>
            <p className='text-white text-base  text-justify  mx-2 cursor-pointer'>
              Home
            </p>
          </Link>
          <Link href='/brand'>
            <p className='text-white text-base  text-justify  mx-2 cursor-pointer'>
              Brands
            </p>
          </Link>
          <Link href='/product/new'>
            <p className='text-white text-base  text-justify  mx-2 cursor-pointer'>
              Mint
            </p>
          </Link>
          <Link href='/brand/new'>
            <p className='text-white text-base  text-justify  mx-2 cursor-pointer'>
              Home
            </p>
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-white  text-base  text-justify '>
          Come and join us in making authentic products available for
          consumption...
        </p>
        <p className='text-white sm:text-lg  md:text-xl text-center font-medium mt-2'></p>
        <p className='text-white text-base  text-justify font-medium mt-2'>
          GROUP CS22-19
        </p>
      </div>

      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 ' />

      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className='text-white text-base  text-justify '>@Tonfeera 2022</p>
        <p className='text-white text-base  text-justify '>
          All rights reserved
        </p>
      </div>

      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 ' />
    </div>
  );
}
