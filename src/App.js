

import './App.css';
import Alert from './components/Alert';
 import About from './components/About ';
import Navbar from './components/Navbar';
 import Textform from './components/Textform';
 import React,{ useState } from 'react';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

 
function App() {
  const[mode , setMode]= useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert= (message, type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500);
  
  }


 const toggleMode =()=>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#2a3139';
    showAlert("dark mode has been enabled","success");
    document.title="TextUtils-DarkMode";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title="TextUtils-LightMode";
  }

  }
  return (
   <>
   
<Router>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route  exact path="/">
          <Textform  showAlert={ showAlert} heading='Enter the text to analyse' mode={mode}/> 
          </Route>
</Switch>

  </div>
</Router>


</>
  
  );
}

export default App;
