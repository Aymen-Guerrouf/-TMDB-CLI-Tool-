import axois from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "src/config.env" });

export const movies = async (type) => {
  try {
    const response = await axois.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}`
    );
    const movies = response.data.results.map((movie) => movie.original_title);

    movies.forEach((movie) => {
      console.log(movie);
    });
  } catch (error) {
    throw new error("An error occurred while fetching movies.");
  }
};
export default movies;
