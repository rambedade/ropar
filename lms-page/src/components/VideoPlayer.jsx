import React from "react";

function VideoPlayer({ video, onEnd }) {
  return (
    <div className="video-container">
      <iframe
        src={`${video.url}?rel=0&showinfo=0&controls=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        onLoad={() => {
          const iframe = document.querySelector("iframe");
          iframe.addEventListener("ended", onEnd);
        }}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
