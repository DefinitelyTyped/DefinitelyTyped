import ref = require("ref-napi");
import ref_union = require("ref-union-di");
const UnionType = ref_union(ref);

declare const typeLike: string | ref.Type;
declare const buffer: Buffer;
declare const number: number;
declare const string: string;

// $ExpectType UnionType
UnionType();
// $ExpectType UnionType
UnionType({
    ival: typeLike,
    fval: typeLike,
});

// $ExpectType UnionType
new UnionType();
// $ExpectType UnionType
new UnionType({
    ival: typeLike,
    fval: typeLike,
});

declare const union: ref_union.UnionType;

// $ExpectType Record<string, Field>
union.fields;

// $ExpectType void
union.defineProperty(string, typeLike);

// $ExpectType string
union.toString();

// $ExpectType Record<string, any>
union();
// $ExpectType Record<string, any>
union(undefined);
// $ExpectType Record<string, any>
union({ ival: number });
// $ExpectType Record<string, any>
union(buffer);
// $ExpectType Record<string, any>
union(buffer, undefined);
// $ExpectType Record<string, any>
union(buffer, { ival: number });

// $ExpectType Record<string, any>
new union();
// $ExpectType Record<string, any>
new union(undefined);
// $ExpectType Record<string, any>
new union({ ival: number });
// $ExpectType Record<string, any>
new union(buffer);
// $ExpectType Record<string, any>
new union(buffer, undefined);
// $ExpectType Record<string, any>
new union(buffer, { ival: number });
