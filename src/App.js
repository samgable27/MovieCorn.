import { TextField } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Landing } from "./pages/Landing";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMovie(searchTerm) {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`
    );
    console.log(data);
    setMovieList(data.Search);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovie(searchTerm);
  }, []);

  return (
    <div>
      <header className="sticky top-0 z-50">
        <div className="relative flex justify-between">
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
      <Landing isLoading={isLoading} movieList={movieList} />
    </div>
  );
}

export default App;
