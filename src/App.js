import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert  = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success")
    }
  }
  return (
   <>
   {/* <Router> */}
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode } />
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className='container my-3 '>
    <TextForm heading="Enter the text to analyze"  showAlert={showAlert} mode={mode}/>          
      {/* <Switch>
        <Route exact  path="/about">
          <About/>
        </Route>
        <Route exact path='/'>
        <TextForm heading="Enter the text to analyze"  showAlert={showAlert} mode={mode}/>          
        </Route>
      </Switch> */}
      {/* <About/> */}

    </div>
   {/* </Router> */}
   </>
  );
}
 
export default App;
