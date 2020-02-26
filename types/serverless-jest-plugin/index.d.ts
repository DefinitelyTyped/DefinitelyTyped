// Type definitions for serverless-jest-plugin 0.3
// Project: https://github.com/nordcloud/serverless-jest-plugin#readme
// Definitions by: Gaelan Steele <https://github.com/Gaelan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.3

import Serverless = require('serverless');
import Plugin = require('serverless/classes/Plugin');
import lw = require('lambda-wrapper');
export = ServerlessJestPlugin;

declare class ServerlessJestPlugin implements Plugin {
    constructor(serverless: Serverless, options: Serverless.Options);

    hooks: Plugin.Hooks;
    commands: Plugin.Commands;
}

declare namespace ServerlessJestPlugin {
    function getWrapper(modName: string, modPath: string, handler: string): lw.Wrapped<any, any>;

    const lambdaWrapper: typeof lw;
}
