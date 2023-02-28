// Type definitions for node-config 3.3
// Project: https://github.com/lorenwest/node-config
// Definitions by: Roman Korneev <https://github.com/RWander>
//                 Forrest Bice <https://github.com/forrestbice>
//                 James Donald <https://github.com/jndonald3>
//                 Alberto Vasquez <https://github.com/albertovasquez>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare var c: c.IConfig;

declare namespace c {

    // see https://github.com/lorenwest/node-config/wiki/Using-Config-Utilities
    interface IUtil {
        // Extend an object (and any object it contains) with one or more objects (and objects contained in them).
        extendDeep(mergeInto: any, mergeFrom: any, depth?: number): any;
        extendDeep(mergeInto: any, mergeFrom1: any, mergeFrom2: any, depth?: number): any;
        extendDeep(mergeInto: any, ...mergeFrom: any): any;

        // Return a deep copy of the specified object.
        cloneDeep(copyFrom: any, depth?: number): any;

        // Return true if two objects have equal contents.
        equalsDeep(object1: any, object2: any, dept?: number): boolean;

        // Returns an object containing all elements that differ between two objects.
        diffDeep(object1: any, object2: any, depth?: number): any;

        // Make a javascript object property immutable (assuring it cannot be changed from the current value).
        makeImmutable(object: any, propertyName?: string, propertyValue?: string): any;

        // Make an object property hidden so it doesn't appear when enumerating elements of the object.
        makeHidden(object: any, propertyName: string, propertyValue?: string): any;

        // Get the current value of a config environment variable
        getEnv(varName: string): string;

        // Return the config for the project based on directory param if not directory then return default one (config).
        loadFileConfigs(configDir?: string): any;

        // Return the sources for the configurations
        getConfigSources(): IConfigSource[];

        // Returns a new deep copy of the current config object, or any part of the config if provided.
        toObject(config?: any): any;

        /**
         * This allows module developers to attach their configurations onto the default configuration object
         * so they can be configured by the consumers of the module.
         */
        setModuleDefaults(moduleName:string, defaults:any): any;
    }

    interface IConfig {
        get<T>(setting: string): T;
        has(setting: string): boolean;
        util: IUtil;
    }

    interface IConfigSource {
        name: string;
        original?: string | undefined;
        parsed: any;
    }
}

export = c;
