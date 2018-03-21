import * as fs from 'mem-fs';

const store = fs.create();
const file = store.get('hello');

store.add(file, 'hahahahah');
