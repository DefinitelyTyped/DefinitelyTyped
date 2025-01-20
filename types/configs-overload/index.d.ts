export interface ConfigsOverloadOptions {
    defaultEnv?: string | undefined;
    env?: string | undefined;
}

export interface ExtendableConfig {
    [key: string]: any;
}

export default function configsOverload(configsDirectory?: string, options?: ConfigsOverloadOptions): ExtendableConfig;
