import { superstruct, isStruct, struct, StructError } from "superstruct";

// $ExpectType struct
let myStruct = superstruct();

// $ExpectType struct
myStruct = superstruct({
	types: {
		id: (value: any) => typeof value === "string" && /^[a-z0-9]+$/.test(value)
	}
});

// $ExpectError
isStruct();

// $ExpectType boolean
isStruct(myStruct);

// $ExpectError
let MyOtherStruct = myStruct();

// $ExpectType Struct
MyOtherStruct = myStruct({
	id: 'id',
	password: struct.function(value => typeof value === "string" && value.length > 5),
	passwordRepeat: struct.function((value, data) => data.password && value === data.password)
});

const value: object = { id: "5n4r3", password: "****", passwordRepeat: "****" };

// $ExpectType any
MyOtherStruct(value);

// $ExpectType any
MyOtherStruct.assert(value);

// $ExpectType boolean
MyOtherStruct.test(value);

// $ExpectType [StructError] | [undefined, any]
MyOtherStruct.validate(value);

// $ExpectType Kind
struct.any("any");
// $ExpectType Kind
struct.dict(['string', Date]);
// $ExpectType Kind
struct.enum(['one', 'two']);
// $ExpectType Kind
struct.function(value => typeof value === 'string');
// $ExpectType Kind
struct.instance(Date);
// $ExpectType Kind
struct.interface({
	property: 'number',
	method: 'function',
});
// $ExpectType Kind
struct.intersection(['string', 'email']);
// $ExpectType Struct
const BinaryTree: any = struct({
	value: 'any',
	left: struct.lazy(() => struct.optional(BinaryTree)),
	right: struct.lazy(() => struct.optional(BinaryTree)),
});
// $ExpectType Kind
struct.list(['string']);
// $ExpectType Kind
struct.literal(42);
// $ExpectType Kind
struct.object({
	id: 'number',
	name: 'string',
});
// $ExpectType Kind
struct.optional('string');
// $ExpectType Kind
struct.partial({
	a: 'number',
	b: 'number',
});
// $ExpectType Kind
struct.scalar('string');
// $ExpectType Kind
struct.tuple(['string', 'number', 'boolean']);
// $ExpectType Kind
struct.union(['string', 'number']);
