import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./components/SearchMovies";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <SearchMovies />
  </StrictMode>,
  rootElement
);
