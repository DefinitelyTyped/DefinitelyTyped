declare module goog {
    function require(name: 'goog.ui.emoji.PopupEmojiPicker'): typeof goog.ui.emoji.PopupEmojiPicker;
}

declare module goog.ui.emoji {

    /**
     * Constructs a popup emoji picker widget.
     *
     * @param {string} defaultImgUrl Url of the img that should be used to fill up
     *     the cells in the emoji table, to prevent jittering. Should be the same
     *     size as the emoji.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class PopupEmojiPicker extends goog.ui.Component {
        constructor(defaultImgUrl: string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Adds a group of emoji to the picker.
         *
         * @param {string|Element} title Title for the group.
         * @param {Array<Array<?>>} emojiGroup A new group of emoji to be added. Each
         *    internal array contains [emojiUrl, emojiId].
         */
        addEmojiGroup(title: string|Element, emojiGroup: Array<Array<any>>): void;
        
        /**
         * Sets whether the emoji picker should toggle if it is already open.
         * @param {boolean} toggle The toggle mode to use.
         */
        setToggleMode(toggle: boolean): void;
        
        /**
         * Gets whether the emojipicker is in toggle mode
         * @return {boolean} toggle.
         */
        getToggleMode(): boolean;
        
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
         * Sets whether the emoji picker can accept focus.
         * @param {boolean} focusable Whether the emoji picker should accept focus.
         */
        setFocusable(focusable: boolean): void;
        
        /**
         * Sets the URL prefix for the emoji URLs.
         *
         * @param {string} urlPrefix Prefix that should be prepended to all URLs.
         */
        setUrlPrefix(urlPrefix: string): void;
        
        /**
         * Sets the location of the tabs in relation to the emoji grids. This should
         * only be called before the picker has been rendered.
         *
         * @param {goog.ui.TabPane.TabLocation} tabLocation The location of the tabs.
         */
        setTabLocation(tabLocation: goog.ui.TabPane.TabLocation): void;
        
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
         * Sets the progressive rendering aspect of this emojipicker. Must be called
         * before createDom to have an effect.
         *
         * @param {boolean} progressive Whether the picker should render progressively.
         */
        setProgressiveRender(progressive: boolean): void;
        
        /**
         * Returns the number of emoji groups in this picker.
         *
         * @return {number} The number of emoji groups in this picker.
         */
        getNumEmojiGroups(): number;
        
        /**
         * Causes the emoji imgs to be loaded into the picker. Used for delayed loading.
         */
        loadImages(): void;
        
        /**
         * Attaches the popup emoji picker to an element.
         *
         * @param {Element} element The element to attach to.
         */
        attach(element: Element): void;
        
        /**
         * Detatches the popup emoji picker from an element.
         *
         * @param {Element} element The element to detach from.
         */
        detach(element: Element): void;
        
        /**
         * @return {goog.ui.emoji.EmojiPicker} The emoji picker instance.
         */
        getEmojiPicker(): goog.ui.emoji.EmojiPicker;
        
        /**
         * Returns whether the Popup dismisses itself when the user clicks outside of
         * it.
         * @return {boolean} Whether the Popup autohides on an external click.
         */
        getAutoHide(): boolean;
        
        /**
         * Sets whether the Popup dismisses itself when the user clicks outside of it -
         * must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {boolean} autoHide Whether to autohide on an external click.
         */
        setAutoHide(autoHide: boolean): void;
        
        /**
         * Returns the region inside which the Popup dismisses itself when the user
         * clicks, or null if it was not set. Null indicates the entire document is
         * the autohide region.
         * @return {Element} The DOM element for autohide, or null if it hasn't been
         *     set.
         */
        getAutoHideRegion(): Element;
        
        /**
         * Sets the region inside which the Popup dismisses itself when the user
         * clicks - must be called after the Popup has been created (in createDom()),
         * otherwise it does nothing.
         *
         * @param {Element} element The DOM element for autohide.
         */
        setAutoHideRegion(element: Element): void;
        
        /**
         * Returns the {@link goog.ui.PopupBase} from this picker. Returns null if the
         * popup has not yet been created.
         *
         * NOTE: This should *ONLY* be called from tests. If called before createDom(),
         * this should return null.
         *
         * @return {goog.ui.PopupBase?} The popup, or null if it hasn't been created.
         */
        getPopup(): goog.ui.PopupBase;
        
        /**
         * @return {Element} The last element that triggered the popup.
         */
        getLastTarget(): Element;
        
        /**
         * @return {goog.ui.emoji.Emoji} The currently selected emoji.
         */
        getSelectedEmoji(): goog.ui.emoji.Emoji;
    }
}
