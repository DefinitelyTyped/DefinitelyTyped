// Type definitions for jQuery-menu-aim
// Project: https://github.com/kamens/jQuery-menu-aim
// Definitions by: Robert Fonseca-Ensor <http://www.robfe.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryMenuAimOptions {
    /** Function to call when a row is purposefully activated. Use this
    * to show a submenu's content for the activated row.
    */
    activate? (): void;

    /** Function to call when a row is deactivated.
    */
    deactivate? (): void;

    /** Function to call when mouse enters a menu row. Entering a row
    * does not mean the row has been activated, as the user may be
    * mousing over to a submenu.
    */
    enter? (): void;

    /** Function to call when mouse exits a menu row.
    */
    exit? (): void;

    /** Function to call when mouse exits the entire menu. If this returns
    * true, the current row's deactivation event and callback function
    * will be fired. Otherwise, if this isn't supplied or it returns
    * false, the currently activated row will stay activated when the
    * mouse leaves the menu entirely.
    */
    exitMenu? (): void;

    /** Selector for identifying which elements in the menu are rows
    * that can trigger the above events. Defaults to "> li".
    * rowSelector: "> li",
    */
    rowSelector?: string;

    /** You may have some menu rows that aren't submenus and therefore
    * shouldn't ever need to "activate." If so, filter submenu rows w/
    * this selector. Defaults to "*" (all elements).
    * submenuSelector: "*",
    */
    submenuSelector?: string;

    /** Direction the submenu opens relative to the main menu. This
    * controls which direction is "forgiving" as the user moves their
    * cursor from the main menu into the submenu. Can be one of "right",
    * "left", "above", or "below". Defaults to "right".
    * submenuDirection: "right"
    */
    submenuDirection?: string;
}

interface JQuery {
    /** Dropdown menus that can differentiate between a user trying hover over a dropdown item vs trying to navigate into a submenu's contents.
     * @author Ben Kamens
     * https://github.com/kamens/jQuery-menu-aim
     */
    menuAim(options: JQueryMenuAimOptions): JQuery;
}

