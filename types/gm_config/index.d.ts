// Type definitions for non-npm package gm_config 0.1
// Project: https://github.com/sizzlemctwizzle/GM_config/
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 2.8

type FieldValue = string | number | boolean;
/** Valid types for Field `type` property */
type FieldTypes =
    | 'text'
    | 'textarea'
    | 'button'
    | 'radio'
    | 'select'
    | 'checkbox'
    | 'unsigned int'
    | 'unsinged integer'
    | 'int'
    | 'integer'
    | 'float'
    | 'number'
    | 'hidden';

/** Init options where no custom types are defined */
interface InitOptionsNoCustom {
    /** Used for this instance of GM_config */
    id: string;
    /** Label the opened config window */
    title?: string | HTMLElement;
    fields: Record<string, Field>;
    /** Optional styling to apply to the menu */
    css?: string;
    /** Element to use for the config panel */
    frame?: HTMLElement;

    /** Handlers for different events */
    events?: {
        init?: GM_configStruct['onInit'];
        open?: GM_configStruct['onOpen'];
        save?: GM_configStruct['onSave'];
        close?: GM_configStruct['onClose'];
        reset?: GM_configStruct['onReset'];
    };
}

/** Init options where custom types are defined */
interface InitOptionsCustom<CustomTypes extends string> extends Omit<InitOptionsNoCustom, 'fields'> {
    fields: Record<string, Field<CustomTypes>>;
    /** Custom fields */
    types: { [type in CustomTypes]: CustomType };
}

/** Init options where the types key is only required if custom types are used */
type InitOptions<CustomTypes extends string> = InitOptionsNoCustom | InitOptionsCustom<CustomTypes>;

interface Field<CustomTypes extends string = never> {
    /** Fields can have and use any keys */
    [key: string]: any;
    /** Display label for the field */
    label?: string | HTMLElement;
    /** Type of input */
    type: FieldTypes | CustomTypes;
    /** Text to show on hover */
    title?: string;
    /** Default value for field */
    default?: FieldValue;
    save?: boolean;
}

interface CustomType {
    default?: FieldValue | null;
    toNode?: (configId: string) => Node;
    toValue?: () => FieldValue | null;
    reset?: () => void;
}

/* GM_configStruct and related */

interface GM_configStructConstructor {
    new <CustomTypes extends string>(options: InitOptions<CustomTypes>): GM_configStruct;
}

/** Initialize a GM_configStruct */
declare function GM_configInit<CustomTypes extends string>(
    config: GM_configStruct,
    options: InitOptions<CustomTypes>,
): void;

declare function GM_configDefaultValue(type: FieldTypes): FieldValue;

interface GM_configStruct {
    /** Initialize GM_config */
    init<CustomTypes extends string>(options: InitOptions<CustomTypes>): void;

    /** Display the config panel */
    open(): void;
    /** Close the config panel */
    close(): void;

    /** Directly set the value of a field */
    set(fieldId: string, value: FieldValue): void;
    /**
     * Get a config value
     * @param getLive If true, runs `field.toValue()` instead of just getting `field.value`
     */
    get(fieldId: string, getLive?: boolean): FieldValue;
    /** Save the current values */
    save(): void;

    read(store?: string): {};

    write(store?: string, obj?: {}): {};

    /**
     *
     * @param args If only one arg is passed, argument is passed to `document.createTextNode`.
     * With any other amount, args[0] is passed to `document.createElement` and the second arg
     * has something to do with event listeners?
     *
     * @todo Improve types based on
     * <https://github.com/sizzlemctwizzle/GM_config/blob/43fd0fe4/gm_config.js#L444-L455>
     */
    create(...args: [string] | [string, any[]] | []): HTMLElement;

    center(): void;

    remove(el: HTMLElement): void;

    /* Computed */

    /** Whether GreaseMonkey functions are present */
    isGM: boolean;
    /**
     * Either calls `localStorage.setItem` or `GM_setValue`.
     * Shouldn't be directly called
     */
    setValue(name: string, value: FieldValue): Promise<void> | void;
    /**
     * Get a value. Shouldn't be directly called
     *
     * @param name The name of the value
     * @param def The default to return if the value is not defined.
     * Only for localStorage fallback
     */
    getValue(name: string, def: FieldValue): FieldValue;

    /** Converts a JSON object to a string */
    stringify(obj: object): string;
    /**
     * Converts a string to a JSON object
     * @returns `undefined` if the string was an invalid object,
     * otherwise returns the parsed object
     */
    parser(jsonString: string): object | void;

    /** Log a string with multiple fallbacks */
    log(data: string): void;

    /* Created from GM_configInit */
    id: string;
    title: string;
    css: {
        basic: string[];
        basicPrefix: string;
        stylish: string;
    };
    frame?: HTMLElement;
    fields: Record<string, GM_configField>;
    onInit?: () => void;
    onOpen?: (document: Document, window: Window, frame: HTMLElement) => void;
    onSave?: (values: {}) => void;
    onClose?: () => void;
    onReset?: () => void;
    isOpen: boolean;
}

/** Default GM_config object */
declare let GM_config: GM_configStruct;
/** Create multiple GM_config instances */
declare let GM_configStruct: GM_configStructConstructor;

/* GM_configField and related */
interface GM_configFieldConstructor {
    new (
        settings: Field,
        stored: FieldValue | undefined,
        id: string,
        customType: CustomType | undefined,
        configId: string,
    ): GM_configField;
}

interface GM_configField {
    settings: Field;
    id: string;
    configId: string;
    node: Node | null;
    wrapper: Node | null;
    save: boolean;
    /** The stored value */
    value: FieldValue;
    default: FieldValue;

    create: GM_configStruct['create'];

    toNode(configId?: string): Node;

    /** Get value from field */
    toValue(): FieldValue | null;

    reset(): void;

    remove(el?: HTMLElement): void;

    reload(): void;

    _checkNumberRange(num: number, warn: string): true | null;
}

declare let GM_configField: GM_configFieldConstructor;
