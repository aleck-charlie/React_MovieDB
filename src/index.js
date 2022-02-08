import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./components/SearchMovies";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <SearchMovies />
  </StrictMode>,
  rootElement
);
