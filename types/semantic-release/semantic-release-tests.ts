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
