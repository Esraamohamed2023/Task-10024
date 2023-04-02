import React from 'react'
import {  Route,Routes,BrowserRouter  } from "react-router-dom";
import Menue from '../Components/Menue/Menue';
import "../index.css"
import Head from './Components/Header/Header';
import Contactus from '../Components/Contactus/Contactus';
import Landing from './Components/Landing/Landing';
import Footer from '../Components/Footer/Footer';
import Create from './Components/Create/Create';
import Notfound from './Components/Notfound/Notfound';


export default function Home() {
  return (
    <div>
   
    
    <BrowserRouter>
    <Head/>
    <Routes>
    
    <Route path='*' element={<Landing/>}> </Route>
    <Route path='/menue' element={<Menue/>}> </Route>
    <Route path='/contact us' element={<Contactus/>}> </Route>
    <Route path='/create' element={<Create/>}> </Route>
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}
