import isValidZipcode = require("is-valid-zipcode");

// $ExpectType boolean
isValidZipcode("21060");

// $ExpectType boolean
isValidZipcode("2000-000", "PT");
