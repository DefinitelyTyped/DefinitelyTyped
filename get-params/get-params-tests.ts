import getParams = require('get-params');
const func = (x: string, y: string, c: string) => {
    return x + y + c;
};
getParams(func);
