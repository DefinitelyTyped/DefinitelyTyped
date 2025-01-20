import type { RecursiveKeyValuePair } from "tailwindcss/types/config";
import type { PluginOptions } from "./index";

declare const api: {
    variables(input: unknown, options?: PluginOptions): RecursiveKeyValuePair | RecursiveKeyValuePair[];
    darkVariables(
        input: unknown,
        options?: PluginOptions,
        media?: "media" | "class" | string,
    ): RecursiveKeyValuePair | RecursiveKeyValuePair[];
    getComponents(
        selector: string,
        components: RecursiveKeyValuePair | RecursiveKeyValuePair[],
    ): RecursiveKeyValuePair | RecursiveKeyValuePair[];
};

export = api;
