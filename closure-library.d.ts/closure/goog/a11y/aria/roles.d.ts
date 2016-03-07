declare module goog {
    function require(name: 'goog.a11y.aria.Role'): typeof goog.a11y.aria.Role;
}

declare module goog.a11y.aria {

    /**
     * ARIA role values.
     * @enum {string}
     */
    type Role = string;
    var Role: {
        ALERT: Role;
        ALERTDIALOG: Role;
        APPLICATION: Role;
        ARTICLE: Role;
        BANNER: Role;
        BUTTON: Role;
        CHECKBOX: Role;
        COLUMNHEADER: Role;
        COMBOBOX: Role;
        COMPLEMENTARY: Role;
        CONTENTINFO: Role;
        DEFINITION: Role;
        DIALOG: Role;
        DIRECTORY: Role;
        DOCUMENT: Role;
        FORM: Role;
        GRID: Role;
        GRIDCELL: Role;
        GROUP: Role;
        HEADING: Role;
        IMG: Role;
        LINK: Role;
        LIST: Role;
        LISTBOX: Role;
        LISTITEM: Role;
        LOG: Role;
        MAIN: Role;
        MARQUEE: Role;
        MATH: Role;
        MENU: Role;
        MENUBAR: Role;
        MENU_ITEM: Role;
        MENU_ITEM_CHECKBOX: Role;
        MENU_ITEM_RADIO: Role;
        NAVIGATION: Role;
        NOTE: Role;
        OPTION: Role;
        PRESENTATION: Role;
        PROGRESSBAR: Role;
        RADIO: Role;
        RADIOGROUP: Role;
        REGION: Role;
        ROW: Role;
        ROWGROUP: Role;
        ROWHEADER: Role;
        SCROLLBAR: Role;
        SEARCH: Role;
        SEPARATOR: Role;
        SLIDER: Role;
        SPINBUTTON: Role;
        STATUS: Role;
        TAB: Role;
        TAB_LIST: Role;
        TAB_PANEL: Role;
        TEXTBOX: Role;
        TIMER: Role;
        TOOLBAR: Role;
        TOOLTIP: Role;
        TREE: Role;
        TREEGRID: Role;
        TREEITEM: Role;
    };
}
