import directoryExists = require("directory-exists");

// test sync 
// const dirExists = directoryExists.sync('/');
// console.log(`root dirExists : ${dirExists}`);

// test cb
// directoryExists('/', ( err: Error,dirExists: boolean ) => {
//     if ( err ) {
//         throw err;
//     }

//     console.log(`root dirExists : ${dirExists}`);
// });

// test promise
directoryExists('/')
.then( dirExists => {
    console.log(`root dirExists : ${dirExists}`);
} ).catch( err => {
    console.log(`err : ${err}`);
} );