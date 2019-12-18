import { diff, observableDiff, applyChange, Diff } from 'deep-diff';

let lhs = {
    name: 'my object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
    }
};

let rhs = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
    }
};

const differences: Array<Diff<any>> = diff(lhs, rhs);

console.log(differences);

// --------------------------

lhs = {
    name: 'my object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'elements']
    }
};

rhs = {
    name: 'updated object',
    description: 'it\'s an object!',
    details: {
        it: 'has',
        an: 'array',
        with: ['a', 'few', 'more', 'elements', { than: 'before' }]
    }
};

observableDiff(lhs, rhs, d => {
    // Apply all changes except those to the 'name' property...
    if (d.path.length !== 1 || d.path.join('.') !== 'name') {
        applyChange(lhs, rhs, d);
    }
});
