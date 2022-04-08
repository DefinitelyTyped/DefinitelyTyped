import path = require('path');
import fs = require('fs');
import getColors = require('get-image-colors');
import { Options } from 'get-image-colors';

const buffer = fs.readFileSync(path.join(__dirname, 'double-rainbow.gif'));
const options: Options = {
    count: 10,
    type: 'image/png',
};

getColors('./path').then(colors => {
    colors; // $ExpectType Color[]
});
getColors('./path', (err, colors) => {
    if (err) throw err;
    colors; // $ExpectType Color[]
});

getColors(buffer, 'image/gif').then(colors => {
    colors; // $ExpectType Color[]
    colors.map(color => color.hex());
    colors[0].alpha(0.5).css();
});

getColors(path.join(__dirname, 'double-rainbow.png'), options).then(colors => {
    colors; // $ExpectType Color[]
});
