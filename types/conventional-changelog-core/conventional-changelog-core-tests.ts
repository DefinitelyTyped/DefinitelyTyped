/* tslint:disable:no-namespace */
"use strict";

import conventionalChangelogCore from "conventional-changelog-core";
import gitRawCommits from "git-raw-commits";

namespace Module {
    declare const context: conventionalChangelogCore.Context;
    declare const gitRawCommitsOpts: conventionalChangelogCore.GitRawCommitsOptions;
    declare const options: conventionalChangelogCore.Options;
    declare const parserOpts: conventionalChangelogCore.ParserOptions;
    declare const writerOpts: conventionalChangelogCore.WriterOptions;
    declare const execOpts: gitRawCommits.ExecOptions;
    // $ExpectType Readable<any>
    conventionalChangelogCore();
    // $ExpectType Readable<any>
    conventionalChangelogCore(options);
    // $ExpectType Readable<any>
    conventionalChangelogCore(options, context);
    // $ExpectType Readable<any>
    conventionalChangelogCore(options, context, gitRawCommitsOpts);
    // $ExpectType Readable<any>
    conventionalChangelogCore(options, context, gitRawCommitsOpts, parserOpts);
    // $ExpectType Readable<any>
    conventionalChangelogCore(options, context, gitRawCommitsOpts, parserOpts, writerOpts);
    // $ExpectType Readable<any>
    conventionalChangelogCore(options, context, gitRawCommitsOpts, parserOpts, writerOpts, execOpts);
}
