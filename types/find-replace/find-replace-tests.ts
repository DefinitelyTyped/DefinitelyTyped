import findReplace = require("find-replace");

const numbers = [1, 2, 3, 4, 5];
const resultTyped = findReplace<number>(
    numbers,
    num => num === 3,
    num => num * 2
);

const colours = ['red', 'white', 'blue', 'white'];
const resultAny = findReplace(
    colours,
    colour => colour === 'red',
    (colour: any) => colour.split('')
);
