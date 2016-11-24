import parse = require('csv-parse');

function callbackAPITest() {
    var input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
    parse(input, {comment: '#'}, function(err, output){
    output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
    });
}

function streamAPITest() {
    let output:string[][] = [];
    // Create the parser
    var parser = parse({delimiter: ':'});
    let record: string[];
    // Use the writable stream api
    parser.on('readable', function(){
        while(record = parser.read()){
            output.push(record);
        }
    });
    // Catch any error
    parser.on('error', function(err: any){
        console.log(err.message);
    });
    parser.on('finish', function(){
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
    var transform = require('stream-transform');

    var output:any = [];
    var parser = parse({delimiter: ':'})
    var input = fs.createReadStream('/etc/passwd');
    var transformer = transform(function(record: any[], callback: any){
    setTimeout(function(){
        callback(null, record.join(' ')+'\n');
    }, 500);
    }, {parallel: 10});
    input.pipe(parser).pipe(transformer).pipe(process.stdout);
}

import parseSync = require('csv-parse/lib/sync');

function syncApiTest() {
    var input = '"key_1","key_2"\n"value 1","value 2"';
    var records = parseSync(input, {columns: true});
    records.should.eql([{ key_1: 'value 1', key_2: 'value 2' }]);
}

