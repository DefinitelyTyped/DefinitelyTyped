import Serverless = require("../index");

// tslint:disable-next-line:no-unnecessary-class
declare abstract class Plugin {
    constructor(serverless: Serverless, options: Serverless.Options)
}

export = Plugin;
