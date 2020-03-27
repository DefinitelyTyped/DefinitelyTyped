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

    interface PluginStatic {
        new (serverless: Serverless, options: Serverless.Options): Plugin;
    }
}

interface Plugin {
    hooks: Plugin.Hooks;
    commands?: Plugin.Commands;
}

export = Plugin;
