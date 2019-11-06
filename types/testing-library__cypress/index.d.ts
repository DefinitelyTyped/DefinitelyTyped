// Type definitions for @testing-library/cypress 5.0
// Project: https://github.com/testing-library/cypress-testing-library
// Definitions by: Aaron Mc Adam <https://github.com/aaronmcadam>
//                 Basti Buck <https://github.com/bastibuck>
//                 Stefano Magni <https://github.com/NoriSte>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Brian Ng <https://github.com/existentialism>
//                 Airat Aminev <https://github.com/airato>
//                 Simon Jespersen <https://github.com/simjes>
//                 Hugh Loughrey <https://github.com/hloughrey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import {
    configure,
    Matcher,
    MatcherOptions as DTLMatcherOptions,
    SelectorMatcherOptions as DTLSelectorMatcherOptions,
} from '@testing-library/dom';

export interface CTLMatcherOptions {
    timeout?: number;
    container?: HTMLElement | JQuery;
}

export type MatcherOptions = DTLMatcherOptions | CTLMatcherOptions;
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
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByLabelText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByLabelText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByPlaceholderText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByAltText(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByTitle(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByDisplayValue(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             * `getBy*` APIs search for an element and returns null if nothing found
             * `getAllBy*` APIs search for all elements and return empty array if nothing found
             *
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByTestId(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

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
            queryByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

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
            queryAllByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

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
            findByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;

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
            findAllByRole(id: Matcher, options?: MatcherOptions): Chainable<JQuery>;
        }
    }
}

export { configure };
