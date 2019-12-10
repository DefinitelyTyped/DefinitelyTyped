// Type definitions for template-element 2.4
// Project: https://github.com/munchkinhalfling/template-element
// Definitions by: munchkinhalfling <https://github.com/munchkinhalfling>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A wrapper around HTMLElement that makes custom elements a lot easier.
 * @class
 * @extends {HTMLElement}
 */
export class TemplateElement extends HTMLElement {
    /**
     * @returns The HTML code of the template
     * @abstract
     * Angular bindings:
     * Use the syntax `{{prop}}` to bind to prop on the instance. Use `{{js[code]}}` to execute JS on-the-fly. For security, window, document and others are undefined.
     */
    get template(): string;
    /**
     * @returns CSS to apply to the component
     * @abstract
     */
    get styles(): string;
    /**
     * @returns List of external style URLs to include in the component
     * @abstract
     */
    get externalStyles(): string[];
    /**
     * Renders the component. It is recommended to use `rerender` instead, because that has less overhead.
     * @param firstTime INTERNAL - DO NOT USE
     * @see rerender
     */
    render(firstTime?: boolean): void;
    /**
     * Rerenders the elements specified by `selector` inside the component.
     * @param selector The CSS selector of elements to rerender - defaults to *
     * @see render
     */
    rerender(selector?: string): void;
    /**
     * Called after the component is rendered using render.
     * @abstract
     * @see render
     */
    afterRenderCallback(): void;
    /**
     * Called before the element is rendered using render.
     * @param isFirstTime Whether this is the first time the component is rendered
     * @see render
     * @abstract
     */
    beforeRenderCallback(isFirstTime: string): void;
    /**
     * Adds an observable of name `name` that observes the attribute `attribute`.
     * @param name The name of the property on the class
     * @param attribute The name of the attribute for the property to observe - defaults to the same name as the property
     */
    addObservable(name: string, attribute?: string): void;
    /**
     * Adds a property named `name` that refers to the child element of the component with the selector of `selector`.
     * @param name The name of the property
     * @param selector The selector of the element to bind to
     */
    addElementProperty(name: string, selector: string): void;
    [observable: string]: any;
}
export function htmlToElement(html: string): HTMLElement;
export function htmlToElements(html: string): NodeList;
