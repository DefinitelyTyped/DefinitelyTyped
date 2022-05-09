// Type definitions for @istanbuljs/nyc-config-babel 3.0
// Project: https://github.com/istanbuljs/istanbuljs/tree/master/packages/nyc-config-babel
// Definitions by: Paul Sanchez <https://github.com/basicdays>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const config: {
    sourceMap: boolean;
    instrument: boolean;
    require: ['@babel/register'];
};
export = config;
