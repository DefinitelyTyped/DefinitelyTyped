import { GOVUKFrontendComponent } from "../../govuk-frontend-component.js";

/**
 * Accordion component
 *
 * This allows a collection of sections to be collapsed by default, showing only
 * their headers. Sections can be expanded or collapsed individually by clicking
 * their headers. A "Show all sections" button is also added to the top of the
 * accordion, which switches to "Hide all sections" when all the sections are
 * expanded.
 *
 * The state of each section is saved to the DOM via the `aria-expanded`
 * attribute, which also provides accessibility.
 */
export class Accordion extends GOVUKFrontendComponent<HTMLElement> {
    /**
     * Name for the component used when initialising using data-module attributes.
     */
    static moduleName: string;

    /**
     * Accordion default config
     *
     * @see {@link AccordionConfig}
     */
    static defaults: AccordionConfig;

    /**
     * Accordion config schema
     *
     * @satisfies {Schema}
     */
    static schema: Readonly<{
        properties: {
            i18n: {
                type: "object";
            };
            rememberExpanded: {
                type: "boolean";
            };
        };
    }>;

    /**
     * @param {Element | null} $root - HTML element to use for accordion
     * @param {AccordionConfig} [config] - Accordion config
     */
    constructor($root: Element | null, config?: AccordionConfig);

    /**
     * Get the identifier for a section
     *
     * We need a unique way of identifying each content in the Accordion.
     * Since an `#id` should be unique and an `id` is required for `aria-`
     * attributes `id` can be safely used.
     *
     * @param {Element} $section - Section element
     * @returns {string | undefined | null} Identifier for section
     */
    getIdentifier($section: Element): string | undefined | null;
}

/**
 * Accordion config
 */
export interface AccordionConfig {
    /**
     * - Accordion translations
     */
    i18n?: AccordionTranslations | undefined;

    /**
     * - Whether the expanded and collapsed
     * state of each section is remembered and restored when navigating.
     */
    rememberExpanded?: boolean | undefined;
}

/**
 * Messages used by the component for the labels of its buttons. This includes
 * the visible text shown on screen, and text to help assistive technology users
 * for the buttons toggling each section.
 */
export interface AccordionTranslations {
    /**
     * - The text content for the 'Hide all
     * sections' button, used when at least one section is expanded.
     */
    hideAllSections?: string | undefined;

    /**
     * - The text content for the 'Hide'
     * button, used when a section is expanded.
     */
    hideSection?: string | undefined;

    /**
     * - The text content appended to the
     * 'Hide' button's accessible name when a section is expanded.
     */
    hideSectionAriaLabel?: string | undefined;

    /**
     * - The text content for the 'Show all
     * sections' button, used when all sections are collapsed.
     */
    showAllSections?: string | undefined;

    /**
     * - The text content for the 'Show'
     * button, used when a section is collapsed.
     */
    showSection?: string | undefined;

    /**
     * - The text content appended to the
     * 'Show' button's accessible name when a section is expanded.
     */
    showSectionAriaLabel?: string | undefined;
}
