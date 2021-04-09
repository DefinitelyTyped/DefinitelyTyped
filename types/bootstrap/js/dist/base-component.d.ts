/**
 * Base Component
 *
 * @link https://github.com/twbs/bootstrap/blob/main/js/src/base-component.js
 */
export default class BaseComponent {
    constructor(element: Element);

    /**
     * Destroys an element's.
     */
    dispose(): void;

    /**
     * Version of this plugin
     *
     * @link https://getbootstrap.com/docs/5.0/getting-started/javascript/#version-numbers
     */
    static VERSION: string;
}
