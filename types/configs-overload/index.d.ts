// Type definitions for configs-overload 0.2
// Project: https://github.com/floatdrop/configs-overload
// Definitions by: Anton Drobot <https://github.com/anton-drobot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ConfigsOverloadOptions {
    defaultEnv?: string | undefined;
    env?: string | undefined;
}

export interface ExtendableConfig {
    [key: string]: any;
}

export default function configsOverload(configsDirectory?: string, options?: ConfigsOverloadOptions): ExtendableConfig;
