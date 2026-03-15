import uniqueFilename = require("unique-filename");

// Basic usage
const filename: string = uniqueFilename("/tmp");

// With prefix
const prefixed: string = uniqueFilename("/tmp", "my-prefix");

// With prefix and unique identifier
const unique: string = uniqueFilename("/tmp", "prefix", "some-unique-id");

// With empty prefix
const emptyPrefix: string = uniqueFilename("/tmp", "");
