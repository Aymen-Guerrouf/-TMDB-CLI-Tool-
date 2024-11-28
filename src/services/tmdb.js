import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/../config.env` });

export const movies = async (type) => {
  try {
    // Verify API key is set
    if (!process.env.API_KEY) {
      throw new Error("API key is not set. Please check your .env file.");
    }
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}`
    );
    const movies = response.data.results.map((movie) => movie.original_title);

    movies.forEach((movie) => {
      console.log(movie);
    });
  } catch (error) {
    throw new Error("An error occurred while fetching movies.");
  }
};

export const genre = async (genre) => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API key is not set. Please check your .env file.");
    }
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genre}`
    );
    const movies = response.data.results.map((movie) => movie.original_title);

    movies.forEach((movie) => {
      console.log(movie);
    });
    console.log(movies);
  } catch (error) {
    throw new Error("An error occurred while fetching movies.");
  }
};

export default { movies, genre };
