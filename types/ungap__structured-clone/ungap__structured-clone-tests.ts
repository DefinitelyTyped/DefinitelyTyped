import structuredClone = require('@ungap/structured-clone');

interface AnyRecord {
    any: string;
}
const serializable: AnyRecord = { any: 'serializable' };

structuredClone(serializable); // $ExpectType AnyRecord
structuredClone.serialize({ any: 'serializable' }); // $ExpectType SerializedRecord
// prettier-ignore
structuredClone.deserialize([ // $ExpectType any
    [2, [[1, 2]]],
    [0, 'any'],
    [0, 'serializable'],
] as structuredClone.SerializedRecord);
