export = Reef;

declare class Reef {
    data: Record<string, any>;
    elem: string;
    allowHTML: boolean;
    attached: Reef[];
    debounce: number;
    lagoon: boolean;
    store: Reef.Store;
    template: string | ((props?: Record<string, any>, elemOrRouter?: Element | Reef.Router, elem?: Element) => string);

    /**
     * Create a new Reef() instance, passing in two arguments: your selector, and your options.
     *
     * @param elem - The first argument is the selector for the element you want to render the UI into. Alternatively, you can pass in the element itself.
     * @param options - An object of options that can be provided to your component.
     * It requires a template property, as either a string or a function that returns a string, to render into the DOM.
     *
     * {@link https://reefjs.com/getting-started/#3-create-your-component}
     */
    constructor(elem: string | Element, options: Reef.Options);

    /**
     * Render your component into the DOM.
     *
     * @returns HTML Element.
     *
     * {@link https://reefjs.com/getting-started/#4-render-your-component}
     */
    render(): Element;

    /**
     * This creates a non-reactive copy of your data that won’t affect the state of your component.
     * It can also create an immutable copy of any array or object, not just your component data.
     *
     * @param data - Object or array.
     * @returns Copy of the provided array or object.
     *
     * {@link https://reefjs.com/state-management/#non-reactive-data}
     */
    static clone(data: Record<string, any> | any[]): any;

    /**
     * Attach one or more components to another component.
     *
     * @param component - The component(s) to attach.
     *
     * {@link https://reefjs.com/advanced/#attaching-and-detaching-nested-components}
     */
    attach(component: Reef | Reef[]): void;

    /**
     * Detach one or more linked components from another component.
     *
     * @param component - The component(s) to detach.
     *
     * {@link https://reefjs.com/advanced/#attaching-and-detaching-nested-components}
     */
    detach(component: Reef | Reef[]): void;

    /**
     * Emits a custom event that you can listen for with addEventListener().
     *
     * @param elem - The element to emit the custom event on.
     * @param name - The name of the custom event.
     * @param details - Details to attach to the event.
     *
     * {@link https://reefjs.com/advanced/#event-hooks}
     */
    static emit(elem: Element | Document, name: string, details?: Record<string, any>): void;

    /**
     * By default, Reef fails silently. You can put Reef into debugging mode to expose helpful error message in the Console tab of your browser’s Developer Tools.
     *
     * @param state - Boolean: true or false.
     *
     * {@link https://reefjs.com/advanced/#debugging}
     */
    static debug(state: boolean): void;
}

declare namespace Reef {
    /**
     * Types not provided yet.
     */
    type Router = any;

    interface Options {
        /**
         * Allows to define state for your components.
         * The data object is automatically encoded and passed into your template function (first argument), so that you can use it to customize your template.
         */
        data?: Record<string, any> | undefined;

        /**
         * A Data Store is a special Reef object that holds reactive data that you can share with multiple components.
         * Any time you update the data in your Data Store, any components that use the data will also be updated, and will render again if there are any UI changes.
         */
        store?: Store | undefined;

        /**
         * A string or a function that returns a string, to render into the DOM.
         * Note: when using a router, the element that the template was rendered into becomes the third argument on the template() function.
         */
        template:
            | string
            | ((props: Record<string, any>, elemOrRouter?: Element | Router, elem?: Element) => string);

        /**
         * Prevents Cross-Site Scripting (XSS) Attacks. You can disable this feature by setting this option to true.
         */
        allowHTML?: boolean | undefined;

        /**
         * Associate a nested component with its parent.
         */
        attachTo?: Reef | undefined;

        /**
         * For any Reef component that should be updated when the route changes, add a router property and associate your router component with it.
         */
        router?: Router | undefined;
    }

    interface DataStore {
        data: Record<string, any>;
        setters?: { [key: string]: (data: Record<string, any>, ...args: any[]) => void } | undefined;
        getters?: { [key: string]: (data: Record<string, any>) => any } | undefined;
    }

    class Store {
        data: Record<string, any>;

        /**
         * Creates a Data Store. A Data Store is a special Reef object that holds reactive data you can share with multiple components.
         * Any time you update the data in your Data Store, any components that use the data will also be updated, and will render again if there are any UI changes.
         *
         * @param DataStore - Single object containing data, setters, and getters.
         *
         * {@link https://reefjs.com/advanced/#shared-state-with-data-stores}
         */
        constructor(DataStore: DataStore);

        /**
         *  Setter function to update data.
         *
         * @param name - Name of setter.
         * @param args - Any required arguments.
         *
         * {@link https://reefjs.com/advanced/#setters}
         */
        do(name: string, ...args: any[]): void;

        /**
         *  Getter function to retrieve data.
         *
         * @param name - Name of getter.
         *
         * {@link https://reefjs.com/advanced/#getters}
         */
        get(name: string): any;
    }
}
