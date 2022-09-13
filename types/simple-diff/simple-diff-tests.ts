import diff = require('simple-diff');

declare const oldObject: unknown;
declare const newObject: unknown;

const changes = diff(oldObject, newObject, {
    idProp: '_id',
    idProps: {
        "prop1.prop2.*.prop3": "cid"
    },
    comparators: [
        [Date, (a, b, ops) => true]
    ],
    ignore: (a, b, { oldPath }) => {
        return oldPath.join('.') === 'prop.test1';
    }
});
