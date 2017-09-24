import tempWrite = require('temp-write');

tempWrite('unicorn').then(path => {
    path; // $ExpectType string
});
tempWrite('unicorn', 'pony.png'); // $ExpectType Promise<string>
tempWrite(process.stdin, 'pony.png');
tempWrite(new Buffer('pony'), 'pony.png');

tempWrite.sync('unicorn'); // $ExpectType string
tempWrite.sync(new Buffer('unicorn'));
tempWrite.sync('unicorn', 'pony.png');
