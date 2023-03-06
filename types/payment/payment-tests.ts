import * as Payment from "payment";

const input = document.getElementById('input') as HTMLInputElement;

Payment.restrictNumeric(input);
Payment.formatCardNumber(input);
Payment.formatCardExpiry(input);
Payment.formatCardCVC(input);

const card = "1234 5678 9012 3456";

const cardType = Payment.fns.cardType(card);
Payment.fns.validateCardNumber(card);
Payment.fns.validateCardExpiry("1 / 20");
Payment.fns.validateCardExpiry("1", "20");
Payment.fns.validateCardCVC("123", cardType);

const newCardTypes = [
    {
        type: 'fakecardtype',
        pattern: /\d{4}/,
        length: [16],
        cvcLength: [3],
        luhn: true,
        format: /\d{4}/,
    },
];

Payment.setCardArray(newCardTypes);
Payment.getCardArray();
Payment.addToCardArray({
    type: 'fakecardtype',
    pattern: /\d{4}/,
    length: [16],
    cvcLength: [3],
    luhn: true,
    format: /\d{4}/,
});
Payment.removeFromCardArray('fakecardtype');
