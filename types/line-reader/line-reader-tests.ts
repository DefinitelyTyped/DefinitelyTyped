

import lineReader = require('line-reader');

const eachLine = (
    filename: string | NodeJS.ReadableStream,
    options: LineReaderOptions,
    iteratee: (line: string, last?: boolean, cb?: Function) => void,
): Promise<void> =>
    new Promise((resolve, reject) => {
        lineReader.eachLine(filename, options, iteratee, (err: Error) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });

eachLine('line-reader-tests.ts', {}, function(line) {
    console.log(line);
})
    .then(function() {
        console.log('done');
    })
    .catch(function(err: Error) {
        console.error(err);
    });

lineReader.open('line-reader-tests.ts', function(err: Error, reader: LineReader) {
    if (err) throw err;
    if (reader.hasNextLine()) {
        try {
            reader.nextLine(function(err: Error, line: string) {
                if (err) throw err;
                console.log(line);
            });
        } finally {
            reader.close(function(err: Error) {
                if (err) throw err;
            })
        }
    }
    else {
        reader.close(function(err: Error) {
            if (err) throw err;
        });
    }
});

lineReader.eachLine('line-reader.d.ts', {encoding: 'utf8'}, function(line: string, last: boolean) {
    console.log(line);
    if (last) console.log('<EOF>');
});
