import React from 'react';
import styles from './Controls.module.css';

const Controls: React.FC<{
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  currentTime: number,
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>
}> = ({ isPlaying, setIsPlaying, currentTime, setCurrentTime }) => (
  <div className={styles.Controls} data-testid="Controls">
    <button className={styles.button}><i className="material-icons">skip_previous</i></button>
    <button className={styles.button} onClick={() => { setIsPlaying(prev => !prev); }}><i className="material-icons">{isPlaying ? "pause" : "play_arrow"}</i></button>
    <button className={styles.button}><i className="material-icons">skip_next</i></button>
    {currentTime}
  </div>
);

export default Controls;
