import ref = require("ref-napi");
import ref_union = require("ref-union-di");
const UnionType = ref_union(ref);

declare const typeLike: string | ref.Type;
declare const buffer: Buffer;
declare const number: number;
declare const string: string;

type T = ref_union.UnionFields<any>;

// $ExpectType UnionType<any>
UnionType();
// $ExpectType UnionType<{ ival: Type<any>; fval: Type<any>; }>
UnionType({ ival: typeLike, fval: typeLike });
// $ExpectType UnionType<{ ival: Type<number>; fval: Type<number>; }>
UnionType({ ival: "int", fval: "float" });

// $ExpectType UnionType<any>
new UnionType();
// $ExpectType UnionType<{ ival: Type<any>; fval: Type<any>; }>
new UnionType({ ival: typeLike, fval: typeLike });
// $ExpectType UnionType<{ ival: Type<number>; fval: Type<number>; }>
new UnionType({ ival: "int", fval: "float" });

declare const union: ref_union.UnionType;

// $ExpectType Record<string, Field<any>>
union.fields;

// $ExpectType void
union.defineProperty(string, typeLike);

// $ExpectType string
union.toString();

// $ExpectType UnionObject<Record<string, any>>
union();
// $ExpectType UnionObject<Record<string, any>>
union(undefined);
// $ExpectType UnionObject<Record<string, any>>
union({ ival: number });
// $ExpectType UnionObject<Record<string, any>>
union(buffer);
// $ExpectType UnionObject<Record<string, any>>
union(buffer, undefined);
// $ExpectType UnionObject<Record<string, any>>
union(buffer, { ival: number });

// $ExpectType UnionObject<Record<string, any>>
new union();
// $ExpectType UnionObject<Record<string, any>>
new union(undefined);
// $ExpectType UnionObject<Record<string, any>>
new union({ ival: number });
// $ExpectType UnionObject<Record<string, any>>
new union(buffer);
// $ExpectType UnionObject<Record<string, any>>
new union(buffer, undefined);
// $ExpectType UnionObject<Record<string, any>>
new union(buffer, { ival: number });

declare const int32tofloat32: ref_union.UnionType<{ ival: ref.Type<number>; fval: ref.Type<number> }>;

// $ExpectType { ival: Field<number>; fval: Field<number>; }
int32tofloat32.fields;

// $ExpectType UnionObject<{ ival: number; fval: number; }>
int32tofloat32();
// $ExpectType UnionObject<{ ival: number; fval: number; }>
int32tofloat32({ ival: 1 });
// $ExpectType UnionObject<{ ival: number; fval: number; }>
int32tofloat32({ fval: 1.1 });
// @ts-expect-error
int32tofloat32({ ival: 1, fval: 1.1 });

// $ExpectType UnionObject<{ ival: number; fval: number; }>
new int32tofloat32();
// $ExpectType UnionObject<{ ival: number; fval: number; }>
new int32tofloat32({ ival: 1 });
// $ExpectType UnionObject<{ ival: number; fval: number; }>
new int32tofloat32({ fval: 1.1 });
// @ts-expect-error
new int32tofloat32({ ival: 1, fval: 1.1 });

declare const i2f: ReturnType<typeof int32tofloat32>;

// $ExpectType number
i2f.ival;

// $ExpectType number
i2f.fval;

// $ExpectType Pointer<UnionObject<{ ival: number; fval: number; }>>
i2f.ref();
