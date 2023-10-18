export = apostrophe;
export as namespace apos;

declare function apostrophe(
    options: apostrophe.AposConstructor,
    ...args: any[]
): any;

declare namespace apostrophe {
    const moogBundle: {
        directory: string;
        modules: string[];
    };

    // Pass in custom modules as first argument
    // second argument is additional custom options e.g. restApi exposed by apostrophe-headless
    interface AposConstructor<M = {}, O = {}> {
        afterInit?: (() => void) | undefined;
        afterListen?: (() => void) | undefined;
        initFailed?: ((error: any) => void) | undefined;
        baseUrl?: string | undefined;
        modules: { [K in AposCoreModules & M]?: AposModuleOptions | O };
        prefix?: string | undefined;
        root?: string | undefined;
        rootDir?: string | undefined;
        shortName: string;
    }

    const ui: {
        globalBusy: (state: any) => any;
        link: (
            sel: string,
            verb: string,
            object: object,
            callback?: () => any,
        ) => any;
    };

    const pages: {
        page: { _id: string; type: string; _url?: string | undefined };
    };

    const adminBar: {
        link: (name: string, callback: () => any) => void;
    };

    function change(arg: object | string): any;

    function create(type: string, options: any, callback?: () => any): any;

    const contextPiece: {
        _id: string;
        title: string;
        slug: string;
        type: string;
    };

    function define(
        type: string | string[],
        definition: any,
        extending?: any,
    ): any;

    const docs: {
        getManager: (type: string) => void;
        setManager: (type: string, manager: any) => void;
        lock: (id: string, callback?: () => any) => void;
        lockAndWatch: (id: string, callback?: () => any) => void;
        unlock: (_id: string, sync: any, callback?: () => any) => any;
    };

    function emit(name: string, arg?: any): any;

    const modules: object;

    const modalSupport: {
        stack: any[];
        initialized: boolean;
        depth: number;
        all: any[];
        getTopModalOrBody: () => string;
        getLatestModal: () => null | string;
        closeTopModal: () => void;
        cancelTopModal: () => void;
    };

    function notify(message: string | object, options: AposObject): any;

    function off(eventName: string, fn?: () => any): any;

    function on(eventName: string, fn?: () => any): any;

    const schemas: {
        convert: (
            $el: HTMLElement,
            schema: Schema,
            data: any,
            options: any,
            callback?: () => any,
        ) => any;
        newInstance: (schema: Schema) => any;
        populate: (
            data: any,
            name: string,
            $field: any,
            callback?: () => void,
            $el?: HTMLElement,
            field?: any,
        ) => any;
        returnToError: (
            $el: HTMLElement,
            schema: Schema,
            errorPath: any,
            error: any,
            callback: () => any,
        ) => void;
    };

    const utils: {
        capitalizeFirst: (s: string) => string;
        camelName: (s: string) => string;
        error: (msg: string) => void;
        generateId: () => string;
    };

    const versions: {
        edit: (id: string, afterRevert?: () => void) => any;
    };

    interface AposObject {
        [key: string]: any;
    }

    interface Field {
        name: string;
        type: string;
        label: string;
        help?: string | undefined;
        required?: boolean | undefined;
        options?: AposObject | undefined;
        choices?: SelectChoice[] | undefined;
        widgetType?: string | undefined;
        titleField?: string | undefined;
        schema?: Field[] | undefined;
    }

    interface SelectChoice {
        label: string;
        value: string;
    }

    type Fields = Field[];

    interface AposType {
        name: string;
        converters: {
            string(
                req: any,
                data: any,
                name: string,
                object: AposObject,
                field: any,
                callback: () => any,
            ): void;
            form(
                req: any,
                data: any,
                name: string,
                object: AposObject,
                field: any,
                callback: () => any,
            ): void;
        };
        empty?(field: any, value: any): void;
        bless?(req: any, field: any): void;
        index(value: any, field: any, texts: any): void;
    }

