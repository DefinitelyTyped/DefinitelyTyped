/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import type conventionalCommitsParser from "conventional-commits-parser";
import conventionalRecommendedBump, { type Recommendation } from "conventional-recommended-bump";

namespace Module {
    declare const options: conventionalRecommendedBump.Options;
    declare const parserOpts: conventionalCommitsParser.Options;

    // $ExpectType Promise<Recommendation>
    conventionalRecommendedBump(options);
    // $ExpectType Promise<Recommendation>
    conventionalRecommendedBump(options, parserOpts);

    // @ts-expect-error
    conventionalRecommendedBump();
}

namespace Module.Options {
    declare const options: conventionalRecommendedBump.Options;

    // $ExpectType Options
    options;
    options.ignoreReverted; // $ExpectType boolean | undefined
    options.lernaPackage; // $ExpectType string | undefined
    options.preset; // $ExpectType string | undefined
    options.tagPrefix; // $ExpectType string | undefined
    options.whatBump; // $ExpectType WhatBump | undefined
    options.skipUnstable; // $ExpectType boolean | undefined
    options.path; // $ExpectType string | undefined
}

namespace Module.Options.WhatBump {
    declare const commits: conventionalCommitsParser.Commit[];
    declare const whatBump: conventionalRecommendedBump.Options.WhatBump;

    // $ExpectType Result
    whatBump(commits);

    // @ts-expect-error
    whatBump();
}

namespace Module.Options.WhatBump.Result {
    declare const result: conventionalRecommendedBump.Options.WhatBump.Result;

    // $ExpectType Result
    result;
    result.level; // $ExpectType number | undefined
    result.reason; // $ExpectType string | undefined
}
