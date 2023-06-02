import { catalogs } from "./main.js";
import {writeTocatalogFile} from './HandelFile.js';
import { ToDoList} from './UserInteract.js';

const fetchMovieData = async (title) => {
    const apiKey = 'f10ea4d3'; // Replace with your actual API key
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // Extract the required information from the API response
      
      const Plot=data.Plot;
      const Ratings=data.Ratings;
      const Poster=data.Poster;
      return { plot: Plot, ratings: Ratings, poster: Poster };
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  };
  
  export const enhanceMovieCatalog = async (callback) => {
    try {
      for (let i = 0; i < catalogs.length; i++) {
        const movie = catalogs[i];
        const movieData = await fetchMovieData(movie.title);
        
        if (movieData) {
          // Update the movie object with the fetched data
          movie.plot = movieData.plot;
          movie.ratings = movieData.ratings;
          movie.Poster=movieData.poster
        }
      }
  
      console.log(catalogs);
      writeTocatalogFile();
      callback();
    } catch (error) {
      console.error('Error enhancing movie catalog:', error);
    }

  };
  

