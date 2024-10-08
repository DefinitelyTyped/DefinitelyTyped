import fusv from "find-unused-sass-variables";

// 'scss' is a folder
let unused = fusv.find("scss"); // $ExpectType Results
// Array of unused variables
// ['$foo', '$bar', '$unused']
unused.unused; // $ExpectType string[]
unused.total; // $ExpectType number
const ignore = ["$my-var", "$my-second-var"];
unused = fusv.find("scss", { ignore }); // $ExpectType Results
