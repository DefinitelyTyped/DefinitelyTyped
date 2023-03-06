import clean = require('aero__sanitizer');

clean('Thís îs à stríng with ãççénts'); // $ExpectType string
// @ts-expect-error
clean(1);
