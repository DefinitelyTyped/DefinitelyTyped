import normalize = require("npm-normalize-package-bin");

// String bin
const strPkg = normalize({ name: "my-pkg", bin: "./cli.js" });

// Array bin
const arrPkg = normalize({ name: "my-pkg", bin: ["./cli.js", "./helper.js"] });

// Object bin
const objPkg = normalize({ name: "my-pkg", bin: { "my-cli": "./cli.js" } });

// No bin
const noPkg = normalize({ name: "my-pkg" });

// Preserves other fields
const fullPkg = normalize({
    name: "my-pkg",
    version: "1.0.0",
    bin: "./cli.js",
    main: "index.js",
});
const name: string | undefined = fullPkg.name;
