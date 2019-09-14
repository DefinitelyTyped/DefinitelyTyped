import Serverless = require('../index');

declare abstract class Plugin {
    hooks: {
        [event: string]: (...rest: any[]) => any;
    };

    commands?: {
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
    };

    constructor(serverless: Serverless, options: Serverless.Options);
}

export = Plugin;
