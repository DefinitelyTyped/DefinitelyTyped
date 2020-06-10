import makeTrashable = require('trashable');

const booleanPromise = new Promise<boolean>(resolve => {
    resolve(true);
});
const trashableBooleanPromise = makeTrashable(booleanPromise); // $ExpectType TrashablePromise<boolean>
trashableBooleanPromise.trash(); // $ExpectType void

const complexPromise = new Promise<{ a: number; b: string }>(resolve => {
    resolve({ a: 1, b: '1' });
});
const trashableComplexPromise = makeTrashable(complexPromise); // $ExpectType TrashablePromise<{ a: number; b: string; }>
trashableComplexPromise.trash(); // $ExpectType void
