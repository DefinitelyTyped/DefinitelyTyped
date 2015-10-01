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
