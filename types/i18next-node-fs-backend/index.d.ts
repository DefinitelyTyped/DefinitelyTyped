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
         */
        loadPath: string;

        /**
         * @summary Path to post missing resources
         */
        addPath: string;

        /**
         * @summary jsonIndent to use when storing json files
         */
        jsonIndent: number;

        /**
         * @summary custom parser
         */
        parse?: ((data: any) => any) | undefined;
    }

    /**
     * @summary Options for "i18next".
     * @interface
     */
    interface I18nextOptions {
        backend?: i18nextNodeFsBackEndOptions | undefined;
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
