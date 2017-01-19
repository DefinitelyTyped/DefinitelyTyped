import * as Payment from "payment";

var input = document.getElementById('input') as HTMLInputElement;

Payment.restrictNumeric(input);
Payment.formatCardNumber(input);
Payment.formatCardExpiry(input);
Payment.formatCardCVC(input);

var card = "1234 5678 9012 3456";

var cardType = Payment.fns.cardType(card);
Payment.fns.validateCardNumber(card);
Payment.fns.validateCardExpiry("1 / 20");
Payment.fns.validateCardExpiry("1", "20");
Payment.fns.validateCardCVC("123", cardType);