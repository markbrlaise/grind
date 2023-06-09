import React from 'react';
import styles from '../styles/components/GigDetails.module.css';

const GigDetails = ({ gig }) => {
  return (
    <div className={styles.gigDetails}>
      <h2>{gig.title}</h2>
      <p>{gig.description}</p>
      <p>Posted by: {gig.author}</p>
      <p>Location: {gig.location}</p>
      <p>Salary: {gig.salary}</p>
    </div>
  );
};

export default GigDetails;

