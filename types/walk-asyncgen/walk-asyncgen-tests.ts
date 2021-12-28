import pathsGenerator = require("walk-asyncgen");

// $ExpectType AsyncGenerator<string, void, void>
pathsGenerator(".");

// $ExpectType AsyncGenerator<string, void, void>
pathsGenerator(".", {
    excludeFiles: /tslint.\S+/,
    excludeDirs: /node_modules/,
    excludeExt: /mp3$/
});

// $ExpectType AsyncGenerator<string, void, void>
pathsGenerator(".", {
    includeFiles: /tslint.\S+/,
    includeExt: /json/,
    printDirs: false
});

pathsGenerator(".", {
    // $ExpectError
    excludeFiles: "",
    // $ExpectError
    excludeDirs: "",
    // $ExpectError
    excludeExt: ".mp3"
});
