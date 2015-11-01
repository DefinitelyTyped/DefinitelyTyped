/// <reference path="./webpack-env.d.ts" />

interface SomeModule {
    someMethod(): void;
}

let someModule = require<SomeModule>('./someModule');
someModule.someMethod();

let context = require.context('./somePath', true);
let contextModule = context<SomeModule>('./someModule');

require(['./someModule', './otherModule'], (someModule: SomeModule, otherModule: any) => {

});

// check if HMR is enabled
if(module.hot) {
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


var status: string = module.hot.status();

