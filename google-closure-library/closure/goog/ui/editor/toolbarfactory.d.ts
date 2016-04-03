declare module goog {
    function require(name: 'goog.ui.editor.ToolbarFactory'): typeof goog.ui.editor.ToolbarFactory;
}

declare module goog.ui.editor.ToolbarFactory {

    /**
     * Takes a font spec (e.g. "Arial, Helvetica, sans-serif") and returns the
     * primary font name, normalized to lowercase (e.g. "arial").
     * @param {string} fontSpec Font specification.
     * @return {string} The primary font name, in lowercase.
     */
    function getPrimaryFont(fontSpec: string): string;

    /**
     * Bulk-adds fonts to the given font menu button.  The argument must be an
     * array of font descriptor objects, each of which must have the following
     * attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the font menu (e.g. 'Tahoma')
     *   <li>{@code value} - Value for the corresponding 'font-family' CSS style
     *       (e.g. 'Tahoma, Arial, sans-serif')
     * </ul>
     * @param {!goog.ui.Select} button Font menu button.
     * @param {!Array<{caption: string, value: string}>} fonts Array of
     *     font descriptors.
     */
    function addFonts(button: goog.ui.Select, fonts: Array<{caption: string; value: string}>): void;

    /**
     * Adds a menu item to the given font menu button.  The first font listed in
     * the {@code value} argument is considered the font ID, so adding two items
     * whose CSS style starts with the same font may lead to unpredictable results.
     * @param {!goog.ui.Select} button Font menu button.
     * @param {string} caption Caption to show for the font menu.
     * @param {string} value Value for the corresponding 'font-family' CSS style.
     */
    function addFont(button: goog.ui.Select, caption: string, value: string): void;

    /**
     * Bulk-adds font sizes to the given font size menu button.  The argument must
     * be an array of font size descriptor objects, each of which must have the
     * following attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the font size menu (e.g. 'Huge')
     *   <li>{@code value} - Value for the corresponding HTML font size (e.g. 6)
     * </ul>
     * @param {!goog.ui.Select} button Font size menu button.
     * @param {!Array<{caption: string, value:number}>} sizes Array of font
     *     size descriptors.
     */
    function addFontSizes(button: goog.ui.Select, sizes: Array<{caption: string; value: number}>): void;

    /**
     * Adds a menu item to the given font size menu button.  The {@code value}
     * argument must be a legacy HTML font size in the 0-7 range.
     * @param {!goog.ui.Select} button Font size menu button.
     * @param {string} caption Caption to show in the font size menu.
     * @param {number} value Value for the corresponding HTML font size.
     */
    function addFontSize(button: goog.ui.Select, caption: string, value: number): void;

    /**
     * Converts a legacy font size specification into an equivalent pixel size.
     * For example, {@code &lt;font size="6"&gt;} is {@code font-size: 32px;}, etc.
     * @param {number} fontSize Legacy font size spec in the 0-7 range.
     * @return {number} Equivalent pixel size.
     */
    function getPxFromLegacySize(fontSize: number): number;

    /**
     * Converts a pixel font size specification into an equivalent legacy size.
     * For example, {@code font-size: 32px;} is {@code &lt;font size="6"&gt;}, etc.
     * If the given pixel size doesn't exactly match one of the legacy sizes, -1 is
     * returned.
     * @param {number} px Pixel font size.
     * @return {number} Equivalent legacy size spec in the 0-7 range, or -1 if none
     *     exists.
     */
    function getLegacySizeFromPx(px: number): number;

    /**
     * Bulk-adds format options to the given "Format block" menu button.  The
     * argument must be an array of format option descriptor objects, each of
     * which must have the following attributes:
     * <ul>
     *   <li>{@code caption} - Caption to show in the menu (e.g. 'Minor heading')
     *   <li>{@code command} - Corresponding {@link goog.dom.TagName} (e.g.
     *       'H4')
     * </ul>
     * @param {!goog.ui.Select} button "Format block" menu button.
     * @param {!Array<{caption: string, command: goog.dom.TagName}>} formats Array
     *     of format option descriptors.
     */
    function addFormatOptions(button: goog.ui.Select, formats: Array<{caption: string; command: goog.dom.TagName}>): void;

