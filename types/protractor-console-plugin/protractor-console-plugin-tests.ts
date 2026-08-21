import "selenium-webdriver";
import * as protractor from "protractor/built";

import consolePlugin = require("protractor-console-plugin");

function minimalConfiguration(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        package: "protractor-console-plugin",
    };
    const protractorConfig: protractor.Config = {
        plugins: [pluginConfig],
    };
}

function fullConfiguration(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        package: "protractor-console-plugin",
        failOnWarning: true,
        failOnError: false,
        logWarnings: false,
        exclude: [
            "Failed to load resource: net::ERR_",
            /\bTransition Rejection[(].*'(?:restrictedAccess|technicalProblem|notFound)'/,
        ],
    };
    const protractorConfig: protractor.Config = {
        plugins: [pluginConfig],
    };
}

// Specs from https://github.com/angular/protractor-console-plugin/tree/master/spec

const env = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    baseUrl: "http://localhost:8081",
};

function consoleFailConfigJs(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        path: "../index.js",
        failOnWarning: true,
        failOnError: true,
    };
    const protractorConfig: protractor.Config = {
        seleniumAddress: env.seleniumAddress,
        framework: "jasmine",
        specs: ["fail_spec.js"],
        baseUrl: env.baseUrl,
        plugins: [pluginConfig],
    };
}

function consoleFailErrorConfigJs(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        path: "../index.js",
        failOnWarning: false,
        failOnError: true,
    };
    const protractorConfig: protractor.Config = {
        seleniumAddress: env.seleniumAddress,
        framework: "jasmine",
        specs: ["fail_error_spec.js"],
        baseUrl: env.baseUrl,
        plugins: [pluginConfig],
    };
}

function consoleFailFilterConfigJs(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        path: "../index.js",
        failOnWarning: true,
        failOnError: true,
        exclude: ["string", /regex/],
    };
    const protractorConfig: protractor.Config = {
        seleniumAddress: env.seleniumAddress,
        framework: "jasmine",
        specs: ["fail_error_spec.js"],
        baseUrl: env.baseUrl,
        plugins: [pluginConfig],
    };
}

function consoleFailLogWarningsJs(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        path: "../index.js",
        failOnWarning: true,
        logWarnings: true,
        failOnError: false,
    };
    const protractorConfig: protractor.Config = {
        seleniumAddress: env.seleniumAddress,
        framework: "jasmine",
        specs: ["fail_warning_spec.js"],
        baseUrl: env.baseUrl,
        plugins: [pluginConfig],
    };
}

function consoleFailWarningConfigJs(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        path: "../index.js",
        failOnWarning: true,
        failOnError: false,
    };
    const protractorConfig: protractor.Config = {
        seleniumAddress: env.seleniumAddress,
        framework: "jasmine",
        specs: ["fail_warning_spec.js"],
        baseUrl: env.baseUrl,
        plugins: [pluginConfig],
    };
}

function consolePassConfigJs(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        path: "../index.js",
        failOnWarning: false,
        failOnError: false,
    };
    const protractorConfig: protractor.Config = {
        seleniumAddress: env.seleniumAddress,
        framework: "jasmine",
        specs: ["pass_spec.js"],
        baseUrl: env.baseUrl,
        plugins: [pluginConfig],
    };
}

function consolePassLogWarningsJs(): void {
    const pluginConfig: protractor.PluginConfig & consolePlugin.Config = {
        path: "../index.js",
        failOnWarning: true,
        logWarnings: false,
        failOnError: false,
    };
    const protractorConfig: protractor.Config = {
        seleniumAddress: env.seleniumAddress,
        framework: "jasmine",
        specs: ["pass_spec.js"],
        baseUrl: env.baseUrl,
        plugins: [pluginConfig],
    };
}
