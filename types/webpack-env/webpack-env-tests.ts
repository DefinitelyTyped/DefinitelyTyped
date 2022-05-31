/// <reference types="node"/>

interface SomeModule {
    someMethod(): void;
}

let someModule = require<SomeModule>('./someModule');
someModule.someMethod();

let otherModule = require('./otherModule');
otherModule.otherMethod();

let context = require.context('./somePath', true);
let contextModule = context<SomeModule>('./someModule');

const contextId: string = require.context('./somePath').id;

require(['./someModule', './otherModule'], (someModule: SomeModule, otherModule: any) => {

});

async function testChunkLoad(): Promise<void> {
    const module = await __webpack_chunk_load__("./someModule");
}

// check if HMR is enabled
if(module.hot) {
    // accept update of dependency without a callback
    module.hot.accept("./handler.js");

    // accept update of dependency
    module.hot.accept("./handler.js", function() {
        //...
    });

    // accept update of dependency with an error handler
    module.hot.accept(
        "./handler.js",
        function() {
            //...
        },
        function(err: Error) {
            // ...
        }
    );
}

module.exports = null;

// check if HMR is enabled
if(module.hot) {

    // accept itself
    module.hot.accept();

    // dispose handler
    module.hot.dispose(function() {
        // revoke the side effect
        //...
    });
}

class ModuleData {
    updated: boolean;
}

if (module.hot) {
    module.hot.accept((err: Error) => {
       //...
    });

    module.hot.decline("./someModule");

    module.hot.dispose((data: ModuleData) => {
        data.updated = true;
        // ...
    });

    let disposeHandler: ((data: ModuleData) => void) = data => {
        // ...
    };
    module.hot.addDisposeHandler(disposeHandler);
    module.hot.removeDisposeHandler(disposeHandler);

    module.hot.check(true).then((outdatedModules: null|(string|number)[]) => {})

    module.hot.apply({ ignoreUnaccepted: true }).then((outdatedModules: (string|number)[]) => {})

    let status: string = module.hot.status();
    let statusHandler: ((status: string) => void) = status => {
        // ...
    };
    module.hot.status(statusHandler);
    module.hot.addStatusHandler(statusHandler);
    module.hot.removeStatusHandler(statusHandler);
}

require.ensure([], (require) => {
    require("some/module");
});

require.ensure([], (require) => {
    require("some/module");
}, (e) => {}, 'chunkWithErrorHandling')

require.ensure([], (require) => {
    require("some/module");
}, 'chunkWithoutErrorHandling');

// since `compilerOptions["module"] === "commonjs"` is required, add this to test `import.meta` fields.
declare const importMeta: ImportMeta;

if (importMeta.webpack >= 5 && importMeta.webpackHot) {
    importMeta.webpackHot.accept((err: Error) => {
        //...
    });

    importMeta.webpackHot.decline('./someModule');

    importMeta.webpackHot.dispose((data: ModuleData) => {
        data.updated = true;
        // ...
    });

    let disposeHandler: ((data: ModuleData) => void) = data => {
        // ...
    };
    importMeta.webpackHot.addDisposeHandler(disposeHandler);
    importMeta.webpackHot.removeDisposeHandler(disposeHandler);

    importMeta.webpackHot.check(true).then((outdatedModules: null|(string|number)[]) => {})

    importMeta.webpackHot.apply({ ignoreUnaccepted: true }).then((outdatedModules: (string|number)[]) => {})

    let status: string = importMeta.webpackHot.status();
    let statusHandler: ((status: string) => void) = status => {
        // ...
    };
    importMeta.webpackHot.status(statusHandler);
    importMeta.webpackHot.addStatusHandler(statusHandler);
    importMeta.webpackHot.removeStatusHandler(statusHandler);
}

if (importMeta.webpack >= 5 && importMeta.webpackContext) {
    let context = importMeta.webpackContext('./somePath', { recursive: true, regExp: /some/, include: /someModule/, exclude: /noNeedModuel/, preload: true, prefetch: true, chunkName: "[request]", exports: "default", mode: "weak" });
    let contextModule = context<SomeModule>('./someModule');

    const contextId: string = importMeta.webpackContext('./somePath').id;
}
