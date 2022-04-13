import React, { useEffect, useState } from "react";
import axios from "axios";
const Data = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/movieList")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(movies);
  return {
    movies,
  };
};
export default Data;
