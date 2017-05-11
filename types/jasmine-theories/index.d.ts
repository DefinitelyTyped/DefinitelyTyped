// Type definitions for jasmine-theories
// Project: github.com/hypesystem/jasmine-theories
// Definitions by: Bart Ledoux <https://github.com/elevatebart/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jasmineTheories{
    interface jasmineTheoriesStatic{
        /**
         * runs the test function with each of the given argunments in the list
         * 
         * @param {string} description the description of the test as in jasmine
         * @param {any[]} args argunments passed to the test
         * @param {Function} testFunction the test
         * 
         * @memberof jasmineTheoriesStatic
         */
        it(description:string, args:any[], testFunction:Function):void;

        /**
         * ignored version of the test
         * 
         * @param {string} description the description of the test as in jasmine
         * @param {any[]} args argunments passed to the test
         * @param {Function} testFunction the test
         * 
         * @memberof jasmineTheoriesStatic
         */
        xit(description:string, args:any[], testFunction:Function):void;
    }
}
declare const jsminTheories: jasmineTheories.jasmineTheoriesStatic;
export default jsminTheories;
