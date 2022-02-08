import React, { useState } from "react";
import "../../src/styles.css";
import MovieCards from "../components/movieCards";


export default function SearchMovies() {

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=7614f64dc9adcab1b7193a3617d9f951&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          <p>Start looking up movies by name!</p>
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
      {movies.filter((movie) => movie.poster_path).map((movie) => (
        <MovieCards movie={movie} key={movie.id}/>
      ))}
      </div>
    </>
  );
}
