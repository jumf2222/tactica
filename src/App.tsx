import React, { useEffect, useState } from 'react';
import './App.css';
import Controls from './components/Controls/Controls';
import Timeline from './components/Timeline/Timeline';
import Toolbar from './components/Toolbar/Toolbar';
import Workspace from './components/Workspace/Workspace';

let playInterval: NodeJS.Timeout;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [hierarchy, setHierarchy] = useState([]);

  useEffect(() => {
    if (isPlaying) {
      playInterval = setInterval(() => { setCurrentTime(prev => prev + 1); }, 1);
    } else {
      clearInterval(playInterval);
    }

    return () => {
      clearInterval(playInterval);
    }
  }, [isPlaying]);

  return (
    <div className="container">
      <Workspace ></Workspace>
      <Toolbar></Toolbar>
      <Controls isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}></Controls>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
