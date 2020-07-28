

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

// check if HMR is enabled
if(module.hot) {
    // accept update of dependency without a callback
    module.hot.accept("./handler.js");

    // accept update of dependency
    module.hot.accept("./handler.js", function() {
        //...
    });
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

    module.hot.check(true, (err: Error, outdatedModules: (string|number)[]) => {
       // ...
    });

    module.hot.apply({ ignoreUnaccepted: true }, (err: Error, outdatedModules: (string|number)[]) => {
        // ...
    });

    var status: string = module.hot.status();
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
