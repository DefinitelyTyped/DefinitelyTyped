// Type definitions for @mertasan/tailwindcss-variables 2.6
// Project: https://github.com/mertasan/tailwindcss-variables#readme
// Definitions by: Liam Martens <https://github.com/LiamMartens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Config, PluginCreator } from "tailwindcss/types/config";

declare namespace plugin {
    interface PluginOptions {
        darkToRoot?: boolean;
        variablePrefix?: string;
        colorVariables?: boolean;
        extendColors?: Record<string, string>;
        forceRGB?: boolean;
        toBase?: boolean;
    }
}

declare const plugin: {
    (options: plugin.PluginOptions): { handler: PluginCreator; config?: Config };
    __isOptionsFunction: true;
};

export = plugin;
