import { Block } from "webpack-blocks";

declare namespace postCss {
    type FunctionType = () => string;

    interface Plugin {
        parser?: string | FunctionType | undefined;
        syntax?: string | FunctionType | undefined;
        stringifier?: string | FunctionType | undefined;
    }

    interface Options {
        parser?: string | undefined;
        stringifier?: string | undefined;
        syntax?: string | undefined;
        plugins?: any[] | undefined;
    }
}

declare function postCss(options?: postCss.Options): Block;

export = postCss;
