import React from "react"; 
 function MovieCard(props){
    
       
//or we can also do like this
    // addStars = () =>{
    //     if(this.state.stars >= 5){
    //         return;
    //     }
    //     this.setState({
    //             stars: this.state.stars +0.5
    //           })
       // console.log("this",this);
       //First form
    //    this.setState({
    //     stars: this.state.stars +0.5
    //    })
//     //Second form
//      this.setState((prevState)=>{
//  return{
//     stars:prevState.stars+0.5
//  }
// })
    // }
    // RemoveStar=()=>{
    //     if(this.state.stars<=0){
    //         return;
    //     }
    //     this.setState({
    //             stars: this.state.stars -0.5
    //           })
    // }

    // Handlefav=()=>{
    //     this.setState({
    //         fav:!this.state.fav
    //     });
    // }
    //     HandleCart=()=>{
    //         this.setState({
    //             cart:!this.state.cart
    //         });
        
    // }
   
        // const{movies:data}=this.props;

        // const {title,plot,price,rating,stars,fav,cart}=data;
        const {movies, addStars, toggleFav, toggleCart, DecStars} =  
        props
        const {title,plot,price,poster,rating,stars,fav,cart}=
        props.movies;
        return (
            <div className="main">
                < div className="movie-card">
                    <div className="left">
                       <img alt="poster" src={poster} />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs:{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn"
                                 alt="decrease" 
                                src="https://t4.ftcdn.net/jpg/03/51/18/85/240_F_351188596_rBQwfSx3MgDI1RhmyrJcVGFfP4lVg1VN.jpg" 
                            onClick={()=>{DecStars(movies)}}
                               />
                                
                                <img alt="star" 
                                src="https://t3.ftcdn.net/jpg/01/78/93/96/240_F_178939613_sVSxc9vAxesWklgJzCG16a8wgP8rN1o6.jpg" 
                                className="stars" />

                                <img className="str-btn" 
                                alt="increase" 
                                src="https://t4.ftcdn.net/jpg/02/08/74/43/240_F_208744384_gSh2TR7wByIu81nYR0k8OToiieDcIBMp.jpg" 
                                // onClick={this.addStars.bind(this)}
                                // onClick={this.addStars}
                                onClick={()=>{addStars(movies)}}
                                />
                            <span className="stars">{stars}</span>
                            
                            </div>
                           {/* {fav? <button className="favourite-btn"onClick={this.Handlefav}>Favourite</button>:
                           <button className="unfavorite-btn"onClick={this.Handlefav} >unfavorite</button>} */}
                           <button className={fav?"unfavorite-btn":"favourite-btn"} onClick={()=>{toggleFav(movies)}}>{fav?"unfavorite-btn":"favourite-btn"}
                           </button>

                            <button className={cart?"remove":"cart-btn"} onClick={()=>{toggleCart(movies)}}>{cart?"Remove-from-cart":"add-to-cart"}
                            </button>
                        </div>
                    </div>


                </div>

            </div>
            
        )
    }
 
 export default MovieCard