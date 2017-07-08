import * as creditCardType from "credit-card-type"

var cardTypes: Array<creditCardType.CreditCardTypeInfo> = creditCardType("")
var cardInfo: creditCardType.CreditCardTypeInfo = creditCardType.getTypeInfo("")
var types: { [type: string]: string } = creditCardType.types
