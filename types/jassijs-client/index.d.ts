/// <reference types="tabulator-tables" />
/// <reference types="jquery" />
/// <reference types="jquery.fancytree" />
declare module "jassijs/modul" {
    const _default: {
        css: {
            "jassijs.css": string;
            "materialdesignicons.min.css": string;
            "jquery-ui.css": string;
            "chosen.css": string;
            "goldenlayout-base.css": string;
            "goldenlayout-light-theme.css": string;
            "contextMenu.css": string;
        };
        types: {
            "node_modules/jquery/JQuery.d.ts": string;
            "node_modules/jquery/JQueryStatic.d.ts": string;
            "node_modules/jquery/legacy.d.ts": string;
            "node_modules/jquery/misc.d.ts": string;
            "node_modules/jqueryui/index.d.ts": string;
            "node_modules/chosen-js/index.d.ts": string;
            "node_modules/jquery.fancytree/index.d.ts": string;
            "node_modules/requirejs/index.d.ts": string;
            "node_modules/sizzle/index.d.ts": string;
            "tabulator-tables.ts": string;
        };
        require: {
            paths: {
                'intersection-observer': string;
                goldenlayout: string;
                'jquery.choosen': string;
                'jquery.contextMenu': string;
                'jquery.fancytree': string;
                "jquery.fancytree.ui-deps": string;
                'jquery.fancytree.filter': string;
                'jquery.fancytree.multi': string;
                'jquery.fancytree.dnd': string;
                jquery: string;
                'jquery.ui': string;
                'jquery.ui.touch': string;
                'jquery.notify': string;
                'jquery.language': string;
                'js-cookie': string;
                lodash: string;
                luxon: string;
                papaparse: string;
                'source.map': string;
                spectrum: string;
                splitlib: string;
                tabulatorlib: string;
                tinymcelib: string;
                'tabulator-tables': string;
                "reflect-metadata": string;
            };
            shim: {
                goldenlayout: string[];
                "jquery.choosen": string[];
                "jquery.contextMenu": string[];
                'jquery.fancytree': string[];
                'jquery.fancytree.dnd': string[];
                'jquery.ui': string[];
                'jquery.notify': string[];
                'jquery.ui.touch': string[];
                spectrum: string[];
            };
        };
    };
    export default _default;
}
declare module "jassijs/remote/Registry" {
    import "reflect-metadata";
    export function $Class(longclassname: string): Function;
    export function $register(servicename: string, ...params: any[]): Function;
    class DataEntry {
        oclass: new (...args: any[]) => any;
        params: any[];
    }
    class JSONDataEntry {
        classname: string;
        params: any[];
        filename: string;
    }
    /**
    * Manage all known data registered by jassijs.register
    * the data is downloaded by /registry.json
    * registry.json is updated by the server on code upload
    * @class jassijs.base.Registry
    */
    export class Registry {
        private _nextID;
        jsondata: {
            [service: string]: {
                [classname: string]: JSONDataEntry;
            };
        };
        data: {
            [service: string]: {
                [classname: string]: DataEntry;
            };
        };
        dataMembers: {
            [service: string]: {
                [classname: string]: {
                    [membername: string]: any[];
                };
            };
        };
        jsondataMembers: {
            [service: string]: {
                [classname: string]: {
                    [membername: string]: any[];
                };
            };
        };
        private isLoading;
        _eventHandler: {
            [service: string]: any[];
        };
        constructor();
        getData(service: string, classname?: string): DataEntry[];
        onregister(service: string, callback: (oclass: new (...args: any[]) => any, ...params: any[]) => void): (oclass: new (...args: any[]) => any, ...params: any[]) => void;
        offregister(service: string, callback: (oclass: new (...args: any[]) => any, ...params: any[]) => void): void;
        /**
         * register an anotation
         * Important: this function should only used from an annotation, because the annotation is saved in
         *            index.json and could be read without loading the class
         **/
        register(service: string, oclass: new (...args: any[]) => any, ...params: any[]): void;
        getMemberData(service: string): {
            [classname: string]: {
                [membername: string]: any[];
            };
        };
        getJSONMemberData(service: string): {
            [classname: string]: {
                [membername: string]: any[];
            };
        };
        /**
         * register an anotation
         * Important: this function should only used from an annotation
         **/
        registerMember(service: string, oclass: any, membername: string, ...params: any[]): void;
        /**
        * with every call a new id is generated - used to create a free id for the dom
        * @returns {number} - the id
        */
        nextID(): string;
        /**
        * Load text with Ajax synchronously: takes path to file and optional MIME type
        * @param {string} filePath - the url
        * @returns {string} content
        */ private loadText;
        /**
         * reload the registry
         */
        reload(): Promise<void>;
        /**
        * loads entries from json string
        * @param {string} json - jsondata
        */
        initJSONData(json: any): void;
        /**
         *
         * @param service - the service for which we want informations
         */
        getJSONData(service: string, classname?: string): Promise<JSONDataEntry[]>;
        getAllFilesForService(service: string, classname?: string): string[];
        loadAllFilesForEntries(entries: JSONDataEntry[]): Promise<void>;
        /**
         * load all files that registered the service
         * @param {string} service - name of the service
         * @param {function} callback - called when loading is finished
         */
        loadAllFilesForService(service: string): Promise<void>;
        /**
         * load all files
         * @param {string} files - the files to load
         */
        loadAllFiles(files: string[]): Promise<unknown>;
    }
    var registry: Registry;
    export default registry;
    export function migrateModul(oldModul: any, newModul: any): void;
}
declare module "jassijs/remote/Classes" {
    export class JassiError extends Error {
        constructor(msg: string);
    }
    /**
    * manage all registered classes ->jassijs.register("classes")
    * @class jassijs.base.Classes
    */
    export class Classes {
        private _cache;
        private funcRegister;
        constructor();
        destroy(): void;
        /**
         * load the a class
         * @param classname - the class to load
         */
        loadClass(classname: string): Promise<new (...args: any[]) => any>;
        /**
        * get the class of the given classname
        * @param {string} - the classname
        * @returns {class} - the class
        */
        getClass(classname: string): new (...args: any[]) => any;
        /**
        * get the name of the given class
        * @param {class} _class - the class (prototype)
        * @returns {string} name of the class
        */
        getClassName(_class: any): string;
        register(data: new (...args: any[]) => any, name: string): void;
    }
    let classes: Classes;
    export { classes };
    export function test(t: any): Promise<void>;
}
declare module "jassijs/base/Actions" {
    export class ActionProperties {
        /** @member {string} - the name of the Action */
        name: string;
        /**
        * @member {string} - the description of the Action
        */
        description?: string;
        /**
        * @member {string}  - the icon of the Action
        */
        icon?: string;
        isEnabled?: {
            (data?: any[]): boolean | Promise<boolean>;
        };
        run?: any;
    }
    /**
     * usage
     * @$Actions()
     * static test():ActionProperties[]{
     * }
     */
    export function $Actions(): Function;
    export function $Action(property: ActionProperties): Function;
    export function $ActionProvider(longclassname: string): Function;
    export interface Action {
        name: string;
        icon?: string;
        call: (objects: any[], params?: any) => void;
        description?: string;
    }
    export class Actions {
        static getActionsFor(vdata: any[]): Promise<Action[]>;
    }
    export function test(): Promise<void>;
}
declare module "jassijs/base/ActionNode" {
    export class ActionNode {
    }
    export function test(): Promise<void>;
}
declare module "jassijs/remote/security/Rights" {
    import { Context, RemoteObject } from "jassijs/remote/RemoteObject";
    export class RightProperties {
        name: string;
        description?: string;
    }
    export class ParentRightProperties {
        name: string;
        description?: {
            text: string;
            [parametername: string]: string;
        };
        sqlToCheck: string;
    }
    export function $Rights(rights: RightProperties[]): Function;
    export function $ParentRights(rights: [ParentRightProperties]): Function;
    export function $CheckParentRight(): Function;
    export class Rights extends RemoteObject {
        private _isAdmin;
        isAdmin(context?: Context): Promise<boolean>;
    }
    var rights: Rights;
    export default rights;
}
declare module "jassijs/util/Cookies" {
    class C {
        set(name: string, value: string, params?: any): void;
        get(name: string): any;
        remove(name: string, params?: any): void;
    }
    var Cookies: C;
    export { Cookies };
}
declare module "jassijs/ext/jquerylib" {
    import "jquery";
    import "jquery.ui";
    import "jquery.ui.touch";
}
declare module "jassijs/ui/Property" {
    export function $Property(property?: Property): Function;
    export class Property {
        [key: string]: any;
        constructorClass?: any;
        default?: any;
        /** the name of the property*/
        name?: string;
        /** the type of the property*/
        type?: string;
        /** the user can choose this entries */
        chooseFrom?: any[] | ((comp: any, propertyeditor?: any) => any[]);
        /** @member - the user can select from chooseFrom but can not input own entries*/
        chooseFromStrict?: boolean;
        /** @member - the description for tooltip **/
        decription?: string;
        /** @member - hides the properties from the base class **/
        hideBaseClassProperties?: boolean;
        /** @member - is the property visible */
        isVisible?: (component: any, propertyeditor?: any) => boolean;
        /** @member - jassijs.base.Action -   the actions in the PropertyEditor  */
        editoractions?: any[];
        /**
         * Property for PropertyEditor
         * @class jassijs.ui.EditorProperty
         */
        constructor(name?: any, type?: any);
        componentType?: any;
        description?: string;
        hide?: boolean;
        /**
         * this property could be set by browser url
         */
        isUrlTag?: boolean;
    }
}
declare module "jassijs/ui/ComponentDescriptor" {
    import { Property } from "jassijs/ui/Property";
    import { Component } from "jassijs/ui/Component";
    export class ComponentDescriptor {
        static cache: any;
        fields: Property[];
        editableComponents: any;
        /**
        * describes a Component
        * @class jassijs.ui.EditorProperty
        */
        constructor();
        /**
         * describes a class
         * @param {class}  type - the type of the class
         * @param {boolean}  nocache - an uncached version
         * @returns {jassijs.ui.ComponentDescriptor} - which describes the component
         */
        static describe(type: any, nocache?: boolean): ComponentDescriptor;
        /**
         * get the ids of all editable Components by the designer
         * @param {jassijs.ui.Component} component - the component to inspect
         * @param {boolean} idFromLabel - if true not the id but the id form label is returned
         * @param {flag} - undocumented-used for recursation
         **/
        static getEditableComponents(component: Component, idFromLabel: any, includeFrozenContainer: any, flag: any): string;
        /** calc editableComponents
         * @param {object} ob - the object to resolve
         * @returns {Object.<string,jassijs.ui.Component> - <name,component>
         **/
        resolveEditableComponents(ob: any, type?: any, ret?: any): any;
        /**
         * remove a field
         * @param {string} field - the name of the field to remove
         */
        removeField(field: any): void;
    }
}
declare module "jassijs/ui/CSSProperties" {
    import { Component } from "jassijs/ui/Component";
    /**
     * loads googlefonts if needed
     **/
    export function loadFontIfNedded(font: string): void;
    export class CSSProperties {
        background_color?: string;
        background_image?: string;
        border_color?: string;
        border_style?: string | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "inherit" | "initial" | "unset";
        border_width?: string | "thin" | "medium" | "thick" | "2px" | "inherit" | "initial" | "unset";
        color?: string;
        cursor?: string | "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "all-scroll" | "col-resize" | "row-resize" | "n-resize" | "e-resize" | "s-resize" | "w-resize" | "ne-resize" | "nw-resize" | "se-resize" | "sw-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "zoom-in" | "zoom-out" | "inherit" | "initial" | "unset";
        filter?: string | "blur(5px)" | "brightness(0.4)" | "contrast(200%)" | "drop-shadow(16px 16px 20px blue)" | "grayscale(50%)" | "hue-rotate(90deg)" | "invert(75%)" | "opacity(25%)" | "saturate(30%)" | "sepia(60%)" | "inherit" | "initial" | "unset";
        float?: string | "left" | "right" | "none" | "inline-start" | "inline-end" | "inherit" | "initial" | "unset";
        font_family?: string;
        font_size?: string | "12px" | "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "xxx-large" | "larger" | "smaller" | "inherit" | "initial" | "unset";
        font_variant?: string | "normal" | "small-caps" | "small-caps slashed-zero" | "common-ligatures tabular-nums" | "no-common-ligatures proportional-nums" | "inherit" | "initial" | "unset";
        font_weight?: string | "normal" | "bold" | "lighter" | "bolder" | "100" | "900" | "inherit" | "initial" | "unset";
        letter_spacing?: string | "normal" | "1px";
        line_height?: string | "normal" | "32px";
        margin_bottom?: string | "3px";
        margin_left?: string | "3px";
        margin_right?: string | "3px";
        margin_top?: string | "3px";
        overflow?: string | "visible" | "hidden" | "clip" | "scroll" | "auto" | "inherit" | "initial" | "unset";
        padding_bottom?: string | "3px";
        padding_left?: string | "3px";
        padding_right?: string | "3px";
        padding_top?: string | "3px";
        position?: string | "static" | "relative" | "absolute" | "sticky" | "fixed" | "inherit" | "initial" | "unset";
        text_align?: string | "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent" | "inherit" | "initial" | "unset";
        text_decoration_color?: string;
        text_decoration_line?: string | "none" | "underline" | "overline" | "line-through" | "blink" | "spelling-error" | "grammar-error" | "inherit" | "initial" | "unset";
        text_decoration_style?: string | "solid" | "double" | "dotted" | "dashed" | "wavy" | "inherit" | "initial" | "unset";
        text_decoration_thickness?: string | "3px";
        text_transform?: string | "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana" | "inherit" | "initial" | "unset";
        vertical_align?: string | "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | "3px" | "inherit" | "initial" | "unset";
        z_index?: string | "1" | "2" | "auto";
        [name: string]: string;
        static applyTo(properties: CSSProperties, component: Component): CSSProperties;
    }
}
declare module "jassijs/ui/Component" {
    import { CSSProperties } from "jassijs/ui/CSSProperties";
    global {
        interface Element {
            _this: Component;
            _id?: string;
        }
    }
    export class UIComponentProperties {
        /**
         * full path to classifiy the UIComponent e.g common/TopComponent
         */
        fullPath?: string;
        icon?: string;
        /**
         * initproperties are automatically set on new created Components
         * e.g. {text:"button"}
         */
        initialize?: {
            [initproperties: string]: any;
        };
        /**
         * allcomponents
         */
        editableChildComponents?: string[];
    }
    export function $UIComponent(properties: UIComponentProperties): Function;
    export class ComponentCreateProperties {
        id?: string;
        noWrapper?: boolean;
    }
    export interface ComponentConfig {
        /**
        * called if the component get the focus
        * @param {function} handler - the function which is executed
        */
        onfocus?(handler: any): any;
        /**
        * called if the component lost the focus
        * @param {function} handler - the function which is executed
        */
        onblur?(handler: any): any;
        /**
         * @member {string} - the label over the component
         */
        label?: string;
        /**
       * @member {string} - tooltip for the component
       */
        tooltip?: string;
        /**
        * @member {number} - the left absolute position
        */
        x?: number;
        /**
         * @member {number|string} - the top absolute position
         */
        y?: number;
        /**
         * @member {boolean} - component is hidden
         */
        hidden?: boolean;
        /**
       * @member {string|number} - the width of the component
       * e.g. 50 or "100%"
       */
        width?: string | number;
        /**
         * @member {string|number} - the height of the component
         * e.g. 50 or "100%"
         */
        height?: string | number;
        /**
         * ccc-Properties
         */
        css?: CSSProperties;
        styles?: any[];
        /**
         * @member {jassijs.ui.ContextMenu} - the contextmenu of the component
         **/
        contextMenu?: any;
    }
    export class Component implements ComponentConfig {
        private static _componentHook;
        _eventHandler: any;
        __dom: HTMLElement;
        domWrapper: HTMLElement;
        _id: string;
        _contextMenu?: any;
        _parent: any;
        events: any;
        _designMode: any;
        _styles?: any[];
        protected designDummies: Component[];
        /**
         * base class for each Component
         * @class jassijs.ui.Component
         * @param {object} properties - properties to init
         * @param {string} [properties.id] -  connect to existing id (not reqired)
         *
         */
        constructor(properties?: ComponentCreateProperties);
        config(config: ComponentConfig): Component;
        static onComponentCreated(func: any): void;
        static offComponentCreated(func: any): void;
        /**
         * adds an event
         * @param {type} name - the name of the event
         * @param {function} func - callfunction for the event
         */
        addEvent(name: any, func: any): void;
        /**
         * call the event
         * @param {name} name - the name of the event
         * @param {object} param 1- parameter for the event
         * @param {object} param 2- parameter for the event
         * @param {object} param 3- parameter for the event
         * @param {object} param 4- parameter for the event
         */
        callEvent(name: any, param1: any, param2?: any, param3?: any, param4?: any): any[];
        /**
         * @member {dom} - the dom element
         */
        get dom(): HTMLElement;
        set dom(value: HTMLElement);
        onfocus(handler: any): EventListenerOrEventListenerObject;
        onblur(handler: any): EventListenerOrEventListenerObject;
        /**
         * attach an eventhandler
         * @returns the handler to off the event
         */
        on(eventname: string, handler: EventListenerOrEventListenerObject): EventListenerOrEventListenerObject;
        off(eventname: string, handler?: EventListenerOrEventListenerObject): void;
        private static cloneAttributes;
        static replaceWrapper(old: Component, newWrapper: HTMLElement): void;
        /**
         * create an Element from an htmlstring e.g. createDom("<input/>")
         */
        static createHTMLElement(html: string): HTMLElement;
        /**
         * inits the component
         * @param {dom} dom - init the dom element
         * @paran {object} properties - properties to init
        */
        init(dom: HTMLElement | string, properties?: ComponentCreateProperties): void;
        set label(value: string);
        get label(): string;
        get tooltip(): string;
        set tooltip(value: string);
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get hidden(): boolean;
        set hidden(value: boolean);
        set width(value: string | number);
        get width(): string;
        set height(value: string | number);
        get height(): string | number;
        set css(properties: CSSProperties);
        /**
         * maximize the component
         */
        maximize(): void;
        get styles(): any[];
        set styles(styles: any[]);
        get contextMenu(): any;
        set contextMenu(value: any);
        destroy(): void;
        extensionCalled(action: ExtensionAction): void;
    }
}
declare module "jassijs/base/LoginDialog" {
    import { RemoteProtocol } from "jassijs/remote/RemoteProtocol";
    import "jassijs/ext/jquerylib";
    export function doAfterLogin(resolve: any, prot: RemoteProtocol): void;
    export function login(): Promise<unknown>;
    export function test(): void;
}
declare module "jassijs/remote/RemoteProtocol" {
    export class RemoteProtocol {
        static counter: number;
        classname: string;
        _this: any;
        parameter: any[];
        method: string;
        /**
         * converts object to jsonstring
         * if class is registerd in classes then the class is used
         * if id is used then recursive childs are possible
         * @param obj
         */
        stringify(obj: any): string;
        static simulateUser(user?: string, password?: string): Promise<void>;
        exec(config: any, object: any): Promise<unknown>;
        /**
       * call the server
       */
        call(): Promise<any>;
        /**
         * converts jsonstring to an object
         */
        parse(text: string): Promise<any>;
        test(): Promise<void>;
    }
}
declare module "jassijs/remote/RemoteObject" {
    export class Context {
        isServer: boolean;
        [key: string]: any;
    }
    export class RemoteObject {
        static call(method: (...ars: any) => any, ...parameter: any[]): Promise<any>;
        call(_this: any, method: (...ars: any) => any, ...parameter: any[]): Promise<any>;
    }
}
declare module "jassijs/remote/Database" {
    export class TypeDef {
        fields: {
            [fieldname: string]: {
                [decorater: string]: any[];
            };
        };
        getRelation(fieldname: any): {
            type: string;
            oclass: any;
        };
    }
    export class Database {
        private constructor();
        typeDef: Map<object, TypeDef>;
        decoratorCalls: Map<object, any[]>;
        private removeOld;
        _setMetadata(constructor: any, field: string, decoratername: string, fieldprops: any[], decoraterprops: any[], delegate: any): void;
        fillDecorators(): void;
        getMetadata(sclass: any): TypeDef;
    }
    var db: Database;
    export { db };
}
declare module "jassijs/util/DatabaseSchema" {
    /**
     * Special object that defines order condition for ORDER BY in sql.
     *
     * Example:
     * {
     *  "name": "ASC",
     *  "id": "DESC"
     * }
     */
    export type OrderByCondition = {
        [columnName: string]: ("ASC" | "DESC") | {
            order: "ASC" | "DESC";
            nulls?: "NULLS FIRST" | "NULLS LAST";
        };
    };
    /**
     * Describes all entity's options.
     */
    export interface EntityOptions {
        /**
         * Table name.
         * If not specified then naming strategy will generate table name from entity name.
         */
        name?: string;
        /**
         * Specifies a default order by used for queries from this table when no explicit order by is specified.
         */
        orderBy?: OrderByCondition | ((object: any) => OrderByCondition | any);
        /**
         * Table's database engine type (like "InnoDB", "MyISAM", etc).
         * It is used only during table creation.
         * If you update this value and table is already created, it will not change table's engine type.
         * Note that not all databases support this option.
         */
        engine?: string;
        /**
         * Database name. Used in Mysql and Sql Server.
         */
        database?: string;
        /**
         * Schema name. Used in Postgres and Sql Server.
         */
        schema?: string;
        /**
         * Indicates if schema synchronization is enabled or disabled for this entity.
         * If it will be set to false then schema sync will and migrations ignore this entity.
         * By default schema synchronization is enabled for all entities.
         */
        synchronize?: boolean;
        /**
         * If set to 'true' this option disables Sqlite's default behaviour of secretly creating
         * an integer primary key column named 'rowid' on table creation.
         * @see https://www.sqlite.org/withoutrowid.html.
         */
        withoutRowid?: boolean;
    }
    /**
     * This decorator is used to mark classes that will be an entity (table or document depend on database type).
     * Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
     */
    export function Entity(options?: EntityOptions): Function;
    /**
     * This decorator is used to mark classes that will be an entity (table or document depend on database type).
     * Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it.
     */
    export function Entity(name?: string, options?: EntityOptions): Function;
    /**
     * Column types used for @PrimaryGeneratedColumn() decorator.
     */
    export type PrimaryGeneratedColumnType = "int" | "int2" | "int4" | "int8" | "integer" | "tinyint" | "smallint" | "mediumint" | "bigint" | "dec" | "decimal" | "fixed" | "numeric" | "number" | "uuid";
    /**
     * Describes all options for PrimaryGeneratedColumn decorator with numeric generation strategy.
     */
    export interface PrimaryGeneratedColumnNumericOptions {
        /**
         * Column type. Must be one of the value from the ColumnTypes class.
         */
        type?: PrimaryGeneratedColumnType;
        /**
         * Column name in the database.
         */
        name?: string;
        /**
         * Column comment. Not supported by all database types.
         */
        comment?: string;
        /**
         * Puts ZEROFILL attribute on to numeric column. Works only for MySQL.
         * If you specify ZEROFILL for a numeric column, MySQL automatically adds the UNSIGNED attribute to the column
         */
        zerofill?: boolean;
        /**
         * Puts UNSIGNED attribute on to numeric column. Works only for MySQL.
         */
        unsigned?: boolean;
    }
    /**
     * Describes all options for PrimaryGeneratedColumn decorator with numeric uuid strategy.
     */
    export interface PrimaryGeneratedColumnUUIDOptions {
        /**
         * Column name in the database.
         */
        name?: string;
        /**
         * Column comment. Not supported by all database types.
         */
        comment?: string;
    }
    /**
     * Column decorator is used to mark a specific class property as a table column.
     */
    export function PrimaryGeneratedColumn(): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     */
    export function PrimaryGeneratedColumn(options: PrimaryGeneratedColumnNumericOptions): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     */
    export function PrimaryGeneratedColumn(strategy: "increment", options?: PrimaryGeneratedColumnNumericOptions): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     */
    export function PrimaryGeneratedColumn(strategy: "uuid", options?: PrimaryGeneratedColumnUUIDOptions): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     */
    export function PrimaryGeneratedColumn(strategy: "rowid", options?: PrimaryGeneratedColumnUUIDOptions): Function;
    export function JoinColumn(...param: any[]): Function;
    export function JoinTable(...param: any[]): Function;
    /**
     * Column types where spatial properties are used.
     */
    export type SpatialColumnType = "geometry" | "geography";
    /**
     * Column types where precision and scale properties are used.
     */
    export type WithPrecisionColumnType = "float" | "double" | "dec" | "decimal" | "fixed" | "numeric" | "real" | "double precision" | "number" | "datetime" | "datetime2" | "datetimeoffset" | "time" | "time with time zone" | "time without time zone" | "timestamp" | "timestamp without time zone" | "timestamp with time zone" | "timestamp with local time zone";
    /**
     * Column types where column length is used.
     */
    export type WithLengthColumnType = "character varying" | "varying character" | "char varying" | "nvarchar" | "national varchar" | "character" | "native character" | "varchar" | "char" | "nchar" | "national char" | "varchar2" | "nvarchar2" | "raw" | "binary" | "varbinary" | "string";
    export type WithWidthColumnType = "tinyint" | "smallint" | "mediumint" | "int" | "bigint";
    /**
     * All other regular column types.
     */
    export type SimpleColumnType = "simple-array" | "simple-json" | "simple-enum" | "bit" | "int2" | "integer" | "int4" | "int8" | "int64" | "unsigned big int" | "float4" | "float8" | "smallmoney" | "money" | "boolean" | "bool" | "tinyblob" | "tinytext" | "mediumblob" | "mediumtext" | "blob" | "text" | "ntext" | "citext" | "hstore" | "longblob" | "longtext" | "bytes" | "bytea" | "long" | "raw" | "long raw" | "bfile" | "clob" | "nclob" | "image" | "timetz" | "timestamptz" | "timestamp with local time zone" | "smalldatetime" | "date" | "interval year to month" | "interval day to second" | "interval" | "year" | "point" | "line" | "lseg" | "box" | "circle" | "path" | "polygon" | "geography" | "geometry" | "linestring" | "multipoint" | "multilinestring" | "multipolygon" | "geometrycollection" | "int4range" | "int8range" | "numrange" | "tsrange" | "tstzrange" | "daterange" | "enum" | "set" | "cidr" | "inet" | "macaddr" | "bit" | "bit varying" | "varbit" | "tsvector" | "tsquery" | "uuid" | "xml" | "json" | "jsonb" | "varbinary" | "hierarchyid" | "sql_variant" | "rowid" | "urowid" | "uniqueidentifier" | "rowversion" | "array" | "cube";
    /**
     * Any column type column can be.
     */
    export type ColumnType = WithPrecisionColumnType | WithLengthColumnType | WithWidthColumnType | SpatialColumnType | SimpleColumnType | BooleanConstructor | DateConstructor | NumberConstructor | StringConstructor;
    /**
     * Interface for objects that deal with (un)marshalling data.
     */
    export interface ValueTransformer {
        /**
         * Used to marshal data when writing to the database.
         */
        to(value: any): any;
        /**
         * Used to unmarshal data when reading from the database.
         */
        from(value: any): any;
    }
    /**
     * Column options specific to all column types.
     */
    export interface ColumnCommonOptions {
        /**
         * Indicates if column is always selected by QueryBuilder and find operations.
         * Default value is "true".
         */
        select?: boolean;
        /**
         * Column name in the database.
         */
        name?: string;
        /**
         * Indicates if this column is a primary key.
         * Same can be achieved when @PrimaryColumn decorator is used.
         */
        primary?: boolean;
        /**
         * Specifies if this column will use auto increment (sequence, generated identity, rowid).
         * Note that in some databases only one column in entity can be marked as generated, and it must be a primary column.
         */
        generated?: boolean | "increment" | "uuid" | "rowid";
        /**
         * Specifies if column's value must be unique or not.
         */
        unique?: boolean;
        /**
         * Indicates if column's value can be set to NULL.
         */
        nullable?: boolean;
        /**
         * Default database value.
         * Note that default value is not supported when column type is 'json' of mysql.
         */
        default?: any;
        /**
         * ON UPDATE trigger. Works only for MySQL.
         */
        onUpdate?: string;
        /**
         * Column comment. Not supported by all database types.
         */
        comment?: string;
        /**
         * Indicates if this column is an array.
         * Can be simply set to true or array length can be specified.
         * Supported only by postgres.
         */
        array?: boolean;
        /**
         * Specifies a value transformer that is to be used to (un)marshal
         * this column when reading or writing to the database.
         */
        transformer?: ValueTransformer | ValueTransformer[];
    }
    /**
     * Describes all column's options.
     */
    export interface ColumnOptions extends ColumnCommonOptions {
        /**
         * Column type. Must be one of the value from the ColumnTypes class.
         */
        type?: ColumnType;
        /**
         * Column name in the database.
         */
        name?: string;
        /**
         * Column type's length. Used only on some column types.
         * For example type = "string" and length = "100" means that ORM will create a column with type varchar(100).
         */
        length?: string | number;
        /**
         * Column type's display width. Used only on some column types in MySQL.
         * For example, INT(4) specifies an INT with a display width of four digits.
         */
        width?: number;
        /**
         * Indicates if column's value can be set to NULL.
         */
        nullable?: boolean;
        /**
         * Indicates if column value is not updated by "save" operation.
         * It means you'll be able to write this value only when you first time insert the object.
         * Default value is "false".
         *
         * @deprecated Please use the `update` option instead.  Careful, it takes
         * the opposite value to readonly.
         *
         */
        readonly?: boolean;
        /**
         * Indicates if column value is updated by "save" operation.
         * If false, you'll be able to write this value only when you first time insert the object.
         * Default value is "true".
         */
        update?: boolean;
        /**
         * Indicates if column is always selected by QueryBuilder and find operations.
         * Default value is "true".
         */
        select?: boolean;
        /**
         * Indicates if column is inserted by default.
         * Default value is "true".
         */
        insert?: boolean;
        /**
         * Default database value.
         */
        default?: any;
        /**
         * ON UPDATE trigger. Works only for MySQL.
         */
        onUpdate?: string;
        /**
         * Indicates if this column is a primary key.
         * Same can be achieved when @PrimaryColumn decorator is used.
         */
        primary?: boolean;
        /**
         * Specifies if column's value must be unique or not.
         */
        unique?: boolean;
        /**
         * Column comment. Not supported by all database types.
         */
        comment?: string;
        /**
         * The precision for a decimal (exact numeric) column (applies only for decimal column), which is the maximum
         * number of digits that are stored for the values.
         */
        precision?: number | null;
        /**
         * The scale for a decimal (exact numeric) column (applies only for decimal column), which represents the number
         * of digits to the right of the decimal point and must not be greater than precision.
         */
        scale?: number;
        /**
         * Puts ZEROFILL attribute on to numeric column. Works only for MySQL.
         * If you specify ZEROFILL for a numeric column, MySQL automatically adds the UNSIGNED attribute to this column
         */
        zerofill?: boolean;
        /**
         * Puts UNSIGNED attribute on to numeric column. Works only for MySQL.
         */
        unsigned?: boolean;
        /**
         * Defines a column character set.
         * Not supported by all database types.
         */
        charset?: string;
        /**
         * Defines a column collation.
         */
        collation?: string;
        /**
         * Array of possible enumerated values.
         */
        enum?: (string | number)[] | Object;
        /**
         * Exact name of enum
         */
        enumName?: string;
        /**
         * Generated column expression. Supports only in MySQL.
         */
        asExpression?: string;
        /**
         * Generated column type. Supports only in MySQL.
         */
        generatedType?: "VIRTUAL" | "STORED";
        /**
         * Return type of HSTORE column.
         * Returns value as string or as object.
         */
        hstoreType?: "object" | "string";
        /**
         * Indicates if this column is an array.
         * Can be simply set to true or array length can be specified.
         * Supported only by postgres.
         */
        array?: boolean;
        /**
         * Specifies a value transformer that is to be used to (un)marshal
         * this column when reading or writing to the database.
         */
        transformer?: ValueTransformer | ValueTransformer[];
        /**
         * Spatial Feature Type (Geometry, Point, Polygon, etc.)
         */
        spatialFeatureType?: string;
        /**
         * SRID (Spatial Reference ID (EPSG code))
         */
        srid?: number;
    }
    /**
     * Column decorator is used to mark a specific class property as a table column. Only properties decorated with this
     * decorator will be persisted to the database when entity be saved.
     */
    export function Column(): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     * Only properties decorated with this decorator will be persisted to the database when entity be saved.
     */
    export function Column(options: ColumnOptions): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     * Only properties decorated with this decorator will be persisted to the database when entity be saved.
     */
    export function Column(type: SimpleColumnType, options?: ColumnCommonOptions): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     * Only properties decorated with this decorator will be persisted to the database when entity be saved.
     * Primary columns also creates a PRIMARY KEY for this column in a db.
     */
    export function PrimaryColumn(options?: ColumnOptions): Function;
    /**
     * Column decorator is used to mark a specific class property as a table column.
     * Only properties decorated with this decorator will be persisted to the database when entity be saved.
     * Primary columns also creates a PRIMARY KEY for this column in a db.
     */
    export function PrimaryColumn(type?: ColumnType, options?: ColumnOptions): Function;
    /**
     * Represents some Type of the Object.
     */
    export type ObjectType<T> = {
        new (): T;
    } | Function;
    /**
     * ON_DELETE type to be used to specify delete strategy when some relation is being deleted from the database.
     */
    export type OnDeleteType = "RESTRICT" | "CASCADE" | "SET NULL" | "DEFAULT" | "NO ACTION";
    /**
     * ON_UPDATE type to be used to specify update strategy when some relation is being updated.
     */
    export type OnUpdateType = "RESTRICT" | "CASCADE" | "SET NULL" | "DEFAULT" | "NO ACTION";
    /**
     * DEFERRABLE type to be used to specify if foreign key constraints can be deferred.
     */
    export type DeferrableType = "INITIALLY IMMEDIATE" | "INITIALLY DEFERRED";
    /**
     * Describes all relation's options.
     */
    export interface RelationOptions {
        /**
         * Sets cascades options for the given relation.
         * If set to true then it means that related object can be allowed to be inserted or updated in the database.
         * You can separately restrict cascades to insertion or updation using following syntax:
         *
         * cascade: ["insert", "update"] // include or exclude one of them
         */
        cascade?: boolean | ("insert" | "update" | "remove")[];
        /**
         * Indicates if relation column value can be nullable or not.
         */
        nullable?: boolean;
        /**
         * Database cascade action on delete.
         */
        onDelete?: OnDeleteType;
        /**
         * Database cascade action on update.
         */
        onUpdate?: OnUpdateType;
        /**
         * Indicate if foreign key constraints can be deferred.
         */
        deferrable?: DeferrableType;
        /**
         * Indicates if this relation will be a primary key.
         * Can be used only for many-to-one and owner one-to-one relations.
         */
        primary?: boolean;
        /**
         * Set this relation to be lazy. Note: lazy relations are promises. When you call them they return promise
         * which resolve relation result then. If your property's type is Promise then this relation is set to lazy automatically.
         */
        lazy?: boolean;
        /**
         * Set this relation to be eager.
         * Eager relations are always loaded automatically when relation's owner entity is loaded using find* methods.
         * Only using QueryBuilder prevents loading eager relations.
         * Eager flag cannot be set from both sides of relation - you can eager load only one side of the relationship.
         */
        eager?: boolean;
        /**
         * Indicates if persistence is enabled for the relation.
         * By default its enabled, but if you want to avoid any changes in the relation to be reflected in the database you can disable it.
         * If its disabled you can only change a relation from inverse side of a relation or using relation query builder functionality.
         * This is useful for performance optimization since its disabling avoid multiple extra queries during entity save.
         */
        persistence?: boolean;
    }
    /**
     * One-to-one relation allows to create direct relation between two entities. Entity1 have only one Entity2.
     * Entity1 is an owner of the relationship, and storages Entity1 id on its own side.
     */
    export function OneToOne<T>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), options?: RelationOptions): Function;
    /**
     * One-to-one relation allows to create direct relation between two entities. Entity1 have only one Entity2.
     * Entity1 is an owner of the relationship, and storages Entity1 id on its own side.
     */
    export function OneToOne<T>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide?: string | ((object: T) => any), options?: RelationOptions): Function;
    /**
     * One-to-many relation allows to create type of relation when Entity2 can have multiple instances of Entity1.
     * Entity1 have only one Entity2. Entity1 is an owner of the relationship, and storages Entity2 id on its own side.
     */
    export function OneToMany<T>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide: string | ((object: T) => any), options?: RelationOptions): Function;
    /**
     * Many-to-one relation allows to create type of relation when Entity1 can have single instance of Entity2, but
     * Entity2 can have a multiple instances of Entity1. Entity1 is an owner of the relationship, and storages Entity2 id
     * on its own side.
     */
    export function ManyToOne<T>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), options?: RelationOptions): Function;
    /**
     * Many-to-one relation allows to create type of relation when Entity1 can have single instance of Entity2, but
     * Entity2 can have a multiple instances of Entity1. Entity1 is an owner of the relationship, and storages Entity2 id
     * on its own side.
     */
    export function ManyToOne<T>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide?: string | ((object: T) => any), options?: RelationOptions): Function;
    /**
     * Many-to-many is a type of relationship when Entity1 can have multiple instances of Entity2, and Entity2 can have
     * multiple instances of Entity1. To achieve it, this type of relation creates a junction table, where it storage
     * entity1 and entity2 ids. This is owner side of the relationship.
     */
    export function ManyToMany<T>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), options?: RelationOptions): Function;
    /**
     * Many-to-many is a type of relationship when Entity1 can have multiple instances of Entity2, and Entity2 can have
     * multiple instances of Entity1. To achieve it, this type of relation creates a junction table, where it storage
     * entity1 and entity2 ids. This is owner side of the relationship.
     */
    export function ManyToMany<T>(typeFunctionOrTarget: string | ((type?: any) => ObjectType<T>), inverseSide?: string | ((object: T) => any), options?: RelationOptions): Function;
}
declare module "jassijs/remote/ObjectTransaction" {
    import { Context } from "jassijs/remote/RemoteObject";
    import { TransactionItem } from "jassijs/remote/Transaction";
    export class ObjectTransaction {
        statements: TransactionItem[];
        saveresolve: any[];
        private functionsFinally;
        transactionResolved(context: Context): void;
        addFunctionFinally(functionToAdd: () => any): void;
        checkFinally(): void;
        finally(): Promise<void>;
    }
}
declare module "jassijs/remote/Transaction" {
    import { RemoteObject } from "jassijs/remote/RemoteObject";
    import { RemoteProtocol } from "jassijs/remote/RemoteProtocol";
    export class TransactionItem {
        transaction: Transaction;
        obj: any;
        method: (...args: any[]) => any;
        params: any[];
        promise: Promise<any>;
        result: any;
        remoteProtocol: RemoteProtocol;
        resolve: any;
    }
    export class Transaction extends RemoteObject {
        private statements;
        private ready;
        private context;
        execute(): Promise<any[]>;
        wait(transactionItem: TransactionItem, prot: RemoteProtocol): Promise<any>;
        private sendRequest;
        private doServerStatement;
        add(obj: any, method: (...args: any[]) => any, ...params: any[]): void;
    }
}
declare module "jassijs/remote/Test" {
    export class Test {
        /**
         * fails if the condition is false
         * @parameter condition
         **/
        expectEqual(condition: boolean): void;
        /**
         * fails if the func does not throw an error
         * @parameter func - the function that should failed
         **/
        expectError(func: any): void;
        /**
        * fails if the func does not throw an error
        * @parameter func - the function that should failed
        **/
        expectErrorAsync(func: any): Promise<void>;
    }
}
declare module "jassijs/remote/Validator" {
    import "reflect-metadata";
    import { Test } from "jassijs/remote/Test";
    export class ValidationOptions {
        message?: string;
    }
    export function registerValidation(name: string, options: ValidationOptions, func: (target: any, propertyName: string, value: any, options: any) => string): (target: any, propertyKey: string, parameterIndex: number) => void;
    export class ValidationError {
        value: object;
        target: object;
        property: string;
        message: string;
        constructor(value: any, target: any, property: string, message: string);
    }
    class ValidateOptions {
        /**
         * e.g. {ValidateInt:{optional:false}} delegates optional:false to all ValidateInt rules
         * e.g. {ALL:{optional:false}} delegates optional:false to all Validators rules}
         */
        delegateOptions?: {
            [ValidatorClassName: string]: any;
        };
    }
    export function validate(obj: any, options?: ValidateOptions, raiseError?: boolean): ValidationError[];
    export class ValidationIsArrayOptions extends ValidationOptions {
        optional?: boolean;
        type?: (type?: any) => any;
        alternativeJsonProperties?: string[];
    }
    export function ValidateIsArray(options?: ValidationIsArrayOptions): Function;
    export class ValidationIsBooleanOptions extends ValidationOptions {
        optional?: boolean;
        type?: any;
    }
    export function ValidateIsBoolean(options?: ValidationIsBooleanOptions): Function;
    export class ValidationIsDateOptions extends ValidationOptions {
        optional?: boolean;
    }
    export function ValidateIsDate(options?: ValidationIsDateOptions): Function;
    export function ValidateFunctionParameter(): Function;
    export class ValidationIsInOptions extends ValidationOptions {
        optional?: boolean;
        in: any[];
    }
    export function ValidateIsIn(options?: ValidationIsInOptions): Function;
    export class ValidationIsInstanceOfOptions extends ValidationOptions {
        optional?: boolean;
        type: (type?: any) => any;
        /**
         * ["id"] means an object {id:9} is also a valid type
         */
        alternativeJsonProperties?: string[];
    }
    export function ValidateIsInstanceOf(options?: ValidationIsInstanceOfOptions): Function;
    export class ValidationIsIntOptions extends ValidationOptions {
        optional?: boolean;
    }
    export function ValidateIsInt(options?: ValidationIsIntOptions): Function;
    export class ValidationMaxOptions extends ValidationOptions {
        max: number;
    }
    export function ValidateMax(options: ValidationMaxOptions): Function;
    export class ValidationMinOptions extends ValidationOptions {
        min: number;
    }
    export function ValidateMin(options: ValidationMinOptions): Function;
    export class ValidationIsNumberOptions extends ValidationOptions {
        optional?: boolean;
    }
    export function ValidateIsNumber(options?: ValidationIsNumberOptions): Function;
    export class ValidationIsStringOptions extends ValidationOptions {
        optional?: boolean;
    }
    export function ValidateIsString(options?: ValidationIsIntOptions): Function;
    export function test(test: Test): Promise<void>;
}
declare module "jassijs/remote/Serverservice" {
    import "jassijs/remote/Classes";
    export class ServerserviceProperties {
        name: string;
        getInstance: (() => Promise<any>);
    }
    var runningServerservices: {};
    export function beforeServiceLoad(func: (name: string, props: ServerserviceProperties) => void): void;
    global {
        interface Serverservice {
        }
    }
    var serverservices: Serverservice;
    export function $Serverservice(properties: ServerserviceProperties): Function;
    var doNotReloadModule: boolean;
    export { serverservices, doNotReloadModule, runningServerservices };
}
declare module "jassijs/remote/DBObject" {
    import { Context, RemoteObject } from "jassijs/remote/RemoteObject";
    import { EntityOptions } from "jassijs/util/DatabaseSchema";
    import { ValidationError } from "jassijs/remote/Validator";
    export function $DBObject(options?: EntityOptions): Function;
    export class MyFindManyOptions {
        relations?: string[];
        [sampleproperty: string]: any;
        /**
         *
         * where e.g. id>5
         */
        where?: string;
        /**
         * e.g. where:"id>:param" ,whereParams:{param:5}
         */
        whereParams?: any;
        /**
       * Offset (paginated) where from entities should be taken.
       */
        skip?: number;
        /**
         * Limit (paginated) - max number of entities should be taken.
         */
        take?: number;
        /**
        * Order, in which entities should be ordered.
        */
        order?: {
            [field: string]: "ASC" | "DESC" | 1 | -1;
        };
    }
    /**
    * base class for all database entfities
    * all objects which use the jassijs.db must implement this
    * @class DBObject
    */
    export class DBObject extends RemoteObject {
        id: number | string;
        private static cache;
        private static _init;
        private static _initFunc;
        constructor();
        isAutoId(): boolean;
        static getFromCache(classname: string, id: number | string): DBObject;
        validate(options?: any, throwError?: boolean): Promise<ValidationError[]>;
        private static addToCache;
        static clearCache(classname: string): void;
        removeFromCache(): void;
        static _createObject(ob: any): DBObject;
        /**
         * replace all childs objects with {id:}
         */
        private _replaceObjectWithId;
        /**
        * save the object to jassijs.db
        */
        save(context?: Context): Promise<any>;
        _createObjectInDB(context?: Context): Promise<any>;
        static findOne(options?: any, context?: Context): Promise<DBObject>;
        static find(options?: MyFindManyOptions, context?: Context): Promise<DBObject[]>;
        /**
        * reload the object from jassijs.db
        */
        remove(context?: Context): Promise<any>;
        _getObjectProperty(dummy: any): void;
        _setObjectProperty(dummy: any, dumm1: any): void;
    }
    export function test(): Promise<void>;
}
declare module "jassijs/remote/DBObjectQuery" {
    import { DBObject } from "jassijs/remote/DBObject";
    export class DBObjectQueryProperties {
        name: string;
        description?: string;
    }
    export function $DBObjectQuery(property: DBObjectQueryProperties): Function;
    export class DBObjectQuery {
        classname: string;
        name: string;
        description: string;
        _function: any;
        execute(): Promise<DBObject>;
        static getQueries(classname: string): Promise<DBObjectQuery[]>;
    }
    export function test(): Promise<void>;
}
declare module "jassijs/remote/security/Setting" {
    import { DBObject, MyFindManyOptions } from "jassijs/remote/DBObject";
    import { Context } from "jassijs/remote/RemoteObject";
    export class Setting extends DBObject {
        id: number;
        constructor();
        data: string;
        save(context?: Context): Promise<void>;
        static findOne(options?: any, context?: Context): Promise<DBObject>;
        static find(options?: MyFindManyOptions, context?: Context): Promise<DBObject[]>;
        /**
        * reload the object from jassijs.db
        */
        remove(context?: Context): Promise<void>;
    }
    export function test(): Promise<void>;
}
declare module "jassijs/remote/FileNode" {
    export class FileNode {
        name: string;
        fullpath?: string;
        parent?: FileNode;
        files?: FileNode[];
        date?: any;
        flag?: string;
        constructor(fullpath?: string);
        isDirectory?(): boolean;
        resolveChilds?(all?: {
            [path: string]: FileNode;
        }): {
            [path: string]: FileNode;
        };
    }
}
declare module "jassijs/ui/Notify" {
    import "jquery";
    import "jquery.notify";
    export function notify(text: string | object, style: string | any, options?: any): void;
    export function notifyAddStyle(style: any, options: any): void;
}
declare module "jassijs/remote/Server" {
    import { Context, RemoteObject } from "jassijs/remote/RemoteObject";
    import { FileNode } from "jassijs/remote/FileNode";
    export class Server extends RemoteObject {
        private static isonline;
        static lastTestServersideFileResult: any;
        static filesInMap: {
            [name: string]: {
                modul: string;
                id: number;
            };
        };
        constructor();
        private _convertFileNode;
        fillFilesInMapIfNeeded(): Promise<void>;
        addFilesFromMap(root: FileNode): Promise<void>;
        /**
        * gets alls ts/js-files from server
        * @param {Promise<string>} [async] - returns a Promise for asynchros handling
        * @returns {string[]} - list of files
        */
        dir(withDate?: boolean, context?: Context): Promise<FileNode>;
        zip(directoryname: string, serverdir?: boolean, context?: Context): Promise<any>;
        /**
         * gets the content of a file from server
         * @param {string} fileNamew
         * @returns {string} content of the file
         */
        loadFiles(fileNames: string[], context?: Context): Promise<{
            [id: string]: string;
        }>;
        /**
         * gets the content of a file from server
         * @param {string} fileName
         * @returns {string} content of the file
         */
        loadFile(fileName: string, context?: Context): Promise<string>;
        /**
        * put the content to a file
        * @param [{string}] fileNames - the name of the file
        * @param [{string}] contents
        */
        saveFiles(fileNames: string[], contents: string[], context?: Context): Promise<string>;
        /**
        * put the content to a file
        * @param {string} fileName - the name of the file
        * @param {string} content
        */
        saveFile(fileName: string, content: string, context?: Context): Promise<string>;
        /**
       * deletes a server modul
       **/
        testServersideFile(name: string, context?: Context): Promise<string>;
        /**
       * deletes a server modul
       **/
        removeServerModul(name: string, context?: Context): Promise<string>;
        /**
        * deletes a file or directory
        **/
        delete(name: string, context?: Context): Promise<string>;
        /**
         * renames a file or directory
         **/
        rename(oldname: string, newname: string, context?: Context): Promise<string>;
        /**
        * is the nodes server running
        **/
        static isOnline(context?: Context): Promise<boolean>;
        /**
         * creates a file
         **/
        createFile(filename: string, content: string, context?: Context): Promise<string>;
        /**
        * creates a file
        **/
        createFolder(foldername: string, context?: Context): Promise<string>;
        createModule(modulname: string, context?: Context): Promise<string>;
        static mytest(context?: Context): Promise<any>;
    }
}
declare module "jassijs/remote/Settings" {
    import { Context, RemoteObject } from "jassijs/remote/RemoteObject";
    import { Test } from "jassijs/remote/Test";
    global {
        export interface KnownSettings {
        }
    }
    export class Settings extends RemoteObject {
        static keys: KnownSettings;
        private static browserSettings;
        private static userSettings;
        private static allusersSettings;
        /**
        * loads the settings
        */
        static load(context?: Context): Promise<{
            user: any;
            allusers: any;
        }>;
        static getAll(scope: "browser" | "user" | "allusers"): {};
        gets<T>(Settings_key: T): T;
        static remove(Settings_key: string, scope: "browser" | "user" | "allusers", context?: Context): Promise<void>;
        static save<T>(Settings_key: T, value: T, scope: "browser" | "user" | "allusers"): Promise<any>;
        static saveAll(namevaluepair: {
            [key: string]: any;
        }, scope: "browser" | "user" | "allusers", removeOtherKeys?: boolean, context?: Context): Promise<any>;
    }
    var settings: Settings;
    export { settings };
    export function $SettingsDescriptor(): Function;
    export function autostart(): Promise<void>;
    export function test(t: Test): Promise<void>;
    export function load(): Promise<{
        user: any;
        allusers: any;
    }>;
}
declare module "jassijs/base/CurrentSettings" {
    import "async!jassijs/remote/Settings:load";
    import { Settings } from "jassijs/remote/Settings";
    var currentsettings: Settings;
    export { currentsettings };
}
declare module "jassijs/base/Errors" {
    export class Errors {
        static errors: Errors;
        items: any;
        handler: any;
        private static _randomID;
        /**
        * Error handling.
        * @class jassijs.base.Error
        */
        constructor();
        addError(err: any): void;
        /**
         * raise if error is thrown
         * @param {function} func - callback function
         * @param {string} [id] - the id of the component that registers the error
         */
        onerror(func: any, id: any): any;
        /**
         * delete the error handler
         * @param {function} func - callback function
         * @param {string} [id] - the id of the component that registers the error
         */
        offerror(id: any): void;
    }
    var errors: Errors;
    export { errors };
}
declare module "jassijs/base/Extensions" {
    export class Extensions {
        items: any;
        constructor();
        /**
         * extend the class
         * @param {class} type - extend the type - add functions
         */
        extend(classname: any, classdef: any): void;
        forFile(file: any): Promise<{
            classname: string;
            params: any[];
            filename: string;
        }>;
        /**
         * init the Extensions
         */
        init(): void;
        /**
         * extend an existing class
         * all methods and property where copied
         * @param {string} - the name of the class to extend
         * @param {class} - the class
         */
        register(name: any, extClass: any, alias: any): void;
    }
    var extensions: any;
    export default extensions;
}
declare module "jassijs/ui/Container" {
    import { Component, ComponentConfig } from "jassijs/ui/Component";
    export interface ContainerConfig extends ComponentConfig {
        /**
         * child components
         */
        children?: Component[];
    }
    export class Container extends Component implements Omit<ContainerConfig, "children"> {
        _components: Component[];
        _designDummy: any;
        /**
         *
         * @param {object} properties - properties to init
         * @param {string} [properties.id] -  connect to existing id (not reqired)
         *
         */
        constructor(properties?: any);
        config(config: ContainerConfig): Container;
        /**
        * inits the component
        * @param {dom} dom - init the dom element
        * @paran {object} properties - properties to init
       */
        init(dom: any, properties?: any): void;
        /**
         * adds a component to the container
         * @param {jassijs.ui.Component} component - the component to add
         */
        add(component: any): void;
        /**
         * adds a component to the container before an other component
         * @param {jassijs.ui.Component} component - the component to add
         * @param {jassijs.ui.Component} before - the component before then component to add
         */
        addBefore(component: Component, before: Component): void;
        /**
       * remove the component
       * @param {jassijs.ui.Component} component - the component to remove
       * @param {boolean} destroy - if true the component would be destroyed
       */
        remove(component: any, destroy?: boolean): void;
        /**
       * remove all component
       * @param {boolean} destroy - if true the component would be destroyed
       */
        removeAll(destroy?: any): void;
        destroy(): void;
    }
}
declare module "jassijs/ui/InvisibleComponent" {
    import { Component } from "jassijs/ui/Component";
    /**
     * invivisible Component
     **/
    export class InvisibleComponent extends Component {
        $isInivisibleComponent: boolean;
        constructor(properties?: any);
    }
}
declare module "jassijs/ui/Databinder" {
    import { InvisibleComponent } from "jassijs/ui/InvisibleComponent";
    import { Component } from "jassijs/ui/Component";
    export class Databinder extends InvisibleComponent {
        components: Component[];
        private _properties;
        private _getter;
        private _setter;
        private _onChange;
        private _autocommit;
        userObject: any;
        rollbackObject: any;
        constructor();
        /**
        * binds the component to the property of the userObject
        * @param {string} property - the name of the property to bind
        * @param {jassijs.ui.Component} component - the component to bind
        * @param {string} [onChange] - functionname to register the  changehandler - if missing no autocommit is possible
        * @param {function} [getter] - function to get the value of the component - if missing .value is used
        * @param {function} [setter] - function to put the value of the component - if missing .value is used
        */
        add(property: any, component: any, onChange?: any, getter?: any, setter?: any): void;
        componentChanged(component: any, property: any, event: any): void;
        remove(component: any): void;
        /**
         * defines getter and setter and connect this to the databinder
         * @param {object} object - the object where we define the property
         * @param {string} propertyname - the name of the property
         **/
        definePropertyFor(object: any, propertyname: any): void;
        /**
         * @member {object} value - the binded userobject - call toForm on set
         */
        get value(): any;
        set value(obj: any);
        doValidation(ob: any): Promise<boolean>;
        /**
         * binds the object to all added components
         * @param {object} obj - the object to bind
         */
        toForm(obj: any): void;
        validateObject(): Promise<void>;
        /**
         * gets the objectproperties from all added components
         * @return {object}
         */
        fromForm(): Promise<object>;
        /**
         * get objectproperty
         * @param {number} x - the numer of the component
         */
        _fromForm(x: any): void;
        /**
         * register the autocommit handler if needed
         * @param {jassijs.ui.DataComponent} component
         */
        destroy(): void;
    }
}
declare module "jassijs/ui/DataComponent" {
    import { Component, ComponentConfig } from "jassijs/ui/Component";
    import { Databinder } from "jassijs/ui/Databinder";
    export interface DataComponentConfig extends ComponentConfig {
        /**
            * binds a component to a databinder
            * @param [{jassijs.ui.Databinder} databinder - the databinder to bind,
            *         {string} property - the property to bind]
            */
        bind?: any[];
        /**
       * @member {bool} autocommit -  if true the databinder will update the value on every change
       *                              if false the databinder will update the value on databinder.toForm
       */
        autocommit?: boolean;
        value?: any;
    }
    export class DataComponent extends Component implements DataComponentConfig {
        _autocommit: boolean;
        _databinder: Databinder;
        /**
        * base class for each Component
        * @class jassijs.ui.Component
         * @param {object} properties - properties to init
         * @param {string} [properties.id] -  connect to existing id (not reqired)
         *
         */
        constructor(properties?: any);
        config(config: DataComponentConfig): DataComponent;
        get autocommit(): boolean;
        set autocommit(value: boolean);
        /**
         * @param [databinder:jassijs.ui.Databinder,"propertyToBind"]
         */
        set bind(databinder: any[]);
        destroy(): void;
    }
}
declare module "jassijs/ui/Image" {
    import { DataComponent, DataComponentConfig } from "jassijs/ui/DataComponent";
    export interface ImageConfig extends DataComponentConfig {
        /**
     * register an event if the image is clicked
     * @param {function} handler - the function that is called on change
     */
        onclick?(handler: any): any;
        /**
          * @member {string} - link to image
          */
        src?: string;
    }
    export class Image extends DataComponent implements ImageConfig {
        constructor();
        config(config: ImageConfig): Image;
        onclick(handler: any): void;
        /**
        * @member {string} value - value of the component
        */
        set value(value: string);
        get value(): string;
        get width(): string;
        set width(value: string);
        get height(): string | number;
        set height(value: string | number);
        set src(icon: string);
        get src(): string;
    }
    export function test(): Image;
}
declare module "jassijs/ui/DesignDummy" {
    import { Component } from "jassijs/ui/Component";
    import { Image } from "jassijs/ui/Image";
    export class DesignDummy extends Image {
        type: "beforeComponent" | "atEnd";
        editorselectthis: Component;
        designDummyFor: Component;
        constructor();
        static createIfNeeded(designDummyFor: Component, type: "beforeComponent" | "atEnd", editorselectthis?: Component, oclass?: any): DesignDummy;
        static destroyIfNeeded(designDummyFor: Component, type: "beforeComponent" | "atEnd"): void;
    }
}
declare module "jassijs/ui/Panel" {
    import { Container, ContainerConfig } from "jassijs/ui/Container";
    import { Component, ComponentCreateProperties } from "jassijs/ui/Component";
    export class PanelCreateProperties extends ComponentCreateProperties {
        useSpan?: boolean;
    }
    export interface PanelConfig extends ContainerConfig {
        /**
          * @param {boolean} the elements are ordered absolute
          **/
        isAbsolute?: boolean;
    }
    export class Panel extends Container implements PanelConfig {
        _isAbsolute: boolean;
        private _activeComponentDesigner;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: PanelCreateProperties);
        config(config: PanelConfig): Panel;
        set isAbsolute(value: boolean);
        get isAbsolute(): boolean;
        max(): void;
        extensionCalled(action: ExtensionAction): void;
        /**
        * adds a component to the container
        * @param {jassijs.ui.Component} component - the component to add
        */
        add(component: Component): void;
        /**
         * adds a component to the container before an other component
         * @param {jassijs.ui.Component} component - the component to add
         * @param {jassijs.ui.Component} before - the component before then component to add
         */
        addBefore(component: Component, before: Component): void;
        /**
         * activates or deactivates designmode
         * @param {boolean} enable - true if activate designMode
         */
        protected _setDesignMode(enable: any): void;
        destroy(): void;
    }
}
declare module "jassijs/ui/Button" {
    import { Component, ComponentConfig } from "jassijs/ui/Component";
    export interface ButtonConfig extends ComponentConfig {
        /**
      * register an event if the button is clicked
      * @param {function} handler - the function that is called on change
      */
        onclick?(handler: any, removeOldHandler: boolean): any;
        /**
       * @member {string} - the icon of the button
       */
        icon?: string;
        /**
     * @member {string} - the caption of the button
     */
        text?: string;
    }
    export class Button extends Component implements ButtonConfig {
        constructor();
        config(config: ButtonConfig): Button;
        get dom(): HTMLButtonElement;
        set dom(value: HTMLButtonElement);
        onclick(handler: any, removeOldHandler?: boolean): EventListenerOrEventListenerObject;
        set icon(icon: string);
        get icon(): string;
        set text(value: string);
        get text(): string;
        toggle(setDown?: any): boolean;
        destroy(): void;
    }
    export function test(): Promise<import("jassijs/ui/Panel").Panel>;
}
declare module "jassijs/util/Tools" {
    export class Tools {
        constructor();
        static copyObject(obj: any): any;
        /**
               * converts a json string to a object
               * @param {string} value - the code
               */
        static jsonToObject(code: string): any;
        private static replaceQuotes;
        /**
       * converts a string to a object
       * @param value - the object to stringify
       * @param space - the space before the property
       * @param nameWithQuotes - if true "key":value else key:value
       */
        static objectToJson(value: any, space?: any, nameWithQuotes?: boolean, lengthForLinebreak?: number): string;
        private static toText;
        private static getValueFromNode;
        private static visitObject;
        private static visitNode2;
        private static visitNode;
        /**
         * parse a json string and returns an object an embed all values in string
         * e.g.
         * { a:"hallo",i:{b:9,c:"test"}} would be convert to{ a:""hallo"",i:{b:"9",c:""test""}}
         **/
        static jsonToStringObject(code: string): {};
        private static _stringObjectToJson;
        /**
        * parse a json string and returns an object an embed all values in string
        * e.g.
        * { a:"hallo",i:{b:9,c:"test"}} would be convert to{ a:""hallo"",i:{b:"9",c:""test""}}
        **/
        static stringObjectToJson(ob: any, space: string): string;
    }
    export function test(): Promise<void>;
}
declare module "jassijs/ui/PropertyEditors/Editor" {
    import { Property } from "jassijs/ui/Property";
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    export function $PropertyEditor(supportedtypes: string[]): Function;
    export class Editor {
        component: any;
        _ob: any;
        property: Property;
        propertyEditor: PropertyEditor;
        _eventHandler: any;
        /**
        * Editor for number and string
        * used by PropertyEditor
        * @class jassijs.ui.PropertyEditors.DefaultEditor
        */
        constructor(property: any, propertyEditor: any);
        /**
         * adds an event
         * @param {type} name - the name of the event
         * @param {function} func - callfunction for the event
         */
        addEvent(name: any, func: any): void;
        /**
         * call the event
         * @param {name} name - the name of the event
         * @param {object} param 1- parameter for the event
         * @param {object} param 2- parameter for the event
         * @param {object} param 3- parameter for the event
         */
        callEvent(name: any, param1?: any, param2?: any, param3?: any): void;
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
         * called on value changes
         * @param handler - function(oldValue,newValue)
         */
        onedit(handler: any): void;
        destroy(): void;
    }
}
declare module "jassijs/ui/converters/DefaultConverter" {
    import { Component } from "jassijs/ui/Component";
    export class $ConverterProperties {
        name?: string;
    }
    export function $Converter(param: $ConverterProperties): Function;
    export class DefaultConverter {
        _component?: Component;
        constructor();
        /**
         * converts a string to the object
         * an error can be thrown for validation
         * @param {string} str - the string to convert
         */
        stringToObject(str: any): any;
        /**
         * converts an object to string
         * @param {string} obj - the object to convert
         */
        objectToString(obj: any): any;
        get component(): Component;
        set component(component: Component);
        /**
        * converts an object to an formatted string
        * @param {string} obj - the object to convert
        */
        objectToFormatedString(obj: any): any;
    }
}
declare module "jassijs/ui/Textbox" {
    import { DataComponent, DataComponentConfig } from "jassijs/ui/DataComponent";
    import { DefaultConverter } from "jassijs/ui/converters/DefaultConverter";
    export interface TextboxConfig extends DataComponentConfig {
        converter?: DefaultConverter;
        /**
        * @member {boolean} disabled - enable or disable the element
        */
        disabled?: boolean;
        /**
         * @member {string} value - value of the component
         */
        value?: any;
        /**
        * called if value has changed
        * @param {function} handler - the function which is executed
        */
        onclick?(handler: any): any;
        /**
         * called if value has changed
         * @param {function} handler - the function which is executed
         */
        onchange?(handler: any): any;
        /**
         * called if a key is pressed down
         * @param {function} handler - the function which is executed
         */
        onkeydown?(handler: any): any;
        /**
         * called if user has something typed
         * @param {function} handler - the function which is executed
         */
        oninput?(handler: any): any;
        placeholder?: string;
        /**
        *  @member {string|function} completerDisplay - property or function used to gets the value to display
        */
        autocompleterDisplay?: string | ((object: any) => string);
        /**
        *  @member {[object]} completer - values used for autocompleting
        */
        autocompleter?: any[] | (() => any);
        /**
         * @member {boolean} - the textfield is readonly
         */
        readOnly?: boolean;
    }
    export class Textbox extends DataComponent implements TextboxConfig {
        _converter: DefaultConverter;
        _autocompleterDisplay: any;
        _autocompleter: any;
        private _value;
        private _isFocused;
        constructor(color?: any);
        config(config: TextboxConfig): Textbox;
        get dom(): HTMLInputElement;
        set dom(value: HTMLInputElement);
        set disabled(value: boolean);
        get disabled(): boolean;
        set readOnly(value: boolean);
        get converter(): DefaultConverter;
        set converter(value: DefaultConverter);
        get readOnly(): boolean;
        private focuscalled;
        private updateValue;
        private blurcalled;
        set value(value: any);
        get value(): any;
        onclick(handler: any): EventListenerOrEventListenerObject;
        onchange(handler: any): EventListenerOrEventListenerObject;
        onkeydown(handler: any): EventListenerOrEventListenerObject;
        oninput(handler: any): EventListenerOrEventListenerObject;
        set placeholder(text: string);
        get placeholder(): string;
        set autocompleterDisplay(value: string | ((object: any) => string));
        get autocompleterDisplay(): string | ((object: any) => string);
        private fillCompletionList;
        set autocompleter(value: any[] | (() => any));
        get autocompleter(): any[] | (() => any);
        /**
         * focus the textbox
         */
        focus(): void;
        destroy(): void;
    }
    export function test(): Textbox;
}
declare module "jassijs/ui/PropertyEditors/NameEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    export class NameEditor extends Editor {
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onchange(param: any): void;
    }
}
declare module "jassijs/ui/PropertyEditor" {
    import "jassijs/ext/jquerylib";
    import "jassijs/base/PropertyEditorService";
    import { Panel } from "jassijs/ui/Panel";
    import { Property } from "jassijs/ui/Property";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { Component } from "jassijs/ui/Component";
    import { Action } from "jassijs/base/Actions";
    global {
        export interface ExtensionAction {
            getPropertyEditorActions?: {
                propertyEditor: PropertyEditor;
                actions: Action[];
            };
        }
    }
    export interface ParserInterface {
        sourceFile: any;
        typeMeNode: any;
        typeMe: {
            [name: string]: any;
        };
        classes: {
            [name: string]: any;
        };
        imports: {
            [name: string]: string;
        };
        functions: {
            [name: string]: ts.Node;
        };
        variables: {
            [name: string]: ts.Node;
        };
        classScope: {
            classname: string;
            methodname: string;
        }[];
        code: string;
        data: {
            [variable: string]: {
                [property: string]: any[];
            };
        };
        getModifiedCode(): string;
        addTypeMe(name: string, type: string): any;
        /**
       * parse the code
       * @param {string} code - the code
       * @param {string} onlyfunction - only the code in the function is parsed, e.g. "layout()"
       */
        parse(code: string, classScope?: {
            classname: string;
            methodname?: string;
        }[]): any;
        /**
         * add import {name} from file
         * @param name
         * @param file
         */
        addImportIfNeeded(name: string, file: string): any;
        getClassScopeFromPosition(code: string, pos: number): {
            classname: string;
            methodname: string;
        };
        /**
         * modify a member
         **/
        addOrModifyMember(member: any, pclass: any): any;
        /**
        * removes the property from code
        * @param {type} property - the property to remove
        * @param {type} [onlyValue] - remove the property only if the value is found
        * @param {string} [variablename] - thpe name of the variable - default=this.variablename
        */
        removePropertyInCode(property: string, onlyValue?: any, variablename?: string): any;
        /**
         * removes the variable from code
         * @param {string} varname - the variable to remove
         */
        removeVariablesInCode(varnames: string[]): any;
        /**
         * gets the next variablename
         * */
        getNextVariableNameForType(type: string, suggestedName?: string): any;
        /**
        * modify the property in code
        * @param variablename - the name of the variable
        * @param  property - the property
        * @param value - the new value
        * @param classscope  - the property would be insert in this block
        * @param isFunction  - true if the property is a function
        * @param [replace]  - if true the old value is deleted
        * @param [before] - the new property is placed before this property
        * @param [variablescope] - if this scope is defined - the new property would be insert in this variable
        */
        setPropertyInCode(variableName: string, property: string, value: string | any, classscope: {
            classname: string;
            methodname: string;
        }[], isFunction: boolean, replace: boolean, before?: {
            variablename: string;
            property: string;
            value?: any;
        }, variablescope?: {
            variablename: string;
            methodname: any;
        }): any;
        /**
        * swaps two statements indendified by  functionparameter in a variable.property(parameter1) with variable.property(parameter2)
        **/
        swapPropertyWithParameter(variable: string, property: string, parameter1: string, parameter2: string): any;
        /**
        * adds an Property
        * @param type - name of the type o create
        * @param classscope - the scope (methodname) where the variable should be insert Class.layout
        * @param variablescope - the scope where the variable should be insert e.g. hallo.onclick
        * @returns  the name of the object
        */
        addVariableInCode(fulltype: string, classscope: {
            classname: string;
            methodname: string;
        }[], variablescope?: {
            variablename: string;
            methodname: any;
        }, suggestedName?: any): string;
        getPropertyValue(variable: any, property: any): any;
    }
    export class PropertyEditor extends Panel {
        readPropertyValueFromDesign: boolean;
        table: Panel;
        codeEditor: any;
        parser: ParserInterface;
        variablename: string;
        parentPropertyEditor: PropertyEditor;
        _multiselectEditors: PropertyEditor[];
        showThisProperties: any;
        properties: any;
        _value: any;
        codeChanges: {
            [property: string]: string | {};
        };
        toolbar: Panel;
        actions: Action[];
        /**
        * edit object properties
        */
        constructor(codeEditor?: any, parser?: any);
        /**
         * adds a new property
         * @param {string} name  - the name of the property
         * @param {jassijs.ui.PropertyEditors.Editor} editor - the propertyeditor to render the property
         * @param {string} description - the the description is tooltip over the name
         */
        addProperty(name: string, editor: Editor, description: string): void;
        /**
         * register an event if the property has changed
         * @param {function} handler - the function that is called on change
         */
        oncodeChanged(handler: any): void;
        /**
         * register an event if the property has changed
         * @param {function} handler - the function that is called on change
         */
        onpropertyChanged(handler: any): void;
        /**
         * delete all properties
         */
        clear(): void;
        /**
       * if parentPropertyEditor is defined then the value of the property must be substituted
       * @param {jassijs.ui.PropertyEditor propertyEditor
       * @param {[opject} props
       * @param {string} propname the propertyName
       */
        /**
         * if parentPropertyEditor is defined then the properties are defined there
         * @param {jassijs.ui.PropertyEditor propertyEditor
         * @param {[opject} props
         * @param {string} propname the propertyName
        
        _addParentEditorProperties(propertyEditor, props, propname) {
            if (propertyEditor.parentPropertyEditor !== undefined)
                this._addParentEditorProperties(propertyEditor.parentPropertyEditor, props, propertyEditor.variablename + "/" + propname);
            else {
                var ret;
                if (this.showThisProperties !== undefined) {
                    ret = Tools.copyObject(this.showThisProperties);
                } else
                    ret = ComponentDescriptor.describe(propertyEditor.value.constructor, true).fields;
                for (var x = 0;x < ret.length;x++) {
                    if (ret[x].name.startsWith(propname + "/")) {
                        var test = ret[x].name.substring((propname + "/").length);
                        if (test.indexOf("/") < 0) {
                            ret[x].name = test;
                            props.push(ret[x]);
                        }
                    }
    
                }
            }
        } */
        /**
         * get all known instances for type
         * @param {type} type - the type we are interested
         * @returns {[string]}
         */
        getVariablesForType(type: any): any;
        /**
         * get the variablename of an object
         * @param {object} ob - the object to search
         * @returns {string}
         */
        getVariableFromObject(ob: any): any;
        /**
          * gets the name object of the given variabel
          * @param {string} ob - the name of the variable
         *  @returns {string}
         */
        getObjectFromVariable(ob: any): any;
        /**
         * @member {object}  - the rendered object
         */
        set value(value: any);
        private addActions;
        private createAction;
        swapComponents(first: Component, second: Component): void;
        private controlEditor;
        private _initValue;
        /**
         * updates values
         */
        update(): void;
        get value(): any;
        /**
         * gets the value of the property
         * @param {string} property
         * @param {boolean} [noDefaultValue] - returns no default value of the property
         * @returns {object}
         */
        getPropertyValue(property: Property, noDefaultValue?: any): any;
        updateCodeEditor(): void;
        /**
         * update the parser
         */
        updateParser(): void;
        /**
         * adds an required file to the code
         */
        addImportIfNeeded(name: string, file: string): void;
        /**
         * gets the next variablename
         * */
        getNextVariableNameForType(type: string): any;
        /**
         * adds an Property
         * @param type - name of the type o create
         * @param scopename - the scope {variable: ,methodname:} to add the variable - if missing layout()
         * @returns  the name of the object
         */
        addVariableInCode(type: string, scopename: {
            variablename: string;
            methodname: string;
        }, suggestedName?: string): string;
        /**
         * modify the property in code
         * @param {string} property - the property
         * @param {string} value - the new value
         * @param {boolean} [replace]  - if true the old value is deleted
         * @param {string} [variablename] - the name of the variable - default=this.variablename
         * @param {object} [before] - {variablename,property,value=undefined}
         * @param {object} scope - the scope {variable: ,methodname:} the scope - if missing layout()
        */
        setPropertyInCode(property: string, value: any, replace?: boolean, variableName?: string, before?: {
            variablename: string;
            property: string;
            value?: any;
        }, scopename?: {
            variablename: string;
            methodname: string;
        }, doUpdate?: boolean): void;
        /**
        * modify the property in design
        * @param {string} property - the property
        * @param {string} value - the new value
        */
        setPropertyInDesign(property: string, value: any): void;
        /**
         * goto source position
         * @param position - in Code
         */
        gotoCodePosition(position: number): any;
        /**
         * goto source line
         * @param {number} line - line in Code
         */
        gotoCodeLine(line: number): any;
        /**
         * renames a variable in code
         */
        renameVariableInCode(oldName: string, newName: string): void;
        /**
         * renames a variable in design
         */
        renameVariableInDesign(oldName: string, newName: string): void;
        /**
        * removes the variable from design
        * @param  varname - the variable to remove
        */
        removeVariableInDesign(varname: string): void;
        /**
         * removes the variable from code
         * @param {string} varname - the variable to remove
         */
        removeVariablesInCode(varname: string[]): void;
        /**
        * removes the property from code
        * @param {type} property - the property to remove
        * @param {type} [onlyValue] - remove the property only if the value is found
        * @param {string} [variablename] - the name of the variable - default=this.variablename
        */
        removePropertyInCode(property: string, onlyValue?: any, variablename?: string, doupdate?: boolean): any;
        /**
        * removes the property in design
        */
        removePropertyInDesign(property: string): void;
        layout(me?: any): void;
        destroy(): void;
    }
    export class PropertyEditorTestSubProperties {
        num: number;
        text: string;
    }
    export function test(): PropertyEditor;
}
declare module "jassijs/base/PropertyEditorService" {
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { Property } from "jassijs/ui/Property";
    export class PropertyEditorService {
        data: any;
        private funcRegister;
        /**
        * manage all PropertyEditors
        * @class jassijs.ui.PropertyEditorService
        */
        constructor();
        reset(): void;
        destroy(): void;
        private loadType;
        /**
         * creates PropertyEditor for type
         *
         * @param {string} variablename - the name of the variable
         * @param {jassijs.ui.Property} property - name of the type
         * @param {jassijs.ui.PropertyEditor} propertyEditor - the PropertyEditor instance
         */
        createFor(property: Property, propertyEditor: PropertyEditor): Editor | Promise<any>;
        private register;
    }
    var propertyeditor: PropertyEditorService;
    export { propertyeditor };
}
declare var def: any[];
/// <amd-dependency name="goldenlayout" path="goldenlayout" />
declare module "jassijs/ext/goldenlayout" {
    var goldenlayout: any;
    export default goldenlayout;
}
declare module "jassijs/ui/DockingContainer" {
    import "jassijs/ext/jquerylib";
    import "jassijs/ext/intersection-observer";
    import { Container } from "jassijs/ui/Container";
    export class DockingContainer extends Container {
        _registeredcomponents: any;
        _lastSize: number;
        _intersectionObserver: IntersectionObserver;
        _myLayout: any;
        _windowResizer: any;
        _noDestroyChilds: boolean;
        /**
    * a container where the components could be docked
    * @class jassijs.ui.DockingContainer
    */
        constructor(id?: any);
        static clearMemoryleak(container: any): void;
        /**
         * add a component to the container
         * @param {jassijs.ui.Component} component - the component to add
         * @param {string} title - the caption of the window
         * @param {string} name - the name of the window
         */
        add(component: any, title?: string, name?: any): void;
        /**
         * called on resizing could be redefined
         */
        onresize(): void;
        /**
         * register a component to Golden layout
         * @param {String} name - the name of the component
         */
        _registerGL(name: any): void;
        /**
         * remove a component from the container
         * @param {jassijs.ui.Component} component - the component to add
         */
        remove(component: any): void;
        _init(): void;
        /**
         * activate the window
         * @param {string} name - the name of the window
         */
        show(name: any): void;
        /**
         * update the layout (size)
         */
        update(): void;
        /**
         * finds a child in the config
         */
        _find(parent: any, name: any): any;
        /** @member {String} - the layout of the windows */
        get layout(): string;
        set layoutold(value: any);
        set layout(value: string);
        private addSelectionEvent;
        destroy(): void;
    }
    export function test(): DockingContainer;
}
declare module "jassijs/base/Windows" {
    import { Panel } from "jassijs/ui/Panel";
    export class Windows {
        _myLayout: any;
        _counter: number;
        _id: string;
        dom: any;
        _desktop: Panel;
        components: any[];
        inited: boolean;
        private _noRestore;
        /**
         * the window system -> jassijs.windows
         * @class jassijs.base.Windows
         */
        constructor();
        /**
         * inits the component
         */
        _init(): void;
        /**
         * search a window
         * @param {object|undefined} parent - the parent window
         * @param {type} name - name of the window
         * @returns {object} - the founded window
         */
        _findDeep(parent: any, name: any): any;
        /**
         * true if there a window with that name
         * @param {string} name
         * @returns {boolean}
         */
        contains(name: any): boolean;
        /**
         * activate the window
         * @param {string} name - the neme of the window
         * @returns {objet} - the window
         */
        show(name: any): any;
        /**
         * finds the component for the name
         * @param {string} name - the name of the window
         * @returns {jassijs.ui.Component} - the found dom element
         */
        findComponent(name: any): any;
        /**
         * adds a window to the side (left - area)
         * @param {dom|jassijs.ui.Component} component - the component to add
         * @param {string} title - the title
         */
        addLeft(component: any, title: any): void;
        /**
        * adds a window to the side (left - area)
        * @param {dom|jassijs.ui.Component} component - the component to add
        * @param {string} title - the title
        */
        addRight(component: any, title: any): void;
        add(component: any, title: any, name?: any): void;
        /**
         * add a window to the main area
         * @param {dom|jassijs.ui.Component} component - the component to add
         * @param {string} title - the title
         * @param {string} [id] - the name (id) - =title if undefined
         */
        _add(parent: any, component: any, title: any, name?: any): void;
        test(): void;
        /**
         * gets the url for the given component
         * @param {jassijs.ui.component} comp - the component to read
         */
        getUrlFromComponent(comp: any): string;
        restoreWindows(): void;
        saveWindows(): void;
        /**
         * fired if component is closing
         * @param {dom|jassijs.UI.Component} component - the component to register this event
         * @param {function} func
         */
        onclose(component: any, func: any): void;
    }
    var windows: Windows;
    export default windows;
}
declare module "jassijs/base/Router" {
    export class Router {
        constructor();
        /**
         * registers a database class
         * @param {string} - the name of the class
         * @param {class} - the class
         */
        register(name: any, data: any): void;
        /**
         * resolve the url
         * @param {string} hash - the hash to resolve
         */
        resolve(hash: any): void;
        /**
         * generate a URL from the component
         * @param {jassijs.ui.Component} component - the component to inspect
         */
        getURLFromComponent(component: any): void;
        /**
         *
         * @param {string} hash - the hash to navigate
         */
        navigate(hash: any): void;
    }
    let router: Router;
    export { router };
}
declare module "jassijs/ext/fancytree" {
    export {};
}
/// <amd-dependency name="Papa" path="papaparse" />
declare module "jassijs/ext/papaparse" {
    var Papa: any;
    export default Papa;
}
/// <amd-dependency name="spectrum" path="spectrum" />
declare module "jassijs/ext/spectrum" { }
/// <amd-module name="tabulator-tables" />
/// <amd-dependency name="tabulator" path="tabulatorlib" />
declare module "tabulator-tables" {
    var Tabulator: any;
    export { Tabulator };
}
/// <amd-dependency name="tinymce" path="tinymcelib" />
declare module "jassijs/ext/tinymce" {
    var tinymce: any;
    export default tinymce;
}
declare module "jassijs/remote/ClientError" {
    export class ClientError extends Error {
        constructor(msg: string);
    }
}
declare module "jassijs/remote/DBArray" {
    export class DBArray
    /**
    * Array for jassijs.base.DBObject's
    * can be saved to db
    * @class jassijs.base.DBArray
    */
     extends Array {
        constructor(...args: any[]);
        private _parentObject;
        private _parentObjectMember;
        /**
         * adds an object
         * if the object is linked to an other object then update this
         * @param {object} ob - the object to add
         */
        add(ob: any): void;
        /**
         * for compatibility
         */
        resolve(): Promise<this>;
        /**
         * remove an object
         * if the object is linked to an other object then update this
         * @param {object} ob - the object to remove
         */
        remove(ob: any): void;
    }
}
declare module "jassijs/remote/DatabaseTools" {
    import { Context, RemoteObject } from "jassijs/remote/RemoteObject";
    export class DatabaseTools extends RemoteObject {
        static runSQL(sql: string, parameter?: any[], context?: Context): Promise<any>;
        static dropTables(tables: string[]): Promise<string>;
    }
    export function test(): Promise<void>;
}
declare module "jassijs/remote/Extensions" {
    export function $Extension(forclass: any): Function;
    class ExtensionTarget {
        oclass: any;
        addFunction(name: string, func: (...any: any[]) => any, ifExists: "replace" | "append" | "prepend"): void;
        addMember(name: string): void;
        annotateMember(member: any, type: any, ...annotations: any[]): void;
    }
    export interface ExtensionProvider {
        initExtensions(extend: ExtensionTarget): any;
    }
    export class Extensions {
        constructor();
        private funcRegister;
        destroy(): void;
        annotate(oclass: any, ...annotations: any[]): void;
        register(extensionclass: new (...args: any[]) => any, forclass: any): void;
        annotateMember(classname: any, member: any, type: any, ...annotations: any[]): void;
    }
    var extensions: Extensions;
    export { extensions };
}
declare module "jassijs/remote/Jassi" {
    global {
        export interface ExtensionAction {
            componentDesignerSetDesignMode?: {
                enable: boolean;
                componentDesigner: any;
            };
            componentDesignerComponentCreated?: {
                newParent: any;
            };
            componentDesignerInvisibleComponentClicked?: {
                codeEditor: any;
                designButton: any;
            };
        }
    }
    global {
        interface String {
            replaceAll: any;
        }
    }
    /**
    * main class for jassi
    * @class Jassi
    */
    export class Jassi {
        [key: string]: any;
        base: {
            [k: string]: any;
        };
        modules: {
            [key: string]: string;
        };
        options: any;
        isServer: boolean;
        cssFiles: {
            [key: string]: string;
        };
        constructor();
        includeCSSFile(modulkey: string): void;
        /**
         * include a global stylesheet
         * @id - the given id - important for update
         * @data - the css data to insert
         **/
        includeCSS(id: string, data: {
            [cssselector: string]: any;
        }): void;
        /**
        * include a js or a css file
        * @param {string|string[]} href - url(s) of the js or css file(s)
        * @param {function} [param] - would be added with? to the url
        */
        myRequire(href: any, event?: any, param?: any): void;
    }
    global {
        class JassiStatic extends Jassi {
        }
    }
}
declare module "jassijs/remote/hallo" {
    export class OO {
        hallo: string;
        static test(): void;
    }
}
declare var jassijs: JassiStatic;
declare module "jassijs/remote/security/ParentRight" {
    import { DBObject } from "jassijs/remote/DBObject";
    import { Group } from "jassijs/remote/security/Group";
    export class ParentRight extends DBObject {
        id: number;
        name: string;
        classname: string;
        i1: number;
        i2: number;
        s1: string;
        s2: string;
        groups: Group[];
    }
}
declare module "jassijs/remote/security/User" {
    import { DBObject } from "jassijs/remote/DBObject";
    import { Group } from "jassijs/remote/security/Group";
    import { Context } from "jassijs/remote/RemoteObject";
    export class User extends DBObject {
        id: number;
        email: string;
        password: string;
        groups: Group[];
        isAdmin: boolean;
        static findWithRelations(): Promise<DBObject[]>;
        /**
       * reload the object from jassijs.db
       */
        hallo(context?: Context): Promise<any>;
        save(context?: Context): Promise<any>;
    }
    export function test(): Promise<void>;
    export function test2(): Promise<void>;
}
declare module "jassijs/remote/security/Right" {
    import { DBObject } from "jassijs/remote/DBObject";
    import { Group } from "jassijs/remote/security/Group";
    export class Right extends DBObject {
        id: number;
        name: string;
        groups: Group[];
    }
}
declare module "jassijs/remote/security/Group" {
    import { DBObject } from "jassijs/remote/DBObject";
    import { ParentRight } from "jassijs/remote/security/ParentRight";
    import { User } from "jassijs/remote/security/User";
    import { Right } from "jassijs/remote/security/Right";
    export class Group extends DBObject {
        id: number;
        name: string;
        parentRights: ParentRight[];
        rights: Right[];
        users: User[];
    }
}
declare module "jassijs/util/Numberformatter" {
    export class Numberformatter {
        static format(mask: string, value: number, options?: {}): any;
        private static getLocaleDecimal;
        static numberToString(num: number): string;
        static stringToNumber(num: string): number;
    }
    export function test(): void;
}
declare module "jassijs/ui/converters/NumberConverter" {
    import { DefaultConverter } from "jassijs/ui/converters/DefaultConverter";
    class NumberConverterProperties {
        min?: number;
        max?: number;
        format?: string;
    }
    export class NumberConverter extends DefaultConverter {
        min: number;
        max: number;
        format: string;
        constructor(props?: NumberConverterProperties);
        /**
         * converts a string to the object
         * an error can be thrown for validation
         * @param {string} str - the string to convert
         */
        stringToObject(str: any): number;
        /**
         * converts an object to string
         * @param  obj - the object to convert
         */
        objectToString(obj: any): string;
        objectToFormatedString(obj: any): any;
    }
}
declare module "jassijs/ui/HTMLPanel" {
    import { DataComponent, DataComponentConfig } from "jassijs/ui/DataComponent";
    global {
        interface JQuery {
            doubletap: any;
        }
    }
    export interface HTMLPanelConfig extends DataComponentConfig {
        newlineafter?: boolean;
        /**
         * template string  component.value=new Person();component.template:"{{name}}"}
         */
        template?: string;
        value?: string;
    }
    export class HTMLPanel extends DataComponent implements HTMLPanelConfig {
        static oldeditor: any;
        private _tcm;
        toolbar: string[];
        private _template;
        private _value;
        private inited;
        editor: any;
        customToolbarButtons: {
            [name: string]: {
                title: string;
                action: any;
            };
        };
        constructor(id?: any);
        config(config: HTMLPanelConfig): HTMLPanel;
        get newlineafter(): boolean;
        set newlineafter(value: boolean);
        compileTemplate(template: any): Function;
        get template(): string;
        set template(value: string);
        /**
         * @member {string} code - htmlcode of the component
         **/
        set value(code: string);
        get value(): string;
        extensionCalled(action: ExtensionAction): void;
        initIfNeeded(tinymce: any, config: any): void;
        focusLost(): void;
        private _initTinymce;
        /**
         * activates or deactivates designmode
         * @param {boolean} enable - true if activate designMode
         * @param {jassijs.ui.ComponentDesigner} editor - editor instance
         */
        _setDesignMode(enable: any, editor: any): void;
        destroy(): void;
    }
    export function test(): HTMLPanel;
}
/// <amd-dependency name="Split" path="splitlib" />
declare module "jassijs/ui/BoxPanel" {
    import { Panel, PanelConfig } from "jassijs/ui/Panel";
    export interface BoxPanelConfig extends PanelConfig {
        /**
         * @member {boolean} - if true then the components are composed horizontally
         **/
        horizontal?: boolean;
        /**
          * set the size of splitter e.g. [40,60] the firstcomponent size is 40%
          */
        spliter?: number[];
    }
    export class BoxPanel extends Panel implements BoxPanelConfig {
        _horizontal: boolean;
        private _spliter;
        private _splitcomponent;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        config(config: BoxPanelConfig): BoxPanel;
        set horizontal(value: boolean);
        get horizontal(): boolean;
        /**
        * adds a component to the container
        * @param {jassijs.ui.Component} component - the component to add
        */
        add(component: any): void;
        /**
        * adds a component to the container before an other component
        * @param {jassijs.ui.Component} component - the component to add
        * @param {jassijs.ui.Component} before - the component before then component to add
        */
        addBefore(component: any, before: any): void;
        set spliter(size: number[]);
        get spliter(): number[];
        updateSpliter(): void;
    }
    export function test(): Promise<BoxPanel>;
}
declare module "jassijs/ui/DBObjectView" {
    import { Button } from "jassijs/ui/Button";
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    import { Panel, PanelConfig } from "jassijs/ui/Panel";
    import { Databinder } from "jassijs/ui/Databinder";
    import { DBObject } from "jassijs/remote/DBObject";
    export type DBObjectViewMe = {
        databinder?: Databinder;
        create?: Button;
        main?: Panel;
        toolbar?: BoxPanel;
        save?: Button;
        remove?: Button;
        refresh?: Button;
    };
    export class DBObjectViewProperties {
        /**
         * full path to classifiy the UIComponent e.g common/TopComponent
         */
        classname: string;
        actionname?: string;
        icon?: string;
        queryname?: string;
    }
    export function $DBObjectView(properties: DBObjectViewProperties): Function;
    type Me = DBObjectViewMe;
    export interface DBObjectViewConfig extends PanelConfig {
        /**
           * register an event if the object is created
           * @param {function} handler - the function that is called
           */
        oncreated?(handler: (obj: DBObject) => void): any;
        /**
        * register an event if the object is saved
        * @param {function} handler - the function that is called
        */
        onsaved?(handler: (obj: DBObject) => void): any;
        /**
         * register an event if the object is refreshed
         * @param {function} handler - the function that is called
         */
        onrefreshed?(handler: (obj: DBObject) => void): any;
        /**
        * register an event if the object is deleted
        * @param {function} handler - the function that is called
        */
        ondeleted?(handler: (obj: DBObject) => void): any;
    }
    export class DBObjectView extends Panel implements Omit<DBObjectViewConfig, "isAbsolute"> {
        me: any;
        value: any;
        constructor();
        config(config: DBObjectViewConfig): DBObjectView;
        protected _setDesignMode(enable: any): void;
        /**
         * create a new object
         */
        createObject(): any;
        oncreated(handler: (obj: DBObject) => void): void;
        private doSave;
        /**
         * saves the object
         */
        saveObject(): Promise<void>;
        onsaved(handler: (obj: DBObject) => void): void;
        /**
         * refresh the object
         */
        refreshObject(): void;
        onrefreshed(handler: (obj: DBObject) => void): void;
        /**
         * deletes Object
         **/
        deleteObject(): void;
        ondeleted(handler: (obj: DBObject) => void): void;
        layout(me: Me): void;
    }
    export function test(): Promise<DBObjectView>;
}
declare module "jassijs/ui/Calendar" {
    import "jassijs/ext/jquerylib";
    import { Textbox } from "jassijs/ui/Textbox";
    import { ComponentConfig } from "jassijs/ui/Component";
    import { DataComponentConfig } from "jassijs/ui/DataComponent";
    export interface CalendarConfig extends ComponentConfig, DataComponentConfig {
        /**
        * @member  - the date
        */
        value?: any;
    }
    export class Calendar extends Textbox implements CalendarConfig {
        constructor(properties?: any);
        config(config: CalendarConfig): Calendar;
        get value(): any;
        set value(val: any);
        static parseDate(date: string, format?: any, settings?: any): Date;
        static formatDate(date: Date, format?: any, settings?: any): string;
    }
    export function test(): Calendar;
}
declare module "jassijs/ui/converters/DateTimeConverter" {
    import { DefaultConverter } from "jassijs/ui/converters/DefaultConverter";
    import "luxon";
    import { Component } from "jassijs/ui/Component";
    class DateTimeConverterProperties {
        type?: "DATE_SHORT" | "TIME_SIMPLE" | "DATETIME_SHORT" | "TIME_WITH_SECONDS" | "DATETIME_SHORT_WITH_SECONDS";
    }
    export class DateTimeConverter extends DefaultConverter {
        type: "DATE_SHORT" | "TIME_SIMPLE" | "DATETIME_SHORT" | "TIME_WITH_SECONDS" | "DATETIME_SHORT_WITH_SECONDS";
        constructor(props?: DateTimeConverterProperties);
        get component(): Component;
        set component(component: Component);
        /**
         * converts a string to the object
         * an error can be thrown for validation
         * @param {string} str - the string to convert
         */
        stringToObject(str: any): any;
        /**
         * converts an object to string
         * @param  obj - the object to convert
         */
        objectToString(obj: any): any;
        /**
         * format date to string
         * @param format- e.g. "yyyy-MM-dd" or "HH:mm:ss"
         */
        static toFormat(date: Date, format: string): string;
        /**
       * parse date a string
       * @param format- e.g. "yyyy-MM-dd" or "HH:mm:ss"
       */
        static fromFormat(date: string, format: string): Date;
        static toLocalString(date: Date, format: DateTimeFormat): string;
    }
    export type DateTimeFormat = "DATE_SHORT" | "TIME_SIMPLE" | "DATETIME_SHORT" | "TIME_WITH_SECONDS" | "DATETIME_SHORT_WITH_SECONDS" | "DATE_MED" | "DATE_MED_WITH_WEEKDAY" | "DATE_FULL" | "DATE_HUGE" | "TIME_WITH_SHORT_OFFSET" | "TIME_WITH_LONG_OFFSET" | "DATETIME_MED" | "DATETIME_MED_WITH_SECONDS" | "DATETIME_MED_WITH_WEEKDAY" | "DATETIME_FULL" | "DATETIME_FULL_WITH_SECONDS" | "DATETIME_HUGE" | "DATETIME_HUGE_WITH_SECONDS";
    export function test(): void;
}
declare module "jassijs/ui/Table" {
    import "tabulator-tables";
    import { DataComponent, DataComponentConfig } from "jassijs/ui/DataComponent";
    import { Textbox } from "jassijs/ui/Textbox";
    import { Databinder } from "jassijs/ui/Databinder";
    import { Tabulator } from "tabulator-tables";
    import { DateTimeFormat } from "jassijs/ui/converters/DateTimeConverter";
    export interface LazyLoadOption {
        classname: string;
        loadFunc: string;
        pageSize?: number;
    }
    export interface TableOptions extends Tabulator.Options {
        dataTreeChildFunction?: ((data: any) => any) | any;
        lazyLoad?: LazyLoadOption;
        items?: any[];
        columns?: MyColumnDefinition[];
        [unknown: string]: any;
    }
    export interface MyColumnDefinition extends Tabulator.ColumnDefinition {
        formatter?: MyFormatter;
        formatterParams?: MyFormatterParams;
        editor?: MyEditor;
        [unknown: string]: any;
    }
    export type MyFormatterParams = Tabulator.FormatterParams | {
        datefimeformat: DateTimeFormat;
        numberformat: "#.##0,00" | string;
        [unknown: string]: any;
    };
    export type MyEditor = Tabulator.Editor | "datetimeformat" | "numberformat" | any;
    export type MyFormatter = Tabulator.Formatter | "datetimeformat" | "numberformat" | any;
    export interface TableConfig extends DataComponentConfig {
        options?: TableOptions;
        /**
        * register an event if an item is selected
        * @param {function} handler - the function that is called on change
        */
        onchange?(handler: (event?: JQueryEventObject, row?: Tabulator.RowComponent) => void): any;
        showSearchbox?: boolean;
        /**
        * if the value is changed then the value of _component is also changed (_component.value)
        */
        selectComponent?: any;
        /**
         * set the items of the table
         */
        items?: any[];
        columns?: Tabulator.ColumnDefinition[];
        bindItems?: any[];
    }
    export class Table extends DataComponent implements TableConfig {
        table: Tabulator;
        _selectHandler: any;
        _select: {
            value: any;
        };
        private _lazyLoadOption;
        private _lastLazySort;
        private _lastLazySearch;
        private _lazyDataHasChanged;
        _tree: any;
        _items: any[];
        _searchbox: Textbox;
        _databinderItems: Databinder;
        _lastOptions: TableOptions;
        private dataTreeChildFunction;
        constructor(properties?: TableOptions);
        config(config: TableConfig): Table;
        set options(properties: TableOptions);
        get options(): TableOptions;
        /**
         * create a SQL-Querry for a search in all visible columns
         */
        private sqlForLazySearch;
        onlazyloaded(func: any): void;
        /**
         * loads lazy data from _progressiveLoadFunc
         */
        private lazyLoadFunc;
        private defaultAutoColumnDefinitions;
        private getChildsFromTreeFunction;
        private populateTreeData;
        private onTreeExpanded;
        update(): Promise<void>;
        private _oncontext;
        private _onselect;
        onchange(handler: (event?: JQueryEventObject, row?: Tabulator.RowComponent) => void): void;
        get showSearchbox(): boolean;
        set showSearchbox(enable: boolean);
        set selectComponent(_component: any);
        get selectComponent(): any;
        private _setItemsIntern;
        set items(value: any[]);
        get items(): any[];
        updateOrInsertItem(item: any): Promise<Tabulator.RowComponent>;
        updateItem(item: any): Promise<Tabulator.RowComponent>;
        insertItem(item: any): Promise<Tabulator.RowComponent>;
        removeItem(item: any): Promise<void>;
        /**
         * @member {object} sel - the selected object
         */
        set value(sel: any);
        get value(): any;
        /**
        * @member {string|number} - the height of the component
        * e.g. 50 or "100%"
        */
        set height(value: string | number);
        get height(): string | number;
        set width(value: string | number);
        get width(): string;
        /**
         * Searches records in the grid
         * @param {string} field - name of the search field
         * @param {string} value - value of the search field
         * @param {boolean} [doSelect] - if true the first entry is selected
         */
        search(field: any, value: any, doSelect: any): void;
        destroy(): void;
        set columns(value: Tabulator.ColumnDefinition[]);
        get columns(): Tabulator.ColumnDefinition[];
        set bindItems(databinder: any[]);
    }
    export function test(): Promise<Table>;
}
declare module "jassijs/ui/DBObjectDialog" {
    import { Table } from "jassijs/ui/Table";
    import { Panel } from "jassijs/ui/Panel";
    import { DBObjectView } from "jassijs/ui/DBObjectView";
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    type Me = {
        splitpanel1?: BoxPanel;
        IDDBView?: Panel;
        table1?: Table;
    };
    export class DBObjectDialog extends Panel {
        me: Me;
        private _dbclassname;
        view: DBObjectView;
        constructor();
        layout(me: Me): void;
        /**
         * set the DBObject-classname to show in this dialog
         **/
        set dbclassname(classname: string);
        get dbclassname(): string;
        update(): Promise<void>;
        private static createFunction;
        /**
         * create Action for all DBObjectView with actionname is defined
         */
        private static createActions;
        static createFor(classname: string): Promise<DBObjectDialog>;
    }
    export function test(): Promise<DBObjectDialog>;
}
declare module "jassijs/security/GroupView" {
    import { Textbox } from "jassijs/ui/Textbox";
    import { Group } from "jassijs/remote/security/Group";
    import { DBObjectView, DBObjectViewMe } from "jassijs/ui/DBObjectView";
    type Me = {
        textbox?: Textbox;
        textbox2?: Textbox;
    } & DBObjectViewMe;
    export class GroupView extends DBObjectView {
        me: Me;
        value: Group;
        constructor();
        get title(): string;
        layout(me: Me): void;
    }
    export function test(): Promise<GroupView>;
}
declare module "jassijs/ui/Select" {
    import "jassijs/ext/jquerylib";
    import { ComponentCreateProperties, ComponentConfig } from "jassijs/ui/Component";
    import { DataComponent } from "jassijs/ui/DataComponent";
    import "jquery.choosen";
    export interface SelectConfig extends ComponentConfig {
        /**
          * called if value has changed
          * @param {function} handler - the function which is executed
          */
        onchange?(handler: any): any;
        /**
         * if the value is changed then the value of _component is also changed (_component.value)
         */
        selectComponent?: {
            value: number;
        };
        /**
         * @member {string|function}  - property or function to get the displaystring for the object
         **/
        display?: any;
        /**
         * all objects in the list
         */
        items?: any[];
        /**
        * @member {object} sel - the selected object
        */
        value?: any;
    }
    class SelectCreateProperties extends ComponentCreateProperties {
        multiple?: boolean;
        allowDeselect?: boolean;
        placeholder?: string;
    }
    export class Select extends DataComponent {
        domSelect: HTMLElement;
        _select: {
            value: number;
        };
        options: any;
        _display: any;
        _items: any;
        constructor(properties?: SelectCreateProperties);
        config(config: SelectConfig): Select;
        refresh(): void;
        onchange(handler: any): void;
        set selectComponent(_component: {
            value: number;
        });
        get selectComponent(): {
            value: number;
        };
        set display(value: string | Function);
        get display(): string | Function;
        set items(value: any);
        get items(): any;
        set value(sel: any);
        get value(): any;
        /**
         * @member {string|number} - the width of the component
         * e.g. 50 or "100%"
         */
        /**
         * binds a component to a databinder
         * @param {Databinder} databinder - the databinder to bind
         * @param {string} property - the property to bind
        
        bind(databinder,property){
            this._databinder=databinder;
            databinder.add(property,this,"onselect");
            databinder.checkAutocommit(this);
        } */
        destroy(): void;
    }
    export function test(): Promise<any>;
}
declare module "jassijs/ui/Checkbox" {
    import { DataComponent, DataComponentConfig } from "jassijs/ui/DataComponent";
    export interface CheckboxConfig extends DataComponentConfig {
        /**
      * register an event if the button is clicked
      * @param {function} handler - the function that is called on change
      */
        onclick?(handler: any): any;
        /**
         * @member - true or "true" if selected
         */
        value?: string | boolean;
        /**
        * @member {string} - the caption of the button
        */
        text?: string;
    }
    export class Checkbox extends DataComponent {
        checkbox: HTMLInputElement;
        constructor();
        config(config: CheckboxConfig): Checkbox;
        onclick(handler: any): void;
        set value(value: string | boolean);
        get value(): string | boolean;
        set text(value: string);
        get text(): string;
    }
    export function test(): Checkbox;
}
declare module "jassijs/security/UserView" {
    import { Select } from "jassijs/ui/Select";
    import { Checkbox } from "jassijs/ui/Checkbox";
    import { Textbox } from "jassijs/ui/Textbox";
    import { Panel } from "jassijs/ui/Panel";
    import { User } from "jassijs/remote/security/User";
    import { DBObjectView, DBObjectViewMe } from "jassijs/ui/DBObjectView";
    type Me = {
        IDID?: Textbox;
        IDEmail?: Textbox;
        checkbox?: Checkbox;
        panel?: Panel;
        IDGroups?: Select;
    } & DBObjectViewMe;
    export class UserView extends DBObjectView {
        me: Me;
        value: User;
        constructor();
        get title(): string;
        layout(me: Me): void;
        createObject(): any;
    }
    export function test(): Promise<UserView>;
}
declare module "jassijs/ui/MenuItem" {
    import "jassijs/ext/jquerylib";
    import { Menu } from "jassijs/ui/Menu";
    import { Container, ContainerConfig } from "jassijs/ui/Container";
    export interface MenuItemConfig extends ContainerConfig {
        onclick?(handler: any): any;
        /**
         * @member {string} - the icon of the button
         */
        icon: string;
        /**
        * @member {string} - the caption of the button
        */
        text?: string;
    }
    export class MenuItem extends Container implements ContainerConfig {
        _text: string;
        items: Menu;
        _icon: string;
        _mainMenu: Menu;
        constructor();
        config(config: MenuItemConfig): MenuItem;
        onclick(handler: any): void;
        set icon(icon: string);
        get icon(): string;
        set text(value: string);
        get text(): string;
        destroy(): void;
        getMainMenu(): any;
        _menueChanged(): void;
        extensionCalled(action: ExtensionAction): void;
    }
    export function test(): Promise<Menu>;
}
declare module "jassijs/ui/Menu" {
    import "jassijs/ext/jquerylib";
    import { Container, ContainerConfig } from "jassijs/ui/Container";
    export interface MenuConfig extends ContainerConfig {
        onclick(handler: any): any;
    }
    export class Menu extends Container implements MenuConfig {
        _isRoot: boolean;
        _text: string;
        _icon: string;
        _noUpdate: boolean;
        _mainMenu: any;
        constructor(options?: any);
        config(config: MenuConfig): Menu;
        _sample(): void;
        _menueChanged(): void;
        getMainMenu(): any;
        /**
        * adds a component to the container before an other component
        * @param {jassijs.ui.Component} component - the component to add
        * @param {jassijs.ui.Component} before - the component before then component to add
        */
        addBefore(component: any, before: any): void;
        /**
          * adds a component to the container
          * @param {jassijs.ui.Menu} component - the component to add
          */
        add(component: any): void;
        onclick(handler: any): void;
        extensionCalled(action: ExtensionAction): void;
        /**
        * activates or deactivates designmode
        * @param {boolean} enable - true if activate designMode
        */
        protected _setDesignMode(enable: any): void;
        destroy(): void;
    }
    export function test(): Menu;
}
declare module "jassijs/ui/ActionNodeMenu" {
    import { Menu } from "jassijs/ui/Menu";
    import { Panel, PanelConfig } from "jassijs/ui/Panel";
    type Me = {
        menu?: Menu;
    };
    export class ActionNodeMenu extends Panel {
        me: Me;
        constructor();
        config(config: PanelConfig): ActionNodeMenu;
        layout(me: Me): void;
        fillActions(): Promise<void>;
    }
    export function test(): Promise<ActionNodeMenu>;
}
declare module "jassijs/ui/ContextMenu" {
    import "jassijs/ext/jquerylib";
    import "jquery.contextMenu";
    import { Menu } from "jassijs/ui/Menu";
    import { InvisibleComponent } from "jassijs/ui/InvisibleComponent";
    import { Component, ComponentConfig } from "jassijs/ui/Component";
    import { Action } from "jassijs/base/Actions";
    global {
        interface JQuery {
            contextMenu: any;
        }
    }
    export interface ContextMenuConfig extends ComponentConfig {
        /**
         * @member - includes Actions from @ActionProvider for the objects in value
         */
        includeClassActions?: boolean;
        /**
        * register an event if the contextmenu is showing
        * @param {function} handler - the function that is called on change
        * @returns {boolean} - false if the contextmenu should not been shown
        */
        onbeforeshow?(handler: any): any;
    }
    export class ContextMenu extends InvisibleComponent implements ContextMenuConfig {
        menu: Menu;
        contextComponents: any;
        _components: Component[];
        target: any;
        includeClassActions: boolean;
        private _value;
        /**
         * @member - the objects for the includeClassActions @ActionProvider if  is enabled
         **/
        set value(value: any[]);
        get value(): any[];
        constructor();
        config(config: ContextMenuConfig): ContextMenu;
        /**
         * could be override to provide Context-actions
         * exsample:
         * cmen.getActions=async function(objects:[]){
         *		return [{name:"hallo",call:ob=>{}]
         *	};
         **/
        getActions(data: any[]): Promise<Action[]>;
        private _removeClassActions;
        protected _setDesignMode(enable: any): void;
        private _updateClassActions;
        _menueChanged(): void;
        getMainMenu(): this;
        onbeforeshow(handler: any): void;
        _callContextmenu(evt: any): Promise<void>;
        /**
         * register the contextMenu (right click) on the component
         * @member {jassijs.ui.Component} - the component which gets the contextmenu
         **/
        registerComponent(component: any): void;
        /**
         * unregister the contextMenu (right click) on the component
         * @member {jassijs.ui.Component} - the component which gets the contextmenu
         **/
        unregisterComponent(component: any): void;
        /**
         * shows the contextMenu
         */
        show(event: any): void;
        close(): void;
        extensionCalled(action: ExtensionAction): void;
        destroy(): void;
    }
    export function test(): Promise<any>;
}
declare module "jassijs/ui/Style" {
    import { InvisibleComponent } from "jassijs/ui/InvisibleComponent";
    import { ComponentConfig } from "jassijs/ui/Component";
    import { CSSProperties } from "jassijs/ui/CSSProperties";
    export interface StyleConfig extends ComponentConfig {
        /**
          * sets CSS Properties
          */
        css?: CSSProperties;
    }
    /**
     * on ore mors Style can be assigned to component
     * the style is appended to the head
     **/
    export class Style extends InvisibleComponent implements StyleConfig {
        constructor();
        config(config: StyleConfig): Style;
        get styleid(): string;
        /**
        * sets CSS Properties
        */
        set css(properties: CSSProperties);
        destroy(): void;
    }
    export function test(): void;
    export function test2(): void;
}
declare module "jassijs/ui/Tree" {
    import "jassijs/ext/jquerylib";
    import "jassijs/ext/fancytree";
    import { Component, ComponentConfig } from "jassijs/ui/Component";
    import { CSSProperties } from "jassijs/ui/CSSProperties";
    export interface TreeConfig extends ComponentConfig {
        options?: Fancytree.FancytreeOptions;
        /**
        * @member - get the property for the display of the item or an function to get the display from an item
        */
        propStyle?: string | {
            (item: any): CSSProperties;
        };
        /**
         * @member - get the property for the display of the item or an function to get the display from an item
         */
        propDisplay?: string | {
            (item: any): string;
        };
        /**
         * @member - get the iconproperty of the item or an function to get the icon from an item
         */
        propIcon?: string | {
            (item: any): string;
        };
        /**
        * @member - get the childs of the item or an function to get the childs from an item
        */
        propChilds?: string | {
            (item: any): any[];
        };
        onselect?(handler: any): any;
        /**
         * register an event if an item is clicked
         * @param {function} handler - the function that is called on click
         */
        onclick?(handler: (event?: JQueryEventObject, data?: Fancytree.EventData) => void): any;
        /**
        * selects items
        */
        selection?: any[];
        /**
         * set the active item
         */
        value?: any;
        /**
        * @param value - set the data to show in Tree
        **/
        items?: any;
        /**
         * if the value is changed then the value of _component is also changed (_component.value)
         */
        selectComponent?: {
            value: number;
        };
        /**
         * @member {jassijs.ui.ContextMenu} - the contextmenu of the component
         **/
        contextMenu?: any;
    }
    export class Tree extends Component implements TreeConfig {
        _propDisplay: string | {
            (item: any): string;
        };
        _propIcon: string | {
            (item: any): string;
        };
        _propChilds: string | {
            (item: any): any[];
        };
        _propStyle: string | {
            (item: any): CSSProperties;
        };
        _select: {
            value: number;
        };
        tree: Fancytree.Fancytree;
        _isInited: boolean;
        _itemToKey: Map<any, string>;
        private _items;
        private _allKeysReaded;
        private _allNodesReaded;
        _lastOptions: Fancytree.FancytreeOptions;
        constructor(options?: Fancytree.FancytreeOptions);
        config(config: TreeConfig): Tree;
        set options(options: Fancytree.FancytreeOptions);
        get options(): Fancytree.FancytreeOptions;
        /**
        * @member - get the property for the display of the item or an function to get the display from an item
        */
        set propStyle(value: string | {
            (item: any): CSSProperties;
        });
        get propStyle(): string | {
            (item: any): CSSProperties;
        };
        set propDisplay(value: string | {
            (item: any): string;
        });
        get propDisplay(): string | {
            (item: any): string;
        };
        set propIcon(icon: string | {
            (item: any): string;
        });
        get propIcon(): string | {
            (item: any): string;
        };
        set propChilds(child: string | {
            (item: any): any[];
        });
        get propChilds(): string | {
            (item: any): any[];
        };
        onselect(handler: any): void;
        onclick(handler: (event?: JQueryEventObject, data?: Fancytree.EventData) => void): void;
        filter(text: string): void;
        /**
        * get title from node
        */
        getTitleFromItem(item: any): string;
        /**
       * get title from node
       */
        getStyleFromItem(item: any): CSSProperties;
        /**
        * get icon from node
        */
        getIconFromItem(item: any): any;
        /**
        * get childs from node
        */
        getChildsFromItem(item: any): any;
        private _onselect;
        private _onclick;
        set selection(values: any[]);
        get selection(): any[];
        activateKey(key: string, parent?: Fancytree.FancytreeNode): Promise<boolean>;
        private expandLater;
        /**
         * expand all nodes
         */
        expandAll(expand?: boolean, parent?: Fancytree.FancytreeNode, allreadySeen?: any[]): Promise<void>;
        expandKeys(keys: string[]): Promise<void>;
        getExpandedKeys(parent?: Fancytree.FancytreeNode, expandedNodes?: string[]): string[];
        private expandNode;
        private _readNodeFromItem;
        private _readNodeFromKey;
        set value(value: any);
        /**
         * get the active item
         **/
        get value(): any;
        private _readAllNodesIfNeeded;
        getKeyFromItem(item: any): string;
        /**
         * read all keys if not allready readed
         **/
        private _readAllKeysIfNeeded;
        set items(value: any);
        get items(): any;
        set selectComponent(_component: {
            value: number;
        });
        get selectComponent(): {
            value: number;
        };
        private _callContextmenu;
        /**
         * create the contextmenu
         * @param {object} evt  the click event in the contextmenu
         **/
        private _prepareContextmenu;
        set contextMenu(value: any);
        get contextMenu(): any;
        destroy(): void;
    }
    export function test(): Promise<Tree>;
}
declare module "jassijs/ui/DBObjectExplorer" {
    import { ContextMenu } from "jassijs/ui/ContextMenu";
    import { Tree } from "jassijs/ui/Tree";
    import { Panel } from "jassijs/ui/Panel";
    import { FileNode } from "jassijs/remote/FileNode";
    export class DBObjectNode {
        name?: string;
        filename?: string;
    }
    export class DBFileActions {
        static ViewData(all: FileNode[]): Promise<void>;
    }
    export class DBObjectActions {
        static ViewData(all: DBObjectNode[]): Promise<void>;
        static OpenCode(all: DBObjectNode[]): Promise<void>;
    }
    type Me = {
        tree?: Tree;
        contextmenu?: ContextMenu;
    };
    export class DBObjectExplorer extends Panel {
        me: Me;
        constructor();
        layout(me: Me): void;
        static dummy(): Promise<void>;
        static dummy2(): Promise<void>;
        static show(): Promise<void>;
        update(): Promise<void>;
    }
    export function test(): Promise<DBObjectExplorer>;
}
declare module "jassijs/ui/HTMLEditorPanel" {
    import { Panel } from "jassijs/ui/Panel";
    import { HTMLPanel } from "jassijs/ui/HTMLPanel";
    import { Button } from "jassijs/ui/Button";
    class Me {
        IDHtml?: HTMLPanel;
        IDChange?: Button;
    }
    export class HTMLEditorPanel extends Panel {
        me: Me;
        constructor(id?: any);
        layout(): Promise<void>;
        set value(val: string);
        get value(): string;
    }
    export function te(): void;
}
declare module "jassijs/ui/VariablePanel" {
    import { Panel } from "jassijs/ui/Panel";
    import { Component } from "jassijs/ui/Component";
    export class VariablePanel extends Panel {
        table: any;
        debugpoints: {
            [n: number]: boolean;
        };
        [_cache: string]: any;
        _items: any[];
        constructor();
        createTable(): Promise<void>;
        /**
         * VariabelPanel for id
         * @id {number} - the id
         * @returns  {jassijs.ui.VariablePanel}
        **/
        static get(id: any): Component | {
            __db: boolean;
            add: () => void;
            update: () => void;
        };
        clear(): void;
        /**
         * add variables to variabelpanel
         * @param Object<string,object> variables ["name"]=value
         */
        addAll(vars: any): void;
        removeVariable(name: string): void;
        /**
         *
         * @param {string} name - name of the variable
         * @param {object} value - the value of the variable
         * @param {boolean} [refresh] - refresh the dialog
         */
        addVariable(name: any, value: any, refresh?: any): void;
        /**
         * analyze describeComponent(desc) -> desc.editableComponents and publish this
         **/
        updateCache(): void;
        /**
         * get the ids of all editable Components by the designer
         * @param {jassijs.ui.Component} component - the component to inspect
         * @param {boolean} idFromLabel - if true not the id but the id form label is returned
         **/
        getEditableComponents(component: any, idFromLabel?: any): string;
        private isTypeOf;
        /**
        * get all known instances for type
        * @param {type|string} type - the type we are interested or the member which is implemented
        * @returns {[string]}
        */
        getVariablesForType(type: any): any[];
        /**
         * gets the name of the variabel that holds the object
         * @param {object} ob - the
         */
        getVariableFromObject(ob: any): string;
        /**
         * gets the name object of the given variabel
         * @param {string} ob - the name of the variable
         */
        getObjectFromVariable(varname: any): any;
        /**
          * renames a variable in design
          * @param {string} oldName
          * @param {string} newName
          */
        renameVariable(oldName: any, newName: any): void;
        /**
         * refreshes Table
         */
        update(): void;
        set value(value: any[]);
        get value(): any[];
        static getMembers(ob: any, withFunction: any): any[];
        static _getMembersProto(proto: any, ret: any, ob: any): void;
        /**
        *
        * @param {string} name - the name of the object
        */
        evalExpression(name: any): any;
        destroy(): void;
    }
}
declare module "jassijs/ui/ObjectChooser" {
    import "jassijs/ext/jquerylib";
    import { Table } from "jassijs/ui/Table";
    import { Panel } from "jassijs/ui/Panel";
    import { Button, ButtonConfig } from "jassijs/ui/Button";
    import { Textbox } from "jassijs/ui/Textbox";
    import { Databinder } from "jassijs/ui/Databinder";
    import { DataComponentConfig } from "jassijs/ui/DataComponent";
    class Me {
        IDTable?: Table;
        IDPanel?: Panel;
        IDCancel?: Button;
        IDSearch?: Textbox;
        IDOK?: Button;
    }
    export interface ObjectChooserConfig extends ButtonConfig {
        dialogHeight?: number;
        dialogWidth?: number;
        /**
         * @member {object} value - selection of the component
         */
        value?: any;
        /**
         * @member {string} items - the items to select or  the classname to generate the items
         */
        items?: string | any[];
        /**
    * called if value has changed
    * @param {function} handler - the function which is executed
    */
        onchange?(handler: any): any;
        /**
         * @member {bool} autocommit -  if true the databinder will update the value on every change
         *                              if false the databinder will update the value on databinder.toForm
         */
        autocommit?: boolean;
        /**
           * binds a component to a databinder
           * @param [{jassijs.ui.Databinder} databinder - the databinder to bind,
           *         {string} property - the property to bind]
           */
        bind?: any[];
    }
    export class ObjectChooser extends Button implements ObjectChooserConfig, DataComponentConfig {
        dialogHeight: number;
        dialogWidth: number;
        _items: any;
        me: Me;
        _value: any;
        _autocommit: boolean;
        _databinder: Databinder;
        constructor();
        config(config: ObjectChooserConfig): ObjectChooser;
        get title(): string;
        layout(): void;
        ok(): void;
        cancel(): void;
        set value(value: any);
        get value(): any;
        loadObjects(classname: string): Promise<any>;
        set items(value: any);
        get items(): any;
        onchange(handler: any): void;
        get autocommit(): boolean;
        set autocommit(value: boolean);
        /**
         * binds a component to a databinder
         * @param {jassijs.ui.Databinder} databinder - the databinder to bind
         * @param {string} property - the property to bind
         */
        set bind(databinder: any[]);
        destroy(): void;
    }
    export function test(): Promise<ObjectChooser>;
    export function test2(): Promise<void>;
}
declare module "jassijs/ui/OptionDialog" {
    import "jassijs/ext/jquerylib";
    import { Panel } from "jassijs/ui/Panel";
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    import { HTMLPanel } from "jassijs/ui/HTMLPanel";
    import { Component } from "jassijs/ui/Component";
    import { Textbox } from "jassijs/ui/Textbox";
    class Me {
        boxpanel1?: BoxPanel;
        htmlpanel1?: HTMLPanel;
        buttons?: BoxPanel;
        inputText?: Textbox;
        propertyEditor?: any;
    }
    export interface DialogResult {
        button: string;
        text?: string;
        properties?: any;
    }
    export class OptionDialog extends Panel {
        parentComponent: Component;
        text: string;
        options: string[];
        selectedOption: string;
        me: Me;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        layout(): void;
        /**
        * ask for properties in propertygrid
        * @param text - the text to be displayed
        * @param  properties - the properties which should be filled, marked by @$Property
        * @param  options - the options e.g ["ok","Cancel"]
        * @param parent - the parent component
        * @param modal - display the dialog modal
        */
        static askProperties(text: string, properties: any, options: string[], parent?: Component, modal?: boolean): Promise<DialogResult>;
        /**
        * @param text - the text to be displayed
        * @param  options - the options
        * @param parent - the parent component
        * @param modal - display the dialog modal
        * @param  inputDefaultText - if the user should input something
        *
        */
        static show(text: string, options: string[], parent?: Component, modal?: boolean, inputDefaultText?: string): Promise<DialogResult>;
        static _show(text: string, options: string[], parent: Component, modal: boolean, inputDefaultText?: string, properties?: any): Promise<DialogResult>;
    }
    export function test2(): Promise<void>;
}
declare module "jassijs/ui/Repeater" {
    import { Panel, PanelConfig } from "jassijs/ui/Panel";
    import { Databinder } from "jassijs/ui/Databinder";
    import { Component } from "jassijs/ui/Component";
    import { DataComponentConfig } from "jassijs/ui/DataComponent";
    class RepeaterDesignPanel extends Panel {
        databinder: Databinder;
        me: any;
    }
    export interface RepeaterConfig extends PanelConfig {
        /**
        *  @member {array} value - the array which objects used to create the repeating components
        */
        value?: any;
        /**
           * binds a component to a databinder
           * @param {jassijs.ui.Databinder} databinder - the databinder to bind
           * @param {string} property - the property to bind
           */
        bind?: any[];
        createRepeatingComponent?(func: any): any;
    }
    export class Repeater extends Panel implements DataComponentConfig {
        _componentDesigner: any;
        _autocommit: boolean;
        _createRepeatingComponent: any;
        _value: any;
        _isCreated: boolean;
        _designer: Component;
        _databinder: Databinder;
        design: RepeaterDesignPanel;
        me: any;
        /**
         * can be used for controls in repeating group
         */
        binder: Databinder;
        /**
        *
        * @param {object} properties - properties to init
        * @param {string} [properties.id] -  connect to existing id (not reqired)
        * @param {boolean} [properties.useSpan] -  use span not div
        *
        */
        constructor(properties?: any);
        config(config: RepeaterConfig): Repeater;
        createRepeatingComponent(func: any): void;
        _copyMeFromParent(me: any, parent: any, override?: boolean): void;
        update(): void;
        /**
         * adds a component to the container
         * @param {jassijs.ui.Component} component - the component to add
         */
        add(component: any): void;
        _dummy(func: any): void;
        set value(val: any);
        get value(): any;
        extensionCalled(action: ExtensionAction): void;
        /**
         * activates or deactivates designmode
         * @param {boolean} enable - true if activate designMode
         */
        _setDesignMode(enable: any, designer?: any): void;
        set bind(databinder: any[]);
        destroy(): void;
    }
}
declare module "jassijs/ui/SettingsDialog" {
    import { HTMLPanel } from "jassijs/ui/HTMLPanel";
    import { Select } from "jassijs/ui/Select";
    import { Panel } from "jassijs/ui/Panel";
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    import { Button } from "jassijs/ui/Button";
    global {
        export interface KnownSettings {
            myuw: number;
        }
    }
    /** sample
    @$SettingsDescriptor()
    @$Class("jassijs_editor.Testuw")
    class Testuw {
        @$Property()
        myuw: number;
    }
    @$Class("jassijs.ui.SettingsDialogCurrentSettings")
    class SettingsDialogCurrentSettings {
        @$Property()
        test: string;
    }
    */
    type Me = {
        propertyeditor?: PropertyEditor;
        Save?: Button;
        Scope?: Select;
        htmlpanel1?: HTMLPanel;
    };
    export class SettingsDialog extends Panel {
        me: Me;
        constructor();
        static show(): Promise<void>;
        private update;
        private save;
        layout(me: Me): void;
    }
    export function test(): Promise<SettingsDialog>;
}
declare module "jassijs/ui/Textarea" {
    import { Textbox } from "jassijs/ui/Textbox";
    export class Textarea extends Textbox {
        constructor();
    }
}
declare module "jassijs/ui/Upload" {
    import { Component } from "jassijs/ui/Component";
    export class Upload extends Component {
        constructor();
        get dom(): HTMLInputElement;
        set dom(value: HTMLInputElement);
        readAs: "Text" | "DataUrl" | "ArrayBuffer" | "BinaryString";
        get accept(): string;
        /**
         * which file types are accepted e.g ".txt,.csv"
         **/
        set accept(value: string);
        get multiple(): boolean;
        /**
         * multiple files can be uploaded
         **/
        set multiple(value: boolean);
        private readUpload;
        /**
         * register handler to get the uploaded data
         */
        onuploaded(handler: (data: {
            [file: string]: string;
        }, files: FileList, evt: JQueryEventObject) => any): void;
    }
    export function test(): Upload;
}
declare module "jassijs/ui/PropertyEditors/BooleanEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    export class BooleanEditor extends Editor {
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onclick(param: any): void;
    }
}
declare module "jassijs/ui/PropertyEditors/JsonEditor" {
    import "jassijs/ext/jquerylib";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    export class JsonEditor extends Editor {
        showThisProperties: any;
        parentPropertyEditor: Editor;
        /**
         * Editor for number and string
         * used by PropertyEditor
         * @class jassijs.ui.PropertyEditors.DefaultEditor
         */
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        _getPropertyValue(property: any): void;
        /**
         * register an event if the property has changed
         * @param {function} handler - the function that is called on change
         */
        onpropertyChanged(handler: any): void;
        private propertyChanged;
        /**
         * initiate the default values in the PropertyEditor from code
         **/
        private setCode;
        private createPropertyEditor;
        /**
         * get the propertyvalue from code
         */
        private getInitialPropertyValue;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onclick(param: any): Promise<void>;
        protected showDialog(control: any, propEditor: any): void;
    }
    export function test(): PropertyEditor;
}
declare module "jassijs/ui/converters/StringConverter" {
    import { DefaultConverter } from "jassijs/ui/converters/DefaultConverter";
    class StringConverterProperties {
        minChars?: number;
        maxChars?: number;
    }
    export class StringConverter extends DefaultConverter {
        minChars?: number;
        maxChars?: number;
        constructor(props?: StringConverterProperties);
        /**
         * converts a string to the object
         * an error can be thrown for validation
         * @param {string} str - the string to convert
         */
        stringToObject(str: any): any;
        /**
         * converts an object to string
         * @param {string} obj - the object to convert
         */
        objectToString(obj: any): any;
    }
}
declare module "jassijs/ui/PropertyEditors/ClassSelectorEditor" {
    import { Select } from "jassijs/ui/Select";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { JsonEditor } from "jassijs/ui/PropertyEditors/JsonEditor";
    export class ClassSelectorEditor extends Editor {
        select: Select;
        jsonEditor: JsonEditor;
        me: any;
        private destroyed;
        /**
         * Checkbox Editor for boolean values
         * used by PropertyEditor
         * @class jassijs.ui.PropertyEditors.BooleanEditor
         */
        constructor(property?: any, propertyEditor?: any);
        changeConverter(converter: any): void;
        initSelect(): void;
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onclick(param: any): void;
        layout(): void;
        destroy(): void;
    }
}
declare module "jassijs/ui/PropertyEditors/ColorEditor" {
    import "jassijs/ext/jquerylib";
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { Textbox } from "jassijs/ui/Textbox";
    import { Select } from "jassijs/ui/Select";
    import "jassijs/ext/spectrum";
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    /**
    * Editor for color
    * used by PropertyEditor
    **/
    export class ColorEditor extends Editor {
        icon: Textbox;
        select: Select;
        constructor(property: any, propertyEditor: any);
        onedit(param: any): void;
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        paletteChanged(color: string): void;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onchange(param: any): void;
    }
    export function test3(): PropertyEditor;
    export function test2(): BoxPanel;
}
declare module "jassijs/ui/PropertyEditors/ComponentSelectorEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    /**
     * select one or more instances of an class
     * used by PropertyEditor
     **/
    export class ComponentSelectorEditor extends Editor {
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onchange(param: any): void;
    }
    export function test(): void;
}
declare module "jassijs/ui/PropertyEditors/DBObjectEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { Textbox } from "jassijs/ui/Textbox";
    import { ObjectChooser } from "jassijs/ui/ObjectChooser";
    import { DBObject } from "jassijs/remote/DBObject";
    export class DBObjectEditor extends Editor {
        _textbox: Textbox;
        _objectchooser: ObjectChooser;
        dbobject: DBObject;
        /**
         * Checkbox Editor for boolean values
         * used by PropertyEditor
         * @class jassijs.ui.PropertyEditors.BooleanEditor
         */
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        loadObject(id: string): Promise<DBObject>;
        /**
        * intern the value changes
        * @param {type} param
        */
        _onchange(param?: any): void;
    }
}
declare module "jassijs/ui/PropertyEditors/DatabinderEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    export class DatabinderEditor extends Editor {
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
        * intern the value changes
        * @param {type} param
        */
        _onchange(param: any): void;
    }
}
declare module "jassijs/ui/PropertyEditors/DefaultEditor" { }
declare module "jassijs/ui/PropertyEditors/FontEditor" {
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    /**
    * Editor for font
    * used by PropertyEditor
    **/
    export class FontEditor extends Editor {
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onchange(param: any): void;
    }
    export function test2(): PropertyEditor;
    export function test(): any;
}
declare module "jassijs/ui/PropertyEditors/FunctionEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    export class FunctionEditor extends Editor {
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
         * intern the value changes
         * @param {type} param
         */
        _onclick(param: any): void;
    }
}
declare module "jassijs/ui/PropertyEditors/HTMLEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { Textbox } from "jassijs/ui/Textbox";
    import { ObjectChooser } from "jassijs/ui/ObjectChooser";
    export class HTMLEditor extends Editor {
        _textbox: Textbox;
        _objectchooser: ObjectChooser;
        /**
         * Checkbox Editor for boolean values
         * used by PropertyEditor
         * @class jassijs.ui.PropertyEditors.BooleanEditor
         */
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
        * intern the value changes
        * @param {type} param
        */
        _onchange(param?: any): void;
    }
}
declare module "jassijs/ui/PropertyEditors/ImageEditor" {
    import "jassijs/ext/jquerylib";
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { Panel } from "jassijs/ui/Panel";
    import { Textbox } from "jassijs/ui/Textbox";
    import { Button } from "jassijs/ui/Button";
    export class ImageEditor extends Editor {
        _textbox: Textbox;
        _button: Button;
        dialog: Panel;
        /**
         * Checkbox Editor for boolean values
         * used by PropertyEditor
         * @class jassijs.ui.PropertyEditors.BooleanEditor
         */
        constructor(property: any, propertyEditor: any);
        /**
         * @member {object} ob - the object which is edited
         */
        set ob(ob: any);
        get ob(): any;
        /**
       * get the renderer for the PropertyEditor
       * @returns - the UI-component for the editor
       */
        getComponent(): any;
        /**
        * intern the value changes
        * @param {type} param
        */
        _onchange(param?: any): void;
        static dummy(): Promise<void>;
        static show(): Promise<void>;
        showDialog(onlytest?: any): Promise<void>;
    }
    export function test2(): Panel;
}
declare module "jassijs/ui/PropertyEditors/JsonArrayEditor" {
    import { Editor } from "jassijs/ui/PropertyEditors/Editor";
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    export class JsonArrayEditor extends Editor {
        /**
           * Editor for number and string
           * used by PropertyEditor
           * @class jassijs.ui.PropertyEditors.DefaultEditor
           */
        constructor(property: any, propertyEditor: any);
        _onclick(param: any): void;
        /**
        * get the renderer for the PropertyEditor
        * @returns - the UI-component for the editor
        */
        getComponent(): any;
        /**
        * @member {object} ob - the object which is edited
        */
        set ob(ob: any);
        get ob(): any;
        protected showDialog(control: any, propEditor: any): void;
    }
    export function test(): PropertyEditor;
}
declare module "jassijs/ui/PropertyEditors/TableColumnImport" {
    import { Panel } from "jassijs/ui/Panel";
    import { PropertyEditor } from "jassijs/ui/PropertyEditor";
    type Me = {};
    export class TableColumnImport extends Panel {
        me: Me;
        propertyEditor: PropertyEditor;
        constructor();
        layout(me: Me): void;
    }
    export function test(): Promise<TableColumnImport>;
}
declare module "jassijs/util/CSVImport" {
    import { Upload } from "jassijs/ui/Upload";
    import { Button } from "jassijs/ui/Button";
    import { Textbox } from "jassijs/ui/Textbox";
    import { BoxPanel } from "jassijs/ui/BoxPanel";
    import { Select } from "jassijs/ui/Select";
    import { Table } from "jassijs/ui/Table";
    import { Panel } from "jassijs/ui/Panel";
    type Me = {
        table?: Table;
        select?: Select;
        boxpanel1?: BoxPanel;
        fromLine?: Textbox;
        next?: Button;
        upload?: Upload;
    };
    export class CSVImport extends Panel {
        me: Me;
        data: any[];
        fieldCount: number;
        constructor();
        static showDialog(): Promise<void>;
        initTableHeaders(): Promise<void>;
        initClasses(): Promise<void>;
        readData(csvdata: string): void;
        updateTable(): void;
        layout(me: Me): void;
        /**
         * imports a csv-file into database
         * @param urlcsv - the link to the csv which we import
         * @param dbclass
         * @param fieldmapping - e.g. {"id":"CUSTOMERID"} if the field id is in csv-column CUSTOMERID or {"id":1} if the field id is in column 1
         * @param replace - replace text e.g. {"für":"fuer"}
         * returns the message if succeeded
         */
        static startImport(urlcsv: string, dbclass: string, fieldmapping?: {
            [field: string]: (string | number);
        }, replace?: {
            [toReplace: string]: string;
        }, beforeSave?: any): Promise<string>;
        doimport(): Promise<string>;
        private _doimport;
    }
    export function test(): Promise<void>;
}
declare module "jassijs/util/Reloader" {
    export class Reloader {
        static cache: any[];
        static reloadCodeFromServerIsRunning: boolean;
        static instance: Reloader;
        listener: any[];
        /**
         * reloads Code
         */
        private constructor();
        /**
         * check code changes out of the browser if localhost and load the changes in to the browser
         */
        static startReloadCodeFromServer(): void;
        /**
         * listener for code reloaded
         * @param {function} func - callfunction for the event
         */
        addEventCodeReloaded(func: any): void;
        removeEventCodeReloaded(func: any): void;
        private _findScript;
        reloadJS(fileName: string): Promise<void>;
        reloadJSAll(fileNames: string[]): Promise<void>;
        migrateModul(allModules: any, file: any, modul: any): void;
        migrateClasses(file: any, oldmodul: any, modul: any): void;
    }
}
declare module "jassijs/util/Runlater" {
    export class Runlater {
        lastRun: number;
        func: any;
        timeout: number;
        isRunning: boolean;
        constructor(func: any, timeout: any);
        _checkRun(): void;
        runlater(): void;
    }
}
