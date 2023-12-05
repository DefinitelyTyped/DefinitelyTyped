import isWeakRef = require("is-weakref");

// $ExpectType boolean
isWeakRef(new WeakRef({}));

// $ExpectType boolean
isWeakRef({});

// $ExpectType boolean
isWeakRef("foo");

const weakRef = new WeakRef({});

if (isWeakRef(weakRef)) {
    // $ExpectType WeakRef<{}>
    weakRef;

    weakRef.deref();
} else {
    // $ExpectType never
    weakRef;
}

const x: unknown = new WeakRef({});

if (isWeakRef(x)) {
    // $ExpectType WeakRef<any>
    x;

    x.deref();
} else {
    // $ExpectType unknown
    x;
}
