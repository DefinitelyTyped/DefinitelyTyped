import directoryExists = require("directory-exists");

const dirExists = directoryExists.sync('/'); 

console.log(`root dirExists : ${dirExists}`);
