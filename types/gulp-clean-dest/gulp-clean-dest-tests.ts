import cleanDest = require("gulp-clean-dest");

const someDir = ".";

// $ExpectType ReadWriteStream
cleanDest(someDir);
cleanDest(someDir, {});
cleanDest(someDir, { cwd: someDir });
cleanDest(someDir, { extension: ".ts" });
cleanDest(someDir, { cwd: someDir, extension: ".ts" });
