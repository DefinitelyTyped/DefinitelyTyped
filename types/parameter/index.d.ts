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
        translate?: ParameterTranslateFunction | undefined;

        /**
         * config whether to validate the passed in value must be a object
         * @default false
         */
        validateRoot?: boolean | undefined;

        /**
         * convert primitive params to specific type.
         * @default false
         */
        convert?: boolean | undefined;

        /**
         * convert empty string(''), NaN, Null to undefined, this option can make rule.required more powerful,
         * **This may change the original input params.**
         * @default false
         */
        widelyUndefined?: boolean | undefined;
    }

    type ParameterConvertType = "int" | "number" | "string" | "bool" | "boolean" | ((value: any) => any);

    type ParameterRuleAbbr =
        | "int"
        | "int?"
        | "integer"
        | "integer?"
        | "number"
        | "number?"
        | "date"
        | "date?"
        | "dateTime"
        | "dateTime?"
        | "datetime"
        | "datetime?"
        | "id"
        | "id?"
        | "boolean"
        | "boolean?"
        | "bool"
        | "bool?"
        | "string"
        | "string?"
        | "email"
        | "email?"
        | "password"
        | "password?"
        | "object"
        | "object?"
        | "array"
        | "array?"
        | ReadonlyArray<any>
        | RegExp;

    interface ParameterRuleBase {
        /**
         * If required is set to false, this property can be null or undefined.
         * @default true
         */
        required?: boolean | undefined;
        /**
         * The type of property, every type has it's own rule for the validate.
         */
        type: string;
        /**
         * Make parameter convert the input param to the specific type, support int, number, string and boolean,
         * also support a function to customize your own convert method.
         */
        convertType?: ParameterConvertType | undefined;
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
        widelyUndefined?: boolean | undefined;
    }

    interface ParameterRuleCustom extends ParameterRuleBase {
        [x: string]: unknown;
    }

    interface ParameterRuleNumber extends ParameterRuleBase {
        type: "int" | "integer" | "number" | "int?" | "integer?" | "number?";
        /**
         * The minimum of the value, value must <= max
         */
        min?: number | undefined;
        /**
         * The maximum of the value, value must >= min.
         */
        max?: number | undefined;
    }

    interface ParameterRuleString extends ParameterRuleBase {
        type: "string" | "string?";
        /**
         * Allow empty string, default to false. If rule.required set to false, allowEmpty will be set to true by default.
         * @alias ParameterRuleString.empty
         */
        allowEmpty?: boolean | undefined;
        /**
         * Alias of allowEmpty
         */
        empty?: boolean | undefined;
        format?: RegExp | undefined;
        min?: number | undefined;
        max?: number | undefined;
        trim?: boolean | undefined;
    }

    interface ParameterRuleID extends ParameterRuleBase {
        type: "id" | "id?";
        allowEmpty?: boolean | undefined;
    }

    interface ParameterRuleDateTime extends ParameterRuleBase {
        type: "date" | "date?" | "dateTime" | "dateTime?" | "datetime" | "datetime?";
        allowEmpty?: boolean | undefined;
    }

    interface ParameterRuleEmail extends ParameterRuleBase {
        type: "email" | "email?";
        message?: string | undefined;
        allowEmpty?: boolean | undefined;
    }

    interface ParameterRuleUrl extends ParameterRuleBase {
        type: "url" | "url?";
        message?: string | undefined;
        allowEmpty?: boolean | undefined;
    }

    type ParameterRuleBoolean = ParameterRuleBase;

    interface ParameterRulePassword extends Omit<ParameterRuleString, "type" | "format"> {
        type: "password" | "password?";
        compare?: string | undefined;
    }

    interface ParameterRuleEnum extends ParameterRuleBase {
        type: "enum" | "enum?";
        values: ReadonlyArray<any>;
    }

    interface ParameterRuleObject extends ParameterRuleBase {
        type: "object" | "object?";
        rule?: ParameterRules | undefined;
    }

    interface ParameterRuleArray extends ParameterRuleBase {
        type: "array" | "array?";
        itemType?: string | undefined;
        rule?: ParameterRules | undefined;
        min?: number | undefined;
        max?: number | undefined;
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

    type ParameterRule = ParameterRuleItem | ParameterRuleAbbr | undefined;
    type ParameterRules<T = any> = {
        [K in keyof T]: ParameterRule;
    };

    interface ValidateError {
        code: string;
        field?: string | undefined;
        message: string;
    }

    type ParameterCheckFunction<T extends string> = (
        rule: ParameterRuleCustom & { type: T },
        value: unknown,
    ) => string | ValidateError[] | void;

    const TYPE_MAP: Record<string, ParameterCheckFunction<string> | undefined>;
}
