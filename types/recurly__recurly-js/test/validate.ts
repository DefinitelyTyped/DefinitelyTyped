export default function validate() {
  const { validate } = window.recurly;

  // $ExpectType boolean
  validate.cardNumber('4111 1111 1111 1111');
  // $ExpectType boolean
  validate.cardNumber(4111111111111111);

  // $ExpectType boolean
  validate.cardType('4111 1111 1111 1111', true);
  validate.cardType(4111111111111111, true);
  // $ExpectError
  validate.cardType(4111111111111111);

  // $ExpectType boolean
  validate.expiry('12', '22');
  validate.expiry(12, 22);
  validate.expiry('12', 22);
  // $ExpectError
  validate.expiry('12-22');

  // $ExpectType boolean
  validate.cvv('111');
  validate.cvv(111);
}
