import linter = require("addons-linter");

const linterInstance = linter.createInstance({
    config: {
        _: ["./path/to/addon"],
        logLevel: "debug",
        warningsAsErrors: false,
        output: "json",
        metadata: true,
        pretty: true,
        stack: false,
        boring: false,
        privileged: false,
        selfHosted: false,
        enableBackgroundServiceWorker: true,
        minManifestVersion: 2,
        maxManifestVersion: 3,
        scanFile: ["dist/", "src/"],
        shouldScanFile: (fileName) => {
            return fileName.includes("ignore");
        },
    },
    runAsBinary: false,
});

linterInstance.run().then((result) => {
    const { count, metadata, errors, notices, warnings } = result;

    const errorsCount = result.summary.errors;
    const noticesCount = result.summary.notices;
    const warningsCount = result.summary.warnings;

    for (const error of errors) {
        const { code, message, description, file } = error;
    }

    for (const notice of notices) {
        const { code, message, description, file } = notice;
    }

    for (const warning of warnings) {
        const { code, message, description, file } = warning;
    }
});
