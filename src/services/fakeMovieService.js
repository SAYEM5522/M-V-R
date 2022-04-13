import * as genresAPI from "./fakeGenreService";
import axios from "axios";
import { useEffect, useState } from "react";
import Data from ".././components/Data.jsx";
// const movies = [
//   {
//     _id: "5b21ca3eeb7f6fbccd471815",
//     title: "Terminator",
//     genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
//     numberInStock: 6,
//     dailyRentalRate: 2.5,
//     publishDate: "2018-01-03T19:04:28.809Z",
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471816",
//     title: "Die Hard",
//     genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
//     numberInStock: 5,
//     dailyRentalRate: 2.5,
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471817",
//     title: "Get Out",
//     genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
//     numberInStock: 8,
//     dailyRentalRate: 3.5,
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471819",
//     title: "Trip to Italy",
//     genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
//     numberInStock: 7,
//     dailyRentalRate: 3.5,
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181a",
//     title: "Airplane",
//     genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
//     numberInStock: 7,
//     dailyRentalRate: 3.5,
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181b",
//     title: "Wedding Crashers",
//     genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
//     numberInStock: 7,
//     dailyRentalRate: 3.5,
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181e",
//     title: "Gone Girl",
//     genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
//     numberInStock: 7,
//     dailyRentalRate: 4.5,
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd47181f",
//     title: "The Sixth Sense",
//     genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
//     numberInStock: 4,
//     dailyRentalRate: 3.5,
//   },
//   {
//     _id: "5b21ca3eeb7f6fbccd471821",
//     title: "The Avengers",
//     genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
//     numberInStock: 7,
//     dailyRentalRate: 3.5,
//   },
// ];
// const setMovie = () => {
//   axios
//     .get("http://localhost:5000/movieList")
//     .then((res) => {
//       // console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
const MoviesList = () => {
  const { movies } = Data();
  console.log(movies);
  // const [movies, setMovies] = useState([]);
  // axios
  //   .get("http://localhost:5000/movieList")
  //   .then((res) => {
  //     setMovies(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // return {
  //   movies,
  // };
};
export function getMovies() {
  const movies = MoviesList();
  console.log(movies);
  return movies;
}

export function getMovie(id) {
  const movies = MoviesList();
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  const movies = MoviesList();
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  const movies = MoviesList();
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
const fakeMoviesService = () => {
  return {};
};
export default fakeMoviesService;
