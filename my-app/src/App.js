import react, { useState } from 'react';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const[mode, setMode] = useState('dark');
  return (
    <>
      <Navbar title="TextUtils" aboutText="aboutTextUtils" mode={mode} />

      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" />
      {/* <About/> */}

      </div>
    </>
  );
}

export default App;
