import * as fs from 'mem-fs';

const store: fs.Store = fs.create();
const file = store.get('hello');

store.add(file, 'hahahahah');

store.each(file => console.dir(store.get(file.path)));
