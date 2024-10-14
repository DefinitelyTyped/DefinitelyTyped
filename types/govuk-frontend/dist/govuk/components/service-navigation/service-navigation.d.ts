import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Service Navigation component
 */
export class ServiceNavigation extends GOVUKFrontendComponent<HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * @param {Element | null} $root - HTML element to use for header
     */
    constructor($root: Element | null);
}
