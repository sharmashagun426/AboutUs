import React, { useState} from 'react'
import './App.css';
import './Assets/css/style.css'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About'
import { Route, Routes } from 'react-router-dom';
import Quality from './Components/Quality';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {

  // const [offset, setOffset] = useState(0);

  // const setScroll = () => {
  //   setOffset(window.scrollY);
  // };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", setScroll);
  //   return () => {
  //     window.removeEventListener("scroll", setScroll);
  //   };
  // }, []);

  return (
    <>
    
    {/* {offset >= 700 ? <Navbar /> : "" }   */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
