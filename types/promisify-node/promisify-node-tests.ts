import promisify = require('promisify-node');

let fs = promisify('fs');

fs.readFile('example.txt').then((content: any) => {
    console.log(content);
});
