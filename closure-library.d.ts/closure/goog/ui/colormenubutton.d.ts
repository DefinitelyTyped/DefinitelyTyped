declare module goog {
    function require(name: 'goog.ui.ColorMenuButton'): typeof goog.ui.ColorMenuButton;
}

declare module goog.ui {

    /**
     * A color menu button control.  Extends {@link goog.ui.MenuButton} by adding
     * an API for getting and setting the currently selected color from a menu of
     * color palettes.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
     *     should contain at least one {@link goog.ui.ColorPalette} if present.
     * @param {goog.ui.MenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ColorMenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class ColorMenuButton extends goog.ui.MenuButton {
        constructor(content: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Default color palettes.
         * @type {!Object}
         */
        static PALETTES: Object;
        
        /**
         * Value for the "no color" menu item object in the color menu (if present).
         * The {@link goog.ui.ColorMenuButton#handleMenuAction} method interprets
         * ACTION events dispatched by an item with this value as meaning "clear the
         * selected color."
         * @type {string}
         */
        static NO_COLOR: string;
        
        /**
         * Factory method that creates and returns a new {@link goog.ui.Menu} instance
         * containing default color palettes.
         * @param {Array<goog.ui.Control>=} opt_extraItems Optional extra menu items to
         *     add before the color palettes.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @return {!goog.ui.Menu} Color menu.
         */
        static newColorMenu(opt_extraItems?: Array<goog.ui.Control>, opt_domHelper?: goog.dom.DomHelper): goog.ui.Menu;
        
        /**
         * Returns the currently selected color (null if none).
         * @return {string} The selected color.
         */
        getSelectedColor(): string;
        
        /**
         * Sets the selected color, or clears the selected color if the argument is
         * null or not any of the available color choices.
         * @param {?string} color New color.
         */
        setSelectedColor(color: string): void;
        
        /**
         * Sets the value associated with the color menu button.  Overrides
         * {@link goog.ui.Button#setValue} by interpreting the value as a color
         * spec string.
         * @param {*} value New button value; should be a color spec string.
         * @override
         */
        setValue(value: any): void;
        
        /**
         * Handles {@link goog.ui.Component.EventType.ACTION} events dispatched by
         * the menu item clicked by the user.  Updates the button, calls the superclass
         * implementation to hide the menu, stops the propagation of the event, and
         * dispatches an ACTION event on behalf of the button itself.  Overrides
         * {@link goog.ui.MenuButton#handleMenuAction}.
         * @param {goog.events.Event} e Action event to handle.
         * @override
         */
        handleMenuAction(e: goog.events.Event): void;
        
        /**
         * Opens or closes the menu.  Overrides {@link goog.ui.MenuButton#setOpen} by
         * generating a default color menu on the fly if needed.
         * @param {boolean} open Whether to open or close the menu.
         * @param {goog.events.Event=} opt_e Mousedown event that caused the menu to
         *     be opened.
         * @override
         */
        setOpen(open: boolean, opt_e?: goog.events.Event): void;
    }
}
