// Type definitions for jasmine-theories
// Project: github.com/hypesystem/jasmine-theories
// Definitions by: Bart Ledoux <https://github.com/elevatebart/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jasmineTheories{
	interface jasmineTheoriesStatic{
		/**
		 * Runs the jasmine test function with each of the given arguments in the list
		 * 
		 * @param {string} description the description of the test
		 * @param {any[]} args argunments passed to the test
		 * @param {Function} testFunction the test
		 * 
		 * @memberof jasmineTheoriesStatic
		 */
		it(description:string, args:any[], testFunction:(testedValue:any) => void):void;

		/**
		 * Ignored version of the same test (the x means excluded)
		 * 
		 * @param {string} description the description of the test
		 * @param {any[]} args argunments passed to the test
		 * @param {Function} testFunction the test
		 * 
		 * @memberof jasmineTheoriesStatic
		 */
		xit(description:string, args:any[], testFunction:(testedValue:any) => void):void;
	}
}
declare var jsminTheories: jasmineTheories.jasmineTheoriesStatic;
export default jsminTheories;
