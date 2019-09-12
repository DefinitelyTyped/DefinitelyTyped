import Serverless = require("../index");

interface Plugin {
    // Typical constructor signature:
    // constructor(serverless: Serverless, options: Serverless.Options)

    hooks: {
        [event: string]: () => Promise<any>;
    };
}

export = Plugin;
