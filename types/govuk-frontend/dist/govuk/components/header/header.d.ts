import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Header component
 */
export class Header extends GOVUKFrontendComponent<HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * Apply a matchMedia for desktop which will trigger a state sync if the
     * browser viewport moves between states.
     *
     * @param {Element | null} $root - HTML element to use for header
     */
    constructor($root: Element | null);
}
