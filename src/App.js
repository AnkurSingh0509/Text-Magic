

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  const[mode , setMode] =useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

 const toggleMode =()=>{ 
  if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor ='#042743';
  showAlert("dark mode has been enable","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white'
    showAlert("Light mode has been enable","success");
  }
}
  return (
  <>
  {/*<Navbar title ="Text Magic  " mode ={darkMode} aboutText= "About Textutils" />*/}
  {/*<Navbar/>*/}

   <Navbar title ="Text Magic  " mode ={mode} toggleMode= {toggleMode}/>
   <Alert alert ={alert} />
  <div className="container my-3" >
  <Textform showAlert={showAlert}  heading="Enter your text to analyze"  mode ={mode} />
 
  </div>
  </>
 );
}

export default App;
