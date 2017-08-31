import * as vfile from 'vfile';
import * as Unist from 'unist';

vfile();
vfile('string');
vfile(Buffer.from('string'));
vfile(vfile());
vfile({ stem: 'readme', extname: '.md' });
vfile({ custom: 'data' });
try {
    vfile({ extname: '.md' });
} catch (e) {
    console.log('Error: set extname without path');
}

const file: vfile.VFile = vfile({ contents: 'contents' });

file.path = '~/readme.txt';
file.basename = 'example.txt';
file.stem = 'readme';
file.extname = '.md';
file.data = {
    key: 'value',
};

const history: string[] = file.history;
const contents: string = file.toString();

console.log('file.history =>', history);
console.log('file.contents =>', contents);

const position: Unist.Point = {
    line: 1,
    column: 1,
};

file.message('reason', position);
file.info('reason', position);
try {
    file.fail('reason', position);
} catch (e) {
    console.log('Error: associated a fatal message');
}

const messages: vfile.VFileMessage[] = file.messages;

console.log('file.messages =>', messages);
