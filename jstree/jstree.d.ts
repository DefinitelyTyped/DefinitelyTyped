// Type definitions for jsTree v3.0.0
// Project: http://www.jstree.com/
// Definitions by: Adam Pluciñski <https://github.com/adaskothebeast>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

interface JQueryStatic {
    /**
    * holds all jstree related functions and variables, 
    * including the actual class and methods to create, 
    * access and manipulate instances.
    * @property jstree
    * @type {JSTreeStatic}
    */
    jstree?: JSTreeStatic;

}

interface JSTreeStatic {
    /**
    * specifies the jstree version in use
    * @property version
    * @type {string}
    */
    version: string;

    /**
    * holds all the default options used when creating new instances
    * @property defaults
    * @type {JSTreeStaticDefaults}
    */
    defaults: JSTreeStaticDefaults;

    /**
    * stores all loaded jstree plugins (used internally)
    */
    plugins: any[];

    /**
    * creates a jstree instance
    * @param el <DOMElement, jQuery, String> the element to create the instance on, can be jQuery extended or a selector
    * @param options {JSTreeOptions} options for this instance (extends `$.jstree.defaults`)
    * @returns {JSTree} the new instance 
    */
    create(el: any, options?: JSTreeStaticDefaults): JSTree;

    /**
    * the jstree class constructor, used only internally
    * @param id {number} this instance's index
    */
    core(id: number): void;

    /**
    * get a reference to an existing instance
    * 
    * __Examples__
    *
    * $.jstree.reference('tree');
    * $.jstree.reference('#tree');
    * $.jstree.reference('branch');
    * $.jstree.reference('#branch');
    *
    * @param {String} selector 
    * @returns {JSTree|null} the instance or `null` if not found
    */
    reference(selector: string): JSTree;

    /**
    * get a reference to an existing instance
    * 
    * __Examples__
    *
    * $.jstree.reference(document.getElementByID('tree'));
    * $.jstree.reference(document.getElementByID('branch'));
    *
    * @param {HTMLElement} element 
    * @returns {JSTree|null} the instance or `null` if not found
    */
    reference(element: HTMLElement): JSTree;

    /**
    * get a reference to an existing instance
    * 
    * __Examples__
    *
    * $.jstree.reference($('#tree'));
    * $.jstree.reference($('#branch'));
    *
    * @param {JQuery} object 
    * @returns {JSTree|null} the instance or `null` if not found
    */
    reference(object: JQuery): JSTree;
}

interface JSTreeStaticDefaults {
    /**
    * configure which plugins will be active on an instance. 
    * Should be an array of strings, where each element is a plugin name. 
    * The default is []
    */
    plugins: string[];
    /**
    * stores all defaults for the core
    */
    core: JSTreeStaticDefaultsCore;
    /**
    * stores all defaults for the checkbox plugin
    */
    checkbox?: JSTreeStaticDefaultsCheckbox;
    /**
    * stores all defaults for the contextmenu plugin
    */
    contextmenu?: JSTreeStaticDefaultsContextMenu;
    /**
    * stores all defaults for the drag'n'drop plugin
    */
    dnd?: JSTreeStaticDefaultsDragNDrop;
    /**
    * stores all defaults for the search plugin
    */
    search?: JSTreeStaticDefaultsSearch;
    /**
    * the settings function used to sort the nodes.
    * It is executed in the tree's context, 
    * accepts two nodes as arguments and should return 1 or -1.
    */
    sort?: (x: any, y: any) => number;
    /**
    * stores all defaults for the state plugin
    */
    state?: JSTreeStaticDefaultsState;
    /**
    * An object storing all types as key value pairs,
    * where the key is the type name and the value is an object 
    * that could contain following keys (all optional).
    * max_children the maximum number of immediate children this node type can have.
    * Do not specify or set to -1 for unlimited.
    * max_depth the maximum number of nesting this node type can have. 
    * A value of 1 would mean that the node can have children, but no grandchildren. 
    * Do not specify or set to -1 for unlimited.
    * valid_children an array of node type strings, that nodes of this type can have as children. 
    * Do not specify or set to -1 for no limits.
    * icon a string - can be a path to an icon or a className, if using an image 
    * that is in the current directory use a ./ prefix, otherwise it will be detected as a class. 
    * Omit to use the default icon from your theme.
    * There are two predefined types:
    * # represents the root of the tree, for example max_children would control the maximum number of root nodes.
    * default represents the default node - any settings here will be applied to all nodes that do not have a type specified.
    */
    types?: any;
}

