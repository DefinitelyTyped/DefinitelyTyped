import jph = require('json-parse-helpfulerror');
import { parse } from 'json-parse-helpfulerror';

const invalidJSON = "{'foo': 3}";
const validJSON = '{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}';

try {
    JSON.parse(invalidJSON);
} catch (error) {
    //
}
try {
    jph.parse(invalidJSON);
} catch (error) {
    //
}
try {
    JSON.parse(validJSON, (key, value) => {
        return value;
    });
} catch (error) {
    //
}

try {
    jph.parse(validJSON, (key, value) => {
        return value;
    });
} catch (error) {
    ///
}
try {
    parse(validJSON, (key, value) => {
        return value;
    });
} catch (error) {
    //
}
