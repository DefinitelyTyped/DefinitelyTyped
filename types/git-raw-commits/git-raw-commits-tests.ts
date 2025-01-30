"use strict";

import { GitOptions, getRawCommits, getRawCommitsStream } from "git-raw-commits";

declare const gitOptions: GitOptions;

// $ExpectType AsyncGenerator<string, void, unknown>
getRawCommits(gitOptions);

// $ExpectType Readable
getRawCommitsStream(gitOptions);
