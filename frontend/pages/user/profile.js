import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProfilePage = () => {
  // Fetch user profile data here or use user data from state/props

  return (
    <div>
      <Head>
        <title>Grind - User Profile</title>
        <meta name="description" content="Grind application - User Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>User Profile</h1>
        {/* Display user profile information here */}
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
