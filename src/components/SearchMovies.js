import React from "react";

export default function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/movie/550?api_key=7614f64dc9adcab1b7193a3617d9f951&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
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
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
