declare namespace Validator {
    interface TypeCheckingRule {
        [attribute: string]: any[];
    }

    interface Rules {
        [attribute: string]: string | Array<string | TypeCheckingRule> | Rules;
    }

    interface ValidationErrors {
        [field: string]: string[];
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
        get(attribute: string): string[];
        first(attribute: string): string | false;
        all(): ValidationErrors;
        has(attribute: string): boolean;
    }

    type RegisterCallback = (
        value: string | number | boolean,
        args: string,
        attribute: string,
    ) => boolean;

    type RegisterAsyncCallback = (
        value: string | number | boolean,
        args: string,
        attribute: string,
        passes: (success?: boolean, message?: string) => void,
    ) => void;

    interface ValidatorStatic {
        new<A>(
            data: A,
            rules: Rules,
            customMessages?: ErrorMessages,
        ): Validator<A>;
        setMessages(lang: string, messages: ErrorMessages): any;
        getMessages(lang: string): ErrorMessages;
        useLang(lang: string): void;
        getDefaultLang(): string;
        setAttributeFormatter(func: AttributeFormatter): void;
        stopOnError(attributes: boolean | string[]): void;
        register(name: string, fn: RegisterCallback, message?: string): void;
        registerAsync(
            name: string,
            fn: RegisterAsyncCallback,
            message: string,
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
        numericRules: string[];
        attributeFormatter: AttributeFormatter;
        check(): boolean;
        checkAsync(passes?: Function, fails?: Function): void;
        setAttributeNames(attributes: AttributeNames): void;
        setAttributeFormatter(func: AttributeFormatter): void;
        getRule(name: string): Function;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        stopOnError(passes?: Function): boolean | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        passes(passes?: Function): boolean | void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        fails(fails?: Function): boolean | void;
    }
}

declare const Validator: Validator.ValidatorStatic;
export = Validator;
export as namespace Validator;
