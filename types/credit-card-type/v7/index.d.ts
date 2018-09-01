// Type definitions for Credit Card Type v7.0.0
// Project: https://github.com/braintree/credit-card-type
// Definitions by: Daniel Nagy <https://github.com/daniel-nagy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module CreditCardType {
    enum CardType {
        AMERICAN_EXPRESS = 'american-express',
        DINERS_CLUB = 'diners-club',
        DISCOVER = 'discover',
        JCB = 'jcb',
        MAESTRO = 'maestro',
        MASTERCARD = 'mastercard',
        MIR = 'mir',
        UNIONPAY = 'unionpay',
        VISA = 'visa'
    }

    interface CardTypeInfo {
        niceType?: string
        type: string;
        prefixPattern: RegExp
        exactPattern: RegExp
        gaps?: number[]
        lengths?: number[]
        code?: {
            name?: string
            size?: number
        };
    }

    export function addCard(creditCardTypeInfo: CardTypeInfo): void;
    export function changeOrder(cardType: string, position: number): void;
    export function getTypeInfo(cardType: string): CardTypeInfo;
    export function removeCard(name: string): void;
    export function resetModifications(): void;
    export import types = CardType;
}

declare function CreditCardType(cardNumber: string): CreditCardType.CardTypeInfo[];

export import addCard = CreditCardType.addCard;
export import changeOrder = CreditCardType.changeOrder;
export import getTypeInfo = CreditCardType.getTypeInfo;
export import removeCard = CreditCardType.removeCard;
export import resetModifications = CreditCardType.resetModifications;
export import types = CreditCardType.CardType;

export default CreditCardType;
