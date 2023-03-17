import type { ConfigT, InputConfigT, YargArguments } from './configTypes';

export interface CosmiConfigResult {
    filepath: string;
    isEmpty: boolean;
    config: ((partialConfig: ConfigT) => Promise<ConfigT>) | ((partialConfig: ConfigT) => ConfigT) | InputConfigT;
}

export function loadConfig(argv?: YargArguments, defaultConfigOverrides?: InputConfigT): Promise<ConfigT>;

export function resolveConfig(filePath?: string, cwd?: string): Promise<ConfigT>;

export function mergeConfig(defaultConfig: InputConfigT, ...configs: InputConfigT[]): ConfigT;
