/// <reference types="node" />
import * as assert from 'assert';
import * as extend from 'extend';

const objectBase = {
    test: 'base'
};

const objectOne = {
    test: 'one',
    iamone: true
};

const objectTwo = {
    test: 2,
    iamtwo: true
};

const objectThree = {
    iamthree: true,
    depth: {
        innerType: 'deep'
    }
};

type ExtendedType = typeof objectBase & typeof objectOne;
const extended: ExtendedType = extend(objectBase, objectOne);
assert(extended.test === 'one');
assert(extended.iamone);

type MoreExtendedType = typeof objectBase & typeof objectOne & typeof objectTwo;
const moreExtended: MoreExtendedType = extend(objectBase, objectOne, objectTwo);
assert(moreExtended.test === 2);
assert(moreExtended.iamone);
assert(moreExtended.iamtwo);

type DeepExtendedType = typeof objectBase & typeof objectOne &
  typeof objectTwo & typeof objectThree;
const deepExtended = extend(true, objectBase, objectOne, objectTwo, objectThree);
assert(deepExtended.iamone);
assert(deepExtended.iamtwo);
assert(deepExtended.iamthree);
assert(deepExtended.depth.innerType === 'deep');
