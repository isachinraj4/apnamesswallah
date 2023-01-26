import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  
  const showAlert = (_message, _type) => {
      setAlert({
        message: _message,
        type: _type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){ 
      setMode('dark')
      document.body.style.backgroundColor = '#383b3d' 
      showAlert("Dark mode has been enabled", "success")
    }else { 
      setMode('light')     
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>

      <Navbar title = "ApnaMessWallah" aboutText = "About us" feedback = "Feedback" mode={mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm heading = "Please provide your feedback" mode = {mode} showAlert= {showAlert}/>
      </div>
      {/* <Router>
        <Navbar title = "ApnaMessWallah" aboutText = "About us" feedback = "Feedback" mode={mode} toggleMode = {toggleMode} />
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm heading = "Please provide your feedback" mode = {mode} showAlert= {showAlert}/>} />
            <Route exact path='/feedback' element= {<TextForm heading = "Please provide your feedback" mode = {mode} showAlert= {showAlert}/>} />
            <Route exach path='/about'element = {<About mode = {mode}/>}/>
          </Routes>
        </div> 
      </Router> */}
    </>
  );
}

export default App;
