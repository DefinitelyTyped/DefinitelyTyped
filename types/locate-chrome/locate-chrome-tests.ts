import locateChrome = require("locate-chrome");

const result = locateChrome(); // $ExpectType Promise<string | null>

locateChrome(path => {
    path; // $ExpectType string | null
});
