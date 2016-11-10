// Type definitions for Credit Card Type v5.0.0
// Project: https://github.com/braintree/credit-card-type
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace CreditCardType {

    type CardBrand = "american-express" | "diners-club" | "discover" | "jcb" | "maestro" | "master-card" | "unionpay" | "visa"

    interface CreditCardTypeInfo {
        niceType?: string
        type?: CardBrand
        pattern?: RegExp
        gaps?: Array<number>
        lengths?: Array<number>
        code?: {
            name?: string
            size?: number
        }
    }

    interface CreditCardType {
        (number: string): Array<CreditCardTypeInfo>
        getTypeInfo (type: string): CreditCardTypeInfo
        types: { [type: string]: string }
    }
}

declare module "credit-card-type" {
    const creditCardType: CreditCardType.CreditCardType
    export = creditCardType
}
