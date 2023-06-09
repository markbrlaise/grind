import React, { useState } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here, e.g., API request, authentication, etc.
    console.log('Logging in...', email, password);
  };

  return (
    <div>
      <Head>
        <title>Grind - Login</title>
        <meta name="description" content="Grind application - Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Login to Grind</h1>
        <form>
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
          <Button onClick={handleLogin}>Login</Button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
