import type * as Clover from "clover-format";

const coverage: Clover.Coverage = {
    generated: Date.now(),
    clover: "3.2.0",
};

const project: Clover.Project = {
    timestamp: Date.now(),
    name: "All files",
};

const metrics: Clover.Metrics = {
    statements: 5,
    coveredstatements: 1,
    conditionals: 3,
    coveredconditionals: 3,
    methods: 6,
    coveredmethods: 6,
    elements: 123,
    coveredelements: 119,
    complexity: 0,
    loc: 1,
    ncloc: 1,
};
