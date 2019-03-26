import condense = require("condense-whitespace");

// $ExpectType string
condense("   \n\n\t Hello    World \t\n");

// $ExpectError
condense(1);
