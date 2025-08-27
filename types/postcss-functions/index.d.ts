import { PluginCreator } from "postcss";

export interface Options {
    functions: {
        [key: string]: (...args: any[]) => any;
    };
}

declare const postcssFunctions: PluginCreator<Options>;

export default postcssFunctions;
