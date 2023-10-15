import { expect, use } from "chai";
import chaiJsonPattern, { extend } from "chai-json-pattern";

use(chaiJsonPattern);

expect({ a: 2 }).to.matchPattern(`{
    "a": Number AND range(0, 5),
}`);

const extension = {
    customValidator(target: any) {
        // do some stuff
        // return boolean
    },
    anotherCustomValidator(target: any) {
        // do some other stuff
        // return boolean
    },
};
extend(extension);
