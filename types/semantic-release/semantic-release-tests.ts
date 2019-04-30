import * as lib from 'semantic-release';

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
    logger: console
};
publish({}, context);
