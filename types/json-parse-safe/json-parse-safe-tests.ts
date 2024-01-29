import jsonParseSafe = require("json-parse-safe");

const result = jsonParseSafe("{}");
if ("value" in result) {
    // $ExpectType any
    result.value;
} else {
    // $ExpectType Error
    result.error;
}
