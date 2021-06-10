import React from "react";

import './App.css';
 import Header from './Header';
import MenuSection from "./MenuSection";
import Top from "./Top";

import Feed from "./Feed";


function App() {
  return (
    <div className="app">
   <Header/>
    
      <div className="app_body">
      
     <Top/>
      {/* <MenuSection/>  */}
      <Feed/>
     {/* <Header/> */}
      </div> 
    
    
     </div>
    
    
  );
}

export default App;
