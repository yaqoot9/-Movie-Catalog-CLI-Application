import {readCatalogFile} from './HandelFile.js';
import {ToDoList} from './UserInteract.js';
export let catalogs = [];
readCatalogFile((err, cat) => {
  if (err) {
    console.error('Error reading catalog file:', err);
  } else {
  catalogs=cat; 
    
  }
});

setTimeout(()=>{
    ToDoList();
},'500');