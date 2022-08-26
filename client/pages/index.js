import React from 'react';
import Hero from '../components/hero';
import Features from '../components/features';
import Head from 'next/head';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <Head>
        <title>Tonfera</title>
        <meta
          name='description'
          content='We verify the authenticity of products and manufacturers, track their ownership, prevent counterfeiting in a completely decentralized and user-friendly manner. So that you can buy them safely.'
        ></meta>
      </Head>
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
