import Serverless = require("../index");

declare namespace Plugin {
    interface Hooks {
        [event: string]: (...rest: any[]) => any;
    }

    interface Commands {
        [command: string]: {
            usage?: string | undefined;
            lifecycleEvents?: string[] | undefined;
            /** @see https://www.serverless.com/framework/docs/guides/plugins/custom-commands */
            commands?:
                | {
                    [command: string]: {
                        lifecycleEvents?: string[];
                        usage?: string;
                        options?: {
                            [option: string]: {
                                usage?: string | undefined;
                                required?: boolean | undefined;
                                shortcut?: string | undefined;
                                type:
                                    /** String, e.g. serverless cmd --option value */
                                    | "string"
                                    /** Boolean, e.g. serverless cmd --option */
                                    | "boolean"
                                    /** Multiple strings, e.g. serverless cmd --option value1 --option value2 */
                                    | "multiple";
                            };
                        };
                    };
                }
                | undefined;
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
            create: (args: { message?: string; name?: string }) => Progress;
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
        new(serverless: Serverless, options: Serverless.Options, logging: Logging): Plugin;
    }
}

interface Plugin {
    /**
     * Lifecycle events are events that fire sequentially during a CLI command.
     * Additionally, for each event an additional before and after event is created.
     * The `initialize` event is shared across all CLI commands and runs when the CLI starts.
     * Plugins can "hook" into existing lifecycle events to add behavior to commands like deploy, package, etc. via the hooks helper.
     * @example
     * class MyPlugin {
     *   constructor() {
     *     this.hooks = {
     *       'initialize': () => this.init(),
     *       'before:deploy:deploy': () => this.beforeDeploy(),
     *       'deploy:deploy': () => this.deploy(),
     *       'after:deploy:deploy': () => this.afterDeploy(),
     *     };
     *   }
     *
     *   init() {
     *     console.log('Initialize lifecycle event fired!')
     *   }
     *
     *   // etc...
     * }
     * @see https://www.serverless.com/framework/docs/guides/plugins/creating-plugins#lifecycle-events
     */
    hooks: Plugin.Hooks;
    commands?: Plugin.Commands | undefined;
    variableResolvers?: Plugin.VariableResolvers | undefined;
    configurationVariablesSources?: Plugin.ConfigurationVariablesSources | undefined;

    /**
     * Plugins can be provider specific, which means that run only with a specific provider.
     * Note: Binding a plugin to a provider is optional. Serverless will always consider your plugin if you don't specify a provider.
     * To bind to a specific provider, retrieve it and set the this.provider property in the plugin constructor.
     * @see https://www.serverless.com/framework/docs/guides/plugins/creating-plugins#provider-specific-plugins
     */
    provider?: string | ReturnType<InstanceType<typeof Serverless>["getProvider"]> | undefined;
}

export = Plugin;
