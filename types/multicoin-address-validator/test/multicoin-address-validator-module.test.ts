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
// @ts-expect-error
WAValidator.validate();
// @ts-expect-error
WAValidator.validate(0);
// @ts-expect-error
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 0);
// @ts-expect-error
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', { networkType: 'prod', nonexistentOption: 0 });
// @ts-expect-error
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', 0);
// @ts-expect-error
WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC', { networkType: 'prod' }, 0);

/* getCurrencies */
// $ExpectType Currency[]
WAValidator.getCurrencies();
// @ts-expect-error
WAValidator.getCurrencies(0);

/* findCurrency */
// $ExpectType Currency | null
const btc = WAValidator.findCurrency('BTC');
// @ts-expect-error
WAValidator.findCurrency();
// @ts-expect-error
WAValidator.findCurrency(0);
// @ts-expect-error
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
