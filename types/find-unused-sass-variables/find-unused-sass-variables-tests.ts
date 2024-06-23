import fusv from "find-unused-sass-variables";

(async () => {
    // 'scss' is a folder
    let unused = fusv.find("scss"); // $ExpectType Results
    unused = await fusv.findAsync("scss"); // $ExpectType Results
    // Array of unused variables
    // ['$foo', '$bar', '$unused']
    unused.unused; // $ExpectType string[]
    unused.total; // $ExpectType number
    const ignore = ["$my-var", "$my-second-var"];
    const ignoreFiles = ["./file-with-unused-vars.scss", "**/_variables.scss"];
    const fileExtensions = ["css", "scss"];
    unused = fusv.find("scss", { ignore, ignoreFiles, fileExtensions }); // $ExpectType Results
})();
