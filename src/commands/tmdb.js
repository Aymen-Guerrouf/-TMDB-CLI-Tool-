import chalk from "chalk";

import { movies, genre } from "../services/tmdb.js";

const genres = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  "science fiction": 878,
  "tv movie": 10770,
  thriller: 53,
  war: 10752,
  western: 37,
};

export const tmdbCommand = {
  command: "*",
  describe: "The Movie Database (TMDb) app",
  builder: (yargs) => {
    return yargs
      .option("type", {
        alias: "t",
        type: "string",
        describe: "Type of search (playing, popular, top, upcoming)",
      })
      .option("genre", {
        alias: "g",
        type: "string",
        describe: "Genre of movies  (action, comedy, drama, etc.)",
      })
      .check((argv) => {
        if (!argv.type && !argv.genre) {
          throw new Error(
            chalk.red(
              "Please provide a type or genre to proceed. Use --help for more information."
            )
          );
        } else if (argv.type) {
          if (
            argv.type &&
            !["now_playing", "popular", "top_rated", "upcoming"].includes(
              argv.type
            )
          ) {
            throw new Error(
              chalk.red(
                "Invalid type! Type must be one of: now_playing, popular, top_rated, upcoming."
              )
            );
          }
          console.log(chalk.green("Fetching movies..."));
          movies(argv.type);
        } else {
          if (argv.genre && !Object.keys(genres).includes(argv.genre)) {
            throw new Error(
              chalk.red(
                "Invalid genre! Genre must be one of: " +
                  Object.keys(genres).join(", ")
              )
            );
          }
          console.log(chalk.green("Fetching movies..."));
          console.log(chalk.green("Genre: " + argv.genre));
          genre(genres[argv.genre]);
        }
        return true;
      });
  },
  handler: (argv) => {
    if (!argv.type && !argv.genre) {
      console.log(chalk.yellow("Please provide a type or genre to proceed."));
      return;
    }
  },
};
