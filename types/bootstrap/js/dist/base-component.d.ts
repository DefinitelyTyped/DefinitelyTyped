/**
 * If you’d like to get a particular plugin instance,
 * each plugin exposes a getInstance method. In order to retrieve it directly from an element, do this: bootstrap.Popover.getInstance(myPopoverEl)
 */
export type GetInstanceFactory<T> = (element: string | Element) => T | null;
export type GetOrCreateInstanceFactory<T, C extends ComponentOptions = ComponentOptions> = (
    element: string | Element,
    config?: C,
) => T;
export type ComponentOptions = Record<string, any>;

/**
 * Base Component
 *
 * @link https://github.com/twbs/bootstrap/blob/main/js/src/base-component.js
 */
export default class BaseComponent {
    /**
     * Version of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#version-numbers
     */
    static readonly VERSION: string;

    static readonly DATA_KEY: string;

    static readonly EVENT_KEY: string;

    constructor(element: string | Element);

    /**
     * Destroys an element's.
     */
    dispose(): void;
}
