import React from 'react';
import styles from '../styles/components/GigCard.module.css';

const GigCard = ({ gig }) => {
  return (
    <div className={styles.gigCard}>
      <h3>{gig.title}</h3>
      <p>{gig.description}</p>
      <p>Posted by: {gig.author}</p>
    </div>
  );
};

export default GigCard;

