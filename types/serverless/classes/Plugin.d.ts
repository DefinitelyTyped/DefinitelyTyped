import Serverless = require('../index');

declare namespace Plugin {
    interface Hooks {
        [event: string]: (...rest: any[]) => any;
    }

    interface Commands {
        [command: string]: {
            usage?: string | undefined;
            lifecycleEvents?: string[] | undefined;
            commands?: { [command: string]: {} } | undefined;
            options?: {
                [option: string]: {
                    usage?: string | undefined;
                    required?: boolean | undefined;
                    shortcut?: string | undefined;
                };
            } | undefined;
        };
    }

    type VariableResolver = (variableSource: string) => Promise<any>;

    interface VariableResolvers {
        [variablePrefix: string]: VariableResolver | {
            resolver: VariableResolver,
            isDisabledAtPrepopulation?: boolean | undefined,
            serviceName?: string | undefined
        };
    }

    interface PluginStatic {
        new (serverless: Serverless, options: Serverless.Options): Plugin;
    }
}

interface Plugin {
    hooks: Plugin.Hooks;
    commands?: Plugin.Commands | undefined;
    variableResolvers?: Plugin.VariableResolvers | undefined;
}

export = Plugin;
