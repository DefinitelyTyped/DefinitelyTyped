// Type definitions for jsonnet
// Project: https://github.com/yosuke-furukawa/node-jsonnet
// Definitions by: Hookclaw <https://github.com/hookclaw>
//                 Yanhui <https://github.com/lyh543>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module "jsonnet" {
    class Jsonnet {
        constructor();
        eval(code: string): any;
        evalFile(filepath: string): any;
        destroy(): void;
    }
    export = Jsonnet;
}
