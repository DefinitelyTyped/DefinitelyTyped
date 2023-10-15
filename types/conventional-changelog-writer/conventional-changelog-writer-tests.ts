"use strict";

import conventionalChangelogWriter from "conventional-changelog-writer";

declare const context: conventionalChangelogWriter.Context;
declare const options: conventionalChangelogWriter.Options;

// $ExpectType Transform
conventionalChangelogWriter();

// $ExpectType Transform
conventionalChangelogWriter(context);

// $ExpectType Transform
conventionalChangelogWriter(context, options);

// @ts-expect-error
conventionalChangelogWriter(options);

// @ts-expect-error
conventionalChangelogWriter(options, context);
