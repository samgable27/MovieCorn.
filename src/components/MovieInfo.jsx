import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieInfoCard } from "./MovieInfoCard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const MovieInfo = ({ selectedMovie, setSelectedMovie }) => {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      axios
        .get(`https://omdbapi.com/?i=${selectedMovie}&page=1&apikey=fc1fef96`)
        .then((response) => setMovieInfo(response.data));
    }
    fetchMovieDetails();
  }, [selectedMovie]);

  return (
    <div className="flex flex-row p-15 justify-center shadow-xl">
      <div className="flex items-center mx-auto mt-6">
        <img className="rounded-md" src={movieInfo.Poster} alt="" />
        <div className="m-16">
          <MovieInfoCard movieInfo={movieInfo} />
          <div
            onClick={() => setSelectedMovie()}
            className="text-gray-500 cursor-pointer "
          >
            <ExpandLessIcon className="w-10 h-10 hover:scale-110 transition transform duration-150 ease-out focus:border-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
