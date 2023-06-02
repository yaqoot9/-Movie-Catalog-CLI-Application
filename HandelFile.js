
 import fs from'fs';
 let catalogs=[]
 export const readCatalogFile = (callback) => {
  fs.readFile('catalog.json', 'utf-8', (err, data) => {
    if (err) {
      console.log("Something went wrong while reading the file!");
      callback(err, null);
    } else {
      catalogs = JSON.parse(data);
      callback(null, catalogs);
    }
  });
};

export const writeTocatalogFile=()=>{
    fs.writeFile('catalog.json', JSON.stringify(catalogs), 'utf-8', (err) => {
        if (err) {
          console.log("Something went wrong while writing to the file!");
          console.log(err.message);
        } else {
          //console.log("File has been written.");
        }
})
}


//export { catalogs };