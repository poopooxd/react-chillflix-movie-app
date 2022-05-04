const Card = ({ movie}) =>{
    const img_path="https://image.tmdb.org/t/p/w500/"
    return(
        <div className="card" >
            {movie.poster_path ? <img key={movie.id} src={`${img_path}${movie.poster_path}`} />: null}
            
        </div>
    );
}
export default Card;