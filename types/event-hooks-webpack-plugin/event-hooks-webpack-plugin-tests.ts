import EventHooksPlugin = require('event-hooks-webpack-plugin');
import { Options } from 'event-hooks-webpack-plugin';
import { CallbackTask, PromiseTask, Task } from 'event-hooks-webpack-plugin/lib/tasks';
import { InvalidHookNameError } from 'event-hooks-webpack-plugin/lib/errors';
import webpack = require('webpack');

// hooks
const hooks: Options = {
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
};

// constructor
new EventHooksPlugin();
new EventHooksPlugin({});
new EventHooksPlugin({
    done: () => {},
});
new EventHooksPlugin(hooks);
new EventHooksPlugin({});
new EventHooksPlugin({
    afterEmit: () => {},
    afterPlugins: new CallbackTask((compiler, callback) => {
        callback();
    }),
    additionalPass: new PromiseTask(async task => {}),
    afterCompile: new Task(() => {}),
});

const process = (compiler: webpack.Compiler) => {
    try {
        const plugin = new EventHooksPlugin();
        plugin.apply(compiler);
    } catch (error) {
        if (error instanceof InvalidHookNameError) {
            error; // $ExpectType InvalidHookNameError
        } else {
            error; // $ExpectType any
        }
    }
};
