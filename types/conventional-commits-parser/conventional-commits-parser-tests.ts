"use strict";

import conventionalCommitsParser from "conventional-commits-parser";

declare const commit: string;
declare const options: conventionalCommitsParser.Options;

// $ExpectType Transform
conventionalCommitsParser();

// $ExpectType Transform
conventionalCommitsParser(options);

// $ExpectType Commit
conventionalCommitsParser.sync(commit);

// $ExpectType Commit
conventionalCommitsParser.sync(commit, options);

// $ExpectError
conventionalCommitsParser.sync(options);

// $ExpectError
conventionalCommitsParser.sync(options, commit);
