import EventHooksPlugin = require("event-hooks-webpack-plugin");
import { Compiler } from "webpack";

declare let compiler: Compiler;

new EventHooksPlugin();
new EventHooksPlugin().apply(compiler);
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
