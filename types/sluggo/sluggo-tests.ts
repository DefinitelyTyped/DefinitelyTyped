import sluggo = require("sluggo");

sluggo("i ♥ unicode"); // $ExpectType string

sluggo("unicode ♥ is ☢"); // $ExpectType string

sluggo("unicode ♥ is ☢", { allow: "♥" }); // $ExpectType string
