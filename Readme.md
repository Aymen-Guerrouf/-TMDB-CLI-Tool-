# TMDB CLI Application

## Overview

A command-line interface application for exploring movies using The Movie Database (TMDb) API, built with Node.js and Yargs.

## Features

- Search movies by different types
- Supports filtering:
  - Now Playing Movies
  - Popular Movies
  - Top Rated Movies
  - Upcoming Movies

## Prerequisites

- Node.js (v16.0.0 or later)
- npm (Node Package Manager)
- TMDb API Key

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Aymen-Guerrouf/-TMDB-CLI-Tool-.git
   cd tmdb-cli
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the project root:
   ```bash
   TMDB_API_KEY=your_api_key_here
   ```

## Usage

### Basic Commands

```bash
# Now Playing Movies
npm tmdb-app --type playing

# Popular Movies
 tmdb-app --type popular

# Top Rated Movies
 tmdb-app --type top_rated 

# Upcoming Movies
 tmdb-app --type upcoming
```

<h2>Error Handling</h2>
        <ul>
            <li>Invalid movie type will result in a red error message.</li>
            <li>Provides helpful guidance on correct usage.</li>
</ul>
        <h2>Technologies</h2>
        <ul>
            <li>Node.js (v14+ recommended)</li>
            <li>Yargs (CLI argument parsing)</li>
            <li>Axios (HTTP requests)</li>
        </ul>
<h2>Project URL</h2>
<href>https://roadmap.sh/projects/tmdb-cli</href>
<h2>contact</h2>
        <ul>
            <li>Guerrouf Aymen</li>
            <li>Email:guerrouf.aymen@gmail.com</li>
        </ul>
