import React from 'react';
import GigCard from './GigCard';
import styles from '../styles/components/GigList.module.css';

const GigList = ({ gigs }) => {
  return (
    <div className={styles.gigList}>
      {gigs?.map((gig) => (
        <GigCard key={gig.id} gig={gig} />
      ))}
    </div>
  );
};

export default GigList;
