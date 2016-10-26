
/**
 * Each Plugin has a configuration specified via a metadata.json file.
 * This interface prescribes that configuration file.
 * 
 */
declare namespace Config {

    type StringDictionary = { [key: string]: string };

    export interface ConfigItem {
        // a unique name for the configuration item
        name: Core.Name;
        // a human comprehensible name
        displayName: string;
        // a detailed description fo the item
        description: string;
        // the value of the item: if valueItem is provided it must be one of those values.
        value: string;
        // the datatype of the value: 'string', 'integer', ...
        valueType: string,
        // an enumeration of the allowed values for the value field
        valueItems?: string[];
        // a regular expression limiting the values allowed.
        // e.g. '^[a-zA-Z]+$'
        regex?: RegExp;
        // a description of the regex grammar
        // e.g. 'Name can only contain English characters!'
        regexMessage?: string;
        // can the value be changed?
        readOnly?: boolean;
    }


    /**
       https://editor.webgme.org/docs/source/global.html#GmeConfig	
       https://github.com/webgme/webgme/blob/master/config/README.md
    */
    export class GmeConfig {
        constructor();
        /**  Add-on related settings. */
        addOns: any;
        /**  Authentication related settings. */
        authentication: {
            enable: boolean,
            jwt: { privateKey: string, publicKey: string },
            logInUrl: string,
            logOutUrl: string
        };
        /** Bin script related settings. */
        bin: any;
        /** Blob related settings. */
        blob: Blob.ObjectBlob;
        /** Client related settings. */
        client: { log: { level: string } };
        /** Client related settings. */
        core: Core.Core;
        /** Enables debug mode. */
        public debug: boolean;
        /** Executor related settings. */
        executor: any;
        /** Mongo database related settings. */
        mongo: { uri: string };
        /** Plugin related settings. */
        plugin: {
            basePaths: string[],
            allowBrowserExecution: boolean,
            allowServerExecution: boolean
        };
        /** Additional paths to for requirejs. */
        requirejsPaths: StringDictionary;
        /** REST related settings. */
        rest: any;
        /** Seed related settings. */
        seedProjects: {
            basePaths: string[],
            panelPaths: string[],
            enable: boolean,
            allowDuplication: boolean
        };
        /** Server related settings. */
        server: {
            port: number, handle: { fd: number },
            log: any
        };
        /** Socket IO related settings. */
        socketIO: any;
        /** Storage related settings. */
        storage: any;
        /** Visualization related settings. */
        visualization: {
            panelPaths: string[],
            visualizerDescriptors: string[],
            extraCss: string[]
        };

        serialize(): any;
    }


    export class PluginConfig extends Config.GmeConfig {
        [propName: string]: any;
    }

    export let config: PluginConfig;

}