import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Web3 from 'web3';
import { shortenAddress } from '../utils/shortenAddress';

const Hero = () => {
  const [account, setAccount] = useState('0x000');

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      );
    }
  }

  async function loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log(account);
    setAccount(account);
  }

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <>
      <section className='py-24 flex items-center min-h-screen justify-center bg-white'>
        <div className='mx-auto max-w-[43rem]'>
          <div className='text-center'>
            <p className='text-lg font-medium leading-8 text-indigo-600/95'>
              Welcome to Vortex Security System
            </p>
            <h1 className='mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black'>
              Powering a transparent and secure supply chain&nbsp;
            </h1>
            <p className='mt-3 text-lg leading-relaxed text-slate-400'>
              Experience the future of product security with Vortex Security's
              blockchain system, which uses cutting-edge technology to create a
              secure and transparent supply chain that you can trust
            </p>
          </div>

          <div className='mt-6 flex items-center justify-center gap-4'>
            <Link href='/brand'>
              <a className='transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700'>
                Explore Products
              </a>
            </Link>
            <Link href='/brand/new'>
              <a className='transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50'>
                Add Product{' '}
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
