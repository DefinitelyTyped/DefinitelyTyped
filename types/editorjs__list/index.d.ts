/**
 * @typedef {object} ListData
 * @property {string} style - can be ordered or unordered
 * @property {Array} items - li elements
 */
/**
 * @typedef {object} ListConfig
 * @description Tool's config from Editor
 * @property {string} defaultStyle — ordered or unordered
 */
/**
 * List Tool for the Editor.js 2.0
 */
export default class List {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Allow to use native Enter behaviour
     *
     * @returns {boolean}
     * @public
     */
    public static get enableLineBreaks(): boolean;
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
        icon: string;
        title: string;
    };
    /**
     * Allow List Tool to be converted to/from other block
     *
     * @returns {{export: Function, import: Function}}
     */
    static get conversionConfig(): {
        export: Function;
        import: Function;
    };
    /**
     * Sanitizer rules
     *
     * @returns {object}
     */
    static get sanitize(): any;
    /**
     * List Tool on paste configuration
     *
     * @public
     */
    public static get pasteConfig(): {
        tags: string[];
    };
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - tool constructor options
     * @param {ListData} params.data - previously saved data
     * @param {object} params.config - user config for Tool
     * @param {object} params.api - Editor.js API
     * @param {boolean} params.readOnly - read-only mode flag
     */
    constructor({ data, config, api, readOnly }: {
        data: ListData;
        config: object;
        api: object;
        readOnly: boolean;
    });
    /**
     * HTML nodes
     *
     * @private
     */
    private _elements;
    api: any;
    readOnly: boolean;
    settings: {
        name: string;
        label: any;
        icon: any;
        default: boolean;
    }[];
    /**
     * Tool's data
     *
     * @type {ListData}
     */
    _data: ListData;
    /**
     * List data setter
     *
     * @param {ListData} listData
     */
    set data(arg: ListData);
    /**
     * Return List data
     *
     * @returns {ListData}
     */
    get data(): ListData;
    /**
     * Returns list tag with items
     *
     * @returns {Element}
     * @public
     */
    public render(): Element;
    /**
     * @returns {ListData}
     * @public
     */
    public save(): ListData;
    /**
     * Settings
     *
     * @public
     * @returns {Array}
     */
    public renderSettings(): any[];
    /**
     * On paste callback that is fired from Editor
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(event: PasteEvent): void;
    /**
     * Creates main <ul> or <ol> tag depended on style
     *
     * @param {string} style - 'ordered' or 'unordered'
     * @returns {HTMLOListElement|HTMLUListElement}
     */
    makeMainTag(style: string): HTMLOListElement | HTMLUListElement;
    /**
     * Toggles List style
     *
     * @param {string} style - 'ordered'|'unordered'
     */
    toggleTune(style: string): void;
    /**
     * Styles
     *
     * @private
     */
    private get CSS();
    /**
     * Helper for making Elements with attributes
     *
     * @param  {string} tagName           - new Element tag name
     * @param  {Array|string} classNames  - list or name of CSS classname(s)
     * @param  {object} attributes        - any attributes
     * @returns {Element}
     */
    _make(tagName: string, classNames?: any[] | string, attributes?: object): Element;
    /**
     * Returns current List item by the caret position
     *
     * @returns {Element}
     */
    get currentItem(): Element;
    /**
     * Get out from List Tool
     * by Enter on the empty last item
     *
     * @param {KeyboardEvent} event
     */
    getOutofList(event: KeyboardEvent): void;
    /**
     * Handle backspace
     *
     * @param {KeyboardEvent} event
     */
    backspace(event: KeyboardEvent): void;
    /**
     * Select LI content by CMD+A
     *
     * @param {KeyboardEvent} event
     */
    selectItem(event: KeyboardEvent): void;
    /**
     * Handle UL, OL and LI tags paste and returns List data
     *
     * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
     * @returns {ListData}
     */
    pasteHandler(element: HTMLUListElement | HTMLOListElement | HTMLLIElement): ListData;
}
export type ListData = {
    /**
     * - can be ordered or unordered
     */
    style: string;
    /**
     * - li elements
     */
    items: any[];
};
export type ListConfig = object;
