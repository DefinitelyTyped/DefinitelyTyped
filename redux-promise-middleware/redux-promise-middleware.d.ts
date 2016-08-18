// Type definitions for redux-promise-middleware
// Project: https://github.com/pburtchaell/redux-promise-middleware
// Definitions by: ianks <https://github.com/ianks>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../redux/redux.d.ts' />

declare module "redux-promise-middleware" {
    function promiseMiddleware(config?: { promiseTypeSuffixes: string[] }): Redux.Middleware;

    export default promiseMiddleware;
}
