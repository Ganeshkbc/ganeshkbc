import React from "react";
import { ReactDOM } from "react";
import './Header.css';

const Header=() => {
    return(
       <div className="header">
        <ul className="ul">
        <li className="li"><a href="https://studycomrade.com/" target="main"><b>🏠 Home</b></a></li> 
                
                <li className="li"> <a href="https://studycomrade.com/courses-2/" target="main"><b>📚 Courses</b></a> </li>
                
                <li className="li"> <a href="https://studycomrade.com/events/" target="main"><b>📝 Events</b></a> </li>
                
                <li className="li"> <a href="https://studycomrade.com/student-login/" target="main"><b>👤 login/sign up</b></a></li>
        
        </ul>
       </div>

    )

}
export default Header