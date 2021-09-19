import React, { useState } from "react";
import "./styles.css";

var musicList = {
  clam: [
    { name: "Kun faya kun", views: "255M+" },
    { name: "jeena jeena", views: "63M+" }
  ],
  hard: [
    { name: "Malhari", views: "100M+" },
    { name: "Till i collapse", views: "655M+" }
  ],
  dance: [
    { name: "Muqabla", views: "453M+" },
    { name: "Bang Bang", views: "155M+" }
  ]
};

export default function App() {
  const [selectedMusic, setMusic] = useState("dance");
  function moodClickHandeler(mood) {
    setMusic(mood);
  }

  return (
    <div className="App">
      <h1>🎵 Good music 🎵</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite music. Select a genre to get started
      </p>
      <div>
        {Object.keys(musicList).map((mood) => (
          <button
            onClick={() => moodClickHandeler(mood)}
            style={{
              cursor: "pointer",
              background: "#D1FAE5",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid #059669",
              margin: "0.3rem"
            }}
          >
            {mood}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {" "}
          {musicList[selectedMusic].map((mood) => (
            <li
              key={mood.name}
              style={{
                listStyle: "none",
                padding: "1rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {mood.name} </div>
              <div style={{ fontSize: "smaller" }}> {mood.views} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
