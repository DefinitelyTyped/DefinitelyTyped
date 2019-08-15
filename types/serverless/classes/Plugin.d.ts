import Serverless = require("../index");

declare abstract class Plugin {
    hooks: {
        [event: string]: Promise<any>;
    };

    constructor(serverless: Serverless, options: Serverless.Options)
}

export = Plugin;
