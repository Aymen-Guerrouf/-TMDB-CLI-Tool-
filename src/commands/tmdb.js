import chalk from "chalk";
import movies from "../services/tmdb.js";

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
      .check((argv) => {
        if (
          argv.type &&
          !["playing", "popular", "top_rated", "upcoming"].includes(argv.type)
        ) {
          throw new Error(
            chalk.red(
              "Invalid type! Type must be one of: playing, popular, top, upcoming."
            )
          );
        }
        console.log(chalk.green("Fetching movies..."));
        movies(argv.type);
        return true;
      });
  },
  handler: (argv) => {
    if (!argv.type) {
      console.log(chalk.yellow("Please provide a type to proceed."));
      return;
    }
  },
};
