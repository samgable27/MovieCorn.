import React, { useEffect } from "react";
import "../App.css";
import { MovieCard } from "../components/MovieCard";
import { useState } from "react";
import { MovieInfo } from "../components/MovieInfo";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "@mui/material/Skeleton";

export const Landing = ({ movieList, isLoading }) => {
  const [selectedMovie, setSelectedMovie] = useState();

  return (
    <div>
      <div>
        {selectedMovie && (
          <MovieInfo
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            isLoading={isLoading}
          />
        )}
        {isLoading ? (
          <div className="flex items-center justify-between">
            <h1 className="text-4xl text-white font-bold">Loading movies...</h1>
          </div>
        ) : (
          <div className="flex">
            {movieList?.map((movie, index) => (
              <MovieCard
                setSelectedMovie={setSelectedMovie}
                movie={movie}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
