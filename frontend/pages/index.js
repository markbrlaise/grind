import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Grind - Home</title>
        <meta name="description" content="Grind application - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to Grind</h1>
        <p>Find talented freelancers for your gigs.</p>
        {/* Add more content or components as needed */}
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;
