import * as lib from 'semantic-release';
import semanticRelease = require('semantic-release');

function verify(pluginConfig: any, context: lib.Context) {
    if (!("AWS_ACCESS_KEY_ID" in context.env)) {
        throw new Error("AWS_ACCESS_KEY_ID not set");
    }
}

function publish(pluginConfig: any, context: lib.Context) {
    const version = context.nextRelease && context.nextRelease.version;
    context.logger.log(`New version ${version}`);
}

const options: lib.GlobalConfig = {
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
    ci: true,
    // Example of extended options supported by plugins.
    assets: [
        {
            path: "app.zip"
        }
    ]
};

const context: lib.Context = {
    nextRelease: {
        type: "major",
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

const config: lib.Config = {
    cwd: "/home/example/code/semantic-release",
    env: {
        AWS_ACCESS_KEY_ID: "12345",
        SHELL: "/bin/bash",
        PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    },
    stdout: process.stdout,
    stderr: process.stderr
};

const result: Promise<lib.Result> = semanticRelease(options, config);

const result2: lib.Result = {
    lastRelease: {
        version: "1.1.0",
        gitTag: "v1.1.0",
        gitHead: "ce5e4bb0624ffaf1deec298b6c79962efec7dd3b"
    },
    commits: [{
        commit: {
            long: "a018aff59995a17c0564fa3fd0cb96223f4d4096",
            short: "a018aff"
        },
        tree: {
            long: "c8d47c8f9026337f780299eddcd6bbf69aec5db6",
            short: "c8d47c8"
        },
        author: {
            name: "Lillian Devold",
            email: "lillian.devold@example.org",
            short: "2019-10-22"
        },
        committer: {
            name: "Lillian Devold",
            email: "lillian.devold@example.org",
            short: "2019-10-22"
        },
        subject: "fix: encode text to HTML",
        body: "This closes a potential script injection vector.",
        message: "fix: encode text to HTML\n\nThis closes a potential script injection vector.",
        hash: "a018aff59995a17c0564fa3fd0cb96223f4d4096",
        committerDate: "2019-10-22"
    }],
    nextRelease: {
        type: "minor",
        version: "1.2.0",
        gitTag: "v1.2.0",
        gitHead: "a018aff59995a17c0564fa3fd0cb96223f4d4096",
        notes: ""
    },
    releases: [{
        name: "example-lib",
        url: "https://www.npmjs.com/package/example-lib",
        type: "minor",
        version: "1.2.0",
        gitHead: "a018aff59995a17c0564fa3fd0cb96223f4d4096",
        gitTag: "v1.2.0",
        notes: "",
        pluginName: "@semantic"
    }]
};
