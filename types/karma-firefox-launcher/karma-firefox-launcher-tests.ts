/// <reference types="node" />
import path = require("path");
import karma = require("karma");

const test = (config: karma.Config) => {
    config.set({
        browsers: ["FirefoxWithMyExtension"],
        customLaunchers: {
            FirefoxWithMyExtension: {
                base: "Firefox",
                extensions: [
                    path.resolve(__dirname, "helpers/extensions/myCustomExt@suchandsuch.xpi"),
                    path.resolve(__dirname, "helpers/extensions/myOtherExt@soandso.xpi"),
                ],
                prefs: {
                    "media.navigator.permission.disabled": true,
                },
                command: "<path to FF68>/firefox.exe",
            },
            Firefox78: {
                base: "Firefox",
                name: "Firefox78",
                command: "<path to FF78>/firefox.exe",
            },
        },
    });
};
