import React, { useState } from "react";

export default function SearchMovies() {
  // states - input query, movies
  const [query, setQuery] = useState("");
  //useState('') initial value is an empty string
  //useState is a function that will update state. setQuery is
  // a function that will update query.
  // This is a form of array destructuring
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/movie/550?api_key=7614f64dc9adcab1b7193a3617d9f951&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
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
  );
}
