$.payment.cards.push({
  // Card type, as returned by $.payment.cardType.
  type: 'mastercard',
  // Array of prefixes used to identify the card type.
  patterns: [
      51, 52, 53, 54, 55,
      22, 23, 24, 25, 26, 27
  ],
  // Array of valid card number lengths.
  length: [16],
  // Array of valid card CVC lengths.
  cvcLength: [3],
  // Boolean indicating whether a valid card number should satisfy the Luhn check.
  luhn: true,
  // Regex used to format the card number. Each match is joined with a space.
  format: /(\d{1,4})/g
})

$('[data-numeric]').payment('restrictNumeric');

$.payment.validateCardNumber('4242 4242 4242 4242') === true; //=> true

$.payment.validateCardExpiry('05', '20') === true; //=> true
$.payment.validateCardExpiry('05', '2015') === true; //=> true
$.payment.validateCardExpiry('05', '05') === true; //=> false

$.payment.validateCardCVC('123') === true; //=> true
$.payment.validateCardCVC('123', 'amex') === true; //=> true
$.payment.validateCardCVC('1234', 'amex') === true; //=> true
$.payment.validateCardCVC('12344') === false; //=> false

$.payment.cardType('4242 4242 4242 4242') === 'visa'; //=> 'visa'

$.payment.cardExpiryVal('03 / 2025') === {month: 3, year: 2025}; //=> {month: 3, year: 2025}
$.payment.cardExpiryVal('05 / 04') === {month: 3, year: 2025}; //=> {month: 5, year: 2004}
$('input.cc-exp').payment('cardExpiryVal') //=> {month: 4, year: 2020}

var valid = $.payment.validateCardNumber($('input.cc-num').val() as string);

if (!valid) {
  alert('Your card is not valid!');
}
