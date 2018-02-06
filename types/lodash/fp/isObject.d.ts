// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface IsObject {
        /**
         * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),
         * and new String(''))
         *
         * @param value The value to check.
         * @return Returns true if value is an object, else false.
         */
        (): IsObject;
        /**
         * Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0),
         * and new String(''))
         *
         * @param value The value to check.
         * @return Returns true if value is an object, else false.
         */
        (value: any): boolean;
    }
}

declare const isObject: Lodash.IsObject;
export = isObject;
