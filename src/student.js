// import { Component } from "react";


// class Student extends Component{
//     render(){
//         const {name,marks}=this.props;
//         return(
           
//             <>
// <h1>Hello {name}</h1>
// <p>you have secured {marks}</p>
// <hr/>


// </>
//         )
//     }
// }





  function Student(Props){
    const{name,marks}=Props;
    return(
        <>
        <h1>hello {name}</h1>
        <p>you have secured {marks}%</p>
        <hr/>
        </>
    )
  }
export default Student;