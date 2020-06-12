import Dinero = require('dinero.js');

// Defaults
Dinero.defaultAmount = 100;
Dinero.defaultCurrency = 'USD';
Dinero.defaultPrecision = 2;
// Globals
Dinero.globalLocale = 'en-US';
Dinero.globalFormat = '0,0 dollar';
Dinero.globalRoundingMode = 'HALF_UP';
Dinero.globalFormatRoundingMode = '0,0 dollar';
Dinero.globalExchangeRatesApi = {
    endpoint: 'https://yourexchangerates.api/latest?base={{from}}',
    propertyPath: 'data.rates.{{to}}',
    headers: {
        'user-key': 'xxxxxxxxx',
    },
};
Dinero.globalExchangeRatesApi = {
    endpoint: 'https://yourexchangerates.api/latest?base={{from}}',
    propertyPath: 'data.rates.{{to}}',
    roundingMode: 'HALF_UP',
};
Dinero.globalExchangeRatesApi = {
    endpoint: new Promise((resolve) =>
        resolve({
            data: {
                rates: {
                    USD: 1.337,
                },
            },
        }),
    ),
    propertyPath: 'data.rates.{{to}}',
    roundingMode: 'HALF_UP',
};

Dinero();
Dinero({amount: 1});
Dinero({currency: 'USD'});
Dinero({precision: 2});

let number: number;
let string: string;
let boolean: boolean;

let dinero: Dinero.Dinero = Dinero();
let dineroArr: Dinero.Dinero[];
let dineroObject: Dinero.DineroObject;

number = dinero.getAmount();
string = dinero.getCurrency();
string = dinero.setLocale('fr-FR').getLocale();
number = dinero.convertPrecision(4).getPrecision();
number = dinero.convertPrecision(4, 'HALF_DOWN').getPrecision();
dinero = dinero.add(Dinero({amount: 104545, precision: 4}));
dinero = dinero.subtract(Dinero({amount: 104545, precision: 4}));
dinero = dinero.multiply(2.00125);
dinero = dinero.multiply(2.00125, 'HALF_UP');
dinero = dinero.divide(2);
dinero = dinero.divide(2, 'HALF_UP');
dinero = dinero.percentage(50);
dineroArr = dinero.allocate([50, 50]);
dinero.convert('EUR').then(d => (dinero = d));
dinero.convert('XBT', {
    endpoint: 'https://yourexchangerates.api/latest?base={{from}}',
    propertyPath: 'data.rates.{{to}}',
    headers: {
        'user-key': 'xxxxxxxxx',
    },
    roundingMode: 'HALF_UP',
});
boolean = dinero.equalsTo(Dinero({amount: 500, currency: 'EUR'}));
boolean = dinero.lessThan(Dinero({amount: 800}));
boolean = dinero.lessThanOrEqual(Dinero({amount: 800}));
boolean = dinero.greaterThan(Dinero({amount: 800}));
boolean = dinero.greaterThanOrEqual(Dinero({amount: 800}));
boolean = dinero.isZero();
boolean = dinero.isPositive();
boolean = dinero.isNegative();
boolean = dinero.hasSubUnits();
boolean = dinero.hasCents();
boolean = dinero.hasSameCurrency(Dinero({amount: 1000, currency: 'EUR'}));
boolean = dinero.hasSameAmount(Dinero({amount: 1000, currency: 'EUR'}));
string = dinero.toFormat('0,0 dollar');
string = dinero.toFormat('0,0 dollar', 'HALF_EVEN');
number = dinero.toUnit();
number = dinero.toRoundedUnit(1);
number = dinero.toRoundedUnit(1, 'HALF_EVEN');
dineroObject = dinero.toObject();
dineroObject = dinero.toJSON();
dineroArr = Dinero.normalizePrecision([
    Dinero({amount: 100, precision: 2}),
    Dinero({amount: 1000, precision: 3}),
]);
dinero = Dinero.minimum([
    Dinero({amount: 100}),
    Dinero({amount: 1000}),
]);
dinero = Dinero.maximum([
    Dinero({amount: 100}),
    Dinero({amount: 1000}),
]);
