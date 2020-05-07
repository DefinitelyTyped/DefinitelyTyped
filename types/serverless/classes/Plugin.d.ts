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

    type VariableResolver = (variableSource: string) => Promise<any>;

    interface VariableResolvers {
        [variablePrefix: string]: VariableResolver | {
            resolver: VariableResolver,
            isDisabledAtPrepopulation?: boolean,
            serviceName?: string
        };
    }

    interface PluginStatic {
        new (serverless: Serverless, options: Serverless.Options): Plugin;
    }
}

interface Plugin {
    hooks: Plugin.Hooks;
    commands?: Plugin.Commands;
    variableResolvers?: Plugin.VariableResolvers;
}

export = Plugin;
