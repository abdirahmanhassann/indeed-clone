import React from "react";
import logo from './indeelogo.jpg';
import {FaUserAlt} from 'react-icons/fa' 
import {FaAlignJustify} from  'react-icons/fa' 
 const Nav=()=>{
return(
    <>
    <nav>
    <img src={logo} className="indeedlogo"></img>
    <span className='navspan1'>
    <a className='a1'>Find jobs</a>
    <a className='a1'>Company reviews</a>
    <a className='a1'>Salary guide</a>
    </span>
    <span className='navspan2'>
<a className='a2'>Upload your CV</a>
<a className='a21'>Sign in</a>
    </span>
    <a className='a2'>Employers / Post job</a>
    
        <div className="smallnav">
    <a className="usericon"><FaUserAlt/> Signin</a>
    <a ><FaAlignJustify className="hamburger"/></a>
    </div>
   
   </nav>
    </>
)
}
export default Nav;
