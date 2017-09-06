import vfile = require("vfile");

const file = vfile({path: '~/example.txt', contents: 'Alpha *braavo* charlie.'});

file.path; // => '~/example.txt'
file.dirname; // => '~'

file.extname = '.md';

file.basename; // => 'example.md'

file.basename = 'index.text';

file.history; // => ['~/example.txt', '~/example.md', '~/index.text']

file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8});

console.log(file.messages);
