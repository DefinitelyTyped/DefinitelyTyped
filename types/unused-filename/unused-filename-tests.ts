import unusedFilename = require('unused-filename');

unusedFilename('rainbow.txt').then(filename => {
    filename; // $ExpectType string
});
