import { Plugin } from "webpack";

export = LodashModuleReplacementPlugin;

declare class LodashModuleReplacementPlugin extends Plugin {
    constructor(options?: LodashModuleReplacementPlugin.Options);
}

declare namespace LodashModuleReplacementPlugin {
    interface Options {
        caching?: boolean | undefined;
        chaining?: boolean | undefined;
        cloning?: boolean | undefined;
        coercions?: boolean | undefined;
        collections?: boolean | undefined;
        currying?: boolean | undefined;
        deburring?: boolean | undefined;
        exotics?: boolean | undefined;
        flattening?: boolean | undefined;
        guards?: boolean | undefined;
        memoizing?: boolean | undefined;
        metadata?: boolean | undefined;
        paths?: boolean | undefined;
        placeholders?: boolean | undefined;
        shorthands?: boolean | undefined;
        unicode?: boolean | undefined;
    }
}
