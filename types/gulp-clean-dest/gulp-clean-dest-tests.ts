import cleanDest = require("gulp-clean-dest");

const someDir = ".";

// $ExpectType ReadWriteStream<string | Buffer, string | Buffer>
cleanDest(someDir);
cleanDest(someDir, {});
cleanDest(someDir, { cwd: someDir });
cleanDest(someDir, { extension: ".ts" });
cleanDest(someDir, { cwd: someDir, extension: ".ts" });