interface JSTreeStaticDefaultsCore {
    /**
    * data configuration
    */
    data?: any;
    /**
    * configure the various strings used throughout the tree
    */
    strings?: any;
    
    /**
    *
    */
    check_callback?: (operation: string, node: any, node_parent: any, node_position: any) => boolean;

    /**
    * a callback called with a single object parameter in the instance's scope 
    * when something goes wrong (operation prevented, ajax failed, etc)
    */
    error: () => any;

    /**
    * the open / close animation duration in milliseconds
    * set this to false to disable the animation (default is 200)
    */
    animation?: any;
    /**
    * a boolean indicating if multiple nodes can be selected
    */
    multiple?: boolean;
    /**
    * theme configuration object
    */
    themes?: JSTreeStaticDefaultsCoreThemes;
    /**
    * if left as true all parents of all selected nodes will be opened 
    * once the tree loads (so that all selected nodes are visible to the user)
    */
    expand_selected_onload?: boolean;
}

interface JSTreeStaticDefaultsCoreThemes {
    /**
    * the name of the theme to use (if left as false the default theme is used)
    */
    name?: string;
    /**
    * the URL of the theme's CSS file, leave this as false if you have manually 
    * included the theme CSS (recommended). 
    * You can set this to true too which will try to autoload the theme.
    */
    url?: string;
    /**
    * the location of all jstree themes - only used if url is set to true
    */
    dir?: string;
    /**
    * a boolean indicating if connecting dots are shown
    */
    dots?: boolean;
    /**
    * a boolean indicating if node icons are shown
    */
    icons?: boolean;
    /**
    * a boolean indicating if the tree background is striped
    */
    stripes?: boolean;
    /**
    * a string (or boolean false) specifying the theme 
    * variant to use (if the theme supports variants)
    */
    variant?: any;
    /**
    * a boolean specifying if a reponsive version of the theme should kick 
    * in on smaller screens (if the theme supports it). Defaults to true.
    */
    responsive?: boolean;

}

interface JSTreeStaticDefaultsCheckbox {
    /**
    * a boolean indicating if checkboxes should be visible 
    * (can be changed at a later time using show_checkboxes() 
    * and hide_checkboxes). Defaults to true.
    */
    visible: boolean;
    /**
    * a boolean indicating if checkboxes should cascade down 
    * and have an undetermined state. Defaults to true.
    */
    three_state: boolean;
    /**
    * a boolean indicating if clicking anywhere on the node 
    * should act as clicking on the checkbox. Defaults to true.
    */
    whole_node: boolean;
    /**
    * a boolean indicating if the selected style of a node 
    * should be kept, or removed. Defaults to true.
    */
    keep_selected_style: boolean;
}

interface JSTreeStaticDefaultsContextMenu {
    /**
    * a boolean indicating if the node should be selected 
    * when the context menu is invoked on it. Defaults to true.
    */
    select_node: boolean;
    /**
    * a boolean indicating if the menu should be shown aligned 
    * with the node. Defaults to true, otherwise the mouse coordinates are used.
    */
    show_at_node: boolean;
    /**
    * an object of actions, or a function that accepts a node 
    * and returns an object of actions available for that node
    * Each action consists of a key (a unique name) and a value which is an object with the following properties:
    * separator_before - a boolean indicating if there should be a separator before this item
    * separator_after - a boolean indicating if there should be a separator after this item
    * _disabled - a boolean indicating if this action should be disabled
    * label - a string - the name of the action
    * action - a function to be executed if this item is chosen
    */
    items: any;
}

