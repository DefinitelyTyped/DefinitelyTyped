import SemverCompare = require("semver-compare");

const versions = [
    "1.2.3",
    "4.11.6",
    "4.2.0",
    "1.5.19",
    "1.5.5",
    "4.1.3",
    "2.3.1",
    "10.5.5",
    "11.3.0",
];
versions.sort(SemverCompare).join("\n");
