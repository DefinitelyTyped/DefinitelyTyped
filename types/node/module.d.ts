declare module "module" {
    import { URL } from "url";
    interface Module extends NodeJS.Module {}
    class Module {
        static runMain(): void;
        static wrap(code: string): string;

        /**
         * @deprecated Deprecated since: v12.2.0. Please use createRequire() instead.
         */
        static createRequireFromPath(path: string): NodeJS.Require;
        static createRequire(path: string | URL): NodeJS.Require;
        static builtinModules: string[];

        static Module: typeof Module;

        constructor(id: string, parent?: Module);
    }
}
