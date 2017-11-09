import * as deepmerge from "deepmerge";

const x = {
    foo: { bar: 3 },
    array: [{ does: 'work', too: [1, 2, 3] }]
};
const y = {
    foo: { baz: 4 },
    quux: 5,
    array: [{ does: 'work', too: [4, 5, 6] }, { really: 'yes' }]
};

const expected = {
    foo: { bar: 3, baz: 4 },
    array: [{ does: 'work', too: [1, 2, 3, 4, 5, 6] }, { really: 'yes' }],
    quux: 5
};

const result = deepmerge(x, y);
const anyResult = deepmerge<any>(x, y);

function reverseConcat(dest: number[], src: number[]) {
    return src.concat(dest);
}

const withOptions = deepmerge(x, y, {
    clone: false,
    arrayMerge: reverseConcat
});
