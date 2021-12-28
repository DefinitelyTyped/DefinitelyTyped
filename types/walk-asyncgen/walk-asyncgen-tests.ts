import pathsGenerator  from "./"

// $ExpectType AsyncGenerator<string, void, void>
const generator = pathsGenerator(".")

// $ExpectType Options
const excludeOptions = {
    excludeFiles: /tslint.\S+/,
    excludeDirs: /node_modules/,
    excludeExt: /mp3$/
}

// $ExpectType Options
const includeFilesoptions = {
    includeFiles: /tslint.\S+/,
    includeExt: /json/,
    printDirs: false
}

// $ExpectError
const errorOptions = {
    excludeFiles: "",
    excludeDirs: "",
    excludeExt: ".mp3"
}

// $ExpectError

pathsGenerator(".", {includeDirs: true})
