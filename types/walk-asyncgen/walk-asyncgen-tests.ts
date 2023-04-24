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
    // @ts-expect-error
    excludeFiles: "",
    // @ts-expect-error
    excludeDirs: "",
    // @ts-expect-error
    excludeExt: ".mp3"
});
