// import { Component } from "react";
// import MovieCard from "./movieCard";




// class MovieList extends Component{
   

//     render(){
//         const{movies,addstars,decstars,addCart,addFavorite}=this.props
//        // const {title,plot,price,rating,stars,fav,cart}=this.state
       
          
//             return(
//                 <div className="main">
//                     {movies.map((movie,index) => (
//                     <MovieCard movies = {movie}
//                                key = {index}
//                                addstars={addstars}
//                                addCart={addCart}
//                                addfavorite={addFavorite}
//                                decstar={decstars}
//                               />
    
//                 ))}              
//                 </div>
//         // //     {/* <MovieCard

//         // //    // movies={this.state}
//         // // //    title={title} 
//         // // //    plot={plot}
//         // // //    price={price}
//         // // //    rating={rating}
//         // // //    stars={stars}
//         // // //    fav={fav}
//         // // //    cart={cart}        
//         // //     />
//        // </> */}
          
       
       
//         )
//     };
//    } ;

// export default MovieList

import React from "react";
import MovieCard from "./movieCard";

class MovieList extends React.Component{
    
    render(){
        const {movies, onIncStars, onDecStars, onClickFav, onClickAddtocart} =  this.props;
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                           key = {index}
                           addStars = {onIncStars}
                            DecStars = {onDecStars}
                            toggleFav = {onClickFav}
                            toggleCart = {onClickAddtocart}/>

            ))}              
            </div>
        )
    }
}
export default MovieList;