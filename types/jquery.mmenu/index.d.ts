// Type definitions for jQuery mmenu v5.5.3
// Project: http://mmenu.frebsite.nl/
// Definitions by: John Gouigouix <https://github.com/orchestra-ts/DefinitelyTyped/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace JQueryMmenu {

    interface NavbarOptions {

        /**
         * Whether or not to add a navbar above the panels.
         * Default: true
         */
        add?: boolean;

        /**
         * The title above the main panel.
         * Default: "Menu"
         */
        title?: string;

        /**
         * The type of link to set for the title.
         * Possible values: "parent", "anchor" or "none".
         * Default: "parent"
         */
        titleLink?: string;

    }

    interface OnclickOptions {

        /**
         * Whether or not the menu should close after clicking a link inside it.
         * The default value varies per link: true if the default behavior for
         * the clicked link is prevented, false otherwise.
         * Default: null
         */
        close?: boolean | any;

        /**
         * Whether or not to prevent the default behavior for the clicked link.
         * The default value varies per link: true if its href is equal to
         * or starts with a hash (#), false otherwise.
         * Default: null
         */
        preventDefault?: boolean | any;

        /**
         * Whether or not the clicked link should be visibly "selected".
         * Default: true
         */
        setSelected?: boolean | any;

    }

    interface Options {

        /**
         * A collection of extension names to enable for the menu.
         * You'll need this option when using the extensions.
         * Default: []
         */
        extensions?: Array<Object>;

        /**
         * navbar options
         */
        navbar?: NavbarOptions;

        /**
         * onClick options
         */
        onClick?: OnclickOptions;

        /**
         * Whether or not submenus should come sliding in from the right.
         * If false, submenus expand below their parent.
         * To expand a single submenu below its parent item, add the class "Vertical" to it.
         * Default: true
         */
        slidingSubmenus?: boolean;

    }

    interface ClassnamesConfigurations {

        /**
         * The classname on a LI that should be displayed as a divider.
         * Default: "Divider"
         */
        divider?: string;

        /**
         * The classname on a submenu (a nested UL) that should be displayed as a default list.
         * Default: "Inset"
         */
        inset?: string;

        /**
         * The classname on an element (for example a DIV) that should be considered to be a panel.
         * Only applies if the "isMenu" option is set to false.
         * Default: "Panel"
         */
        panel?: string;

        /**
         * The classname on the LI that should be displayed as selected.
         * Default: "Selected"
         */
        selected?: string;

        /**
         * The classname on a submenu (a nested UL) that should expand below
         * their parent instead of slide in from the right.
         * Default: "vertical"
         */
        vertical?: string;

    }

    interface Configurations {

        /**
         * the CSS class names object
         */
        classNames?: ClassnamesConfigurations;

        /**
         * Whether or not the menu should be cloned (and the original menu kept intact).
         * Default: false
         */
        clone?: boolean;

        /**
         * The number of milliseconds between opening/closing the menu and panels,
         * needed to force CSS transitions.
         * Default: 25
         */
        openingInterval?: number;

        /**
         * jQuery selector containing the node-type of panels.
         * Default: "div, ul, ol"
         */
        panelNodetype?: string;

        /**
         * The number of milliseconds used in the CSS transitions.
         * Default: 400 (The value should match the associated CSS value.)
         */
        transitionDuration?: number;

    }

    interface API {

        /**
         * Trigger non-specialized signature method
         * @param methodName
         * @param callback
         */
        bind(methodName: string, callback: (...args: any[]) => void): any;

        /**
         * Trigger this method to close all opened panels and go back to the first panel.
         */
        closeAllPanels(): JQuery;
        /** @see closeAllPanels() */
        bind(methodName: "closeAllPanels", callback: () => void): JQuery;

        /**
         * Trigger this method to close a panel
         * (only available if the "slidingSubmenus" option is set to false).
         * @param panel
         */
        closePanel(panel: JQuery): void;
        /** @see closePanel() */
        bind(methodName: "closePanel", callback: (panel: JQuery) => void): void;

        /**
         * Trigger this method to get the class instance for the menu.
         */
        getInstance(): void;
        /** @see getInstance() */
        bind(methodName: "getInstance", callback: () => void): void;

        /**
         * Trigger this method to (re)initialize a newly added panel.
         * @param panel The panel to (re)initialize.
         */
        init(panel: JQuery): void;
        /** @see init() */
        bind(methodName: "init", callback: (panel: JQuery) => void): void;

        /**
         * Trigger this method to open a panel.
         * @param panel The panel to open.
         */
        openPanel(panel: JQuery): void;
        /** @see openPanel() */
        bind(methodName: "openPanel", callback: (panel: JQuery) => void): void;

        /**
         * Trigger this method to set or unset a list item as "selected".
         * @param li The list item to set or unset as "selected".
         * @param selected Whether to set or unset the list item as "selected". Default: true
         */
        setSelected(li: JQuery, selected?: boolean): void;
        /** @see setSelected() */
        bind(methodName: "setSelected", callback: (li: JQuery, selected?: boolean) => void): void;

        /**
         * Trigger this method to update the appearance for the menu.
         */
        update(): void;
        /** @see update() */
        bind(methodName: "update", callback: () => void): void;

    }

}


interface JQuery {

    /**
     * Create mmenu component
     */
    mmenu(): JQuery;
    mmenu(options: JQueryMmenu.Options): JQuery;
    mmenu(options: JQueryMmenu.Options, configurations: JQueryMmenu.Configurations): JQuery;

    /**
     * Return the mmenu object
     * @param element
     */
    data(element: "mmenu"): JQueryMmenu.API;

}
