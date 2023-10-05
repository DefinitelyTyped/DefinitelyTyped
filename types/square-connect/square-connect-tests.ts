import { CatalogQuerySet, Money } from "square-connect";

enum CustomCurrencyEnum {
    CAD = "CAD",
}

// Should work with string
const moneyUSD: Money = {
    amount: 1,
    currency: "USD",
};

// Should work with custom enum
const moneyCAD: Money = {
    amount: 1,
    currency: CustomCurrencyEnum.CAD,
};

const querySet: CatalogQuerySet = {
    attribute_name: "foo",
    attribute_values: ["bar"],
};
