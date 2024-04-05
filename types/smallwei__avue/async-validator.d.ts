type RuleType =
    | "string"
    | "number"
    | "boolean"
    | "method"
    | "regexp"
    | "integer"
    | "float"
    | "array"
    | "object"
    | "enum"
    | "date"
    | "url"
    | "hex"
    | "email"
    | "pattern"
    | "any";
interface ValidateOption {
    suppressWarning?: boolean;
    suppressValidatorError?: boolean;
    first?: boolean;
    firstFields?: boolean | string[];
    messages?: Partial<ValidateMessages>;
    /** The name of rules need to be trigger. Will validate all rules if leave empty */
    keys?: string[];
    error?: (rule: InternalRuleItem, message: string) => ValidateError;
}
type SyncErrorType = Error | string;
type SyncValidateResult = boolean | SyncErrorType | SyncErrorType[];
type ValidateResult = undefined | Promise<void> | SyncValidateResult;
interface RuleItem {
    type?: RuleType;
    required?: boolean;
    pattern?: RegExp | string;
    min?: number;
    max?: number;
    len?: number;
    enum?: Array<string | number | boolean | null | undefined>;
    whitespace?: boolean;
    fields?: Record<string, Rule>;
    options?: ValidateOption;
    defaultField?: Rule;
    transform?: (value: Value) => Value;
    message?: string | ((a?: string) => string);
    asyncValidator?: (
        rule: InternalRuleItem,
        value: Value,
        callback: (error?: string | Error) => void,
        source: Values,
        options: ValidateOption,
    ) => void | Promise<void>;
    validator?: (
        rule: InternalRuleItem,
        value: Value,
        callback: (error?: string | Error) => void,
        source: Values,
        options: ValidateOption,
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    ) => SyncValidateResult | void;
}
type Rule = RuleItem | RuleItem[];
type Rules = Record<string, Rule>;
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 *  @param type Rule type
 */
type ExecuteRule = (
    rule: InternalRuleItem,
    value: Value,
    source: Values,
    errors: string[],
    options: ValidateOption,
    type?: string,
) => void;
/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
type ExecuteValidator = (
    rule: InternalRuleItem,
    value: Value,
    callback: (error?: string[]) => void,
    source: Values,
    options: ValidateOption,
) => void;
type ValidateMessage<T extends any[] = unknown[]> = string | ((...args: T) => string);
type FullField = string | undefined;
type EnumString = string | undefined;
type Pattern = string | RegExp | undefined;
type RangeNumber = number | undefined;
type Type = string | undefined;
interface ValidateMessages {
    default?: ValidateMessage;
    required?: ValidateMessage<[FullField]>;
    enum?: ValidateMessage<[FullField, EnumString]>;
    whitespace?: ValidateMessage<[FullField]>;
    date?: {
        format?: ValidateMessage;
        parse?: ValidateMessage;
        invalid?: ValidateMessage;
    };
    types?: {
        string?: ValidateMessage<[FullField, Type]>;
        method?: ValidateMessage<[FullField, Type]>;
        array?: ValidateMessage<[FullField, Type]>;
        object?: ValidateMessage<[FullField, Type]>;
        number?: ValidateMessage<[FullField, Type]>;
        date?: ValidateMessage<[FullField, Type]>;
        boolean?: ValidateMessage<[FullField, Type]>;
        integer?: ValidateMessage<[FullField, Type]>;
        float?: ValidateMessage<[FullField, Type]>;
        regexp?: ValidateMessage<[FullField, Type]>;
        email?: ValidateMessage<[FullField, Type]>;
        url?: ValidateMessage<[FullField, Type]>;
        hex?: ValidateMessage<[FullField, Type]>;
    };
    string?: {
        len?: ValidateMessage<[FullField, RangeNumber]>;
        min?: ValidateMessage<[FullField, RangeNumber]>;
        max?: ValidateMessage<[FullField, RangeNumber]>;
        range?: ValidateMessage<[FullField, RangeNumber, RangeNumber]>;
    };
    number?: {
        len?: ValidateMessage<[FullField, RangeNumber]>;
        min?: ValidateMessage<[FullField, RangeNumber]>;
        max?: ValidateMessage<[FullField, RangeNumber]>;
        range?: ValidateMessage<[FullField, RangeNumber, RangeNumber]>;
    };
    array?: {
        len?: ValidateMessage<[FullField, RangeNumber]>;
        min?: ValidateMessage<[FullField, RangeNumber]>;
        max?: ValidateMessage<[FullField, RangeNumber]>;
        range?: ValidateMessage<[FullField, RangeNumber, RangeNumber]>;
    };
    pattern?: {
        mismatch?: ValidateMessage<[FullField, Value, Pattern]>;
    };
}
interface InternalValidateMessages extends ValidateMessages {
    clone: () => InternalValidateMessages;
}
type Value = any;
type Values = Record<string, Value>;
interface ValidateError {
    message?: string;
    fieldValue?: Value;
    field?: string;
}
type ValidateFieldsError = Record<string, ValidateError[]>;
type ValidateCallback = (errors: ValidateError[] | null, fields: ValidateFieldsError | Values) => void;
interface RuleValuePackage {
    rule: InternalRuleItem;
    value: Value;
    source: Values;
    field: string;
}
interface InternalRuleItem extends Omit<RuleItem, "validator"> {
    field?: string;
    fullField?: string;
    fullFields?: string[];
    validator?: RuleItem["validator"] | ExecuteValidator;
}
