// WAValidator is exposed as a global (window.WAValidator)

WAValidator.validate("1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck"); // $ExpectType boolean
WAValidator.getCurrencies(); // $ExpectType Currency[]
WAValidator.findCurrency("BTC"); // $ExpectType Currency | null
