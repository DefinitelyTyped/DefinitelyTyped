import exorcist = require("exorcist");
import * as fs from "fs";

exorcist("path/to/file"); // $ExpectType Stream
exorcist("path/to/file", null, null, null, null); // $ExpectType Stream
exorcist("path/to/file", "example.map"); // $ExpectType Stream
exorcist("path/to/file", "example.map", "/"); // $ExpectType Stream
exorcist("path/to/file", "example.map", "/", "../"); // $ExpectType Stream
exorcist("path/to/file", "example.map", "/", "../", true); // $ExpectType Stream
exorcist(fs.createWriteStream("./some.map"), "example.map"); // $ExpectType Stream
exorcist(fs.createWriteStream("./some.map"), "example.map", null, null, null); // $ExpectType Stream
// @ts-expect-error
exorcist(fs.createWriteStream("./some.map"));

const stream = exorcist("path/to/file");
stream.on("missing-map", missingMapMessage => {
    missingMapMessage; // $ExpectType string
});
stream.on("error", err => {
    err; // $ExpectType Error
});
