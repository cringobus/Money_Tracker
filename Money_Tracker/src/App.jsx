//import { useState } from 'react'
/*import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Analytics from './components/Analytics/Analytics';
import Footer from './components/Footer/Footer';
import "./App.css";
import Calculator from './components/Footer/Calculator/Calculator';
import Calendar from './components/Footer/Calendar/Calendar';*/
import {Route, Routes} from 'react-router';
import HomePage from './HomePage'
import Login from './components/Login/login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<Login />}/>
      <Route path='/home' element={<HomePage/>} />
    </Routes>
    
    </>
  );
}

export default App;
