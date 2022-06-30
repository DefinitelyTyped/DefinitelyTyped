"use strict";

import gitRawCommits from "git-raw-commits";

declare const execOptions: gitRawCommits.ExecOptions;
declare const gitOptions: gitRawCommits.GitOptions;

// $ExpectType Readable<any>
gitRawCommits(gitOptions);

// $ExpectType Readable<any>
gitRawCommits(gitOptions, execOptions);

// @ts-expect-error
gitRawCommits();

// @ts-expect-error
gitRawCommits(execOptions, gitOptions);
