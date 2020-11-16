/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import conventionalCommitsParser from "conventional-commits-parser";
import conventionalRecommendedBump from "conventional-recommended-bump";

namespace Module {
    declare const callback: conventionalRecommendedBump.Callback;
    declare const options: conventionalRecommendedBump.Options;
    declare const parserOpts: conventionalCommitsParser.Options;

    // $ExpectType void
    conventionalRecommendedBump(options, callback);
    // $ExpectType void
    conventionalRecommendedBump(options, parserOpts, callback);

    // $ExpectError
    conventionalRecommendedBump();
}

namespace Module.Callback {
    const callback: conventionalRecommendedBump.Callback = (error, recommendation) => {
        // $ExpectType any
        error;

        // $ExpectType Recommendation
        recommendation;
        recommendation.level; // $ExpectType number | undefined
        recommendation.reason; // $ExpectType string | undefined
        recommendation.releaseType; // $ExpectType "major" | "minor" | "patch" | undefined
    };
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
}

namespace Module.Options.WhatBump {
    declare const commits: conventionalCommitsParser.Commit[];
    declare const whatBump: conventionalRecommendedBump.Options.WhatBump;

    // $ExpectType Result
    whatBump(commits);

    // $ExpectError
    whatBump();
}

namespace Module.Options.WhatBump.Result {
    declare const result: conventionalRecommendedBump.Options.WhatBump.Result;

    // $ExpectType Result
    result;
    result.level; // $ExpectType number | undefined
    result.reason; // $ExpectType string | undefined
}
