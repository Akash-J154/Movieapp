import styled from "styled-components";
import { Link as Linkr } from "react-router-dom";
export const Nav = styled.div`
  height: 80px;
  background: black;
  justify-content: center;
  align-items: center;
  position:fixed;
  top: 0;
  left:0 ;
  width:100% ;
  overflow-x:'hidden' ;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const Contents = styled.div`
  height: 60px;
  background: black;
  z-index: 1;
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-left: 0px;
`;
export const Logo = styled(Linkr)`
  color: white;
  font-family:Arial,bold;
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 22px;
  left: 10%;
  font-size: 1.8rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const Mobileicon = styled.div`
  display: none;
  font-size:xx-large ;
  @media screen and (max-width: 768px) {
    display: block;
    align-items: center;
    cursor: pointer;
    color: #fff;

    transform: translate(-100, 60%);
    position: absolute;
    top: 18px;
    right: 20px;
  }
`;
export const Navmenu = styled.ul`
  align-items: center;
  background:black ;
  justify-content: space-between;
  list-style: none;
`;

export const NavItems = styled.li`
  height: 80px;
  justify-content: center;
@media screen and (max-width:768px){
display:none ;}
`;
export const NavLink = styled(Linkr)`
  cursor: pointer;
  color: white;
  padding:0 1rem ;
  position: absolute;
  display:flex ;
  top: 30px;
  font-size: 1.3rem;
  font-family:Arial, Helvetica, sans-serif ;
  text-decoration:none ;
  &:hover {
    border-bottom: 3px solid #01bf71;
    color:white
  }
`;

export  const NavButton=styled.div`
width: 120px;
    height: 40px;
    margin:10px 0 0 -10px;  
    background: #01bf71;
    -moz-border-radius: 100px / 50px;
    -webkit-border-radius: 100px / 50px;
    border-radius: 100px / 50px;
    position:absolute;
    right:200px;
    top:10px;
    opacity: 0.8;
    @media screen and (max-width:768px){
    display:none;
    background:black;}
    &:hover{
        opacity:1 ;
    }`
export  const NavButtonLink=styled(Linkr)`
color:#010606;
text-decoration:none;
cursor: pointer;
position :absolute ;
right:35px ;
top:10px;
opacity:0.8 ;
font-size:large ;
&:hover{
        opacity:1 ;
    }

@media screen and (max-width:768px){
    background:black;}

`