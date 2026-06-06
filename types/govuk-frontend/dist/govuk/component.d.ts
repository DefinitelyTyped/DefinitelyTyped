/**
 * Base Component class
 *
 * Centralises the behaviours shared by our components
 *
 * @template {Element} [RootElementType=HTMLElement]
 */
export abstract class Component<RootElementType extends Element = HTMLElement> {
    static elementType: typeof Element;

    /**
     * Validates whether components are supported
     *
     * @throws {SupportError} when the components are not supported
     */
    static checkSupport(): void;

    /**
     * Constructs a new component, validating that GOV.UK Frontend is supported
     *
     * @internal
     * @param {Element | null} [$root] - HTML element to use for component
     */
    constructor($root?: Element | null);

    /**
     * Returns the root element of the component
     *
     * @returns {RootElementType} - the root element of component
     */
    protected get $root(): RootElementType;
}
