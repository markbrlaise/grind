import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotificationItem from '../../components/NotificationItem';

const NotificationsPage = () => {
  // Fetch notifications data here or use notifications data from state/props

  const notifications = [
    // Example notifications data
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
    { id: 3, message: 'Notification 3' },
  ];

  return (
    <div>
      <Head>
        <title>Grind - Notifications</title>
        <meta name="description" content="Grind application - Notifications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Notifications</h1>
        <ul>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default NotificationsPage;
