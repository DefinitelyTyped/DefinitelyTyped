import weak = require('weak');

const obj = {a: 123};

const weakReference = weak(obj, () => {
    // collected
});

const sameType = weak.get(weakReference);
