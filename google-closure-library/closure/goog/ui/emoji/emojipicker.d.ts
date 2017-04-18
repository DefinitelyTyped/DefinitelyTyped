declare module goog {
    function require(name: 'goog.ui.emoji.EmojiPicker'): typeof goog.ui.emoji.EmojiPicker;
}

declare module goog.ui.emoji {

    /**
     * Creates a new, empty emoji picker. An emoji picker is a grid of emoji, each
     * cell of the grid containing a single emoji. The picker may contain multiple
     * pages of emoji.
     *
     * When a user selects an emoji, by either clicking or pressing enter, the
     * picker fires a goog.ui.Component.EventType.ACTION event with the id. The
     * client listens on this event and in the handler can retrieve the id of the
     * selected emoji and do something with it, for instance, inserting an image
     * tag into a rich text control. An emoji picker does not maintain state. That
     * is, once an emoji is selected, the emoji picker does not remember which emoji
     * was selected.
     *
     * The emoji picker is implemented as a tabpane with each tabpage being a table.
     * Each of the tables are the same size to prevent jittering when switching
     * between pages.
     *
     * @param {string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Should be the same
     *     size as the emoji.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class EmojiPicker extends goog.ui.Component {
        constructor(defaultImgUrl: string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Default number of rows per grid of emoji.
         *
         * @type {number}
         */
        static DEFAULT_NUM_ROWS: number;
        
        /**
         * Default number of columns per grid of emoji.
         *
         * @type {number}
         */
        static DEFAULT_NUM_COLS: number;
        
        /**
         * Default location of the tabs in relation to the emoji grids.
         *
         * @type {goog.ui.TabPane.TabLocation}
         */
        static DEFAULT_TAB_LOCATION: goog.ui.TabPane.TabLocation;
        
        /**
         * Adds a group of emoji to the picker.
         *
         * @param {string|Element} title Title for the group.
         * @param {Array<Array<string>>} emojiGroup A new group of emoji to be added
         *    Each internal array contains [emojiUrl, emojiId].
         */
        addEmojiGroup(title: string|Element, emojiGroup: Array<Array<string>>): void;
        
        /**
         * Gets the number of rows per grid in the emoji picker.
         *
         * @return {number} number of rows per grid.
         */
        getNumRows(): number;
        
        /**
         * Gets the number of columns per grid in the emoji picker.
         *
         * @return {number} number of columns per grid.
         */
        getNumColumns(): number;
        
        /**
         * Sets the number of rows per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numRows Number of rows per grid.
         */
        setNumRows(numRows: number): void;
        
        /**
         * Sets the number of columns per grid in the emoji picker. This should only be
         * called before the picker has been rendered.
         *
         * @param {number} numCols Number of columns per grid.
         */
        setNumColumns(numCols: number): void;
        
        /**
         * Sets whether to automatically size the emojipicker based on the number of
         * columns and the number of emoji in each group, so as to reduce jitter.
         *
         * @param {boolean} autoSize Whether to automatically size the picker.
         */
        setAutoSizeByColumnCount(autoSize: boolean): void;
        
        /**
         * Sets the location of the tabs in relation to the emoji grids. This should
         * only be called before the picker has been rendered.
         *
         * @param {goog.ui.TabPane.TabLocation} tabLocation The location of the tabs.
         */
        setTabLocation(tabLocation: goog.ui.TabPane.TabLocation): void;
        
        /**
         * Sets whether loading of images should be delayed until after dom creation.
         * Thus, this function must be called before {@link #createDom}. If set to true,
         * the client must call {@link #loadImages} when they wish the images to be
         * loaded.
         *
         * @param {boolean} shouldDelay Whether to delay loading the images.
         */
        setDelayedLoad(shouldDelay: boolean): void;
        
        /**
         * Sets whether to require the caller to manually specify when to start loading
         * animated emoji. This is primarily for unittests to be able to test the
         * structure of the emojipicker palettes before and after the animated emoji
         * have been loaded. This only affects sprited emojipickers with sprite data
         * for animated emoji.
         *
         * @param {boolean} manual Whether to load animated emoji manually.
         */
        setManualLoadOfAnimatedEmoji(manual: boolean): void;
        
        /**
         * Returns true if the component is focusable, false otherwise.  The default
         * is true.  Focusable components always have a tab index and allocate a key
         * handler to handle keyboard events while focused.
         * @return {boolean} Whether the component is focusable.
         */
        isFocusable(): boolean;
        
        /**
         * Sets whether the component is focusable.  The default is true.
         * Focusable components always have a tab index and allocate a key handler to
         * handle keyboard events while focused.
         * @param {boolean} focusable Whether the component is focusable.
         */
        setFocusable(focusable: boolean): void;
        
        /**
         * Sets the URL prefix for the emoji URLs.
         *
         * @param {string} urlPrefix Prefix that should be prepended to all URLs.
         */
        setUrlPrefix(urlPrefix: string): void;
        
        /**
         * Sets the progressive rendering aspect of this emojipicker. Must be called
         * before createDom to have an effect.
         *
         * @param {boolean} progressive Whether this picker should render progressively.
         */
        setProgressiveRender(progressive: boolean): void;
        
        /**
         * Causes the emoji imgs to be loaded into the picker. Used for delayed loading.
         * No-op if delayed loading is not set.
         */
        loadImages(): void;
        
        /**
         * Used by unittests to manually load the animated emoji for this picker.
         */
        manuallyLoadAnimatedEmoji(): void;
        
        /**
         * EmojiPickers cannot be used to decorate pre-existing html, since the
         * structure they build is fairly complicated.
         * @param {Element} element Element to decorate.
         * @return {boolean} Returns always false.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * @return {string} CSS class for the root element of EmojiPicker.
         */
        getCssClass(): string;
        
        /**
         * Returns the currently selected emoji from this picker. If the picker is
         * using the URL prefix optimization, allocates a new emoji object with the
         * full URL. This method is meant to be used by clients of the emojipicker,
         * e.g., in a listener on goog.ui.component.EventType.ACTION that wants to use
         * the just-selected emoji.
         *
         * @return {goog.ui.emoji.Emoji} The currently selected emoji from this picker.
         */
        getSelectedEmoji(): goog.ui.emoji.Emoji;
        
        /**
         * Returns the number of emoji groups in this picker.
         *
         * @return {number} The number of emoji groups in this picker.
         */
        getNumEmojiGroups(): number;
        
        /**
         * Returns a page from the picker. This should be considered protected, and is
         * ONLY FOR TESTING.
         *
         * @param {number} index Index of the page to return.
         * @return {goog.ui.emoji.EmojiPalette?} the page at the specified index or null
         *     if none exists.
         */
        getPage(index: number): goog.ui.emoji.EmojiPalette;
        
        /**
         * Returns all the pages from the picker. This should be considered protected,
         * and is ONLY FOR TESTING.
         *
         * @return {Array<goog.ui.emoji.EmojiPalette>?} the pages in the picker or
         *     null if none exist.
         */
        getPages(): Array<goog.ui.emoji.EmojiPalette>;
        
        /**
         * Returns the tabpane if this is a multipage picker. This should be considered
         * protected, and is ONLY FOR TESTING.
         *
         * @return {goog.ui.TabPane} the tabpane if it is a multipage picker,
         *     or null if it does not exist or is a single page picker.
         */
        getTabPane(): goog.ui.TabPane;
    }
}
