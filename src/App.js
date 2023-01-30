import { TextField } from "@mui/material";
import "./App.css";
import { MovieCard } from "./components/MovieCard";
import { useState } from "react";
import axios from "axios";
import { MovieInfo } from "./components/MovieInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  async function fetchMovie(searchTerm) {
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`
    );
    console.log(data);
    setMovieList(data.Search);
  }

  return (
    <div>
      <header className="">
        <div className="flex justify-between">
          <div className="flex items-center m-7 position:relative cursor-pointer hover:scale-125 transition transform duration-150 ease-out">
            <h1 className="text-white text-4xl">Movie</h1>
            <span className="text-orange-500 translate-y-1">Corn.</span>
          </div>
          <div className="max-w-xs">
            <div className="m-7 relative">
              <TextField
                id="outlined-basic"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchMovie(searchTerm)}
                label="Search movie..."
                variant="outlined"
                className="bg-white rounded-lg focus:ring-black focus:border-black"
              />
            </div>
          </div>
        </div>
      </header>
      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
      <div className="flex">
        {movieList.map((movie, index) => (
          <MovieCard
            setSelectedMovie={setSelectedMovie}
            movie={movie}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
