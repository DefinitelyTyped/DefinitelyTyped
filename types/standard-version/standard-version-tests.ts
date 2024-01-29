/* tslint:disable:no-namespace */
"use strict";

import standardVersion from "standard-version";

namespace Module {
    declare const options: standardVersion.Options;

    declare const updater: standardVersion.Options.Updater;

    const files: Array<string | standardVersion.Options.VersionFile> = [
        "SINGLE_VERSION.txt",
        {
            filename: "MY_VERSION_TRACKER.txt",
            // The `plain-text` updater assumes the file contents represents the version.
            type: "plain-text",
        },
        {
            filename: "a/deep/package/dot/json/file/package.json",
            // The `json` updater assumes the version is available under a `version` key in the provided JSON document.
            type: "json",
        },
        {
            filename: "VERSION_TRACKER.json",
            //  See "Custom `updater`s" for more details.
            updater: "standard-version-updater.js",
        },
        {
            filename: "VERSION_REQUIRED.json",
            updater: require("./path/to/custom-version-updater"),
        },
        {
            filename: "VERSION_UPDATER.json",
            updater,
        },
    ];

    const filesOptions: standardVersion.Options = {
        bumpFiles: files,
        packageFiles: files,
    };

    // $ExpectType Promise<void>
    standardVersion(options);

    // @ts-expect-error
    standardVersion();

    // Handle pacakgeFiles and bumpFiles  with custom updaters
    // $ExpectType Promise<void>
    standardVersion(filesOptions);

    // Error when filename is missing
    standardVersion({
        packageFiles: [
            // @ts-expect-error
            {
                type: "json",
            },
        ],
    });

    // Error when invalid type
    standardVersion({
        packageFiles: [
            {
                filename: "package.json",
                // @ts-expect-error
                type: null,
            },
        ],
    });

    // Error when invalid updater
    standardVersion({
        packageFiles: [
            {
                filename: "package.json",
                // @ts-expect-error
                updater: {},
            },
        ],
    });
}
