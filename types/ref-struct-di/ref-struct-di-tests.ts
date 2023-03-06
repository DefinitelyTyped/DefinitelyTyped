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

declare const typeLike: ref.TypeLike;
declare const buffer: Buffer;
declare const number: number;
declare const string: string;
declare const boolean: boolean;

// $ExpectType StructType<any>
StructType();
// $ExpectType StructType<any>
StructType(undefined);
// $ExpectType StructType<any>
StructType(undefined, undefined);
// $ExpectType StructType<{ x: Type<any>; }>
StructType({ x: typeLike });
// $ExpectType StructType<{ x: Type<any>; }>
StructType({ x: typeLike }, undefined);
// $ExpectType StructType<{ x: Type<any>; }>
StructType({ x: typeLike }, { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
StructType({ x: ref.types.int }, { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
StructType({ x: "int" }, { packed: boolean });
// $ExpectType StructType<{ x: Type<any>; }>
StructType([[typeLike, "x"]]);
// $ExpectType StructType<{ x: Type<any>; }>
StructType([[typeLike, "x"]], undefined);
// $ExpectType StructType<{ x: Type<any>; }>
StructType([[typeLike, "x"]], { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
StructType([[ref.types.int, "x"]], { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
StructType([["int", "x"]], { packed: boolean });

// $ExpectType StructType<any>
new StructType();
// $ExpectType StructType<any>
new StructType(undefined);
// $ExpectType StructType<any>
new StructType(undefined, undefined);
// $ExpectType StructType<{ x: Type<any>; }>
new StructType({ x: typeLike });
// $ExpectType StructType<{ x: Type<any>; }>
new StructType({ x: typeLike }, undefined);
// $ExpectType StructType<{ x: Type<any>; }>
new StructType({ x: typeLike }, { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
new StructType({ x: ref.types.int }, { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
new StructType({ x: "int" }, { packed: boolean });
// $ExpectType StructType<{ x: Type<any>; }>
new StructType([[typeLike, "x"]]);
// $ExpectType StructType<{ x: Type<any>; }>
new StructType([[typeLike, "x"]], undefined);
// $ExpectType StructType<{ x: Type<any>; }>
new StructType([[typeLike, "x"]], { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
new StructType([[ref.types.int, "x"]], { packed: boolean });
// $ExpectType StructType<{ x: Type<number>; }>
new StructType([["int", "x"]], { packed: boolean });

declare const struct: ref_struct.StructType;

// $ExpectType Record<string, Field<any>>
struct.fields;

// $ExpectType void
struct.defineProperty(string, typeLike);

// $ExpectType string
struct.toString();

// $ExpectType StructObject<Record<string, any>>
struct();
// $ExpectType StructObject<Record<string, any>>
struct(undefined);
// $ExpectType StructObject<Record<string, any>>
struct({ x: number });
// $ExpectType StructObject<Record<string, any>>
struct(buffer);
// $ExpectType StructObject<Record<string, any>>
struct(buffer, undefined);
// $ExpectType StructObject<Record<string, any>>
struct(buffer, { x: number });

// $ExpectType StructObject<Record<string, any>>
new struct();
// $ExpectType StructObject<Record<string, any>>
new struct(undefined);
// $ExpectType StructObject<Record<string, any>>
new struct({ x: number });
// $ExpectType StructObject<Record<string, any>>
new struct(buffer);
// $ExpectType StructObject<Record<string, any>>
new struct(buffer, undefined);
// $ExpectType StructObject<Record<string, any>>
new struct(buffer, { x: number });

declare const Point: ref_struct.StructType<{ x: ref.Type<number>, y: ref.Type<number> }>;

// $ExpectType { x: Field<number>; y: Field<number>; }
Point.fields;

// $ExpectType StructObject<{ x: number; y: number; }>
Point();
// $ExpectType StructObject<{ x: number; y: number; }>
Point(undefined);
// $ExpectType StructObject<{ x: number; y: number; }>
Point({ x: number });
// $ExpectType StructObject<{ x: number; y: number; }>
Point(buffer);
// $ExpectType StructObject<{ x: number; y: number; }>
Point(buffer, undefined);
// $ExpectType StructObject<{ x: number; y: number; }>
Point(buffer, { x: number });

// $ExpectType StructObject<{ x: number; y: number; }>
new Point();
// $ExpectType StructObject<{ x: number; y: number; }>
new Point(undefined);
// $ExpectType StructObject<{ x: number; y: number; }>
new Point({ x: number });
// $ExpectType StructObject<{ x: number; y: number; }>
new Point(buffer);
// $ExpectType StructObject<{ x: number; y: number; }>
new Point(buffer, undefined);
// $ExpectType StructObject<{ x: number; y: number; }>
new Point(buffer, { x: number });

declare const point: ReturnType<typeof Point>;

// $ExpectType number
point.x;

// $ExpectType number
point.y;

// $ExpectType any
point.toObject();

// $ExpectType any
point.toJSON();

// $ExpectType string
point.inspect();

// $ExpectType Pointer<StructObject<{ x: number; y: number; }>>
point.ref();
