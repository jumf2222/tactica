import React from 'react';
import styles from './Toolbar.module.css';

const Toolbar: React.FC = () => (
  <div className={styles.Toolbar} data-testid="Toolbar">
    <button className={styles.button}>Player</button>
    <button className={styles.button}>Goalie</button>
    <button className={styles.button}>Cone</button>
  </div>
);

export default Toolbar;
