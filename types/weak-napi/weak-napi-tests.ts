import weak = require('weak-napi');

const obj = {a: 123};

const weakReference = weak(obj, () => {
    // collected
});

// should also work with create alias
weak.create(obj, () => {}); // $ExpectType WeakRef<{ a: number; }>

const sameType = weak.get(weakReference);

function foo(a: {a: number}) {}

if (sameType) {
    foo(sameType);
}

const anyVar = null as any;

if (weak.isWeakRef(anyVar)) {
    const a = anyVar; // WeakRef<any>
}

if (weak.isDead(weakReference)) {
    const a = weakReference; // $ExpectType WeakRef<undefined>
    const value = weak.get(weakReference); // undefined only possible
}
