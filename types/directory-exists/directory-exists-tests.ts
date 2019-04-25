import directoryExists = require("directory-exists");

directoryExists('/').then((exists: boolean) => { console.log(exists); });
