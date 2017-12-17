import braces = require("braces");

const bracesOpts: braces.Options = {
    expand: true,
};

let strArrResult: string[];

strArrResult = braces.expand('a/{x,y,z}/b');
strArrResult = braces('a/{x,y,z}/b', bracesOpts);
