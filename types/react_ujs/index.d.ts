/// <reference types="jquery" />
/// <reference types="react" />

// We need to reference `typeof ReactRailsUJS` in a few places, so the namespace is needed.
/* eslint-disable-next-line @definitelytyped/export-just-namespace */
export = ReactRailsUJS;

export as namespace ReactRailsUJS;

declare namespace ReactRailsUJS {
    /** This attribute holds the name of component which should be mounted. */
    const CLASS_NAME_ATTR: string;

    /** This attribute holds JSON stringified props for initializing the component. */
    const PROPS_ATTR: string;

    /** This attribute holds which method to use between: ReactDOM.hydrate, ReactDOM.render. */
    const RENDER_ATTR: string;

    /** This attribute holds a unique identifier to identify a node. */
    const CACHE_ID_ATTR: string;

    /** This attribute is set to persist the element through Turbolinks navigations. */
    const TURBOLINKS_PERMANENT_ATTR: string;

    /** If jQuery is detected, save a reference to it for event handlers. */
    const jQuery: false | undefined | JQueryStatic;

    /** A map of rendered React elements. The keys are values of CACHE_ID_ATTR attributes. */
    const components: Record<string, React.ReactElement>;

    /**
     * undefined matches the entire document.
     * string matches a CSS/Sizzle selector in the document.
     * Element, Document, and JQuery match themselves.
     */
    type SearchSelector = undefined | string | Element | Document | JQuery;

    /**
     * Find DOM elements with the CLASS_NAME_ATTR attribute within `searchSelector`.
     */
    function findDOMNodes(searchSelector?: SearchSelector): JQuery | NodeList;

    /**
     * Get the constructor for a className (returns a React class). Override this function to lookup classes in a custom
     * way.
     */
    function getConstructor(className: string): React.ComponentType;

    /**
     * WebpackRequireContext represents an object returned from Webpack's `require.context`.
     */
    type WebpackRequireContext = (id: string) => any;

    /**
     * Given a Webpack `require.context`, try finding components with `require`, then falling back to global lookup.
     */
    function useContext(this: typeof ReactRailsUJS, context: WebpackRequireContext): void;

    /**
     * Render `componentName` with `props` to a string,
     * using the specified `renderFunction` from `react-dom/server`.
     */
    function serverRender(this: typeof ReactRailsUJS, renderFunction: string, componentName: string, props: any): any;

    /**
     * Within `searchSelector`, find nodes which should have React components inside them, and mount them with their props.
     */
    function mountComponents(this: typeof ReactRailsUJS, searchSelector?: SearchSelector): void;

    /**
     * Within `searchSelector`, find nodes which have React components inside them, and unmount those components.
     */
    function unmountComponents(this: typeof ReactRailsUJS, searchSelector?: SearchSelector): void;

    /**
     * Check the global context for installed libraries and figure out which library to hook up to (pjax, Turbolinks,
     * jQuery). This is called on load, but you can call it again if needed (it will unmount itself).
     */
    function detectEvents(this: typeof ReactRailsUJS): void;

    /**
     * Internal reference to document.addEventListener, set when detectEvents is called.
     */
    let handleEvent: undefined | typeof document.addEventListener;

    /**
     * Internal reference to document.removeEventListener, set when detectEvents is called.
     */
    let removeEvent: undefined | typeof document.removeEventListener;

    /**
     * An event listener that calls mountComponents on event.target.
     */
    function handleMount(event?: Partial<Event>): void;

    /**
     * An event listener that calls unmountComponents on event.target.
     */
    function handleUnmount(event?: Partial<Event>): void;
}
