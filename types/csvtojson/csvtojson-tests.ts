import csv = require('csvtojson');
import fs = require('fs');

// From documentation on project home page -> https://github.com/Keyang/node-csvtojson

/////////////////////////////
// From CSV String
const csvStr: string = `1,2,3
4,5,6
7,8,9`;

// Factory instantiation with options.
csv({
    noheader: true,
    constructResult: false,
    delimiter: 'auto',
    checkType: false,
    trim: true,
    workerNum: 2,
    checkColumn: true,
    maxRowLength: 65535
});

// event emitter version using factory function
csv({ noheader: true })
    .fromString(csvStr)
    .on('csv', (csvRow: string[]) => {  // this func will be called 3 times
        console.log(csvRow);                        // => [1,2,3] , [4,5,6]  , [7,8,9]
    })
    .on('done', () => {
        // parsing finished
    });

// event emitter version using Converter class
new csv.Converter({ noheader: true })
    .fromString(csvStr)
    .on('csv', (csvRow: string[]) => {  // this func will be called 3 times
        console.log(csvRow);                        // => [1,2,3] , [4,5,6]  , [7,8,9]
    })
    .on('done', () => {
        // parsing finished
    });

// callback version using Converter class
new csv.Converter({ noheader: true })
    .fromString(csvStr, (err, result) => {
        console.log(JSON.stringify(result));
    });

// callback version using factory function
csv({ noheader: true })
    .fromString(csvStr, (err, result) => {
        console.log(JSON.stringify(result));
    });

/////////////////////////////
// From CSV File
const filePath = './test.csv';

// event emitter version using factory function
csv()
    .fromFile(filePath)
    .on('json', (jsonObj: any) => {
        console.log(JSON.stringify(jsonObj));
    })
    .on('done', (error: any) => {
        console.log('end');
    });

// event emitter version using Converter class
new csv.Converter()
    .fromFile(filePath)
    .on('json', (jsonObj: any) => {
        console.log(JSON.stringify(jsonObj));
    })
    .on('done', (error: any) => {
        console.log('end');
    });

// callback version using factory function
csv()
    .fromFile(filePath, (err, result) => {
        console.log(JSON.stringify(result));
    });

// callback version using Converter class
new csv.Converter()
    .fromFile(filePath, (err, result) => {
        console.log(JSON.stringify(result));
    });

/////////////////////////////
// From CSV Stream

const stream = fs.createReadStream(filePath);

// event emitter version using factory function
csv().fromStream(stream)
    .on('json', (jsonObj: any) => {
        console.log(JSON.stringify(jsonObj));
    })
    .on('done', (error: any) => {
        console.log('end');
    });

// event emitter version using Converter class
new csv.Converter()
    .fromStream(stream)
    .on('json', (jsonObj: any) => {
        console.log(JSON.stringify(jsonObj));
    })
    .on('done', (error: any) => {
        console.log('end');
    });

// callback version using factory function
csv()
    .fromStream(stream, (err, result) => {
        console.log(JSON.stringify(result));
    });

// callback version using Converter class
new csv.Converter()
    .fromStream(stream, (err, result) => {
        console.log(JSON.stringify(result));
    });
