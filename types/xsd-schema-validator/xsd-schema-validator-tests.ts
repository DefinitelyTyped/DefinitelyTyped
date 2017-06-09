import fs = require("fs");
import validator = require("xsd-schema-validator");

validator.validateXML("<foo:bar />", 'resources/foo.xsd', (err, result) => {
    if (err) {
        throw err;
    } else return result.valid;
});
validator.validateXML(fs.createReadStream('some.xml'), "schema.xsd", (err) => {
    if (err) throw err;
});
validator.validateXML({ file: "some.xml" }, "schema.xsd", (err) => {
    if (err) throw err;
});
