import React from "react";

export const MovieCard = ({ movie, setSelectedMovie }) => {
  return (
    <div
      onClick={() => setSelectedMovie(movie.imdbID)}
      className="bg-[#1c1b1b] flex items-center flex-col mt-10 ml-6 p-10  shadow-md rounded-xl cursor-pointer hover:scale-110 transition transform duration-150 ease-out focus:border-white"
    >
      <div className="object-cover w-80">
        <img className="" src={movie.Poster} alt="" />
      </div>
      <h1 className="text-white text-md font-bold mt-4 whitespace-nowrap text-ellipsi overflow-hidden">
        {movie.Title}
      </h1>
      <div className="text-sm flex justify-between p-3">
        <span className="text-orange-500">Year: {movie.Year}</span>
      </div>
    </div>
  );
};
