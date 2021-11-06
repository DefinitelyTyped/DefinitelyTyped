// Type definitions for non-npm package GM_config
// Project: https://github.com/sizzlemctwizzle/GM_config/
// Definitions by: Adam Thompson_Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

export {};

declare global {
    type FieldValue = string | number;
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
    }

    /** Default GM_config object */
    let GM_config: GM_configStruct;
    /** Create multiple GM_config instances */
    let GM_configStruct: GM_configStructConstructor;

    interface GM_configStructConstructor {
        new (options: InitOptions): GM_configStruct;
    }

    interface GM_configStruct {
        /** Initialize GM_config */
        init(options: InitOptions): void;

        /** Display config GUI to user */
        open(): void;

        /** Directly set the value of a field */
        set(fieldId: string, value: FieldValue): void;

        /** Get a config value */
        get(fieldId: string): FieldValue;

        create(): HTMLElement;

        center(): void;

        remove(el: HTMLElement): void;

        /** Save the current values */
        save(): void;

        /** Close the config panel */
        close(): void;
    }

    /** Initialize GM_config */
    function GM_configInit(config: GM_configStruct, options: InitOptions): void;

    function GM_configDefaultValue(type: FieldTypes): FieldValue;
}
