import sha256File = require("sha256-file");

sha256File("./path/to/a_file"); // $ExpectType string

sha256File("./path/to/a_file", (error, sum) => {
    error; // $ExpectType Error | null
    sum; // $ExpectType string | null
});

sha256File("does-not-exist", (error, sum) => {
    error; // $ExpectType Error | null
    sum; // $ExpectType string | null
});
