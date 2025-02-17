import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import SearchBar from "./components/SearchBar";
import VideoDisplay from "./components/VideoDisplay";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { videoUrl } = useParams();
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (videoUrl) {
      const decodedUrl = decodeURIComponent(videoUrl);
      const id = extractVideoId(decodedUrl);
      if (id) {
        setVideoId(id);
      }
    }
  }, [videoUrl]);

  const handleSearch = (url) => {
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
      navigate(`/only-youtube/${encodeURIComponent(url)}`);
    } else {
      alert("Please enter a valid YouTube video URL.");
    }
  };

  const extractVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} isVideoDisplayed={!!videoId} />
      <VideoDisplay videoId={videoId} />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/only-youtube/:videoUrl?" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
