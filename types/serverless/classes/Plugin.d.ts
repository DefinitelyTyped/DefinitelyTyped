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

interface Plugin {
    // Typical constructor signature:
    // constructor(serverless: Serverless, options: Serverless.Options)

    hooks: Plugin.Hooks;
    commands?: Plugin.Commands;
}

export = Plugin;
