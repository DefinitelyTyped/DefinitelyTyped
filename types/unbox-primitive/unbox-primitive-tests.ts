/// <reference types="node" />

import unboxPrimitive = require("unbox-primitive");

unboxPrimitive(new Boolean(false)); // $ExpectType boolean
unboxPrimitive(new String("f")); // $ExpectType string
unboxPrimitive(new Number(42)); // $ExpectType number
unboxPrimitive(Object(Symbol()) as Symbol); // $ExpectType symbol
unboxPrimitive(Object(BigInt(42)) as BigInt); // $ExpectType bigint

// @ts-expect-error
unboxPrimitive(() => {});
// @ts-expect-error
unboxPrimitive(null);
// @ts-expect-error
unboxPrimitive(undefined);
// @ts-expect-error
unboxPrimitive({});
// @ts-expect-error
unboxPrimitive([]);
