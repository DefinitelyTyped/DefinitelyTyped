import ansiHTML = require("ansi-html");

// Test AnsiHTML function
ansiHTML("text"); // $ExpectType string

// Test setColors function
// $ExpectType void
ansiHTML.setColors({
    reset: "000",
    black: "000000",
    red: "FF0000",
    green: "00FF00",
    yellow: "FFFF00",
    blue: "0000FF",
    magenta: "FF00FF",
    cyan: "00FFFF",
    lightgrey: "D3D3D3",
    darkgrey: "A9A9A9",
});

// Test setColors function with array input for reset
ansiHTML.setColors({ reset: ["111"] }); // $ExpectType void
ansiHTML.setColors({ reset: ["111", "222"] }); // $ExpectType void
ansiHTML.setColors({ reset: ["111", "222", "333"] }); // $ExpectType void

// Test reset function
ansiHTML.reset(); // $ExpectType void

// Test tags
ansiHTML.tags.open; // $ExpectType { [key: number]: string }
ansiHTML.tags.close; // $ExpectType { [key: number]: string }
