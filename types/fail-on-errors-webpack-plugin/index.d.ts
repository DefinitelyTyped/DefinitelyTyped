import { Plugin } from "webpack";

declare class FailOnErrorsWebpackPlugin extends Plugin {
    constructor(options?: { failOnErrors?: boolean | undefined; failOnWarnings?: boolean | undefined });
}

export = FailOnErrorsWebpackPlugin;
