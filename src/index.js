import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "../src/components/searchMovies";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h1 className="title">React Movie Search</h1>
    <SearchMovies />
  </StrictMode>,
  rootElement
);
