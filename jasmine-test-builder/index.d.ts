// Type definitions for jasmine-test-builder
// Project: https://github.com/lucabro81/JasmineTestBuilder
// Definitions by: Luca Brognara <https://github.com/lucabro81>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1.6

/// <reference types="jasmine" />

declare namespace jasmine {
    class JasmineTestBuilder<T> {

        /**
         * Init the builder
         *
         * @param describe_name     Name of the tests suite
         * @param c                 Class to test
         * @param init_params       Parameter's array for the init method of the testing class
         */
        init(describe_name: string, c: { new (): T; }, init_params?: Array<any>): void;

        /********************************************************************************************/

        /**
         * Tells to the builder which method is the testing class' destroyer
         *
         * @param destroy_method
         */
        setDestroyMethod(destroy_method: string): void;

        /**
         * Tells to the builder which method is the testing class' initializator
         *
         * @param init_method
         */
        setInitMethod(init_method: string): void;

        /********************************************************************************************/

        /**
         * Set a test name
         *
         * @param test_name
         */
        test(test_name: string): JasmineTestBuilder<T>;

        /**
         * Method's name from testing class
         *
         * @param method_name
         */
        method(method_name: string): JasmineTestBuilder<T>;

        /**
         * Specify parameters for the testing method/function
         *
         * @param params
         */
        withInput(params: Array<any>): JasmineTestBuilder<T>;

        /**
         * Test a custom function instead of a direct method of the class
         *
         * @param func
         */
        withCustomTestFunc(func: (test_instance: T) => T): JasmineTestBuilder<T>;

        /**
         * Property of the testing class
         *
         * @param prop_name
         */
        withProp(prop_name: string): JasmineTestBuilder<T>;

        /**
         * like method() but you can pass the parameters' array
         *
         * @param method_name
         * @param params
         */
        withMethod(method_name: string, params?: Array<any>): JasmineTestBuilder<T>;

        /**
         * Like withProp(), but use after this
         *
         * @param prop_name
         */
        andProp(prop_name: string): JasmineTestBuilder<T>;

        /**
         * Like withMethod(), but use after this
         *
         * @param method_name
         * @param params
         */
        andMethod(method_name: string, params?: Array<any>): JasmineTestBuilder<T>;

        /**
         * Like withCustomTestFunc(), but use after this
         *
         * @param func
         */
        andCustomTestFunc(func: (test_instance: T) => T): JasmineTestBuilder<T>;

        /********************************************************************************************/

        /**
         * Matchers
         */

        result(expected_value: any): JasmineTestBuilder<T>;
        resultFalse(): JasmineTestBuilder<T>;
        resultTrue(): JasmineTestBuilder<T>;
        resultUndefined(): JasmineTestBuilder<T>;
        resultNull(): JasmineTestBuilder<T>;
        resultNan(): JasmineTestBuilder<T>;

        /********************************************************************************************/

        /**
         * Run all test defined between this method and init()
         */
        run(): void;

        /********************************************************************************************/

        destroy(): void;
    }
}
