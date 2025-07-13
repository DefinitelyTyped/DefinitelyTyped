declare namespace configsOverload {
    interface ConfigsOverloadOptions {
        defaultEnv?: string | undefined;
        env?: string | undefined;
    }

    interface ExtendableConfig {
        [key: string]: any;
    }
}

declare function configsOverload(
    configsDirectory?: string,
    options?: configsOverload.ConfigsOverloadOptions,
): configsOverload.ExtendableConfig;

export = configsOverload;
