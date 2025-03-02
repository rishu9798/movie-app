import { Component } from "react";
// import styled from "styled-components";
import styles from "./NavBar.module.css";








class NavBar extends Component{
    render(){
        return(
            <>
          <div className={styles.nav}>
                
               <div className={styles.title}>movie-app</div>
                <div className={styles.container}>
                  
                    <img alt="icon" src="https://cdn-icons-png.flaticon.com/128/726/726496.png" className={styles.img}/>
                    <span className={styles.count}>0</span>                    
                </div>
            
            </div>
            </>
        )
    }
}
export default NavBar;

// const style ={
// // nav:{
// //     width:"100%",
// // height:70,
// // background:" rgb(52, 245, 203)",
// // display:"flex",
// // position:"relative",
// // alignItems:"center",
// // justifyContent:"space-between",
// //},
// //title:{
// //     fontSize: "40px",
// //     color:"#fff",
// //     fontWeight:"600",
// //     fontFamily:"Montserrat,sans-serif",
// //     marginLeft:"20",
// //     // WebkitTextStroke: "4px rgba(126, 50, 60, 0.877)",
// //     // color: "transparent",
// //     textTransform:"uppercase",
// //   },
// //  cartContainer: {
// //     position:"relative",
// //     cursor:"pointer",

//  // },
//   cartIcon:{
//     height:48,
//     marginRight:20,
//   },
//   // cartCount:{
//   //   background:"orange",
//   //   borderRadius:"50%",
//   //   padding:"4px 8px",
//   //   position:"absolute",
//   //   right:10,
//   //   top:-5,
//   //   fontSize:"12",
//   // },

// }