    /**
     * Adds a menu item to the given "Format block" menu button.
     * @param {!goog.ui.Select} button "Format block" menu button.
     * @param {string} caption Caption to show in the menu.
     * @param {goog.dom.TagName} tag Corresponding block format tag.
     */
    function addFormatOption(button: goog.ui.Select, caption: string, tag: goog.dom.TagName): void;

    /**
     * Creates a {@link goog.ui.Toolbar} containing the specified set of
     * toolbar buttons, and renders it into the given parent element.  Each
     * item in the {@code items} array must a {@link goog.ui.Control}.
     * @param {!Array<goog.ui.Control>} items Toolbar items; each must
     *     be a {@link goog.ui.Control}.
     * @param {!Element} elem Toolbar parent element.
     * @param {boolean=} opt_isRightToLeft Whether the editor chrome is
     *     right-to-left; defaults to the directionality of the toolbar parent
     *     element.
     * @return {!goog.ui.Toolbar} Editor toolbar, rendered into the given parent
     *     element.
     */
    function makeToolbar(items: Array<goog.ui.Control>, elem: Element, opt_isRightToLeft?: boolean): goog.ui.Toolbar;

    /**
     * Creates a toolbar button with the given ID, tooltip, and caption.  Applies
     * any custom CSS class names to the button's caption element.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Button} A toolbar button.
     */
    function makeButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Button;

    /**
     * Creates a toggle button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's caption element. The button
     * returned has checkbox-like toggle semantics.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Button} A toggle button.
     */
    function makeToggleButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Button;

    /**
     * Creates a menu button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's caption element.  The button
     * returned doesn't have an actual menu attached; use {@link
     * goog.ui.MenuButton#setMenu} to attach a {@link goog.ui.Menu} to the
     * button.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Button renderer; defaults to
     *     {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.MenuButton} A menu button.
     */
    function makeMenuButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.MenuButton;

    /**
     * Creates a select button with the given ID, tooltip, and caption. Applies
     * any custom CSS class names to the button's root element.  The button
     * returned doesn't have an actual menu attached; use {@link
     * goog.ui.Select#setMenu} to attach a {@link goog.ui.Menu} containing
     * {@link goog.ui.Option}s to the select button.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in buttons, anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption; used as the
     *     default caption when nothing is selected.
     * @param {string=} opt_classNames CSS class name(s) to apply to the button's
     *     root element.
     * @param {goog.ui.MenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.Select} A select button.
     */
    function makeSelectButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.MenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.Select;

    /**
     * Creates a color menu button with the given ID, tooltip, and caption.
     * Applies any custom CSS class names to the button's caption element.  The
     * button is created with a default color menu containing standard color
     * palettes.
     * @param {string} id Button ID; must equal a {@link goog.editor.Command} for
     *     built-in toolbar buttons, but can be anything else for custom buttons.
     * @param {string} tooltip Tooltip to be shown on hover.
     * @param {goog.ui.ControlContent} caption Button caption.
     * @param {string=} opt_classNames CSS class name(s) to apply to the caption
     *     element.
     * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Button renderer;
     *     defaults to {@link goog.ui.ToolbarColorMenuButtonRenderer}
     *     if unspecified.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper, used for DOM
     *     creation; defaults to the current document if unspecified.
     * @return {!goog.ui.ColorMenuButton} A color menu button.
     */
    function makeColorMenuButton(id: string, tooltip: string, caption: goog.ui.ControlContent, opt_classNames?: string, opt_renderer?: goog.ui.ColorMenuButtonRenderer, opt_domHelper?: goog.dom.DomHelper): goog.ui.ColorMenuButton;
}
