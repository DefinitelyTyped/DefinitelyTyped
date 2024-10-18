declare module "jsonnet" {
    class Jsonnet {
        constructor();
        eval(code: string): any;
        evalFile(filepath: string): any;
        destroy(): void;
    }
    export = Jsonnet;
}
