// Type definitions for non-npm package GM_config
// Project: https://github.com/sizzlemctwizzle/GM_config/
// Definitions by: Adam Thompson_Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

export {};

declare global {
    type FieldValue = string | number | boolean;
    /** Valid types for Field `type` property */
    type FieldTypes = 'text' | 'radio' | 'select' | 'int' | 'integer' | 'float' | 'number';

    interface InitOptions {
        /** Used for this instance of GM_config */
        id: string;
        /** Label the opened config window */
        title?: string | HTMLElement;
        fields: { [fieldId: string]: Field };
        /** Optional styling to apply to the menu */
        css?: string;
        /** Element to use for the config panel */
        frame?: HTMLElement;
    }

    interface Field {
        /** Display label for the field */
        label: string;
        /** Type of input */
        type: FieldTypes;
        /** Text to show on hover */
        title?: string;
        /** Default value for field */
        default?: FieldValue;
        save?: boolean;
    }

    /* GM_configStruct and related */

    interface GM_configStructConstructor {
        new (options: InitOptions): GM_configStruct;
    }

    /** Initialize a GM_configStruct */
    function GM_configInit(config: GM_configStruct, options: InitOptions): void;

    function GM_configDefaultValue(type: FieldTypes): FieldValue;

    interface GM_configStruct {
        /** Initialize GM_config */
        init(options: InitOptions): void;

        /** Display the config panel */
        open(): void;
        /** Close the config panel */
        close(): void;

        /** Directly set the value of a field */
        set(fieldId: string, value: FieldValue): void;
        /** Get a config value */
        get(fieldId: string): FieldValue;
        /** Save the current values */
        save(): void;

        create(): HTMLElement;

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
    }

    /** Default GM_config object */
    let GM_config: GM_configStruct;
    /** Create multiple GM_config instances */
    let GM_configStruct: GM_configStructConstructor;

    /* GM_configField and related */
    interface GM_configFieldConstructor {
        /**
         * @todo {@param customType} is absolutely not a boolean
         */
        new (
            settings: Field,
            stored: FieldValue | undefined,
            id: string,
            customType: boolean,
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
        default: FieldValue;

        /** Same thing as `GM_configStruct.prototype.create` */
        create(): void;

        toNode(): Node;

        /** Get value from field */
        toValue(): FieldValue | null;

        reset(): void;

        remove(el?: HTMLElement): void;

        reload(): void;

        _checkNumberRange(num: number, warn: string): true | null;
    }

    let GM_configField: GM_configFieldConstructor;
}
