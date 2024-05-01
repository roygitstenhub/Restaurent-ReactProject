import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Specials from './Components/Specials';
import Gallery from './Components/Gallery';
import Booxtable from './Components/Booxtable';
import Footer from './Components/Footer'
import './App.css';

function App() {
  return (
   <Router>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/Specials' element={<Specials/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Booxtable' element={<Booxtable/>} />
      </Routes>
      <Footer/>
   </Router>
  );
}

export default App;
