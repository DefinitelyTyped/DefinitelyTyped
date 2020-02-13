import EventHooksPlugin = require('event-hooks-webpack-plugin');

new EventHooksPlugin({});
new EventHooksPlugin({
    done: () => {},
});
new EventHooksPlugin({
    shouldEmit: () => {},
    done: () => {},
    additionalPass: () => {},
    beforeRun: () => {},
    run: () => {},
    emit: () => {},
    afterEmit: () => {},
    thisCompilation: () => {},
    compilation: () => {},
    normalModuleFactory: () => {},
    contextModuleFactory: () => {},
    beforeCompile: () => {},
    compile: () => {},
    make: () => {},
    afterCompile: () => {},
    watchRun: () => {},
    failed: () => {},
    invalid: () => {},
    watchClose: () => {},
    environment: () => {},
    afterEnvironment: () => {},
    afterPlugins: () => {},
    afterResolvers: () => {},
    entryOption: () => {},
});
