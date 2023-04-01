
import Home from "./Home/Home";
import "./App.css"
import Aos from"aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


function App(){
  useEffect(()=>{
  Aos.init({duration:3000});
  
    },[])
 
  return (
    <div className="App">
    <Home/>

    </div>
  )
}

export default App;