interface JSTreeStaticDefaultsDragNDrop {
    /**
    * a boolean indicating if a copy should be possible 
    * while dragging (by pressint the meta key or Ctrl). Defaults to 'true'.
    */
    copy: boolean;
    /**
    * a number indicating how long a node should remain hovered 
    * while dragging to be opened. Defaults to 500.
    */
    open_timeout: number;

    /**
    * a function invoked each time a node is about to be dragged, 
    * invoked in the tree's scope and receives the nodes about to be dragged 
    * as an argument (array) - return `false` to prevent dragging
    */
    is_draggable: boolean;

    /**
    * a boolean indicating if checks should constantly be made 
    * while the user is dragging the node (as opposed to checking only on drop), 
    * default is `true`
    */
    check_while_dragging: boolean;

    /**
    * a boolean indicating if nodes from this tree should only be copied 
    * with dnd (as opposed to moved), default is `false`
    */
    always_copy: boolean;
}

interface JSTreeStaticDefaultsSearch {
    /**
    * a jQuery-like AJAX config, which jstree uses 
    * if a server should be queried for results.
    * A str (which is the search string) parameter will be added with the request. 
    * The expected result is a JSON array with nodes that need to be opened 
    * so that matching nodes will be revealed. Leave this setting as false to not query the server.
    */
    ajax: any;
    /**
    * Indicates if the search should be fuzzy 
    * or not (should chnd3 match child node 3). Default is true.
    */
    fuzzy: boolean;
    /**
    * Indicates if the search should be case sensitive. Default is false.
    */
    case_sensitive: boolean;
    /**
    * Indicates if the tree should be filtered to show only matching nodes 
    * (keep in mind this can be a heavy on large trees in old browsers). Default is false.
    */
    show_only_matches: boolean;
    /**
    * Indicates if all nodes opened to reveal the search result, 
    * should be closed when the search is cleared or a new search is performed. Default is true.
    */
    close_opened_onclear: boolean;

    /**
    * Indicates if only leaf nodes should be included in search results. Default is `false`.
    */
    search_leaves_only: boolean;
}

interface JSTreeStaticDefaultsState {
    /**
    * A string for the key to use when saving the current tree 
    * (change if using multiple trees in your project). Defaults to jstree.
    */
    key: string;
    /**
    * A space separated list of events that trigger a state save. 
    * Defaults to changed.jstree open_node.jstree close_node.jstree.
    */
    events: string;

    /**
    * Time in milliseconds after which the state will expire.
    * Defaults to 'false' meaning - no expire.
    */
    ttl: any;

    /**
    * A function that will be executed prior to restoring state 
    * with one argument - the state object. Can be used 
    * to clear unwanted parts of the state.
    */
    filter: any;

}

interface JQuery {
    jstree(): JSTree;
    jstree(options: JSTreeStaticDefaults): JSTree;
    jstree(arg: boolean): JSTree;
    jstree(...args: any[]): JSTree;
}

