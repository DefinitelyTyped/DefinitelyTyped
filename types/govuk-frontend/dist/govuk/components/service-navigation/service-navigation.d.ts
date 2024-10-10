import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Service Navigation component
 */
export class ServiceNavigation extends GOVUKFrontendComponent {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * @param {Element | null} $module - HTML element to use for header
     */
    constructor($module: Element | null);
}
