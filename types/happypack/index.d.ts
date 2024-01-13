import { Plugin } from "webpack";

export = happypack;

declare namespace happypack {
    interface PluginOptions {
        id?: string | undefined;
        threads?: number | undefined;
        loaders: any;
    }
}

declare class happypack extends Plugin {
    constructor(options: happypack.PluginOptions);
}
