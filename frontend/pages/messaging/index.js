import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Messaging from '../../components/Messaging';

const MessagingPage = () => {
  // Fetch messaging data here or use messaging data from state/props

  const conversations = [
    // Example conversations data
    { id: 1, user: 'User 1', message: 'Hello!' },
    { id: 2, user: 'User 2', message: 'Hi there!' },
    { id: 3, user: 'User 3', message: 'Hey!' },
  ];

  return (
    <div>
      <Head>
        <title>Grind - Messaging</title>
        <meta name="description" content="Grind application - Messaging" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Messaging</h1>
        <Messaging conversations={conversations} />
      </main>

      <Footer />
    </div>
  );
};

export default MessagingPage;
