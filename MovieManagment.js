

import {writeTocatalogFile} from './HandelFile.js';
import {r, ToDoList} from './UserInteract.js';
import {catalogs} from './main.js';


export const displayCatalog=(callback)=>{
console.log("Display catalogs  \n");
console.log("Movie Catalog:");
catalogs.forEach(movie => {
    console.log(`Title: ${movie.title}`);
    console.log(`Director: ${movie.director}`);
    console.log(`Release Year: ${movie.releaseYear}`);
    console.log(`Genre: ${movie.genre}`);
    console.log('---------------------------');
  });
  callback();
 
};

export const AddMovie = ( callback) => {
  console.log("Add new movie: \n");
  r.question("Enter Title of movie: ", (title) => {
    r.question("Enter director of movie: ", (director) => {
      r.question("Enter release year: ", (year) => {
        r.question("Enter genre of movie: ", (genre) => {
          catalogs.push({
            "title": title,
            "director": director,
            "releaseYear": year,
            "genre": genre
          });
          writeTocatalogFile();
          callback();
        });
      });
    });
  });
};

export const updateMovie = (callback) => {
    console.log("Update details for movie : \n");
    displayCatalog(()=>{console.log("")});
    r.question("Select a movie to update (enter the movie index): ", (index) => {
      const movieIndex=parseInt(index)-1;
      if (movieIndex < 0 || movieIndex >= catalogs.length) {
        console.log("Invalid movie index!");
      } else {
        const selectedMovie = catalogs[movieIndex];
        r.question(`Enter updated title for ${selectedMovie.title}: `, (title) => {
          r.question(`Enter updated director for ${selectedMovie.director}: `, (director) => {
            r.question(`Enter updated release year for ${selectedMovie.releaseYear}: `, (year) => {
              r.question(`Enter updated genre for ${selectedMovie.genre}: `, (genre) => {
                selectedMovie.title = title;
                selectedMovie.director = director;
                selectedMovie.releaseYear = year;
                selectedMovie.genre = genre;
                writeTocatalogFile();
                callback();
           
              });
            });
          });
        });
      }
   
    
     });
   
  };
  

export const DeletMovie=(callback)=>{
    console.log("Delete movie : \n")
    displayCatalog(()=>{console.log("")});
    r.question("Select a movie to delete (enter the movie index): ",(index)=>{
        const IndexMovie=parseInt(index)-1;
        catalogs.splice(IndexMovie, 1);
        writeTocatalogFile();
       callback();
    })
   

};

export const searchMovie = (callback) => {
  r.question("Search by\n 1-title\n 2-director\n 3-release year\n  4-genre\n",(index)=>{
    const Index=parseInt(index);
    if(Index==1){
      r.question("Enter the title of the movie to search: ", (title) => {
        const matchingMovies = catalogs.filter(movie => movie.title === title);
    
        if (matchingMovies.length > 0) {
          matchingMovies.forEach(movie => {
            console.log(`Title: ${movie.title}`);
            console.log(`Director: ${movie.director}`);
            console.log(`Release Year: ${movie.releaseYear}`);
            console.log(`Genre: ${movie.genre}`);
            console.log('---------------------------');
          });
        } else {
          console.log("No movies found with that title.");
        }
        callback();
        //r.close();
      });
  
      
    }
      if(Index==2){
        r.question("Enter director of the movie  ", (director) => {
          const matchingMovies = catalogs.filter(movie => movie.director === director);
      
          if (matchingMovies.length > 0) {
            matchingMovies.forEach(movie => {
              console.log(`Title: ${movie.title}`);
              console.log(`Director: ${movie.director}`);
              console.log(`Release Year: ${movie.releaseYear}`);
              console.log(`Genre: ${movie.genre}`);
              console.log('---------------------------');
            });
          } else {
            console.log("No movies found with that director.");
          }
           callback();
          //r.close();
        });
       
      }

      
      if(Index==3){
        r.question("Enter year of the movie : ", (releaseYear) => {
          const matchingMovies = catalogs.filter(movie => movie.releaseYear === releaseYear);
      
          if (matchingMovies.length > 0) {
            matchingMovies.forEach(movie => {
              console.log(`Title: ${movie.title}`);
              console.log(`Director: ${movie.director}`);
              console.log(`Release Year: ${movie.releaseYear}`);
              console.log(`Genre: ${movie.genre}`);
              console.log('---------------------------');
            });
          } else {
            console.log("No movies found with that year.");
          }
          callback();
          //r.close();
        
        });
     
      }

      if(Index==4){
        r.question("Enter gener of the movie: ", (genre) => {
          const matchingMovies = catalogs.filter(movie => movie.genre === genre);
      
          if (matchingMovies.length > 0) {
            matchingMovies.forEach(movie => {
              console.log(`Title: ${movie.title}`);
              console.log(`Director: ${movie.director}`);
              console.log(`Release Year: ${movie.releaseYear}`);
              console.log(`Genre: ${movie.genre}`);
              console.log('---------------------------');
            });
          } else {
            console.log("No movies found with that gener.");
          }
             callback();
         // r.close();   
        });
      
      }
    
    }
   
  )};
  
  
  // Call the function to enhance the movie catalog
  //enhanceMovieCatalog();

















































  






