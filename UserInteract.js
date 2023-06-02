
import readline from 'readline';
import {searchMovie, DeletMovie,updateMovie,AddMovie,displayCatalog} from './MovieManagment.js';
import { enhanceMovieCatalog } from './APIrequest.js';
 export const r=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});



export const ToDoList=()=>{
    
console.log(`
Welcome to JS TODO-Movie
***************************
Select an action:
1) Display catalogs
2) Add new Movie to catalogs
3) Search and filter
4) Update movie details 
5) Delete movie
6) Enhancing movie catalog by fetch  additional movie data 
7) Stop program
***************************
`);

r.question("What's your choice?", (choice)=>{
    if(choice=='1'){
        displayCatalog( () => {
        ToDoList();
          });
    }
    

    else if(choice=='2'){
        AddMovie( () => {
        ToDoList();
          });
    }

    else if(choice=='3')
    {searchMovie(()=>{ 
        ToDoList();
    });
    }
    
    else if(choice=='4')
   { updateMovie(()=>{
     ToDoList();
    });
    
  }
    else if(choice=='5')
   { DeletMovie(()=>{ToDoList();
       });
   
   }
    else if(choice=='6'){
        enhanceMovieCatalog (()=>{ ToDoList();
        });
       
    
    }
  

    else if(choice=='7')
    process.exit(1);
})


}