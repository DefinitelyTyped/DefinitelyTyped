import jsonFixer = require("json-fixer");

const brokenJson = "{ missingQuotesAroundKey: \"someValue\" }";

// No options
const res = jsonFixer(brokenJson);
res.data;
res.changed;

// All options
jsonFixer(brokenJson, { parse: true, verbose: false });

// Partial options
jsonFixer(brokenJson, { verbose: false });
jsonFixer(brokenJson, { parse: true });
