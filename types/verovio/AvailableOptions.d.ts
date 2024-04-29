export interface VerovioOption {
    title: string;
    description: string;
    shortOption?: string;
    cmdOnly?: boolean;
}

export interface JsonOption extends VerovioOption {
    type?: undefined;
    values?: undefined;
}

export interface IntOption extends VerovioOption {
    type: "int";
    min?: number;
    max?: number;
    default?: number;
    values?: undefined;
}
export interface DoubleOption extends VerovioOption {
    type: "double";
    min?: number;
    max?: number;
    default?: number;
    values?: undefined;
}
export interface StringArrayOption extends VerovioOption {
    type: "array";
    default?: string[];
    values?: undefined;
}
export interface StringOption extends VerovioOption {
    type: "std::string";
    default?: string;
    values?: undefined;
}
export interface EnumOption extends VerovioOption {
    type: "std::string-list";
    default?: string;
    values: string[];
}
export interface BooleanOption extends VerovioOption {
    type: "bool";
    default?: boolean;
    values?: undefined;
}
export type AnyOption =
    | JsonOption
    | IntOption
    | DoubleOption
    | StringArrayOption
    | StringOption
    | EnumOption
    | BooleanOption;
export interface AvailableOptions {
    groups: {
        [key: string]: {
            name: string;
            options: {
                [optionName: string]: AnyOption;
            };
        };
    };
}
