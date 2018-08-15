import parse = require('csv-parse');

function callbackAPITest() {
    const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
    parse(input, {comment: '#'}, (err, output) => {
        output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
    });
}

function streamAPITest() {
    const output: string[][] = [];
    // Create the parser
    const parser = parse({delimiter: ':'});
    // Use the writable stream api
    parser.on('readable', () => {
        while (true) {
            const record = parser.read();
            if (!record) break;
            output.push(record);
        }
    });
    // Catch any error
    parser.on('error', (err: any) => {
        console.log(err.message);
    });
    parser.on('finish', () => {
        console.log(output);
    });
    // Now that setup is done, write data to the stream
    parser.write("root:x:0:0:root:/root:/bin/bash\n");
    parser.write("someone:x:1022:1022:a funny cat:/home/someone:/bin/bash\n");
    // Close the readable stream
    parser.end();
}

import fs = require('fs');

function pipeFunctionTest() {
    const transform = require('stream-transform');

    const output: any = [];
    const parser = parse({delimiter: ':'});
    const input = fs.createReadStream('/etc/passwd');
    const transformer = transform((record: any[], callback: any) => {
    setTimeout(() => {
        callback(null, record.join(' ') + '\n');
    }, 500);
    }, {parallel: 10});
    input.pipe(parser).pipe(transformer).pipe(process.stdout);
}

import parseSync = require('csv-parse/lib/sync');

function syncApiTest() {
    const input = '"key_1","key_2"\n"value 1","value 2"';
    const records = parseSync(input, {columns: true});
    records.should.eql([{ key_1: 'value 1', key_2: 'value 2' }]);
}
