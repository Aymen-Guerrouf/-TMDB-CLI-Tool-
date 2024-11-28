#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";

import { tmdbCommand } from "../src/commands/tmdb.js";

yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .example(
    "$0 tmdb-app --type playing",
    "Fetches a list of movies that are now playing."
  )
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  })
  .command(tmdbCommand)
  .recommendCommands()
  .demandCommand(1, chalk.red("You need at least one command before moving on"))
  .strict()
  .alias("h", "help")
  .alias("v", "version")
  .parse();
