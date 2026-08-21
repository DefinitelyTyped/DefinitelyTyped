import broccoliFunnel = require("broccoli-funnel");

// $ExpectType Funnel
broccoliFunnel(["public", "scripts"], {
    exclude: [/exclude/],
    include: [/include/],
});

// $ExpectType Funnel
broccoliFunnel("public", {
    exclude: [relativePath => true],
    include: [relativePath => true],
    files: () => ["files"],
    getDestinationPath: relativePath => "path",
});

// $ExpectType Funnel
broccoliFunnel("public", {
    allowEmpty: false,
    destDir: "dest",
    exclude: ["exclude"],
    include: ["include"],
    files: ["files"],
    getDestinationPath: () => "path",
    srcDir: "src",
});

// $ExpectType Funnel
new broccoliFunnel.Funnel(["public", "scripts"], {
    exclude: [/exclude/],
    include: [/include/],
});

// $ExpectType Funnel
new broccoliFunnel.Funnel("public", {
    exclude: [relativePath => true],
    include: [relativePath => true],
    files: () => ["files"],
    getDestinationPath: relativePath => "path",
});

// $ExpectType Funnel
new broccoliFunnel.Funnel("public", {
    allowEmpty: false,
    destDir: "dest",
    exclude: ["exclude"],
    include: ["include"],
    files: ["files"],
    getDestinationPath: () => "path",
    srcDir: "src",
});

// $ExpectType void
broccoliFunnel("public").build();

// $ExpectType boolean
broccoliFunnel("public").canMatchWalk();

// $ExpectType boolean
broccoliFunnel("public").includeFile("relativePath");

// $ExpectType string
broccoliFunnel("public").lookupDestinationPath("relativePath");

// $ExpectType void
broccoliFunnel("public").processFile("sorucePath", "destPath", "relativePath");

// $ExpectType void
broccoliFunnel("public").processFilters("inputPath");

// $ExpectType boolean
broccoliFunnel("public").shouldLinkRoots();
