import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },1000);
  }

  const togglemode=()=>{
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#040414';
      showalert(' Dark Mode Enabled','Success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert(' Light Mode Enabled','Success');
    }
  }
  return (
    <Router>
        <Navbar title="TextUtils" about="About" togglemode={togglemode} mode={mode}/>
        <Alert alert={alert}/>
        
        <Routes>
          <Route path="/about"
            element={<About />}/>
          <Route path="/"
            element={<TextForm title="Enter text below to analyze: " mode={mode}/>}/>
        </Routes> 
    </Router>
      
  );
}

export default App;

