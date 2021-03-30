import findProjectRoot = require("find-project-root");

const root: string | null = findProjectRoot("./", {
    maxDepth: 12,
});

findProjectRoot.MARKERS; // $ExpectType [".git", ".hg"]
findProjectRoot.MAX_DEPTH; // $ExpectType 9

// $ExpectType string | null
findProjectRoot("./", {
    maxDepth: findProjectRoot.MAX_DEPTH,
    markers: findProjectRoot.MARKERS,
});
