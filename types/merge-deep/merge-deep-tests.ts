import merge = require('merge-deep');

merge({a: {b: {c: 'c', d: 'd'}}}, {a: {b: {e: 'e', f: 'f'}}});

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
const extended: ExtendedType = merge(objectBase, objectOne);
extended.test === 'one';
extended.iamone;

type MoreExtendedType = typeof objectBase & typeof objectOne & typeof objectTwo;
const moreExtended: MoreExtendedType = merge(objectBase, objectOne, objectTwo);
moreExtended.test === 2;
moreExtended.iamone;
moreExtended.iamtwo;

type DeepExtendedType = typeof objectBase & typeof objectOne &
  typeof objectTwo & typeof objectThree;
const deepExtended: DeepExtendedType = merge(objectBase, objectOne, objectTwo, objectThree);
deepExtended.iamone;
deepExtended.iamtwo;
deepExtended.iamthree;
deepExtended.depth.innerType === 'deep';
