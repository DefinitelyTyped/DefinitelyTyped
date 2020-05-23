declare interface TabV2Options {
    navSelector?: string;
    contentSelector?: string;
    initial?: string;
    callback?: Function;
}

/**
 * A helper class for creating tabbed containers.
 * Create one Tabs instance per tabbed navigation container in your application.
 *
 * @example
 * <!-- Example HTML -->
 * <nav class="tabs" data-group="group1">
 *  <a class="item" data-tab="tab1">Tab 1</li>
 *  <a class="item" data-tab="tab2">Tab 2</li>
 * </nav>
 *
 * <div class="tab" data-tab="tab1" data-group="group1">Content 1</div>
 * <div class="tab" data-tab="tab2" data-group="group1">Content 2</div>
 *
 * @example
 * // JavaScript Listener
 * let nav = $('.tabs[data-group="group1"]');
 * new Tabs(nav, {
 *   initial: "tab1",
 *   callback: t => console.log("Tab ${t} was clicked")
 * });
 *
 * @param tabs {HTMLElement|JQuery} An HTML element or JQuery object representing the tab navigation container.
 */
declare class Tabs {
    /** The collection of tabs */
    tabs: JQuery;

    /** The callback function to trigger when a Tab is activated */
    callback: Function;

    /** The container element within which both the tab navigation and the tab content exists */
    container: JQuery | HTMLElement;

    /** The currently active tab */
    active: JQuery;

    constructor(
        tabs: JQuery | HTMLElement,
        {
            initial,
            callback,
            container,
        }: {
            initial: string;
            callback: (tab: JQuery) => void;
            container?: JQuery | HTMLElement;
        },
    );

    /**
     * The named tab group
     * Retrieved as a property since the composition of the DOM may change over time
     */
    get group(): JQuery;

    /**
     * Activate a tab by it's name. This gets called automatically when a tab in the navigation is clicked,
     * however you may also call this function directly.
     */
    activateTab(tab: JQuery);
}

/**
 * A controller class for managing tabbed navigation within an Application instance.
 * @see {@link Application}
 *
 * @param navSelector		The CSS selector used to target the navigation element for these tabs
 * @param contentSelector	The CSS selector used to target the content container for these tabs
 * @param initial			The tab name of the initially active tab
 * @param callback			An optional callback function that executes when the active tab is changed
 *
 * @example
 * <!-- Example HTML -->
 * <nav class="tabs">
 *   <a class="item" data-tab="tab1">Tab 1</li>
 *   <a class="item" data-tab="tab2">Tab 2</li>
 * </nav>
 *
 * <section class="content">
 *   <div class="tab" data-tab="tab1">Content 1</div>
 *   <div class="tab" data-tab="tab2">Content 2</div>
 * </section>
 *
 * @example
 * // JavaScript
 * const tabs = new TabsV2({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});
 * tabs.bind(html);
 */
declare class TabsV2 {
    /**
     * The value of the active tab
     */
    active: string;

    /**
     * A callback function to trigger when the tab is changed
     */
    callback: Function;

    /**
     * The CSS selector used to target the tab navigation element
     */
    protected _navSelector: string;

    /**
     * A reference to the HTML navigation element the tab controller is bound to
     */
    protected _nav: HTMLElement;

    /**
     * The CSS selector used to target the tab content element
     */
    protected _contentSelector: string;

    /**
     * A reference to the HTML container element of the tab content
     */
    protected _content: HTMLElement;

    constructor({ navSelector, contentSelector, initial, callback }: TabV2Options);

    /**
     * Bind the Tabs controller to an HTML application
     * @param html
     */
    bind(html: HTMLElement): void;

    /**
     * Activate a new tab by name
     * @param tabName
     * @param triggerCallback
     */
    activate(tabName: string, { triggerCallback }?: { triggerCallback?: boolean }): void;

    /**
     * Handle click events on the tab navigation entries
     * @param event	A left click event
     */
    protected _onClickNav(event: MouseEvent): void;
}
