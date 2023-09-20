import gitDiff = require("git-diff");
import { GitDiffOptions } from "git-diff";
import gitDiffAsync = require("git-diff/async");

gitDiff("same", "same");
gitDiffAsync("same", "same");

const options: GitDiffOptions = {
    color: true,
    flags: "--ignore-all-space",
    forceFake: true,
    save: true,
    wordDiff: true,
};

gitDiff("same", "same", options);
gitDiffAsync("same", "same", options);

gitDiff("a", "b", options);
gitDiffAsync("a", "b", options);
