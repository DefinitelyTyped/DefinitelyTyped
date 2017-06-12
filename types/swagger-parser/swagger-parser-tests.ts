import parser = require("swagger-parser");

// Without callback which returns a promise
parser.parse("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.parse("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.parse("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.parse("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.dereference("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.dereference("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.dereference("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.dereference("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.bundle("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.bundle("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.bundle("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.bundle("test.yaml", (err, file) => {
    console.log(file);
});

// Without callback which returns a promise
parser.resolve("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.resolve("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.resolve("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.resolve("test.yaml", (err, file) => {
    console.log(file);
});


// Without callback which returns a promise
parser.validate("test.yaml").then((file) => {
    console.log(file);
});

// with options but, Without callback which returns a promise
parser.validate("test.yaml", {}).then((file) => {
    console.log(file);
});

// With callback
parser.validate("test.yaml", {}, (err, file) => {
    console.log(file);
});

// With callback and no options
parser.validate("test.yaml", (err, file) => {
    console.log(file);
});
