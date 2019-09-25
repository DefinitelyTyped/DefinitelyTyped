// Type definitions for i18next-node-fs-backend 2.1
// Project: https://github.com/i18next/i18next-node-fs-backend
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace I18next {
    interface I18nextOptions extends i18nextNodeFsBackEnd.I18nextOptions { }
}

declare namespace i18nextNodeFsBackEnd {
    /**
     * @summary Options for "i18next-node-fs-backend".
     * @interface
     */
    interface i18nextNodeFsBackEndOptions {
        /**
         * @summary Path where resources get loaded from.
         * @type {string}
         */
        loadPath: string;

        /**
         * @summary Path to post missing resources
         * @type {string}
         */
        addPath: string;

        /**
         * @summary jsonIndent to use when storing json files
         * @type {number}
         */
        jsonIndent: number;

        /**
         * @summary custom parser
         * @type {function}
         */
        parse?: (data: any) => any;
    }

    /**
     * @summary Options for "i18next".
     * @interface
     */
    interface I18nextOptions {
        backend?: i18nextNodeFsBackEndOptions;
    }
}

declare module "i18next-node-fs-backend" {
    import * as i18next from "i18next";

    class Backend implements i18next.BackendModule<i18nextNodeFsBackEnd.i18nextNodeFsBackEndOptions> {
        type: "backend";
        constructor(services?: any, options?: i18nextNodeFsBackEnd.i18nextNodeFsBackEndOptions);
        init(services: i18next.Services, backendOptions?: i18nextNodeFsBackEnd.i18nextNodeFsBackEndOptions, i18nextOptions?: i18next.InitOptions): void;
        read(language: string, namespace: string, callback: i18next.ReadCallback): void;
        create(languages: string[], namespace: string, key: string, fallbackValue: string): void;
    }

    const module: typeof Backend;
    export = module;
}
