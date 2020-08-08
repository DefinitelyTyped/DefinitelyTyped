import clone = require('clone');

const original = {
    key: 'value',
};

let copy = clone(original);

copy = clone(original, false);
copy = clone(original, true, 1);
copy = clone(original, true, 1, {});
copy = clone(original, true, 1, {}, true);

copy = clone(original, {});
copy = clone(original, { circular: false });
copy = clone(original, { circular: true, depth: 1 });
copy = clone(original, { circular: true, depth: 2, prototype: {} });
copy = clone(original, { circular: true, depth: 3, prototype: {}, includeNonEnumerable: true });

copy = clone.clonePrototype(original);
