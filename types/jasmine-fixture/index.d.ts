/// <reference types="jasmine" />

/**
 * Affixes the given jquery selectors into the body and will be removed after each spec
 * @param selector The JQuery selector to be added to the dom
 */
declare function affix(selector: string): JQuery;

interface JQuery {
    /**
     * Affixes the given jquery selectors into the element and will be removed after each spec
     * @param selector The JQuery selector to be added to the dom
     */
    affix(selector: string): JQuery;
}
