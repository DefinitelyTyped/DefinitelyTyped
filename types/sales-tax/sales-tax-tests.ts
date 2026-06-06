import SalesTax = require("sales-tax");

SalesTax.setTaxOriginCountry("US");

SalesTax.toggleEnabledTaxNumberFraudCheck(true);
SalesTax.toggleEnabledTaxNumberValidation(true);

const hasSalesTax: boolean = SalesTax.hasSalesTax("GB");
const hasStateSalesTax: boolean = SalesTax.hasStateSalesTax("US", "CA");

SalesTax.getSalesTax("GB");
SalesTax.getSalesTax("US", "CA");
SalesTax.getSalesTax("GB", null, "GB123456789");
SalesTax.getSalesTax("US", "CA", "GB123456789");

async function run() {
    const result = await SalesTax.getSalesTax("GB");
    // $ExpectType "worldwide" | "national" | "regional"
    result.area;
    // $ExpectType boolean
    result.charge.direct;
    // $ExpectType boolean
    result.charge.reverse;
    // $ExpectType number
    result.details[0].rate;
    // $ExpectType "business" | "consumer"
    result.exchange;
    // $ExpectType number
    result.rate;
    // $ExpectType string
    result.type;
}
