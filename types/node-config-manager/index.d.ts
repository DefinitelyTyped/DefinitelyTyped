// Type definitions for node-config-manager 1.0.2
// Project: https://www.npmjs.com/package/node-config-manager
// Definitions by: TANAKA Koichi <https://gitnub.com/mugeso/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface Options {
    configDir: string;
    env: string;
    camelCase: boolean;
}

interface ConfigManager {
    init(options: Options): ConfigManager;
    set(key: string, value: string | boolean): ConfigManager;
    get(key: string): string | boolean;
    addConfig(configName: string): ConfigManager;
    getConfig(configName: string): any;
    removeConfig(configName: string): ConfigManager;
    count(): number;
    method: any;
}

declare var cfgManager: ConfigManager;
export = cfgManager;
