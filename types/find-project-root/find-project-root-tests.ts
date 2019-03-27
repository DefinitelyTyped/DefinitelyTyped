/// <reference types="node" />

import findProjectRoot = require("find-project-root");

const root: string | null = findProjectRoot(process.cwd(), {
    maxDepth: 12
});
