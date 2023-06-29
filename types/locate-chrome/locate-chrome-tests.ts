import locateChrome = require('locate-chrome');

const result = locateChrome(); // $ExpectType Promise<string>

locateChrome( ( path ) => {
    path; // $ExpectType string
});