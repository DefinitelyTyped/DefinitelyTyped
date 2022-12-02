// Type definitions for reefjs 12.1
// Project: https://github.com/cferdinandi/reef#readme
// Definitions by: bryandonmarc <https://github.com/bryandonmarc>
//                 shockdevv <https://github.com/shockdevv>
//                 cferdinandi <https://github.com/cferdinandi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Create a new store that holds reactive data that you can share with multiple components.
 * Any time you update the `data` object, it fires a default `reef:store` event. All created components listen to
 * this event by default, and will re-render when fired. This may not be ideal for multiple store instances.
 *
 * To create a custom event namespace, set the `name` parameter, and initialize your Reef components with an
 * `options` parameter with the `stores` property as an array containing the value of `name`.
 *
 * @param  data The data object
 * @param  name The custom event namespace, default `''`
 * @return      The reactive store proxy
 */
declare function store<T extends object>(data: T, name?: string): T;

/**
 * Safely render UI from an HTML string
 *
 * @param template
 * The selector for the element you want to render the UI into.
 * Alternatively, you can pass in the element itself.
 *
 * @param template
 * A string or a function that returns a string, to render into the DOM.
 *
 * @param events
 * By setting this property to `true`, Reef allows inlined event attributes for your template components
 * (e.g. `onclick`, `onchange`), default `falsy`
 */
declare function render(elem: Node | string, template: string, events?: Reef.InlinedEvents): void;

/**
 * Create a new reactive component
 * @param elem
 * The selector for the element you want to render the UI into.
 * Alternatively, you can pass in the element itself.
 *
 * @param template
 * A string or a function that returns a string, to render into the DOM.
 *
 * @param options
 * Additional options, default `{}`
 */
declare function component(elem: Node | string, template: () => string, options?: Reef.Options): void;

declare namespace Reef {
    interface Options {
        /**
         * By default, Reef components listen to the default store event `reef:store` and re-renders everytime it is fired.
         * This may not be ideal if you have multiple stores in your application. A change in one store may
         * cause all components to re-render, even if it is not depending on the specific store that changed.
         *
         * Setting this property will allow you to customize which specific store event you want to listen to for this
         * component to re-render. Each value set in this property will take on the form `reef:store-${store}`.
         *
         * For example, setting this property to `['foo', 'bar']` will make this component only re-render everytime
         * `reef:store-foo` or `reef:store-bar` is fired.
         *
         * To take advantage of this specificity, Reef stores should be made with setting the `name` parameter.
         *
         * Any changes made to `reefStore` and `bazStore` will not cause the component to re-render, only changes made
         * to `fooStore` and `barStore`.
         */
        stores?: string[];

        /**
         * By default, Reef sanitizes your template component's attributes,
         * removing `src`, `href`, and `xlink:href` with dangerously set values containing `javascript:` or `data:text/html`
         * and inlined event attributes starting with `on`, (e.g. `onclick`, `onchange`).
         *
         * By setting this property to `true`, Reef allows inlined event attributes for your template components.
         * Currently, there is no way to include dangerously set attributes except for inlined events.
         */
        events?: boolean;
    }
}

export { store, render, component };
