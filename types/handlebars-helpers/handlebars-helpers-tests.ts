import * as Handlebars from "handlebars";
import helpers from "handlebars-helpers";

const handlebars = Handlebars.create();

// Get all helpers.
helpers();
helpers({ handlebars });

// Get a single helper collection.
helpers("math");
helpers("math", { handlebars });

// Get multiple helper collections.
helpers(["math", "string"]);
helpers(["math", "string"], { handlebars });

// Category getters expose one collection at a time.
helpers.math();
helpers.array();
helpers.math({ handlebars });

// A flattened helper is callable and typed.
const all = helpers();
all.add(1, 2); // $ExpectType number

const math = helpers("math");
math.add(1, 2); // $ExpectType number

const mathAndString = helpers(["math", "string"]);
mathAndString.add(1, 2); // $ExpectType number
mathAndString.capitalize("foo"); // $ExpectType string

const onlyMath = helpers.math();
onlyMath.add(1, 2); // $ExpectType number
