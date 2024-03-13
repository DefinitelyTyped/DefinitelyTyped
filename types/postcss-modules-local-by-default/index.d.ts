import { PluginCreator } from "postcss";

declare namespace localByDefault {
    interface Options {
        mode?: "global" | "local" | "pure" | undefined;
        rewriteUrl?: ((global: boolean, url: string) => string) | undefined;
    }
}

declare const creator: PluginCreator<localByDefault.Options>;

export = creator;
