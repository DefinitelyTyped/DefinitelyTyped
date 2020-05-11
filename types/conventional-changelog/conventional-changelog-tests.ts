/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import conventionalChangelog from "conventional-changelog";
import conventionalChangelogCore from "conventional-changelog-core";

namespace Module {
    declare const context: conventionalChangelogCore.Context;
    declare const gitRawCommitsOpts: conventionalChangelogCore.GitRawCommitsOptions;
    declare const options: conventionalChangelog.Options;
    declare const parserOpts: conventionalChangelogCore.ParserOptions;
    declare const writerOpts: conventionalChangelogCore.WriterOptions;

    // $ExpectType Readable
    conventionalChangelog();
    // $ExpectType Readable
    conventionalChangelog(options);
    // $ExpectType Readable
    conventionalChangelog(options, context);
    // $ExpectType Readable
    conventionalChangelog(options, context, gitRawCommitsOpts);
    // $ExpectType Readable
    conventionalChangelog(options, context, gitRawCommitsOpts, parserOpts);
    // $ExpectType Readable
    conventionalChangelog(options, context, gitRawCommitsOpts, parserOpts, writerOpts);
}
