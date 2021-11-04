import ref = require("ref-napi");
import ref_struct = require("ref-struct-di");
const StructType = ref_struct(ref);

const normalStruct = StructType({
  t: ref.types.uint8,
  v: ref.types.long,
});

const packedStruct = StructType({
  t: ref.types.uint8,
  v: ref.types.long,
}, {packed: true});

declare const typeLike: string | ref.Type;
declare const buffer: Buffer;
declare const number: number;
declare const string: string;
declare const boolean: boolean;

// $ExpectType StructType
StructType();
// $ExpectType StructType
StructType(undefined);
// $ExpectType StructType
StructType(undefined, undefined);
// $ExpectType StructType
StructType({ x: typeLike });
// $ExpectType StructType
StructType({ x: typeLike }, undefined);
// $ExpectType StructType
StructType({ x: typeLike }, { packed: boolean });
// $ExpectType StructType
StructType([[typeLike, "x"]]);
// $ExpectType StructType
StructType([[typeLike, "x"]], undefined);
// $ExpectType StructType
StructType([[typeLike, "x"]], { packed: boolean });

// $ExpectType StructType
new StructType();
// $ExpectType StructType
new StructType(undefined);
// $ExpectType StructType
new StructType(undefined, undefined);
// $ExpectType StructType
new StructType({ x: typeLike });
// $ExpectType StructType
new StructType({ x: typeLike }, undefined);
// $ExpectType StructType
new StructType({ x: typeLike }, { packed: boolean });
// $ExpectType StructType
new StructType([[typeLike, "x"]]);
// $ExpectType StructType
new StructType([[typeLike, "x"]], undefined);
// $ExpectType StructType
new StructType([[typeLike, "x"]], { packed: boolean });

declare const struct: ref_struct.StructType;

// $ExpectType Record<string, any>
struct();
// $ExpectType Record<string, any>
struct(undefined);
// $ExpectType Record<string, any>
struct({ x: number });
// $ExpectType Record<string, any>
struct(buffer);
// $ExpectType Record<string, any>
struct(buffer, undefined);
// $ExpectType Record<string, any>
struct(buffer, { x: number });

// $ExpectType Record<string, any>
new struct();
// $ExpectType Record<string, any>
new struct(undefined);
// $ExpectType Record<string, any>
new struct({ x: number });
// $ExpectType Record<string, any>
new struct(buffer);
// $ExpectType Record<string, any>
new struct(buffer, undefined);
// $ExpectType Record<string, any>
new struct(buffer, { x: number });

// $ExpectType Record<string, Field>
struct.fields;

// $ExpectType void
struct.defineProperty(string, typeLike);

// $ExpectType string
struct.toString();
