import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GigList from '../../components/GigList';

const GigsPage = () => {
  // Fetch gig listings data here or use gig listings data from state/props

  const gigListings = [
    // Example gig listings data
    { id: 1, title: 'Web Developer', description: 'Seeking experienced web developer...' },
    { id: 2, title: 'Graphic Designer', description: 'Looking for a creative graphic designer...' },
    { id: 3, title: 'Content Writer', description: 'Hiring skilled content writer...' },
  ];

  return (
    <div>
      <Head>
        <title>Grind - Gig Listings</title>
        <meta name="description" content="Grind application - Gig Listings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Gig Listings</h1>
        <GigList gigListings={gigListings} />
      </main>

      <Footer />
    </div>
  );
};

export default GigsPage;
