import diacritics = require("diacritic");

const cleaned = diacritics.clean("déjà vu");
// $ExpectType string
cleaned;

const mapped = diacritics.map["é"];
// $ExpectType string
mapped;

// @ts-expect-error
diacritics.clean(123);
