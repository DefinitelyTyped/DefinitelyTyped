/* tslint:disable:no-mergeable-namespace no-namespace */

import conventionalChangelogPresetLoader = require("conventional-changelog-preset-loader");

namespace Module {
    declare const path: string;
    declare const config: conventionalChangelogPresetLoader.Config;

    // $ExpectType Config<Commit, Context>
    conventionalChangelogPresetLoader(path);
    // $ExpectType Config<Commit, Context>
    conventionalChangelogPresetLoader(config);

    // @ts-expect-error
    conventionalChangelogPresetLoader();
}

namespace Module.presetLoader {
    declare const require: conventionalChangelogPresetLoader.presetLoader.RequireMethod;

    // $ExpectType typeof conventionalChangelogPresetLoader
    conventionalChangelogPresetLoader.presetLoader(require);

    // @ts-expect-error
    conventionalChangelogPresetLoader.presetLoader();
}

namespace Module.Config {
    declare const config: conventionalChangelogPresetLoader.Config;

    // $ExpectType Config
    config;
    config.name; // $ExpectType string
}
