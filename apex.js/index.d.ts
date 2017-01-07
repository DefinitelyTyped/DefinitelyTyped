// Type definitions for apex.js 2.0
// Project: https://github.com/apex/node-apex
// Definitions by: Yoriki Yamaguchi <https://github.com/y13i>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="aws-lambda" />

declare function λ(fn: (event: any, context: AWSLambda.Context) => any): (event: any, context: AWSLambda.Context, callback: AWSLambda.Callback) => void;
declare namespace λ {}
export = λ;