interface JSTree extends JQuery {
    /**
    * destroy an instance
    */
    destroy: () => void;
    /**
    * returns the jQuery extended instance container
    */
    get_container: () => JQuery;
    /**
    * get the JSON representation of a node 
    * (or the actual jQuery extended DOM node) 
    * by using any input (child DOM element, ID string, selector, etc)
    */
    get_node: (obj: any, as_dom?: boolean) => JQuery;
    /**
    * get the next visible node that is below the obj node.
    * If strict is set to true only sibling nodes are returned.
    */
    get_next_dom: (obj:any,strict?:boolean) => JQuery;
    /**
    * get the previous visible node that is above the obj node. 
    * If strict is set to true only sibling nodes are returned.
    */
    get_prev_dom: (obj: any, strict?: boolean) => JQuery;
    /**
    * get the parent ID of a node
    */
    get_parent: (obj: any) => string;
    /**
    * get a jQuery collection of all the children of a node (node must be rendered)
    */
    get_children_dom: (obj: any) => JQuery;
    /**
    * checks if a node has children
    */
    is_parent: (obj: any) => boolean;
    /**
    * checks if a node is loaded (its children are available)
    */
    is_loaded: (obj: any) => boolean;
    /**
    * check if a node is currently loading (fetching children)
    */
    is_loading: (obj: any) => boolean;
    /**
    * check if a node is opened
    */
    is_open: (obj: any) => boolean;
    /**
    * check if a node is in a closed state
    */
    is_closed: (obj: any) => boolean;
    /**
    * check if a node has no children
    */
    is_leaf: (obj: any) => boolean;
    /**
    * loads a node (fetches its children using the core.data setting). 
    * Multiple nodes can be passed to by using an array.
    * @param obj mixed
    * @param callback a function to be executed once loading is conplete, 
    * the function is executed in the instance's scope and receives two arguments 
    * the node and a boolean status
    */
    load_node: (obj: any, callback: any) => boolean;
    /**
    * redraws all nodes that need to be redrawn or optionally - the whole tree
    * @param full if set to `true` all nodes are redrawn.
    */
    redraw: (full?: boolean) => void;
    /**
    * opens a node, revaling its children. If the node is not loaded 
    * it will be loaded and opened once ready.
    * @param obj the node to open
    * @param callback a function to execute once the node is opened
    * @param animation  the animation duration in milliseconds when opening the node 
    * (overrides the `core.animation` setting). Use `false` for no animation.
    */
    open_node: (obj: any, callback?: any, animation?: any) => void;
    /**
    * opens a node, revaling its children. If the node is not loaded 
    * it will be loaded and opened once ready.
    * @param obj the node to close
    * @param animation  the animation duration in milliseconds when closing the node 
    * (overrides the `core.animation` setting). Use `false` for no animation.
    */
    close_node: (obj: any, animation?: any) => void;
    /**
    * toggles a node - closing it if it is open, opening it if it is closed
    */
    toggle_node: (obj: any) => void;
    /**
    * opens all nodes within a node (or the tree), revaling their children. 
    * If the node is not loaded it will be loaded and opened once ready.
    * @param obj the node to open recursively, omit to open all nodes in the tree
    * @param animation the animation duration in milliseconds when opening the nodes, the default is no animation
    * @param original_obj to the node that started the process (internal use)
    */
    open_all: (obj?: any, animation?: number, original_obj?: any) => void;
    /**
    * closes all nodes within a node (or the tree), revaling their children
    * @param obj the node to close recursively, omit to close all nodes in the tree
    * @param animation the animation duration in milliseconds when closing the nodes, the default is no animation
    */
    close_all: (obj?: any, animation?: number) => void;
    /**
    * checks if a node is disabled (not selectable)
    */
    is_disabled: (obj: any) => boolean;
    /**
    * enables a node - so that it can be selected
    */
    enable_node: (obj: any) => boolean;
    /**
    * disables a node - so that it can not be selected
    */
    disable_node: (obj: any) => boolean;
    /**
    * select a node
    * @param obj an array can be used to select multiple nodes
    * @param supress_event if set to `true` the `changed.jstree` event won't be triggered
    * @param prevent_open if set to `true` parents of the selected node won't be opened
    */
    select_node: (obj: any, supress_event?: boolean, prevent_open?: boolean) => void;
    /**
    * deselect a node
    * @param obj an array can be used to deselect multiple nodes
    * @param supress_event if set to `true` the `changed.jstree` event won't be triggered
    */
    deselect_node: (obj: any, supress_event?: boolean) => void;
    /**
    * select all nodes in the tree
    * @param supress_event if set to `true` the `changed.jstree` event won't be triggered
    */
    select_all: (supress_event?: boolean) => void;
    /**
    * deselect all selected nodes
    * @param supress_event if set to `true` the `changed.jstree` event won't be triggered
    */
    deselect_all: (supress_event?: boolean) => void;
    /**
    * checks if a node is selected
    */
    is_selected: (obj: any) => boolean;
    /**
    * get an array of all selected node IDs
    * @param full if set to `true` the returned array will consist of the full node objects, 
    * otherwise - only IDs will be returned
    */
    get_selected: (full?: any) => string[];
    /**
    * refreshes the tree - all nodes are reloaded with calls to load_node.
    */
    refresh: () => void;
    /**
    * set (change) the ID of a node
    * @param obj the node
    * @param id the new ID
    */
    set_id: (obj: any, id: string) => void;
    /**
    * get the text value of a node
    */
    get_text: (obj: any) => string;
    /**
    * gets a JSON representation of a node (or the whole tree)
    */
    get_json: (obj?: any, options?: JSTreeGetJsonOptions) => any;
    /**
    * create a new node (do not confuse with load_node)
    * @param obj the parent node
    * @param node the data for the new node (a valid JSON object, or a simple string with the name)
    * @param pos the index at which to insert the node, "first" and "last" are also supported, default is "last"
    * @param callback a function to be called once the node is created
    * @param is_loaded internal argument indicating if the parent node was succesfully loaded
    * @returns the ID of the newly create node
    */
    create_node: (obj?: any, node?: any, pos?: any, callback?: any, is_loaded?: boolean) => string;
    /**
    * set the text value of a node
    * @param obj the node, you can pass an array to rename multiple nodes to the same name
    * @param val the new text value
    */
    rename_node: (obj: any, val: string) => boolean;
    /**
    * remove a node
    * @param obj the node, you can pass an array to delete multiple nodes
    */
    delete_node: (obj: any) => boolean;
    /**
    * move a node to a new parent
    * @param obj the node to move, pass an array to move multiple nodes
    * @param par the new parent
    * @param pos the position to insert at ("first" and "last" are supported, as well as "before" and "after"), defaults to `0`
    * @param callback a function to call once the move is completed, receives 3 arguments - the node, the new parent and the position
    * @param internal parameter indicating if the parent node has been loaded
    */
    move_node: (obj: any, par: any, pos?: any, callback?: any, internal?: boolean) => void;
    /**
    * copy a node to a new parent
    * @param obj the node to copy, pass an array to copy multiple nodes
    * @param par the new parent
    * @param pos the position to insert at ("first" and "last" are supported, as well as "before" and "after"), defaults to `0`
    * @param callback a function to call once the move is completed, receives 3 arguments - the node, the new parent and the position
    * @param internal parameter indicating if the parent node has been loaded
    */
    copy_node: (obj: any, par: any, pos?: any, callback?: any, internal?: boolean) => void;
    /**
    * cut a node (a later call to paste(obj) would move the node)
    * @param obj multiple objects can be passed using an array
    */
    cut: (obj: any) => void;
    /**
    * copy a node (a later call to paste(obj) would copy the node)
    * @param obj multiple objects can be passed using an array
    */
    copy: (obj: any) => void;
    /**
    * get the current buffer (any nodes that are waiting for a paste operation)
    * @returns an object consisting of `mode` ("copy_node" or "move_node"), 
    * `node` (an array of objects) and `inst` (the instance)
    */
    get_buffer: () => any;
    /**
    * check if there is something in the buffer to paste
    */
    can_paste: () => boolean;
    /**
    * copy or move the previously cut or copied nodes to a new parent
    * @param obj the new parent
    */
    paste: (obj: any) => void;
    /**
    * put a node in edit mode (input field to rename the node)
    * @param obj
    * @param default_text the text to populate the input with (if omitted the node text value is used)
    */
    edit: (obj: any, default_text?: string) => void;
    /**
    * changes the theme
    * @param theme_name the name of the new theme to apply
    * @param theme_url  the location of the CSS file for this theme. 
    * Omit or set to `false` if you manually included the file. 
    * Set to `true` to autoload from the `core.themes.dir` directory.
    */
    set_theme: (theme_name: string, theme_url?: any) => void;
    /**
    * gets the name of the currently applied theme name
    */
    get_theme: () => string;
    /**
    * changes the theme variant (if the theme has variants)
    * @param variant_name the variant to apply (if `false` is used the current variant is removed) 
    */
    set_theme_variant: (variant_name: any) => void;
    /**
    * gets the name of the currently applied theme variant name
    */
    get_theme_variant: () => string;
    /**
    * shows a striped background on the container (if the theme supports it)
    */
    show_stripes: () => void;
    /**
    * hides the striped background on the container
    */
    hide_stripes: () => void;
    /**
    * toggles the striped background on the container
    */
    toggle_stripes: () => void;
    /**
    * shows the connecting dots (if the theme supports it)
    */
    show_dots: () => void;
    /**
    * hides the connecting dots
    */
    hide_dots: () => void;
    /**
    * toggles the connecting dots
    */
    toggle_dots: () => void;
    /**
    * show the node icons
    */
    show_icons: () => void;
    /**
    * hide the node icons
    */
    hide_icons: () => void;
    /**
    * toggle the node icons
    */
    toggle_icons: () => void;
    /**
    * set the node icon for a node
    * @param obj
    * @param icon  the new icon - can be a path to an icon or a className,
    * if using an image that is in the current directory use a `./` prefix,
    * otherwise it will be detected as a class
    */
    set_icon: (obj: any, icon: string) => void;
    /**
    * get the node icon for a node
    */
    get_icon: (obj: any) => string;
    /**
    * hide the icon on an individual node
    */
    hide_icon: (obj: any) => void;
    /**
    * show the icon on an individual node
    */
    show_icon: (obj: any) => void;
    /**
    */
    redraw_node: (obj: any, deep:boolean, is_callback:boolean) => any;
    activate_node: (obj: any, e: any) => any;

