import countries = require('country-list-js');
countries.names(); // $ExpectType string[]
countries.continents(); // $ExpectType string[]
countries.capitals(); // $ExpectType string[]
countries.ls('name'); // $ExpectType (string | undefined)[]
countries.findByIso2('foo'); // $ExpectType Country | undefined
countries.findByIso3('foo'); // $ExpectType Country | undefined
countries.findByName('foo'); // $ExpectType Country | undefined
countries.findByCapital('foo'); // $ExpectType Country | undefined
countries.findByCurrency('foo'); // $ExpectType Country | undefined
countries.findByPhoneNbr('foo'); // $ExpectType Country | undefined
countries.findByProvince('foo'); // $ExpectType Country | undefined
