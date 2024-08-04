import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Tabs component
 */
export class Tabs extends GOVUKFrontendComponent {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * @param {Element | null} $module - HTML element to use for tabs
     */
    constructor($module: Element | null);
}
