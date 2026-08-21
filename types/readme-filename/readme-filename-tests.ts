import readmeFilename = require("readme-filename");

// $ExpectType Promise<string>
readmeFilename();

// $ExpectType Promise<string>
readmeFilename("./packages/test");
