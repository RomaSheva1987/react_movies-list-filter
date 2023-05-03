import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [value, setValue] = useState('');
  const searchValue = value.toLowerCase().trim();

  const normalizeMovie = (item: string) => item
    .toLowerCase().includes(searchValue);

  const visibleMovies = moviesFromServer
    .filter(movie => normalizeMovie(movie.title)
    || normalizeMovie(movie.description));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                value={value}
                className="input"
                placeholder="Type search word"
                onChange={
                  (event) => setValue(event.target.value)
                }
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
