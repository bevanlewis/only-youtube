import React from "react";

function VideoDisplay({ videoId }) {
  if (!videoId) return null;

  const videoSrc = `https://www.youtube.com/embed/${videoId}?controls=1`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        height: "calc(100vh - 100px)", // Adjust height to account for search bar
        maxWidth: "100vw",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "90%", // Adjust width for better fit
          maxWidth: "1280px",
          aspectRatio: "16/9", // Use aspect ratio for better control
        }}
      >
        <iframe
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default VideoDisplay;
