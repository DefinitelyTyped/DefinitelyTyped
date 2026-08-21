import licensee = require("licensee");

const configuration: licensee.Configuration = {
    licenses: {
        spdx: ["MIT", "BSD-2-Clause", "BSD-3-Clause", "Apache-2.0"],
    },
    packages: {
        optimist: "<=0.6.1",
    },
    corrections: true,
    ignore: [
        { scope: "kemitchell" },
        { prefix: "commonform-" },
        { author: "Kyle E. Mitchell" },
    ],
};

licensee(configuration, "/path/to/package", (error, results) => {
    if (error) {
        return;
    }
    if (results) {
        const result: licensee.Result = results[0];
    }
});

const exampleResult: licensee.Result = {
    name: "example",
    version: "1.0.0",
    license: "MIT",
    author: null,
    contributors: null,
    repository: null,
    homepage: "",
    parent: null,
    path: "/path",
    approved: true,
};

// $ExpectType string
exampleResult.name;

// $ExpectType string
exampleResult.version;

// $ExpectType string
exampleResult.license;

// $ExpectType boolean
exampleResult.approved;

const blueOakConfig: licensee.Configuration = {
    licenses: {
        blueOak: "bronze",
    },
};

const osiConfig: licensee.Configuration = {
    licenses: {
        spdx: ["CC-BY-4.0"],
        blueOak: "gold",
        osi: true,
    },
    productionOnly: true,
};

licensee(osiConfig, ".", (err, results) => {});
