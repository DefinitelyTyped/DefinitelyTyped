import Money = require('js-money');
import * as CurrencyObjects from 'js-money/lib/currency';

const money = new Money(1500, 'USD');
const other = new Money(100, Money.THB);

// instance method checks
new Money(123, Money.TRY); // $ExpectType Money
new Money(1500, 'USD'); // $ExpectType Money
money.amount; // $ExpectType number
money.currency; // $ExpectType string
money.equals(other); // $ExpectType boolean
money.add(other); // $ExpectType Money
money.subtract(other); // $ExpectType Money
money.multiply(1); // $ExpectType Money
money.multiply(2, Math.round); // $ExpectType Money
money.divide(1); // $ExpectType Money
money.divide(1, Math.ceil); // $ExpectType Money
money.allocate([1, 2, 3]); // $ExpectType Money[]
money.compare(other); // $ExpectType number
money.greaterThan(other); // $ExpectType boolean
money.greaterThanOrEqual(other); // $ExpectType boolean
money.lessThan(other); // $ExpectType boolean
money.lessThanOrEqual(other); // $ExpectType boolean
money.isZero(); // $ExpectType boolean
money.isPositive(); // $ExpectType boolean
money.isNegative(); // $ExpectType boolean
money.toDecimal(); // $ExpectType number
money.toString(); // $ExpectType string
money.toJSON(); // $ExpectType MoneyObjectOut
money.toJSON().amount; // $ExpectType number
money.toJSON().currency; // $ExpectType string
money.getAmount(); // $ExpectType number
money.getCurrency(); // $ExpectType string

// static method checks
Money.fromInteger(100, 'USD'); // $ExpectType Money
Money.fromDecimal(100, Money.KZT, 'ceil'); // $ExpectType Money
Money.fromDecimal(100, Money.KZT); // $ExpectType Money
Money.fromDecimal(100, Money.KZT, Math.ceil); // $ExpectType Money

// static properties (currency) check
Money.KZT; // $ExpectType Currency
Money.RUB; // $ExpectType Currency
Money.BLABLA; // $ExpectError
// currency object check
Money.RUB.code; // $ExpectType string
Money.RUB.decimal_digits; // $ExpectType number
Money.RUB.name; // $ExpectType string
Money.RUB.name_plural; // $ExpectType string
Money.RUB.rounding; // $ExpectType number
Money.RUB.symbol; // $ExpectType string
Money.RUB.symbol_native; // $ExpectType string

// Currency module check
CurrencyObjects.NIO.code; // $ExpectType string
CurrencyObjects.NIO.decimal_digits; // $ExpectType number
CurrencyObjects.NIO.name; // $ExpectType string
CurrencyObjects.NIO.name_plural; // $ExpectType string
CurrencyObjects.NIO.rounding; // $ExpectType number
CurrencyObjects.NIO.symbol; // $ExpectType string
CurrencyObjects.NIO.symbol_native; // $ExpectType string
CurrencyObjects['UAH'].code;  // $ExpectType string
