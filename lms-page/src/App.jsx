import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Assessment from "./components/Assessment";
import DarkModeToggle from "./components/DarkModeToggle";
import dummyData from "./data/dummyData.json";

function App() {
  const [currentTask, setCurrentTask] = useState(0);

  const handleAssessmentCompletion = () => {
    setCurrentTask((prev) => prev + 1);
  };

  return (
    <div className="app">
  <DarkModeToggle />
  {dummyData.videos.map((video, index) => (
    <div key={index} className="video-container">
      <VideoPlayer video={video} />
      {currentTask === index && (
        <Assessment
          assessment={video.assessment}
          onComplete={handleAssessmentCompletion}
        />
      )}
    </div>
  ))}
</div>

  );
}

export default App;
