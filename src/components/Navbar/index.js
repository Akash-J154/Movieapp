import React from 'react';
import {FaBars} from 'react-icons/fa';

import "./navbar.css"
import {Nav,Contents,Logo,Mobileicon,Navmenu,NavItems,NavLink,NavButton,NavButtonLink} from './elements';
const Navbar = () => {
  return (
    <>
    <Nav >

        <Contents  >
            <Logo to ="/">Dome</Logo>
            <Mobileicon  >
              <FaBars />
            </Mobileicon>
            <Navmenu>
              <NavItems>
                <NavLink to='Latestaction'  style={{left:"42%",fontSize:"medium"}} >Latest action</NavLink>
              </NavItems>
             
              <NavItems>
                <NavLink to="Drama" style={{left:"48%",fontSize:"medium"}}>Drama</NavLink>
              </NavItems>
              
              <NavItems>
               <NavLink to="Family" style={{left:"55%",fontSize:"medium"}}>Family</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="Sign Up" style={{left:"61%",fontSize:"medium"}}>Sign Up</NavLink>
              </NavItems>
            </Navmenu>
            
             
            <NavButton> 
               <NavButtonLink to="Search">Search</NavButtonLink>
            </NavButton>
        </Contents>
       
      
    </Nav>
    
    
    </>
  );
}

export default Navbar;
