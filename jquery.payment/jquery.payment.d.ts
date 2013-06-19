// Type definitions for jQuery.payment
// Project: https://github.com/stripe/jquery.payment
// Definitions by: Eric J. Smith <https://github.com/ejsmith/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JQuery {
    payment(validatorName: string);
}

interface JQueryStatic {
    payment: JQueryPayment;
}

interface JQueryPayment {
    validateCardNumber(cardNumber: string) : boolean;
    validateCardExpiry(year: string, month: string) : boolean;
    validateCardExpiry(expiry: any) : boolean;
    validateCardCVC(cvc: string, type: string) : boolean;
    cardType(cardNumber: string): string;
    cardExpiryVal(monthYear: string): JQueryPaymentExpiryInfo;
}

interface JQueryPaymentExpiryInfo {
    month: number;
    year: number;
}