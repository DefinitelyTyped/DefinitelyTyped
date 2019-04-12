/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxPopupMenu
 * 
 * Basic popup menu. To add a vertical scrollbar to a given submenu, the
 * following code can be used.
 * 
 * (code)
 * var mxPopupMenuShowMenu = showMenu;
 * showMenu()
 * {
 *   mxPopupMenuShowMenu.apply(this, arguments);
 *   
 *   this.div.style.overflowY = 'auto';
 *   this.div.style.overflowX = 'hidden';
 *   this.div.style.maxHeight = '160px';
 * };
 * (end)
 * 
 * Constructor: mxPopupMenu
 * 
 * Constructs a popupmenu.
 * 
 * Event: mxEvent.SHOW
 *
 * Fires after the menu has been shown in <popup>.
 */
declare namespace mxgraph {
  export class mxPopupMenu extends mxEventSource {
    constructor(factoryMethod: (panningHandler: mxPanningHandler, cell: mxCell, me: mxMouseEvent) => any);

    /**
     * Variable: submenuImage
     * 
     * URL of the image to be used for the submenu icon.
     */
    submenuImage: string;

    /**
     * Variable: zIndex
     * 
     * Specifies the zIndex for the popupmenu and its shadow. Default is 1006.
     */
    zIndex: number;

    /**
     * Variable: factoryMethod
     * 
     * Function that is used to create the popup menu. The function takes the
     * current panning handler, the <mxCell> under the mouse and the mouse
     * event that triggered the call as arguments.
     */
    factoryMethod: (panningHandler: mxPanningHandler, cell: mxCell, me: mxMouseEvent) => any;

    /**
     * Variable: useLeftButtonForPopup
     * 
     * Specifies if popupmenus should be activated by clicking the left mouse
     * button. Default is false.
     */
    useLeftButtonForPopup: boolean;

    /**
     * Variable: enabled
     * 
     * Specifies if events are handled. Default is true.
     */
    enabled: boolean;

    /**
     * Variable: itemCount
     * 
     * Contains the number of times <addItem> has been called for a new menu.
     */
    itemCount: number;

    /**
     * Variable: autoExpand
     * 
     * Specifies if submenus should be expanded on mouseover. Default is false.
     */
    autoExpand: boolean;

    /**
     * Variable: smartSeparators
     * 
     * Specifies if separators should only be added if a menu item follows them.
     * Default is false.
     */
    smartSeparators: boolean;

    /**
     * Variable: labels
     * 
     * Specifies if any labels should be visible. Default is true.
     */
    labels: boolean;

    /**
     * Function: init
     * 
     * Initializes the shapes required for this vertex handler.
     */
    init(): void;

    /**
     * Function: isEnabled
     * 
     * Returns true if events are handled. This implementation
     * returns <enabled>.
     */
    isEnabled(): boolean;

    /**
     * Function: setEnabled
     * 
     * Enables or disables event handling. This implementation
     * updates <enabled>.
     */
    setEnabled(enabled: boolean): void;

    /**
     * Function: isPopupTrigger
     * 
     * Returns true if the given event is a popupmenu trigger for the optional
     * given cell.
     * 
     * Parameters:
     * 
     * me - <mxMouseEvent> that represents the mouse event.
     */
    isPopupTrigger(me): boolean;

    /**
     * Function: addItem
     * 
     * Adds the given item to the given parent item. If no parent item is specified
     * then the item is added to the top-level menu. The return value may be used
     * as the parent argument, ie. as a submenu item. The return value is the table
     * row that represents the item.
     * 
     * Paramters:
     * 
     * title - String that represents the title of the menu item.
     * image - Optional URL for the image icon.
     * funct - Function associated that takes a mouseup or touchend event.
     * parent - Optional item returned by <addItem>.
     * iconCls - Optional string that represents the CSS class for the image icon.
     * IconsCls is ignored if image is given.
     * enabled - Optional boolean indicating if the item is enabled. Default is true.
     * active - Optional boolean indicating if the menu should implement any event handling.
     * Default is true.
     */
    addItem(title: string, image?: string, funct?: (me: mxMouseEvent) => void, parent?: mxPopupMenu, iconCls?: string, enabled?: boolean, active?: boolean): Element;

    /**
     * Adds a checkmark to the given menuitem.
     */
    addCheckmark(item: Element, img: string): void;

    /**
     * Function: createSubmenu
     * 
     * Creates the nodes required to add submenu items inside the given parent
     * item. This is called in <addItem> if a parent item is used for the first
     * time. This adds various DOM nodes and a <submenuImage> to the parent.
     * 
     * Parameters:
     * 
     * parent - An item returned by <addItem>.
     */
    createSubmenu(parent: Element): void;

    /**
     * Function: showSubmenu
     * 
     * Shows the submenu inside the given parent row.
     */
    showSubmenu(parent: Element, row: Element): void;

    /**
     * Function: addSeparator
     * 
     * Adds a horizontal separator in the given parent item or the top-level menu
     * if no parent is specified.
     * 
     * Parameters:
     * 
     * parent - Optional item returned by <addItem>.
     * force - Optional boolean to ignore <smartSeparators>. Default is false.
     */
    addSeparator(parent?: Element, force?: boolean): void;

    /**
     * Function: popup
     * 
     * Shows the popup menu for the given event and cell.
     * 
     * Example:
     * 
     * (code)
     * graph.panningHandler.popup(x, y, cell, evt)
     * {
     *   mxUtils.alert('Hello, World!');
     * }
     * (end)
     */
    popup(x: number, y: number, cell: mxCell, evt: Event): void;

    /**
     * Function: isMenuShowing
     * 
     * Returns true if the menu is showing.
     */
    isMenuShowing(): boolean;

    /**
     * Function: showMenu
     * 
     * Shows the menu.
     */
    showMenu(): void;

    /**
     * Function: hideMenu
     * 
     * Removes the menu and all submenus.
     */
    hideMenu(): void;

    /**
     * Function: hideSubmenu
     * 
     * Removes all submenus inside the given parent.
     * 
     * Parameters:
     * 
     * parent - An item returned by <addItem>.
     */
    hideSubmenu(parent: Element): void;

    /**
     * Function: destroy
     * 
     * Destroys the handler and all its resources and DOM nodes.
     */
    destroy(): void;

  }
}