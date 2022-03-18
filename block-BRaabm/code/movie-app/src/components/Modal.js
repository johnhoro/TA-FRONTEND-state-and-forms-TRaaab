import React from "react";

class Modal extends React.Component {
  render() {
    let movie = this.props;
    return (
      <>
        <div className="movie">
          <h2>Title: {movie.Title}</h2>
          <h2>Released Year: {movie.Released}</h2>
          <div>
            {movie.Genre.split(",").map((data) => (
              <h2>{data}</h2>
            ))}
          </div>
          <h2>Director: {movie.Director}</h2>
          <h2>Actors: {movie.Actors}</h2>
          <p>{movie.Plot}</p>
          <h2>Language: {movie.Language}</h2>
          <h2>Awards: {movie.Awards}</h2>
          <h2>IMDB Rating: {movie.imdbRating}</h2>
          <div>
            {movie.Images.map((img, i) => (
              <div key={i}>
                <img src={img} alt={movie.Title} className="" />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
