import Serverless = require("../index");
import Plugin = require("./plugin");

declare class PluginManager {
    constructor(serverless: Serverless)

    setCliOptions(options: Serverless.Options): void;
    setCliCommands(commands: {}): void;

    addPlugin(plugin: typeof Plugin): void;
    loadAllPlugins(servicePlugins: {}): void;
    loadPlugins(plugins: {}): void;
    loadCorePlugins(): void;
    loadServicePlugins(servicePlugins: {}): void;
    loadCommand(pluginName: string, details: {}, key: string): {};
    loadCommands(pluginInstance: Plugin): void;

    cliOptions: {};
    cliCommands: {};
    serverless: Serverless;
    plugins: Plugin[];
    commands: {};
    hooks: {};
    deprecatedEvents: {};
}

export = PluginManager;
