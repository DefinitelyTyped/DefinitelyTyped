import extend = require('extend');
declare function assert(cond: boolean): void;

var objectBase = {
    test: 'base'
};

var objectOne = {
    test: 'one',
    iamone: true
};

var objectTwo = {
    test: 2,
    iamtwo: true
};

var objectThree = {
    iamthree: true,
    depth: {
        innerType: 'deep'
    }
};

var extended = extend(objectBase, objectOne);
assert(extended.test === 'one');
assert(extended.iamone === true);

var moreExtended = extend(objectBase, objectOne, objectTwo);
assert(moreExtended.test === 2);
assert(moreExtended.iamone === true);
assert(moreExtended.iamtwo === true);

var deepExtended = extend(true, objectBase, objectOne, objectTwo, objectThree);
assert(deepExtended.iamone === true);
assert(moreExtended.iamtwo === true);
assert(deepExtended.iamthree === true);
assert(deepExtended.depth.innerType === 'one');