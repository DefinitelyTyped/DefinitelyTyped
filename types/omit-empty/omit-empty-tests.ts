import omitEmpty from "omit-empty";

omitEmpty({ a: 1 }); // $ExpectType Partial<{ a: number; }>
omitEmpty({ a: 0 }, { omitZero: true }); // $ExpectType Partial<{ a: number; }>
