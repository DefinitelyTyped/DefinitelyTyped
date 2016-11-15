// Credit Card Type Test
// ================================================================================
///<reference path="credit-card-type.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as creditCardType from "credit-card-type"

var cardTypes: Array<CreditCardType.CreditCardTypeInfo> = creditCardType("")
var cardInfo: CreditCardType.CreditCardTypeInfo = creditCardType.getTypeInfo("")
var types: { [type: string]: string } = creditCardType.types
