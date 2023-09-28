import _exchangeRates = require("exchange-rates-api");

_exchangeRates.convert(2000, "USD", "EUR", "2018-01-01");
_exchangeRates.currencies["USD"];
_exchangeRates.exchangeRates();
