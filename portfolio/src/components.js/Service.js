/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Service.css"
function Service() {
    return (
        <div>
            <div className="right_bottom">
             <h1>my services</h1> 
             <div className="bottom_up">
             <div className="bottom_up_l">
               {/* <img src="comp.png"/> */}
               <i class="fa fa-desktop" aria-hidden="true" style={{color:"green",fontSize:"x-large",marginLeft:"15px"}}></i>

                 <h4>development</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elies justo eur at magna aliquet finibus. In bibendum ex tempor facilisis sollicitudin.</p>

                 </div> 
                 <div className="bottom_up_r">
                 {/* <img src="comp.png"/> */}
                 <i class="fa fa-rocket" aria-hidden="true" style={{color:"green",fontSize:"x-large",marginLeft:"15px"}}></i>

                 <h4>SEO optimization</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elies justo eur at magna aliquet finibus. In bibendum ex tempor facilisis sollicitudin.</p>
                 </div> 
                 </div>
                 <div className="bottom_down">
             <div className="bottom_down_l">
               {/* <img src="comp.png"/> */}
               <i class="fa fa-database" aria-hidden="true"  style={{color:"green",fontSize:"x-large",marginLeft:"15px"}}></i>

                 <h4>data base</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elies justo eur at magna aliquet finibus. In bibendum ex tempor facilisis sollicitudin.</p>

                 </div> 
                 <div className="bottom_down_r">
                 {/* <img src="comp.png"/> */}
                 <i class="fa fa-shield" aria-hidden="true" style={{color:"green",fontSize:"x-large",marginLeft:"15px"}}> </i>
                 <h4>data security</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elies justo eur at magna aliquet finibus. In bibendum ex tempor facilisis sollicitudin.</p>
                 </div> 
                 </div>
            
            
            
            </div>
        </div>
    )
}

export default Service
