import weak = require('weak');

const obj = {a: 123};

const weakReference = weak(obj, () => {
    // collected
});

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
    const a = weakReference; // WeakRef<undefined>
    const value = weak.get(weakReference); // undefined only possible
}
