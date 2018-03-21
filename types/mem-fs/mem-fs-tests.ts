import * as fs from 'mem-fs';

const store = fs.create();
const file = store.get('hello');

store.add(file, 'hahahahah');

store.each((file, index) => console.log(index, file.path));
