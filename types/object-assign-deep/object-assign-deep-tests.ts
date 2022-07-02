import objectAssignDeep = require('object-assign-deep');

const objectA = {
    prop1: `Hello`,
    prop2: `World`,
    nested: {
        bool: true,
        super: 123,
        still: `here!`,
    },
    array1: [1, 2, 3],
    array2: [4, 5, 6],
};

const objectB = {
    prop2: `Universe`,
    name: `Josh`,
    nested: {
        bool: false,
    },
    array1: null,
};

const objectC = {
    location: `United Kingdom`,
    name: `Bob`,
    nested: {
        super: 999,
    },
    array2: [100, 101, 102],
};

const result: {
    array1: null,
    array2: number[],
    location: string,
    name: string,
    nested: {
        bool: boolean,
        still: string,
        super: number
    },
    prop1: string,
    prop2: string
} = objectAssignDeep(objectA, objectB, objectC);
