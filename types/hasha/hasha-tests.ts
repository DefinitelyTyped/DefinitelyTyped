import hasha = require('hasha');

let str: string | null;
let buf: Buffer | null;

str = hasha('unicorn');
str = hasha('unicorn', {algorithm: 'md5'});
str = hasha('unicorn', {algorithm: 'md5', encoding: 'latin1'});
buf = hasha('unicorn', {algorithm: 'md5', encoding: 'buffer'});

process.stdin.pipe(hasha.stream()).pipe(process.stdout);

hasha.fromStream(process.stdin).then(hash => str = hash);
hasha.fromStream(process.stdin, {encoding: 'hex'}).then(hash => str = hash);
hasha.fromStream(process.stdin, {encoding: 'buffer'}).then(hash => buf = hash);

hasha.fromFile('unicorn.png').then(hash => str = hash);
hasha.fromFile('unicorn.png', {encoding: 'base64'}).then(hash => str = hash);
hasha.fromFile('unicorn.png', {encoding: 'buffer'}).then(hash => buf = hash);
