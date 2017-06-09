import parser = require("swagger-parser");

// Without callback which returns a promise
parser.parse("test.yaml").then((file: string) => {
    console.log(file);
});

// With callback
parser.parse("test.yaml", {}, (err, file) => {
    console.log(file);
});
