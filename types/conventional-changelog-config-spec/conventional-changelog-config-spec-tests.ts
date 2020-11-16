/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import ConventionalChangelogConfigSpec from "conventional-changelog-config-spec";

namespace Module {
    // $ExpectType JSONSchema7
    ConventionalChangelogConfigSpec;
}

namespace Module.Config {
    declare const config: ConventionalChangelogConfigSpec.Config;

    // $ExpectType Config
    config;
    config.commitUrlFormat; // $ExpectType string | undefined
    config.compareUrlFormat; // $ExpectType string | undefined
    config.header; // $ExpectType string | undefined
    config.issuePrefixes; // $ExpectType string[] | undefined
    config.issueUrlFormat; // $ExpectType string | undefined
    config.preMajor; // $ExpectType boolean | undefined
    config.releaseCommitMessageFormat; // $ExpectType string | undefined
    config.types; // $ExpectType Type[] | undefined
    config.userUrlFormat; // $ExpectType string | undefined
}

namespace Module.Config.Type {
    declare const type: ConventionalChangelogConfigSpec.Config.Type;

    // $ExpectType Type
    type;
    type.hidden; // $ExpectType boolean | undefined
    type.section; // $ExpectType string | undefined
    type.type; // $ExpectType string
}
