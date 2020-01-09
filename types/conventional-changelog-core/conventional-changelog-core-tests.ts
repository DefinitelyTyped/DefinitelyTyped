/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import conventionalChangelogCore from "conventional-changelog-core";

namespace Test {
    declare const context: conventionalChangelogCore.Context;
    declare const gitRawCommitsOpts: conventionalChangelogCore.GitRawCommitsOptions;
    declare const options: conventionalChangelogCore.Options;
    declare const parserOpts: conventionalChangelogCore.ParserOptions;
    declare const writerOpts: conventionalChangelogCore.WriterOptions;

    conventionalChangelogCore(); // $ExpectType Readable
    conventionalChangelogCore(options); // $ExpectType Readable
    conventionalChangelogCore(options, context); // $ExpectType Readable
    conventionalChangelogCore(options, context, gitRawCommitsOpts); // $ExpectType Readable
    conventionalChangelogCore(options, context, gitRawCommitsOpts, parserOpts); // $ExpectType Readable
    conventionalChangelogCore(options, context, gitRawCommitsOpts, parserOpts, writerOpts); // $ExpectType Readable
}
