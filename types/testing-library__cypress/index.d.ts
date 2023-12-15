import {
    ByRoleOptions as DTLByRoleOptions,
    configure,
    Matcher,
    MatcherOptions as DTLMatcherOptions,
    SelectorMatcherOptions as DTLSelectorMatcherOptions,
} from "@testing-library/dom";

export interface CTLMatcherOptions {
    timeout?: number | undefined;
    container?: HTMLElement | JQuery | undefined;
}

export type MatcherOptions = DTLMatcherOptions | CTLMatcherOptions;
export type ByRoleOptions = DTLByRoleOptions | CTLMatcherOptions;
export type SelectorMatcherOptions = DTLSelectorMatcherOptions | CTLMatcherOptions;

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByLabelText(id: Matcher, options?: SelectorMatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByRole(id: Matcher, options?: ByRoleOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByRole(id: Matcher, options?: ByRoleOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByRole(id: Matcher, options?: ByRoleOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findAllByRole(id: Matcher, options?: ByRoleOptions): Chainable<JQuery>;
        }
    }
}

export { configure };
