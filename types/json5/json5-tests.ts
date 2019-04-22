
import JSON5 = require('json5');

const STR = "{ key:'val', 'key2':[0,1,2,] } //comment ";
const OBJ = { key: 'value', key2: [0, 1, 2] };

function reviverFunction(key: any, value: any): any {
    return { [key]: value };
}

function replacerFunction(key: string, value: any) {
    return { [key]: value };
}

const str1: string = JSON5.stringify(OBJ);
const str2: string = JSON5.stringify(OBJ, null, 4);
const str3: string = JSON5.stringify(OBJ, undefined, '2');
const str4: string = JSON5.stringify(OBJ, replacerFunction, 2);

JSON.parse(STR);
JSON.parse(STR, reviverFunction);
