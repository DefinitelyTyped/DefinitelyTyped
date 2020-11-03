// Type definitions for parameter 3.6
// Project: https://github.com/node-modules/parameter#readme
// Definitions by: Innpaul Zhang <https://github.com/zhyupe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

export = Parameter;

declare class Parameter {
    constructor(options?: Parameter.ParameterOptions);

    /**
     * Add custom rules
     */
    addRule: typeof Parameter.addRule;

    /**
     * Translate function
     */
    t: Parameter.ParameterTranslateFunction;

    /**
     * Validate the value conforms to rule. return an array of errors if break rule.
     * @param rule
     * @param value
     */
    validate(rule: Parameter.ParameterRules, value: unknown): Parameter.ValidateError[] | void;

    static CONVERT_MAP: Record<string, Parameter.ParameterConvertType | undefined>;

    /**
     * Add custom rules
     * @param type
     * @param check
     * @param override Override exist rules. Default: `true`
     * @param convertType Make parameter convert the input param to the specific type
     */
    static addRule<T extends string>(
        type: T,
        check: Parameter.ParameterCheckFunction<T> | RegExp,
        convertType: Parameter.ParameterConvertType,
    ): void;
    static addRule<T extends string>(
        type: T,
        check: Parameter.ParameterCheckFunction<T> | RegExp,
        override?: boolean,
        convertType?: Parameter.ParameterConvertType,
    ): void;
}

declare namespace Parameter {
    type ParameterTranslateFunction = (this: Parameter, message: string, ...args: any[]) => string;

    interface ParameterOptions {
        /**
         * translate function
         */
        translate?: ParameterTranslateFunction;

        /**
         * config whether to validate the passed in value must be a object
         * @default false
         */
        validateRoot?: boolean;

        /**
         * convert primitive params to specific type.
         * @default false
         */
        convert?: boolean;

        /**
         * convert empty string(''), NaN, Null to undefined, this option can make rule.required more powerful,
         * **This may change the original input params.**
         * @default false
         */
        widelyUndefined?: boolean;
    }

    type ParameterConvertType = 'int' | 'number' | 'string' | 'bool' | 'boolean' | ((value: any) => any);

    type ParameterRuleAbbr =
        | 'int'
        | 'int?'
        | 'integer'
        | 'integer?'
        | 'number'
        | 'number?'
        | 'date'
        | 'date?'
        | 'dateTime'
        | 'dateTime?'
        | 'datetime'
        | 'datetime?'
        | 'id'
        | 'id?'
        | 'boolean'
        | 'boolean?'
        | 'bool'
        | 'bool?'
        | 'string'
        | 'string?'
        | 'email'
        | 'email?'
        | 'password'
        | 'password?'
        | 'object'
        | 'object?'
        | 'array'
        | 'array?'
        | ReadonlyArray<any>
        | RegExp;

    interface ParameterRuleBase {
        /**
         * If required is set to false, this property can be null or undefined.
         * @default true
         */
        required?: boolean;
        /**
         * The type of property, every type has it's own rule for the validate.
         */
        type: string;
        /**
         * Make parameter convert the input param to the specific type, support int, number, string and boolean,
         * also support a function to customize your own convert method.
         */
        convertType?: ParameterConvertType;
        /**
         * The default value of property, once the property is allowed non-required and missed, parameter will
         * use this as the default value. **This may change the original input params.**
         */
        default?: any;
        /**
         * convert empty string(''), NaN, Null to undefined, this option can make rule.required more powerful,
         * **This may change the original input params.**
         * @default false
         */
        widelyUndefined?: boolean;
    }

    interface ParameterRuleCustom extends ParameterRuleBase {
        [x: string]: unknown;
    }

    interface ParameterRuleNumber extends ParameterRuleBase {
        type: 'int' | 'integer' | 'number' | 'int?' | 'integer?' | 'number?';
        /**
         * The minimum of the value, value must <= max
         */
        min?: number;
        /**
         * The maximum of the value, value must >= min.
         */
        max?: number;
    }

    interface ParameterRuleString extends ParameterRuleBase {
        type: 'string' | 'string?';
        /**
         * Allow empty string, default to false. If rule.required set to false, allowEmpty will be set to true by default.
         * @alias ParameterRuleString.empty
         */
        allowEmpty?: boolean;
        /**
         * Alias of allowEmpty
         */
        empty?: boolean;
        format?: RegExp;
        min?: number;
        max?: number;
        trim?: boolean;
    }

    interface ParameterRuleID extends ParameterRuleBase {
        type: 'id' | 'id?';
        allowEmpty?: boolean;
    }

    interface ParameterRuleDateTime extends ParameterRuleBase {
        type: 'date' | 'date?' | 'dateTime' | 'dateTime?' | 'datetime' | 'datetime?';
        allowEmpty?: boolean;
    }

    interface ParameterRuleEmail extends ParameterRuleBase {
        type: 'email' | 'email?';
        message?: string;
        allowEmpty?: boolean;
    }

    interface ParameterRuleUrl extends ParameterRuleBase {
        type: 'url' | 'url?';
        message?: string;
        allowEmpty?: boolean;
    }

    type ParameterRuleBoolean = ParameterRuleBase;

    interface ParameterRulePassword extends Omit<ParameterRuleString, 'type' | 'format'> {
        type: 'password' | 'password?';
        compare?: string;
    }

    interface ParameterRuleEnum extends ParameterRuleBase {
        type: 'enum' | 'enum?';
        values: ReadonlyArray<any>;
    }

    interface ParameterRuleObject extends ParameterRuleBase {
        type: 'object' | 'object?';
        rule?: ParameterRules;
    }

    interface ParameterRuleArray extends ParameterRuleBase {
        type: 'array' | 'array?';
        itemType?: string;
        rule?: ParameterRules;
        min?: number;
        max?: number;
    }

    type ParameterRuleItem =
        | ParameterRuleCustom
        | ParameterRuleNumber
        | ParameterRuleString
        | ParameterRuleID
        | ParameterRuleDateTime
        | ParameterRuleEmail
        | ParameterRuleUrl
        | ParameterRuleBoolean
        | ParameterRulePassword
        | ParameterRuleEnum
        | ParameterRuleObject
        | ParameterRuleArray;

    type ParameterRules = Record<string, ParameterRuleItem | ParameterRuleAbbr | undefined>;

    interface ValidateError {
        code: string;
        field?: string;
        message: string;
    }

    type ParameterCheckFunction<T extends string> = (
        rule: ParameterRuleCustom & { type: T },
        value: unknown,
    ) => string | ValidateError[] | void;

    const TYPE_MAP: Record<string, ParameterCheckFunction<string> | undefined>;
}
