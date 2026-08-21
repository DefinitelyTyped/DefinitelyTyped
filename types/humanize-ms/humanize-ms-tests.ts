import HumanizeMs = require("humanize-ms");

HumanizeMs("1s"); // $ExpectType number | undefined

HumanizeMs(1000); // $ExpectType number | undefined

HumanizeMs("incorrect-string"); // $ExpectType number | undefined
