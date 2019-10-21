import * as lib from 'semantic-release';

function verify(pluginConfig: any, context: lib.Context) {
    if (!("AWS_ACCESS_KEY_ID" in context.env)) {
        throw new Error("AWS_ACCESS_KEY_ID not set");
    }
}

function publish(pluginConfig: any, context: lib.Context) {
    const version = context.nextRelease && context.nextRelease.version;
    context.logger.log(`New version ${version}`);
}

const config: lib.GlobalConfig = {
    branch: "master",
    repositoryUrl: "https://github.com/semantic-release/semantic-release.git",
    // Lint check disabled for the following line because this is the actual
    // format used by semantic-release. This is not a broken template string.
    tagFormat: "v${version}", // tslint:disable-line: no-invalid-template-strings
    plugins: ["@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/github",
        ["@qiwi/semantic-release-gh-pages-plugin", {
            msg: "updated",
            branch: "docs"
        }]],
    dryRun: false,
    ci: true
};

const context = {
    nextRelease: {
        version: '1.0.0',
        gitTag: '1.0.0',
        gitHead: 'f1eed296d2ffe184fb15f52b1c5ad778f5c87645',
        notes: 'New release'
    },
    logger: console,
    env: {
        AWS_ACCESS_KEY_ID: "12345",
        SHELL: "/bin/bash",
        PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
};
verify({}, context);
publish({}, context);
