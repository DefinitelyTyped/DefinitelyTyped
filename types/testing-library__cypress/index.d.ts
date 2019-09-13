// Type definitions for @testing-library/cypress 5.0
// Project: https://github.com/testing-library/cypress-testing-library
// Definitions by: Aaron Mc Adam <https://github.com/aaronmcadam>
//                 Basti Buck <https://github.com/bastibuck>
//                 Stefano Magni <https://github.com/NoriSte>
//                 Justin Hall <https://github.com/wKovacs64>
//                 Brian Ng <https://github.com/existentialism>
//                 Airat Aminev <https://github.com/airato>
//                 Simon Jespersen <https://github.com/simjes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import {
    configure,
    Matcher,
    MatcherOptions as DTLMatcherOptions,
    SelectorMatcherOptions as DTLSelectorMatcherOptions,
} from '@testing-library/dom';

import * as JQuery from 'jquery';

export interface CTLMatcherOptions {
  timeout?: number;
  container?: JQuery;
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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByPlaceholderText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            findByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByPlaceholderText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            findAllByPlaceholderText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findBySelectText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            findBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllBySelectText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            findAllBySelectText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            findByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByText<E extends Node = HTMLElement>(id: Matcher, options?: SelectorMatcherOptions): Chainable<E[]>;
            findAllByText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByLabelText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<E>>;
            findByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByLabelText<E extends Node = HTMLElement>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<E[]>;
            findAllByLabelText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: SelectorMatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

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
            queryByAltText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByAltText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            findByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByAltText<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            findAllByAltText<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

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
            queryByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            queryAllByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryAllByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            findByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByTestId<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            findAllByTestId<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

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
            queryByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            queryAllByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryAllByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            findByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByTitle<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            findAllByTitle<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
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
             * `findBy*` APIs search for an element and throw an error if nothing found
             * `findAllBy*` APIs search for all elements and an error if nothing found
             * `queryBy*` APIs search for an element and returns null if nothing found
             * `queryAllBy*` APIs search for all elements and return empty array if nothing found
             *
             * @see https://github.com/testing-library/cypress-testing-library#usage
             * @see https://github.com/testing-library/dom-testing-library#table-of-contents
             */
            findByDisplayValue<E extends Node = HTMLElement>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<E>>;
            findByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByDisplayValue<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            findAllByDisplayValue<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;

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
            queryByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            queryAllByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            queryAllByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<JQuery<E>>;
            findByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<JQuery<HTMLElementTagNameMap[K]>>;

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
            findAllByRole<E extends Node = HTMLElement>(id: Matcher, options?: MatcherOptions): Chainable<E[]>;
            findAllByRole<K extends keyof HTMLElementTagNameMap>(
                id: Matcher,
                options?: MatcherOptions,
            ): Chainable<Array<HTMLElementTagNameMap[K]>>;
        }
    }
}

declare const Cypress: Cypress.Chainable;
export default Cypress;

export { configure };
