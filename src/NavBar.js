import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
width:100%;
height:70;
background:rgb(52, 245, 203);
display:flex;
position:relative;
align-items:center;
justify-content:space-between;
`;
const Title = styled.div`
font-size:40px;
color:#fff;
font-weight:600;
font-family:Montserrat sans-serif;
margin-left:20;

text-transform:uppercase;
&:hover{
//     font-size: 140px;
//   font-weight: 900;
//   margin: auto;
//   -webkit-text-stroke: 4px rgba(126, 50, 60, 0.877);
  color: transparent;
color:black;
}
`;
const Cartimg = styled.img`
height: 48px;
margin-right: 20px;
`
const Container = styled.div`
position: relative;
cursor: pointer;
`;
const Cartcount = styled.div`
background: ${(props)=>props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
visibility:${(props)=>props.show?"visible":"hidden"};
`;

class NavBar extends Component{
    render(){
      //const{Cartcount}=thi
     const {cartCount}=this.props;
        return(
            <>
          <Nav>
                
               <Title>movie-app</Title>
                <Container>
                  
                    <Cartimg alt="icon" src="https://cdn-icons-png.flaticon.com/128/726/726496.png" />
                    <Cartcount color="yellow" show={true} >{cartCount}</Cartcount>                    
                </Container>
            
            </Nav>
            </>
        )
    }




}
export default NavBar;

//const style ={
// nav:{
//     width:"100%",
// height:70,
// background:" rgb(52, 245, 203)",
// display:"flex",
// position:"relative",
// alignItems:"center",
// justifyContent:"space-between",
//},
//title:{
//     fontSize: "40px",
//     color:"#fff",
//     fontWeight:"600",
//     fontFamily:"Montserrat,sans-serif",
//     marginLeft:"20",
//     // WebkitTextStroke: "4px rgba(126, 50, 60, 0.877)",
//     // color: "transparent",
//     textTransform:"uppercase",
//   },
//  cartContainer: {
//     position:"relative",
//     cursor:"pointer",

 // },
 // },
  // cartCount:{
  //   background:"orange",
  //   borderRadius:"50%",
  //   padding:"4px 8px",
  //   position:"absolute",
  //   right:10,
  //   top:-5,
  //   fontSize:"12",
  // },

