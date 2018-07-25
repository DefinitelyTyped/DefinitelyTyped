import Cleave = require("../");

// Credit Card Options
export type CreditCardType =
    | "amex"
    | "dankort"
    | "diners"
    | "discover"
    | "instapayment"
    | "jcb"
    | "maestro"
    | "mastercard"
    | "uatp"
    | "unknown"
    | "unionPay"
    | "mir"
    | "visa";

export type CreditCardTypeChangeHandler = (this: Cleave, type: CreditCardType) => void;
