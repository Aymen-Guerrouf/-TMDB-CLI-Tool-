# TMDb CLI Movie Search Application

## Overview
A command-line interface (CLI) application to search and discover movies using The Movie Database (TMDb) API.

## Features
- Search movies by type:
  - Now playing
  - Popular
  - Top rated
  - Upcoming
- Filter movies by genre

## Installation
1. Clone the repository
2. Run `npm install`

## Usage
```bash
node cli.py [options]
```

### Options
- `--type, -t`: Search movie type
  - Allowed values: `playing`, `popular`, `top`, `upcoming`
- `--genre, -g`: Filter movies by genre
  - Supported genres: action, adventure, animation, comedy, crime, documentary, drama, family, fantasy, history, horror, music, mystery, romance, science fiction, tv movie, thriller, war, western

### Examples
```bash
# Search for popular movies
node cli.py --type popular

# Search for action movies
node cli.py --genre action
```

## Error Handling
- Requires at least one option (`--type` or `--genre`)
- Validates input against supported types and genres

## Dependencies
- chalk: Terminal string styling
- TMDb API service

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss proposed changes.
<h2>Project URL</h2>

<href>https://roadmap.sh/projects/tmdb-cli</href>

<h2>contact</h2>

        <ul>

            <li>Guerrouf Aymen</li>

            <li>Email:guerrouf.aymen@gmail.com</li>

        </ul>
