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
            options?:
                | {
                      [option: string]: {
                          usage?: string | undefined;
                          required?: boolean | undefined;
                          shortcut?: string | undefined;
                      };
                  }
                | undefined;
        };
    }

    type VariableResolver = (variableSource: string) => Promise<any>;

    interface VariableResolvers {
        [variablePrefix: string]:
            | VariableResolver
            | {
                  resolver: VariableResolver;
                  isDisabledAtPrepopulation?: boolean | undefined;
                  serviceName?: string | undefined;
              };
    }

    type ConfigurationVariablesSource = (variableSource: any) => Promise<any>;

    interface ConfigurationVariablesSources {
        [variablePrefix: string]:
            | ConfigurationVariablesSource
            | {
                  resolve: ConfigurationVariablesSource;
                  isDisabledAtPrepopulation?: boolean | undefined;
                  serviceName?: string | undefined;
              };
    }

    interface Logging {
        log: {
            error: (...args: any[]) => void;
            warning: (...args: any[]) => void;
            notice: (...args: any[]) => void;
            info: (...args: any[]) => void;
            debug: (...args: any[]) => void;
            verbose: (...args: any[]) => void;
            success: (...args: any[]) => void;
        };
        writeText: (text: string | string[]) => void;
        progress: {
            get: (name: string) => Progress;
            create: (args: { message?: string, name?: string }) => Progress;
        };
    }

    interface Progress {
        namespace: string;
        name: string;
        update: (message: string) => void;
        info: (message: string) => void;
        notice: (message: string) => void;
        remove: () => void;
    }

    interface PluginStatic {
        new (serverless: Serverless, options: Serverless.Options, logging: Logging): Plugin;
    }
}

interface Plugin {
    hooks: Plugin.Hooks;
    commands?: Plugin.Commands | undefined;
    variableResolvers?: Plugin.VariableResolvers | undefined;
    configurationVariablesSources?: Plugin.ConfigurationVariablesSources | undefined;
}

export = Plugin;
