import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GigDetails from '../../components/GigDetails';

const GigDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch gig details data based on the id here or use gig details data from state/props

  const gigDetails = {
    // Example gig details data
    id: 1,
    title: 'Web Developer',
    description: 'Seeking experienced web developer...',
    location: 'New York',
    company: 'XYZ Tech',
    salary: '$80,000 - $100,000',
  };

  return (
    <div>
      <Head>
        <title>Grind - Gig Details</title>
        <meta name="description" content="Grind application - Gig Details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Gig Details</h1>
        <GigDetails gigDetails={gigDetails} />
      </main>

      <Footer />
    </div>
  );
};

export default GigDetailsPage;
