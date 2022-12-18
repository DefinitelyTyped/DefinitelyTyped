import { ProtractorConsolePluginConfig } from 'protractor-console-plugin';

const minimalConfiguration: ProtractorConsolePluginConfig = {
    package: 'protractor-console-plugin',
};

const fullConfiguration: ProtractorConsolePluginConfig = {
    package: 'protractor-console-plugin',
    failOnWarning: true,
    failOnError: false,
    logWarnings: false,
    exclude: [
        'Failed to load resource: net::ERR_',
        /\bTransition Rejection[(].*'(?:restrictedAccess|technicalProblem|notFound)'/,
    ],
};
