// Type definitions for postcss-functions 4.0
// Project: https://github.com/andyjansson/postcss-functions
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginCreator } from "postcss";

export interface Options {
    [key: string]: (...args: any[]) => any;
}

declare const postcssFunctions: PluginCreator<Options>;

export default postcssFunctions;
