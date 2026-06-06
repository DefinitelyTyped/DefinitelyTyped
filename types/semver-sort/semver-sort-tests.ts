import semverSort = require("semver-sort");

const versions: string[] = [
    "v0.0.2",
    "v0.1.1",
    "2.0.1",
    "1.2.2",
    "1.1.1",
    "v0.0.9",
];

semverSort.asc(versions);
semverSort.desc(versions);
