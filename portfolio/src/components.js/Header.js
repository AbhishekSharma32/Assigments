import React from 'react';
import './Header.css';

function Header() {
   return (
         <div className="header">
            <div className="header_top"><i class="fa fa-align-justify" aria-hidden="true" style={{}}></i></div> 
             
            <div className="header_mid"> <i class="fa fa-user-o"></i>
             <i class="fa fa-phone" aria-hidden="true"></i>
             <i class="fa fa-book" aria-hidden="true"></i>

             <i class="fa fa-briefcase" aria-hidden="true"></i>
           
             
             </div>
             <div className="header_bottom">
             <i class="fa fa-cloud-download" aria-hidden="true"></i></div>
            
             {/* <i class="material-icons" >person_outline</i> */}
             
             {/* <span class="material-icons-outlined">
phone
</span> */}

</div>
    )
}

export default Header
