import splitter = require("json-string-splitter");

const pieces = splitter("{\"foo\":\"bar\"}{\"more\":\"json\"}{\"partial\":\"json\"");

pieces.jsons[0]; // '{"foo":"bar"}'
pieces.jsons[1]; // '{"more":"json"}'
pieces.remainder; // '{"partial":"json"'
