import React from "react";
import { FaFacebook} from "react-icons/fa";
import { FaSistrix,FaHome} from "react-icons/fa";
const Navbar=()=>{
    return(
        <div className="navbar">
    <div className="left_Navbar">
         <div className="faceboo_icons">
               <FaFacebook className="icons"/>
         </div>
         <div className="search_box">
            <input type="text"placeholder="Search Facebook" className="search" id="om"/>
            <FaSistrix className="search_icon"/>
         </div>
    </div>
    <div className="middel_Navbar">
<span className="home">
<FaHome />
</span>
<div className="video">

</div>
    </div>
    <div className="right_Navbar">

    </div>
    </div>)
};
export default Navbar;