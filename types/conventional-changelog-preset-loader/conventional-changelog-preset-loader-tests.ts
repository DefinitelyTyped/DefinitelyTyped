/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import conventionalChangelogPresetLoader from "conventional-changelog-preset-loader";

namespace Test {
    declare const path: string;
    declare const config: conventionalChangelogPresetLoader.Config;

    // $ExpectType Config<Commit<string | number | symbol>, Context>
    conventionalChangelogPresetLoader(path);
    // $ExpectType Config<Commit<string | number | symbol>, Context>
    conventionalChangelogPresetLoader(config);

    // $ExpectError
    conventionalChangelogPresetLoader();
}

namespace Test.presetLoader {
    declare const require: conventionalChangelogPresetLoader.presetLoader.RequireMethod;

    // $ExpectType typeof conventionalChangelogPresetLoader
    conventionalChangelogPresetLoader.presetLoader(require);

    // $ExpectError
    conventionalChangelogPresetLoader.presetLoader();
}

namespace Test.Config {
    declare const config: conventionalChangelogPresetLoader.Config;

    // $ExpectType Config
    config;
    config.name; // $ExpectType string
}