    /*
    * checkbox plugin: show the node checkbox icons
    */
    show_checkboxes: () => void;
    /*
    * checkbox plugin: hide the node checkbox icons
    */
    hide_checkboxes: () => void;
    /*
    * checkbox plugin: toggle the node icons
    */
    toggle_checkboxes: () => void;
    /**
    * context menu plugin
    */
    teardown: () => void;
    /**
    * context menu plugin:  show the context menu for a node
    * @param obj the node
    * @param x the x-coordinate relative to the document to show the menu at
    * @param y the y-coordinate relative to the document to show the menu at
    */
    show_contextmenu: (obj: any, x?: number, y?: number) => void;
    /**
    * search plugin: used to search the tree nodes for a given string
    * @param str the search string
    * @param skip_async if set to true server will not be queried even if configured
    */
    search: (str: string, skip_async?: boolean) => void;
    /**
    * search plugin: used to clear the last search (removes classes and shows all nodes if filtering is on)
    */
    clear_search: () => void;
    /**
    * state plugin: save the state
    */
    save_state: () => void;
    /**
    * state plugin: restore the state from the user's computer
    */
    restore_state: () => void;
    /**
    * state plugin: clear the state on the user's computer
    */
    clear_state: () => void;
    /**
    * types plugin: used to retrieve the type settings object for a node
    * @param obj the node to find the rules for
    */
    get_rules: (obj: any) => any;
    /**
    * types plugin: used to retrieve the type string or settings object for a node
    * @param obj the node to find the rules for
    * @param rules if set to `true` instead of a string the settings object will be returned
    */
    get_type: (obj: any, rules?: any) => any;
    /**
    * types plugin: used to change a node's type
    * @param obj the node to change
    * @param type the new type
    */
    set_type: (obj: any, type: string) => any;
    //bind(eventType: string, handler?: (event: any, data: JSTreeBindOptions) => any): JSTree;
}

interface JSTreeGetJsonOptions {
    /**
    * do not return state information
    */
    no_state: boolean;
    /**
    * do not return ID
    */
    no_id: boolean;
    /**
    * do not include children
    */
    no_children: boolean;
}

interface JSTreeBindOptions {
    inst?: any;
    args?: any;
    rslt?: any;
    rlbk?: any;
}