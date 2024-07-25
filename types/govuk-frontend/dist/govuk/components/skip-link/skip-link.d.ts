import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Skip link component
 */
export class SkipLink extends GOVUKFrontendComponent {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * @param {Element | null} $module - HTML element to use for skip link
     * @throws {ElementError} when $module is not set or the wrong type
     * @throws {ElementError} when $module.hash does not contain a hash
     * @throws {ElementError} when the linked element is missing or the wrong type
     */
    constructor($module: Element | null);
}
