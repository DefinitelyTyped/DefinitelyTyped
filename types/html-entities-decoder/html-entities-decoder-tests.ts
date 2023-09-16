import htmlEntitiesDecoder = require("html-entities-decoder");

htmlEntitiesDecoder("1 &copy; 2 &#34"); // $ExpectType string
