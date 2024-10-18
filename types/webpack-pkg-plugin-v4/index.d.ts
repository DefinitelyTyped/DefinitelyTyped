import { Plugin } from "webpack";

export interface Configuration {
    targets?: string[] | undefined;
    output: string;
}

export class WebpackPkgPlugin extends Plugin {
    constructor(config: Configuration);
}
