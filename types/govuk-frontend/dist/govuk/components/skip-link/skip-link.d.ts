import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Skip link component
 */
export class SkipLink extends GOVUKFrontendComponent<HTMLAnchorElement> {
    static elementType: {
        new(): HTMLAnchorElement;
        prototype: HTMLAnchorElement;
    };

    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * @param {Element | null} $root - HTML element to use for skip link
     * @throws {ElementError} when $root is not set or the wrong type
     * @throws {ElementError} when $root.hash does not contain a hash
     * @throws {ElementError} when the linked element is missing or the wrong type
     */
    constructor($root: Element | null);
}
