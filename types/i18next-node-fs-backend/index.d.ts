// Type definitions for i18next-node-fs-backend
// Project: https://github.com/i18next/i18next-node-fs-backend
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace I18next {
    interface I18nextOptions extends i18nextNodeFsBackEnd.I18nextOptions { }
}

declare namespace i18nextNodeFsBackEnd {
    /**
     * @summary Options for "i18next-node-fs-backend".
     * @interface
     */
    interface i18nextNodeFsBackEndOptions {
        // path where resources get loaded from
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
        //
        jsonIndent: number;
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

    class BackEnd {
        constructor(services?: any, options?: Object);
        init(options?: Object): void;
    }

    var out: typeof BackEnd;
    export = out;
}
