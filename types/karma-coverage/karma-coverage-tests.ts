import karma = require("karma");
import { Config } from "karma";

module.exports = (config: Config) => {
    config.set({
        files: ["src/**/*.js", "test/**/*.js"],

        // coverage reporter generates the coverage
        reporters: ["progress", "coverage"],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            "src/**/*.js": ["coverage"],
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: "html",
            dir: "coverage/",
            // $ExpectType (browser: string) => string
            subdir: browser => {
                // tslint:disable-next-line:no-unnecessary-type-assertion
                return `cool-${browser}-directory` as string;
            },
            // $ExpectType string
            file: "index.html",
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        files: ["src/**/*.js", "test/**/*.js"],
        reporters: ["progress", "coverage"],
        preprocessors: {
            "src/**/*.js": ["coverage"],
        },
        coverageReporter: {
            // specify a common output directory
            dir: "build/reports/coverage",
            reporters: [
                // reporters not supporting the `file` property
                { type: "html", subdir: "report-html" },
                { type: "lcov", subdir: "report-lcov" },
                // reporters supporting the `file` property, use `subdir` to directly
                // output them in the `dir` directory
                { type: "cobertura", subdir: ".", file: "cobertura.txt" },
                { type: "lcovonly", subdir: ".", file: "report-lcovonly.txt" },
                { type: "teamcity", subdir: ".", file: "teamcity.txt" },
                { type: "text", subdir: ".", file: "text.txt" },
                { type: "text-summary", subdir: ".", file: "text-summary.txt" },
            ],
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            instrumenterOptions: {
                istanbul: { noCompact: true },
            },
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            dir: "coverage",
            // $ExpectType string
            subdir: ".",
            // Would output the results into: .'/coverage/'
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            dir: "coverage",
            subdir: "report",
            // Would output the results into: .'/coverage/report/'
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            dir: "coverage",
            subdir(browser) {
                // normalization process to keep a consistent browser name across different
                // OS
                return browser.toLowerCase().split(/[ /-]/)[0];
            },
            // Would output the results into: './coverage/firefox/'
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            type: "text",
            dir: "coverage/",
            file: "coverage.txt",
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            check: {
                global: {
                    statements: 50,
                    branches: 50,
                    functions: 50,
                    lines: 50,
                    excludes: ["foo/bar/**/*.js"],
                },
                each: {
                    statements: 50,
                    branches: 50,
                    functions: 50,
                    lines: 50,
                    excludes: ["other/directory/**/*.js"],
                    overrides: {
                        "baz/component/**/*.js": {
                            statements: 98,
                        },
                    },
                },
            },
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            watermarks: {
                statements: [50, 75],
                functions: [50, 75],
                branches: [50, 75],
                lines: [50, 75],
            },
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            type: "text",
            dir: "coverage/",
            file: "coverage.txt",
            includeAllSources: true,
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            type: "text",
            dir: "coverage/",
            file: "coverage.txt",
            sourceStore: require("istanbul").Store.create("fslookup"),
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            reporters: [{ type: "html", dir: "coverage/" }, { type: "teamcity" }, { type: "text-summary" }],
        },
    });
};

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            instrumenters: { ibrik: require("ibrik") },
            instrumenter: {
                "**/*.coffee": "ibrik",
            },
            // ...
        },
    });
};

const to5Options = { experimental: true };

// [...]

module.exports = (config: Config) => {
    config.set({
        coverageReporter: {
            instrumenters: { isparta: require("isparta") },
            instrumenter: {
                "**/*.js": "isparta",
            },
            instrumenterOptions: {
                isparta: { to5: to5Options },
            },
        },
    });
};
