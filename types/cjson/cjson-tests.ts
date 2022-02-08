import cjson = require('cjson');
import { decomment, extend, freeze, load, options, parse, replace } from 'cjson';

const paths = ['/path/to/conf.json', '/path/to/conf-prod.json'];

const conf = cjson.load('/path/to/your/config.json'); // ExpectType any
const conf2 = load(['/path/to/your/config1.json', '/path/to/your/config2.json']); // ExpectType any
const conf3 = load(['/path/to/your/config1.json', '/path/to/your/config2.json'], true); // ExpectType any
const conf4 = load('/path/to/your/configs'); // ExpectType any
const conf5 = load(paths, true); // ExpectType any

cjson.extend({}, conf2, conf3); // $ExpectType any
extend({}, conf2, conf3); // $ExpectType any
// $ExpectType any
cjson.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
    return value;
});
// $ExpectType any
parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
    return value;
});
cjson.replace(JSON.stringify(conf), { root: '/usr' }); // $ExpectType string
replace(JSON.stringify(conf), { root: '/usr' }); // $ExpectType string
cjson.freeze(conf2); // $ExpectType Readonly<any>
freeze(conf2); // $ExpectType Readonly<any>
decomment(JSON.stringify(conf)); // $ExpectType string
options.ext; // $ExpectType string
options.freeze; // $ExpectType boolean
options.merge; // $ExpectType boolean
options.replace; // $ExpectType (json: string, data: { [key: string]: string; }) => any
options.ext = '.json5';
options.freeze = true;
options.merge = true;
options.replace = (str, data) => {
    return str.replace(/\{\{([^}]+)\}\}/g, (match, search) => {
        if (data.hasOwnProperty(search)) {
            if (typeof data[search] === 'object') {
                return JSON.stringify(data[search]);
            }
            return data[search];
        }
        return match;
    });
};
