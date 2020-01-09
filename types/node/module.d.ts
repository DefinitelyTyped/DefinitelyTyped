declare module "module" {
    import { URL } from "url";
    interface Module extends NodeModule {}
    class Module {
        static runMain(): void;
        static wrap(code: string): string;

        /**
         * @deprecated Deprecated since: v12.2.0. Please use createRequire() instead.
         */
        static createRequireFromPath(path: string): NodeRequire;
        static createRequire(path: string | URL): NodeRequire;
        static builtinModules: string[];

        static Module: typeof Module;

        constructor(id: string, parent?: Module);
    }
    export = Module;
}
