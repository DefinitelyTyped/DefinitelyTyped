import gitBranchIs = require("git-branch-is");

gitBranchIs("master").then(
    result => {
        result; // $ExpectType string
    },
    err => {
        err; // $ExpectType any
    },
);
gitBranchIs("master", (err, result) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        result; // $ExpectType string
    }
});

gitBranchIs(branchName => /^master$/.test(branchName)).then(
    result => {
        result; // $ExpectType string
    },
    err => {
        err; // $ExpectType any
    },
);

gitBranchIs.getBranch(
    {
        gitArgs: [],
        cwd: "./",
        gitDir: "",
        gitPath: "git",
    },
    (err, result) => {
        if (err) {
            err; // $ExpectType Error
        } else {
            result; // $ExpectType string
        }
    },
);

gitBranchIs.getBranch({}).then(
    result => {
        result; // $ExpectType string
    },
    err => {
        err; // $ExpectType any
    },
);
