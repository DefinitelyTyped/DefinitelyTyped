import coverup = require("coverup");

coverup("4242-4242-4242-4242"); // $ExpectType string
// => *******************

coverup("4242-4242-4242-4242", { char: "%" }); // $ExpectType string
// => %%%%%%%%%%%%%%%%%%%

coverup("4242-4242-4242-4242", { keepSymbols: true }); // $ExpectType string
// => ****-****-****-****

coverup("4242-4242-4242-4242", { keepLeft: 1, keepRight: 1, compactTo: 4 }); // $ExpectType string
// => 4****2

coverup("4242-4242-4242-4242", { keepLeft: 4 }); // $ExpectType string
// => 4242***************

coverup("4242-4242-4242-4242", { keepRight: 4 }); // $ExpectType string
// => ***************4242

let options: coverup.Options = {
    char: "x",
    keepLeft: 3,
    keepRight: 3,
};

coverup("4242-4242-4242-4242", options); // $ExpectType string
// => 424xxxxxxxxxxxxx242

options = {
    keepLeft: 1,
    keepRight: 1,
    compactTo: 4,
    keepSymbols: true,
};

coverup("4242-4242-4242-4242", options); // $ExpectError "you cannot define both compactTo and keepSymbols"
// => Error: you cannot define both compactTo and keepSymbols
