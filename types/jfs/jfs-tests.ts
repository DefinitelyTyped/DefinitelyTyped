import * as Store from 'jfs';

interface TestStore {
    foo: string;
    bar: number;
}

const db = new Store<TestStore>('data', {type: 'memory'});

// save with custom ID
db.save('bar', 123, (err, id) => {
    // now the data is stored in the file data/anId.json
});

// save with generated ID
db.save(333, (err, id) => {
    // id is a unique ID
});

// save synchronously
db.saveSync('foo', 'test');

db.get('bar', (err, obj) => {
    // obj = { foo: ''bar' }
});

// get synchronously
const val = db.getSync('bar');

// get all available objects
db.all((err, objs) => {
    // objs is a map: ID => OBJECT
});

// get all synchronously
const objs = db.allSync();

// delete by ID
db.delete('foo', err => {
    // the file data/myId.json was removed
});

// delete synchronously
db.deleteSync('bar');
