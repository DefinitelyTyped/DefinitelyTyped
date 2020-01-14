"use strict";

import gitRawCommits from "git-raw-commits";

declare const execOptions: gitRawCommits.ExecOptions;
declare const gitOptions: gitRawCommits.GitOptions;

// $ExpectType Readable
gitRawCommits(gitOptions);

// $ExpectType Readable
gitRawCommits(gitOptions, execOptions);

// $ExpectError
gitRawCommits();

// $ExpectError
gitRawCommits(execOptions, gitOptions);
