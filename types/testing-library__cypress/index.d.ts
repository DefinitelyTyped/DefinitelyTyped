// Type definitions for @testing-library/cypress 4.1
// Project: https://github.com/testing-library/cypress-testing-library
// Definitions by: Aaron Mc Adam <https://github.com/aaronmcadam>
//                 Basti Buck <https://github.com/ppi-buck>
//                 Stefano Magni <https://github.com/NoriSte>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Brian Ng <https://github.com/existentialism>
//                 Airat Aminev <https://github.com/airato>
//                 Simon Jespersen <https://github.com/simjes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import {
    Matcher,
    MatcherOptions as DTLMatcherOptions,
    SelectorMatcherOptions as DTLSelectorMatcherOptions,
} from '@testing-library/dom';

import * as JQuery from 'jquery';

export interface CTLMatcherOptions {
    timeout?: number;
}

export type MatcherOptions = DTLMatcherOptions | CTLMatcherOptions;
export type SelectorMatcherOptions = DTLSelectorMatcherOptions | CTLMatcherOptions;

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByPlaceholderText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            queryByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByPlaceholderText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            queryAllByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByPlaceholderText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            getByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByPlaceholderText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            getAllByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryBySelectText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            queryBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllBySelectText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            queryAllBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getBySelectText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            getBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllBySelectText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            getAllBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            queryByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            queryAllByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            getByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByText<E extends Node = HTMLElement>(id: Matcher, options?: SelectorMatcherOptions): Chainable<E[]>;
            getAllByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByLabelText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            queryByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByLabelText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            queryAllByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByLabelText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            getByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByLabelText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<E[]>;
            getAllByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByAltText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByAltText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            queryAllByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByAltText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            getByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByAltText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            getAllByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryAllByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            getByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            getAllByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryAllByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            getByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            getAllByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByDisplayValue<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            queryByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByDisplayValue<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            queryAllByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByDisplayValue<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            getByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByDisplayValue<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            getAllByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            queryAllByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryAllByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            getByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

            /**
             * dom-testing-library helpers for Cypress
             *
             * `getBy*` APIs search for an element and throw an error if nothing found
             * `getAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            getAllByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            getAllByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;
        }
    }
}

declare const Cypress: Cypress.Chainable;
export default Cypress;
