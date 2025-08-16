import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

import './App.css';
import './index.css';

import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Partner from './components/Partner';
import Program from './components/Program';
import Plan from './components/Plan';
import Service from './components/Service';
import Join from './components/Join';

import Layout from './Layout/Layout';
import { Outlet, Link } from "react-router-dom";



//Aos animation 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..


function App() {
   useEffect(() => {
    AOS.init({
      once: true, 
      duration: 1000, // default duration
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route (homepage) */}
          <Route index element={
            <>
              <Hero />
              <Partner />
              <Aboutus />
              <Program />
              <Service />
              <Plan />
              <Join />
            </>
          } />

          {/* Optional: you can define more pages like this */}
          <Route path="about" element={<Aboutus />} />
          <Route path="program" element={<Program />} />
          <Route path="plan" element={<Plan />} />
           <Route path="join" element={<Join />} />
          
          
          {/* Add more as needed */}
        </Route>
        <Route path='/footer' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
