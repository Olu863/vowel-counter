import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [text, setText] = useState("");

  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let char of text.toLowerCase()) {
    if (vowels.hasOwnProperty(char)) {
      vowels[char]++;
    }
  }

  const sorted = Object.entries(vowels).sort((a, b) => b[1] - a[1]);

  const getColor = (vowel) => {
    if (sorted[0][0] === vowel) return "#2563eb";   // blue
    if (sorted[1][0] === vowel) return "#f97316";   // orange
    if (sorted[2][0] === vowel) return "#eab308";   // yellow
    return "#444";
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Vowel Counter</h1>

      <textarea
        rows="6"
        cols="60"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "15px",
          fontSize: "32px",
          borderRadius: "8px",
          border: "1px solid #555",
          backgroundColor: "#2c2c2c",
          color: "white"
        }}
      />

      {/* RECTANGLE COUNT BOXES */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap"
        }}
      >
        {Object.entries(vowels).map(([vowel, count]) => (
          <div
            key={vowel}
            style={{
              width: "120px",
              height: "60px",
              backgroundColor: getColor(vowel),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "white"
            }}
          >
            {vowel.toUpperCase()} : {count}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
