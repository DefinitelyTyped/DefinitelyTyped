"use strict";

import { getRawCommits, getRawCommitsStream, GitOptions } from "git-raw-commits";

declare const gitOptions: GitOptions;

// $ExpectType AsyncGenerator<string, void, unknown>
getRawCommits(gitOptions);

// $ExpectType Readable
getRawCommitsStream(gitOptions);
