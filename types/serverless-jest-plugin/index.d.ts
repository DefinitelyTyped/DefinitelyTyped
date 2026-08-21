import Serverless = require("serverless");
import Plugin = require("serverless/classes/Plugin");
import lw = require("lambda-wrapper");
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
