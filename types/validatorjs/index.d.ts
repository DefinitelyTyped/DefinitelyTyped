// Type definitions for validatorjs v3.15.0
// Project: https://github.com/skaterdav85/validatorjs
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Dan Manastireanu <https://github.com/danmana>
//                 Matías Olivera <https://github.com/MatiasOlivera>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Validator {
    interface TypeCheckingRule {
        [attribute: string]: Array<any>;
    }

    interface Rules {
        [attribute: string]: string | Array<string | TypeCheckingRule> | Rules;
    }

    interface ValidationErrors {
        [field: string]: Array<string>;
    }

    interface ErrorMessages {
        [key: string]: string | ErrorMessages;
    }

    interface AttributeNames {
        [attribute: string]: string;
    }

    type AttributeFormatter = (attribute: any) => any;

    interface Errors {
        errors: ValidationErrors;
        add(attribute: string, message: string): void;
        get(attribute: string): Array<string>;
        first(attribute: string): string | false;
        all(): ValidationErrors;
        has(attribute: string): boolean;
    }

    type RegisterCallback = (
        value: string | number | boolean,
        args: string,
        attribute: string
    ) => boolean;

    type RegisterAsyncCallback = (
        value: string | number | boolean,
        args: string,
        attribute: string,
        passes: (success?: boolean, message?: string) => void
    ) => void;

    interface ValidatorStatic {
        new <A>(
            data: A,
            rules: Rules,
            customMessages?: ErrorMessages
        ): Validator<A>;
        setMessages(lang: string, messages: ErrorMessages): any;
        getMessages(lang: string): ErrorMessages;
        useLang(lang: string): void;
        getDefaultLang(): string;
        setAttributeFormatter(func: AttributeFormatter): void;
        stopOnError(attributes: boolean | Array<string>): void;
        register(name: string, fn: RegisterCallback, message?: string): void;
        registerAsync(
            name: string,
            fn: RegisterAsyncCallback,
            message: string
        ): void;
    }

    interface Validator<A> {
        lang: string;
        input: A;
        messages: ErrorMessages;
        errors: Errors;
        errorCount: number;
        hasAsync: boolean;
        rules: Rules;
        numericRules: Array<string>;
        attributeFormatter: AttributeFormatter;
        check(): boolean;
        checkAsync(passes?: Function, fails?: Function): void;
        setAttributeNames(attributes: AttributeNames): void;
        setAttributeFormatter(func: AttributeFormatter): void;
        getRule(name: string): Function;
        stopOnError(passes?: Function): boolean | void;
        passes(passes?: Function): boolean | void;
        fails(fails?: Function): boolean | void;
    }
}

declare const Validator: Validator.ValidatorStatic;
export = Validator;
export as namespace Validator;
