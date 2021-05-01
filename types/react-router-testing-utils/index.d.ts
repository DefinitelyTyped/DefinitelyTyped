// Type definitions for react-router-testing-utils
// Project: https://github.com/LauraBeatris/react-router-testing-utils
// Definitions by: Laura Beatris <https://github.com/LauraBeatris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

/// <reference types="jest" />

declare namespace jest {
    interface Matchers<R> {
        /**
         * @description
         * This allows you to check if a location search has a certain query param value.
         *
         * @example
         * "https://mywebsite.com/home?page=1"
         *
         * expect(location.search).toHaveQueryParam({ name: page, value: 1, type: NumberParam })
         *
         * @see
         * [react-router-testing-utils#tohavequeryparam](https://github.com/LauraBeatris/react-router-testing-utils#tohavequeryparam)
         */
        toHaveQueryParam(
            expectedQueryParam: {
            name: string;
            value: any;
            type: import('serialize-query-params').QueryParamConfig<any, any>
            }
        ): R;
    }
}
