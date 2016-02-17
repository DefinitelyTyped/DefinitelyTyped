// Type definitions for donna
// Project: https://github.com/atom/donna
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "donna" {
    function generateMetadata(modules: string[]): DonnaTypes.Metadata;
}

declare module DonnaTypes {
    interface Metadata {
        files: { [filePath: string]: File; };
    }

    interface File {
        objects: { [line: number]: Line; };
        exports: any;
    }

    interface Line {
        [row: number]: Object;
    }

    interface Object {
        type: string;
        name: string;
        bindingType: string;
        paramNames?: string[];
        classProperties?: any[];
        prototypeProperties?: number[][];
        doc?: string;
        range: number[][];

    }
}
