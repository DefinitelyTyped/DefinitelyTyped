import Serverless = require('../index');

declare namespace Plugin {
    interface Hooks {
        [event: string]: (...rest: any[]) => any;
    }

    interface Commands {
        [command: string]: {
            usage?: string;
            lifecycleEvents?: string[];
            commands?: { [command: string]: {} };
            options?: {
                [option: string]: {
                    usage?: string;
                    required?: boolean;
                    shortcut?: string;
                };
            };
        };
    }
}

declare abstract class Plugin {
    hooks: Plugin.Hooks;

    commands?: Plugin.Commands;

    constructor(serverless: Serverless, options: Serverless.Options);
}

export = Plugin;
