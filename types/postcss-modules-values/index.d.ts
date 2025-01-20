import { PluginCreator } from "postcss";

declare namespace values {
    interface Options {
        createImportedName(name: string): string;
    }
}

declare const creator: PluginCreator<values.Options>;

export = creator;
