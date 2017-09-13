import valid = require('card-validator');

var numberValidation = valid.number('4111');

if (!numberValidation.isPotentiallyValid) {

}
if (numberValidation.card) {
    numberValidation.card.type;
}

valid.expirationDate('10/19');
let dateTest2 = valid.expirationDate({month: '1', year: '2019'})
if (dateTest2.isPotentiallyValid) {
    dateTest2.month;
}

let expirationMonthCheck =  valid.expirationMonth('10');
if (expirationMonthCheck.isPotentiallyValid) {
    expirationMonthCheck.isValidForThisYear
}

let expirationYearCheck =  valid.expirationYear('10');
if (expirationYearCheck.isPotentiallyValid) {
    expirationYearCheck.isCurrentYear;
}


let postalCodeCheck = valid.postalCode('123');

if (postalCodeCheck.isValid) {
    postalCodeCheck = valid.postalCode('123', {});
    postalCodeCheck = valid.postalCode('123', {minLength: 5});
}

let cvvCeck = valid.cvv('1234');
if (cvvCeck.isValid) {
    valid.cvv('12345', 4)
}
