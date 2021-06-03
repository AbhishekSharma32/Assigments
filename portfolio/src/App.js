import React from "react";
import './App.css';
// import Content from "./components.js/Content";
// import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import Header from "./components.js/Header";

import Photo from "./components.js/Photo";
// import{ Header} from './components/Header';
  // import {Photo} from ".components/Photo";
function App() {
  return (
    <div clssName="app_list">
      <Header/>
      <Photo/>
     {/* / <Content/> */}
    </div>
    );
}
 
// function TestComponent(){
//   return(
//     <h1>I am Testcomponent</h1>
//   )
// }

export default App;
