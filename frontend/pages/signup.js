import React, { useState } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    // Perform signup logic here, e.g., API request, user creation, etc.
    console.log('Signing up...', name, email, password);
  };

  return (
    <div>
      <Head>
        <title>Grind - Signup</title>
        <meta name="description" content="Grind application - Signup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Create an Account</h1>
        <form>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button onClick={handleSignup}>Signup</Button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default SignupPage;
