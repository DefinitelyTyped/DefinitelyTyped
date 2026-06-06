/// <reference types="node"/>

declare function gulpStylus(options?: gulpStylus.Options): NodeJS.ReadWriteStream;

declare namespace gulpStylus {
    interface VariableDefinitions {
        [variableName: string]: any;
    }
    interface Options {
        compress?: boolean | undefined;
        linenos?: boolean | undefined;
        "include css"?: boolean | undefined;
        rawDefine?: VariableDefinitions | undefined;
    }
}

export = gulpStylus;
