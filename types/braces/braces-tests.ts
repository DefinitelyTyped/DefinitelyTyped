import braces = require("braces");

const transform: braces.Transform = (str) => `foo_${str}`;
const bracesOpts: braces.Options = {
    transform,
    expand: true
};

// $ExpectType string[]
braces.expand('a/{x,y,z}/b');

// $ExpectType string[]
braces('a/{x,y,z}/b', bracesOpts);
