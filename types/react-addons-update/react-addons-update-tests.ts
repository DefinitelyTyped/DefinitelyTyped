import update = require("react-addons-update");

// These are copied from https://facebook.github.io/react/docs/update.html
const initialArray = [1, 2, 3];
const newArray = update(initialArray, { $push: [4] }); // => [1, 2, 3, 4]

const collection = [1, 2, { a: [12, 17, 15] }];
const newCollection = update(collection, { 2: { a: { $splice: [[1, 1, 13, 14]] } } });
// => [1, 2, {a: [12, 13, 14, 15]}]

const obj = { a: 5, b: 3 };
const newObj = update(obj, {
    b: {
        $apply: x => x * 2,
    },
});
// => {a: 5, b: 6}
const newObj2 = update(obj, { b: { $set: obj.b * 2 } });

const objShallow = { a: 5, b: 3 };
const newObjShallow = update(obj, { $merge: { b: 6, c: 7 } }); // => {a: 5, b: 6, c: 7}
