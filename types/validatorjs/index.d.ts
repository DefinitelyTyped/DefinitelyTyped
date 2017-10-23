// Type definitions for validatorjs v3.7.0
// Project: https://github.com/skaterdav85/validatorjs
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Validator {

    interface ParsedRule {
        attribute: Array<{ name: string, value: any }>
    }

    interface ValidationErrors {
        [field: string]: string
    }

    interface ErrorMessages {
        [key: string]: string
    }

    interface AttributeNames {
        [attribute: string]: string
    }

    type AttributeFormatter = (attribute: any) => any

    interface Errors {
        errors : ValidationErrors
        add (attribute: string, message: string): void
        get (attribute: string): Array<string>
        first (attribute: string): string | boolean
        all (): ValidationErrors
        has (attribute: string): boolean
    }

    interface ValidatorStatic {
        new <A>(data: A, rules: any, customMessages?: ErrorMessages): Validator<A>
        setMessages (lang: string, messages: ErrorMessages): any
        getMessages (lang: string): ErrorMessages
        useLang (lang: string): void
        getDefaultLang (): string
        setAttributeFormatter (func: AttributeFormatter): void
        stopOnError (attributes: boolean | Array<string>): void
        register (name: string, fn: Function, message: string): void
        registerAsync (name: string, fn: Function, message: string): void
    }

    interface Validator<A> {
        lang: string
        input: A
        messages: ErrorMessages
        errors: Errors
        errorCount: number
        hasAsync: boolean
        rules: any
        numericRules: Array<string>
        attributeFormatter: AttributeFormatter
        check (): boolean
        checkAsync (passes?: Function, fails?: Function): void
        setAttributeNames (attributes: AttributeNames): void
        setAttributeFormatter (func: AttributeFormatter): void
        getRule (name: string): Function
        stopOnError (passes?: Function): boolean | void
        passes (passes?: Function): boolean | void
        fails (fails?: Function): boolean | void
    }

}

declare const Validator: Validator.ValidatorStatic
export = Validator;
export as namespace Validator;
