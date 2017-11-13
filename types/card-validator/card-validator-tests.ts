import valid = require('card-validator');

const numberValidation = valid.number('4111');

if (!numberValidation.isPotentiallyValid && numberValidation.card) {
    numberValidation.card.type;
}

valid.expirationDate('10/19');
const dateTest2 = valid.expirationDate({month: '1', year: '2019'});
if (dateTest2.isPotentiallyValid) {
    dateTest2.month;
}

const expirationMonthCheck =  valid.expirationMonth('10');
if (expirationMonthCheck.isPotentiallyValid) {
    expirationMonthCheck.isValidForThisYear;
}

const expirationYearCheck =  valid.expirationYear('10');
if (expirationYearCheck.isPotentiallyValid) {
    expirationYearCheck.isCurrentYear;
}

let postalCodeCheck = valid.postalCode('123');

if (postalCodeCheck.isValid) {
    postalCodeCheck = valid.postalCode('123', {});
    postalCodeCheck = valid.postalCode('123', {minLength: 5});
}

const cvvCeck = valid.cvv('1234');
if (cvvCeck.isValid) {
    valid.cvv('12345', 4);
}
