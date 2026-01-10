import react, { useActionState, useState } from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (Message, type)=> {
     setAlert({
      msg: Message,
      type: type
     })
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2b4a9ad1';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");

    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="aboutTextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm heading="Enter text to analyze below" showAlert={showAlert} />
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
