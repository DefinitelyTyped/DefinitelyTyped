import * as fs from 'mem-fs';

const store: fs.Store = fs.create();
const file = store.get('hello');

const file2 = store.add(file)
    .each(file => console.dir(store.get(file.path)))
    .get('test');
