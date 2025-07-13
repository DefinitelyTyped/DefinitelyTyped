import type { AlpineComponent, PluginCallback } from "alpinejs";

declare global {
    interface WindowEventMap {
        "async-alpine:load": CustomEvent<{ id: string }>;
    }
}

export interface AlpineAsyncOptions {
    defaultStrategy?: "eager" | "idle" | "visible" | string;
    keepRelativeURLs?: boolean;
}

declare module "alpinejs" {
    interface Alpine {
        asyncOptions(opts: AlpineAsyncOptions): void;
        asyncData<T extends { [key in keyof T]: T[key] }>(
            name: string,
            download: (name: string) => AlpineComponent<T>,
        ): void;
        asyncUrl(name: string, url: string): void;
        asyncAlias(path: string | ((name: string) => any)): void;
    }

    interface XAttributes {
        _x_async: "init" | "await" | "loaded";
    }
}

declare const asyncAlpinePlugin: PluginCallback;
export default asyncAlpinePlugin;
