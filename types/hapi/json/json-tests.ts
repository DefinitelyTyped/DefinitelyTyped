import * as JSON from './index';

var a: JSON.StringifyReplacer = function(key, value) {
    if (key === "do not include") {
        return undefined;
    }
    return value;
};
