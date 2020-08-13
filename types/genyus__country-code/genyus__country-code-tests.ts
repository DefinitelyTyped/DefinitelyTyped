import cc = require('@genyus/country-code');

cc.find({ name: 'Algeria' }); // $ExpectType Country | undefined
cc.nameIncludes('Trinidad', { accuracy: 0.7 }); // $ExpectType Country[]

cc.countries.DZA.name; // $ExpectType string
cc.countries.DZA.alpha2; // $ExpectType string
cc.countries.POL.alpha3; // $ExpectTYpe string
cc.countries.GBR.isoNumeric; // $ExpectType string
