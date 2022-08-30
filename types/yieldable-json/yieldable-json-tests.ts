import yj = require('yieldable-json');

const str = '{"name":"Ila Gould","age":22,"gender":"female"}';

const reviver: yj.Reviver = (key, value) => {
    // Change the value if type is number
    if (typeof value === 'number') return value * 2;
    else return value;
};

const parseCallback: yj.Callback<object> = (err, str) => {
    err; // $ExpectType Error
    str; // $ExpectType object
};

yj.parseAsync(str, parseCallback);
yj.parseAsync(str, 2, parseCallback);
yj.parseAsync(str, reviver, parseCallback);
yj.parseAsync(str, reviver, 2, parseCallback);

const obj = {
    name: 'Jacqueline Poole',
    gender: 'female',
};

const replacer: yj.Replacer = (key, value) => {
    if (typeof value === 'string') return undefined;
    return value;
};

const stringifyCallback: yj.Callback<string> = (err, str) => {
    err; // $ExpectType Error
    str; // $ExpectType string
};

yj.stringifyAsync(obj, stringifyCallback);
yj.stringifyAsync(obj, 0, 2, stringifyCallback);
yj.stringifyAsync(obj, null, '\n', stringifyCallback);
yj.stringifyAsync(obj, replacer, stringifyCallback);
yj.stringifyAsync(obj, replacer, 2, 2, stringifyCallback);
