import diacritic = require("diacritic");

const cleaned = diacritic.clean("déjà vu");
// $ExpectType string
cleaned;

const mapped = diacritic.map["é"];
// $ExpectType string
mapped;

// @ts-expect-error
diacritic.clean(123);
