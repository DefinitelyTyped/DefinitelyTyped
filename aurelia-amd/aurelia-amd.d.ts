declare module "loader-amd" {
    class System {
        static normalize(moduleId: string, normalizedParentModuleId?: string): Promise<string>;
        static map: Object;
        static importModule(moduleId: string): Promise<any>;
    }

    class LoaderAmd {
        loadModule(moduleId: string): Promise<any>;
    }
} 