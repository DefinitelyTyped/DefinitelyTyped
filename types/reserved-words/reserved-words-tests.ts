import reserved, { Dialect } from "reserved-words";

const dialect: Dialect = "es3";

// $ExpectType boolean
reserved.check("while");

// $ExpectType boolean
reserved.check("while", "es6");

// $ExpectType boolean
reserved.check("while", "es6", true);

// $ExpectType boolean
reserved.check("yield", 3);

// $ExpectError
reserved.check("yield", 1);

// $ExpectError
reserved.check("yield", "es4");