    interface Schema {
        createRoutes(): any[];
        pushAssets(): void;
        pushCreateSingleton(): void;
        compose(options: AposObject): void;
        refine(schema: Schema, options: AposObject): void;
        toGroups(fields: Fields): void;
        subset(schema: Schema, fields: Fields): Schema;
        newInstance(schema: Schema): any;
        subsetInstance(schema: Schema, instance: AposObject): any;
        empty(schema: Schema, object: AposObject): void;
        indexFields(schema: Schema, object: AposObject, texts: any): void;
        convert(
            req: any,
            schema: Schema,
            to: any,
            object: AposObject,
            output: any,
            callback: () => any,
        ): void;
        isVisible(schema: Schema, object: AposObject, name: string): void;
        export(
            req: any,
            schema: Schema,
            to: any,
            object: AposObject,
            output: any,
            callback: () => any,
        ): void;
        joinDriver(
            req: any,
            method: any,
            reverse: any,
            items: any,
            idField: any,
            relationshipsField: any,
            objectField: any,
            options: any,
            callback: () => any,
        ): void;
        join(
            req: any,
            schema: Schema,
            objectOrArray: any,
            withJoins: any,
            callback: () => any,
        ): void;
        addFieldType(type: AposType): void;
        getFieldType(typeName: string): void;
        addFilters(schema: Schema, options: any, cursor: any): void;
        joinFilterChoices(field: any, cursor: any, valueField: any): void;
        addJoinSlugFilter(field: any, cursor: any, suffix: any): void;
        pageServe(req: any): void;
        sortedDistinct(property: any, cursor: any, callback: () => any): void;
        cursorFilterInterested(cursor: any, name: string): void;
        afterInit(): void;
        validate(schema: Schema, options: any): void;
    }

    interface AposModule {
        emit(name: string): void;
        on(name: string, methodName: any, fn: () => any): void;
    }

    type AposCoreModules =
        | "apostrophe-admin-bar"
        | "apostrophe-any-page-manager"
        | "apostrophe-areas"
        | "apostrophe-assets"
        | "apostrophe-attachments"
        | "apostrophe-browser-utils"
        | "apostrophe-caches"
        | "apostrophe-custom-pages"
        | "apostrophe-db"
        | "apostrophe-doc-type-manager"
        | "apostrophe-docs"
        | "apostrophe-email"
        | "apostrophe-express"
        | "apostrophe-files"
        | "apostrophe-files-widgets"
        | "apostrophe-global"
        | "apostrophe-groups"
        | "apostrophe-html-widgets"
        | "apostrophe-i18n"
        | "apostrophe-images"
        | "apostrophe-images-widgets"
        | "apostrophe-jobs"
        | "apostrophe-launder"
        | "apostrophe-locks"
        | "apostrophe-login"
        | "apostrophe-migrations"
        | "apostrophe-modal"
        | "apostrophe-module"
        | "apostrophe-notifications"
        | "apostrophe-oembed"
        | "apostrophe-pager"
        | "apostrophe-pages"
        | "apostrophe-permissions"
        | "apostrophe-pieces"
        | "apostrophe-pieces-pages"
        | "apostrophe-pieces-widgets"
        | "apostrophe-polymorphic-manager"
        | "apostrophe-push"
        | "apostrophe-rich-text-widgets"
        | "apostrophe-schemas"
        | "apostrophe-search"
        | "apostrophe-service-bridge"
        | "apostrophe-soft-redirects"
        | "apostrophe-tags"
        | "apostrophe-tasks"
        | "apostrophe-templates"
        | "apostrophe-ui"
        | "apostrophe-urls"
        | "apostrophe-users"
        | "apostrophe-utils"
        | "apostrophe-versions"
        | "apostrophe-video-fields"
        | "apostrophe-video-widgets"
        | "apostrophe-widgets";

    // Pass in custom modules to AposModuleOptions to allow them in extend
    interface AposModuleOptions<C = {}> {
        extend: AposCoreModules | C;
        name?: string | undefined;
        label: string;
        pluralLabel?: string | undefined;
        playerData?: false | string[] | undefined;
        scene?: "user" | undefined;
        addFields?: Field[] | undefined;
        removeFields?: Field[] | undefined;
        arrangeFields?: {
            name: string;
            label: string;
            fields: string[];
        }[] | undefined;
        beforeConstruct?: ((self: any, options: any) => any) | undefined;
        defer?: boolean | undefined;
        filters?: {
            projection?: {
                [key: string]: number;
            } | undefined;
        } | undefined;
    }
}
