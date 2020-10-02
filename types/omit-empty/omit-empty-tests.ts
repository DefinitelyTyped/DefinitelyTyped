import omitEmpty from 'omit-empty';

omitEmpty({ a: 1 }); // $ExpectType object
omitEmpty({ a: 0}, { omitZero: true }); // $ExpectType object
