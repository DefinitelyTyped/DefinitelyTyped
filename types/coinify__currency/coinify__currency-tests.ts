import {
    getDecimalsForCurrency,
    fromSmallestSubunit,
    toSmallestSubunit,
    convertSubunitAmount,
    computeRateBetweenSubunitAmounts,
    isValidCurrency,
    isValidFiatCurrency,
    isValidCryptoCurrency,
} from '@coinify/currency';

// $ExpectType number
const decimalsForCurrency = getDecimalsForCurrency('USD');

// $ExpectType number
const mainUnit = fromSmallestSubunit(12345678, 'BTC');

// $ExpectType number
const subUnit = toSmallestSubunit(123.45, 'USD');

// $ExpectType number
const subunitAmount = convertSubunitAmount(100000000, 250, 'BTC', 'USD');

// $ExpectType number
const rate = computeRateBetweenSubunitAmounts('USD', 250, 'BTC', 100000000);

// $ExpectType boolean
const validCurrency = isValidCurrency('USD');

// $ExpectType boolean
const validFiatCurrency = isValidFiatCurrency('USD');

// $ExpectType boolean
const validCryptoCurrency = isValidCryptoCurrency('BTC');
