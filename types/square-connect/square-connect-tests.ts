import { Money } from 'square-connect';

enum CustomCurrencyEnum {
    CAD = 'CAD',
}

// Should work with string
const moneyUSD: Money = {
    amount: 1,
    currency: 'USD',
};

// Should work with custom enum
const moneyCAD: Money = {
    amount: 1,
    currency: CustomCurrencyEnum.CAD,
};
