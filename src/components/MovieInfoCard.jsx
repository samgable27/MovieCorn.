import React from "react";

export const MovieInfoCard = ({ movieInfo }) => {
  return (
    <div className=" text-white relative tracking-normal whitespace-nowrap text-ellipsi overflow-hidden w-[50%]">
      <h1 className="text-white font-bold text-2xl pb-7">
        Movie: <span className="text-orange-500">{movieInfo.Title}</span>
      </h1>
      <p>IMDB Rating: {movieInfo.imdbRating}</p>
      <p>Year: {movieInfo.Year}</p>
      <p>Language: {movieInfo.Language}</p>
      <p>Rated: {movieInfo.Rated}</p>
      <p>Released: {movieInfo.Released}</p>
      <p>Runtime: {movieInfo.Runtime}</p>
      <p>Genre: {movieInfo.Genre}</p>
      <p>Director: {movieInfo.Director}</p>
      <p>Actors: {movieInfo.Actors}</p>
      <p>Plot: {movieInfo.Plot}</p>
    </div>
  );
};
