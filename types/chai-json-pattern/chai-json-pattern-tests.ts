import chai = require("chai");
import chaiJsonPattern = require("chai-json-pattern");

const { expect, use } = chai;

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
chaiJsonPattern.extend(extension);
