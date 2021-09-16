import clean from 'aero__sanitizer';

clean('Thís îs à stríng with ãççénts'); // $ExpectType string
clean(1); // $ExpectError
