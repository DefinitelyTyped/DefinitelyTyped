import { PluginCreator } from "postcss";

export interface Options {
    [key: string]: (...args: any[]) => any;
}

declare const postcssFunctions: PluginCreator<Options>;

export default postcssFunctions;
