import * as WAValidator from 'multicoin-address-validator';

/* validate */
// $ExpectType boolean
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck');
// $ExpectType boolean
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
// $ExpectType boolean
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', 'prod');
// $ExpectType boolean
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', {});
// $ExpectType boolean
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', { networkType: 'prod' });
// $ExpectError
WAValidator.validate();
// $ExpectError
WAValidator.validate(0);
// $ExpectError
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 0);
// $ExpectError
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', { networkType: 'prod', nonexistentOption: 0 });
// $ExpectError
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', 0);
// $ExpectError
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', { networkType: 'prod' }, 0);

/* getCurrencies */
// $ExpectType Currency[]
WAValidator.getCurrencies();
// $ExpectError
WAValidator.getCurrencies(0);

/* findCurrency */
// $ExpectType Currency | null
const btc = WAValidator.findCurrency('BTC');
// $ExpectError
WAValidator.findCurrency();
// $ExpectError
WAValidator.findCurrency(0);
// $ExpectError
WAValidator.findCurrency('BTC', 0);
if (btc !== null) {
    // $ExpectType string
    btc.name;
    // $ExpectType string
    btc.symbol;
    // $ExpectType Validator
    btc.validator;
    // $ExpectType any
    btc.someOtherProperty;
}
