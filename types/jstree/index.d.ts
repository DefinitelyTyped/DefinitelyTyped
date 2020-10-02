// Type definitions for jstree 3.3
// Project: http://jstree.com/
// Definitions by: Adam Pluciński <https://github.com/adaskothebeast>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryStatic {
    /**
     * holds all jstree related functions and variables,
     * including the actual class and methods to create,
     * access and manipulate instances.
     * @property jstree
     * @type {JSTreeStatic}
     */
    jstree?: JSTreeStatic;

    /**
     * helpers
     */
    vakata?: VakataStatic;
}

interface JQuery {
    /**
     * Create an instance, get an instance or invoke a command on a instance.
     *
     * If there is no instance associated with the current node a new one is created
     * and `arg` is used to extend `$.jstree.defaults` for this new instance. There would be no return value (chaining is not broken).
     *
     * If there is an existing instance and `arg` is a string the command specified by `arg` is executed on the instance,
     * with any additional arguments passed to the function. If the function returns a value it will be returned
     * (chaining could break depending on function).
     *
     * If there is an existing instance and `arg` is not a string the instance itself is returned (similar to `$.jstree.reference`).
     *
     * In any other case - nothing is returned and chaining is not broken.
     *
     * __Examples__
     *
     *  $('#tree1').jstree(); // creates an instance
     *  $('#tree2').jstree({ plugins : [] }); // create an instance with some options
     *  $('#tree1').jstree('open_node', '#branch_1'); // call a method on an existing instance, passing additional arguments
     *  $('#tree2').jstree(); // get an existing instance (or create an instance)
     *  $('#tree2').jstree(true); // get an existing instance (will not create new instance)
     *  $('#branch_1').jstree().select_node('#branch_1'); // get an instance (using a nested element and call a method)
     *
     * @name $().jstree([arg])
     * @param {String|Object} arg
     * @return {Mixed}
     */
    jstree(): JSTree;
    jstree(options: JSTreeStaticDefaults): JSTree;
    jstree(arg: boolean): JSTree;
    jstree(...args: any[]): any;
}

interface JSTreeStatic {
    /**
     * specifies the jstree version in use
     * @name $.jstree.version
     */
    version: string;

    /**
     * holds all the default options used when creating new instances
     * @name $.jstree.defaults
     */
    defaults: JSTreeStaticDefaults;

    /**
     * stores all loaded jstree plugins (used internally)
     * @name $.jstree.plugins
     */
    plugins: any[];
    path: string;
    idregex: any;
    root: string;

    /**
     * creates a jstree instance
     * @name $.jstree.create(el [, options])
     * @param {DOMElement|jQuery|String} el the element to create the instance on, can be jQuery extended or a selector
     * @param {Object} options options for this instance (extends `$.jstree.defaults`)
     * @return {jsTree} the new instance
     */
    create(el: HTMLElement|JQuery|string, options?: JSTreeStaticDefaults): JSTree;

    /**
     * remove all traces of jstree from the DOM and destroy all instances
     * @name $.jstree.destroy()
     */
    destroy(): void;

    /**
     * the jstree class constructor, used only internally
     * @private
     * @name $.jstree.core(id)
     * @param {Number} id this instance's index
     */
    core(id: number): void;

    /**
     * get a reference to an existing instance
     *
     * __Examples__
     *
     *  // provided a container with an ID of "tree", and a nested node with an ID of "branch"
     *  // all of there will return the same instance
     *  $.jstree.reference('tree');
     *  $.jstree.reference('#tree');
     *  $.jstree.reference($('#tree'));
     *  $.jstree.reference(document.getElementByID('tree'));
     *  $.jstree.reference('branch');
     *  $.jstree.reference('#branch');
     *  $.jstree.reference($('#branch'));
     *  $.jstree.reference(document.getElementByID('branch'));
     *
     * @name $.jstree.reference(needle)
     * @param {DOMElement|jQuery|String} needle
     * @return {jsTree|null} the instance or `null` if not found
     */
    reference(needle: HTMLElement|JQuery|string): JSTree;
}

interface JSTreeStaticDefaults {
    /**
     * configure which plugins will be active on an instance.
     * Should be an array of strings, where each element is a plugin name.
     * The default is `[]`
     * @name $.jstree.defaults.plugins
     */
    plugins: string[];

    /**
     * stores all defaults for the core
     * @name $.jstree.defaults.core
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
     * Adds massload functionality to jsTree, so that multiple nodes can be loaded in a single request (only useful with lazy loading).
     */
    massload?: JSTreeStaticDefaultsMassload;

    /**
     * stores all defaults for the search plugin
     */
    search?: JSTreeStaticDefaultsSearch;

    /**
     * the settings function used to sort the nodes.
     * It is executed in the tree's context, accepts two nodes as arguments and should return `1` or `-1`.
     * @name $.jstree.defaults.sort
     * @plugin sort
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

    /**
     * stores all defaults for the unique plugin
     * @name $.jstree.defaults.unique
     * @plugin unique
     */
    unique?: JSTreeStaticDefaultsUnique;

    /**
     * a callback (function) which is invoked in the instance's scope and receives two arguments
     * - the node and the event that triggered the `activate_node` call.
     * Returning false prevents working with the node, returning true allows invoking activate_node.
     * Defaults to returning `true`.
     * @name $.jstree.defaults.conditionalselect
     * @plugin conditionalselect
     */
    conditionalselect?: () => boolean;

    /**
     * a callback (function) which is invoked in the instance's scope and receives two arguments
     * - the node and the event that triggered the `close_node` call.
     * Returning false prevents working with the node, returning true allows invoking close_node.
     * Defaults to returning `true`.
     * @name $.jstree.defaults.conditionalclose
     * @plugin conditionalclose
     */
    conditionalclose?: () => boolean;
}

interface JSTreeStaticDefaultsCore {
    /**
     * data configuration
     *
     * If left as `false` the HTML inside the jstree container element is used to populate the tree
     * (that should be an unordered list with list items).
     *
     * You can also pass in a HTML string or a JSON array here.
     *
     * It is possible to pass in a standard jQuery-like AJAX config and jstree will automatically determine
     * if the response is JSON or HTML and use that to populate the tree.
     * In addition to the standard jQuery ajax options here you can suppy functions for `data` and `url`,
     * the functions will be run in the current instance's scope and a param will be passed indicating which node is being loaded,
     * the return value of those functions will be used.
     *
     * The last option is to specify a function, that function will receive the node being loaded as argument
     * and a second param which is a function which should be called with the result.
     *
     * __Examples__
     *
     *  // AJAX
     *  $('#tree').jstree({
     *      'core' : {
     *          'data' : {
     *              'url' : '/get/children/',
     *              'data' : function (node) {
     *                  return { 'id' : node.id };
     *              }
     *          }
     *      });
     *
     *  // direct data
     *  $('#tree').jstree({
     *      'core' : {
     *          'data' : [
     *              'Simple root node',
     *              {
     *                  'id' : 'node_2',
     *                  'text' : 'Root node with options',
     *                  'state' : { 'opened' : true, 'selected' : true },
     *                  'children' : [ { 'text' : 'Child 1' }, 'Child 2']
     *              }
     *          ]
     *      });
     *
     *  // function
     *  $('#tree').jstree({
     *      'core' : {
     *          'data' : function (obj, callback) {
     *              callback.call(this, ['Root 1', 'Root 2']);
     *          }
     *      });
     *
     * @name $.jstree.defaults.core.data
     */
    data?: any;

    /**
     * configure the various strings used throughout the tree
     *
     * You can use an object where the key is the string you need to replace and the value is your replacement.
     * Another option is to specify a function which will be called with an argument of the needed string and should return the replacement.
     * If left as `false` no replacement is made.
     *
     * __Examples__
     *
     *  $('#tree').jstree({
     *      'core' : {
     *          'strings' : {
     *              'Loading ...' : 'Please wait ...'
     *          }
     *      }
     *  });
     *
     * @name $.jstree.defaults.core.strings
     */
    strings?: any;

    /**
     * determines what happens when a user tries to modify the structure of the tree
     * If left as `false` all operations like create, rename, delete, move or copy are prevented.
     * You can set this to `true` to allow all interactions or use a function to have better control.
     *
     * __Examples__
     *
     *  $('#tree').jstree({
     *      'core' : {
     *          'check_callback' : function (operation, node, node_parent, node_position, more) {
     *              // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node', 'copy_node' or 'edit'
     *              // in case of 'rename_node' node_position is filled with the new node name
     *              return operation === 'rename_node' ? true : false;
     *          }
     *      }
     *  });
     *
     * @name $.jstree.defaults.core.check_callback
     */
    check_callback?: any;

    /**
     * a callback called with a single object parameter in the instance's scope when something goes wrong
     * (operation prevented, ajax failed, etc)
     * @name $.jstree.defaults.core.error
     */
    error: () => any;

    /**
     * the open / close animation duration in milliseconds - set this to `false` to disable the animation (default is `200`)
     * @name $.jstree.defaults.core.animation
     */
    animation?: any;

    /**
     * a boolean indicating if multiple nodes can be selected
     * @name $.jstree.defaults.core.multiple
     */
    multiple?: boolean;

    /**
     * theme configuration object
     * @name $.jstree.defaults.core.themes
     */
    themes?: JSTreeStaticDefaultsCoreThemes;

    /**
     * if left as `true` all parents of all selected nodes will be opened once the tree loads
     * (so that all selected nodes are visible to the user)
     * @name $.jstree.defaults.core.expand_selected_onload
     */
    expand_selected_onload?: boolean;

    /**
     * if left as `true` web workers will be used to parse incoming JSON data where possible,
     * so that the UI will not be blocked by large requests.
     * Workers are however about 30% slower. Defaults to `true`
     * @name $.jstree.defaults.core.worker
     */
    worker?: boolean;

    /**
     * Force node text to plain text (and escape HTML). Defaults to `false`
     * @name $.jstree.defaults.core.force_text
     */
    force_text?: boolean;

    /**
     * Should the node be toggled if the text is double clicked. Defaults to `true`
     * @name $.jstree.defaults.core.dblclick_toggle
     */
    dblclick_toggle?: boolean;

    /**
     * Should the loaded nodes be part of the state. Defaults to `false`
     * @name $.jstree.defaults.core.dblclick_toggle
     */
    loaded_state?: boolean;

    /**
     * Should the last active node be focused when the tree container is blurred and the focused again.
     * This helps working with screen readers. Defaults to `true`
     * @name $.jstree.defaults.core.restore_focus
     */
    restore_focus?: boolean;

    /**
     * Default keyboard shortcuts (an object where each key is the button name or combo - like 'enter', 'ctrl-space', 'p', etc
     * and the value is the function to execute in the instance's scope)
     * @name $.jstree.defaults.core.keyboard
     */
    keyboard?: JSTreeStaticDefaultsCoreKeyboard;
}

interface JSTreeStaticDefaultsCoreThemes {
    /**
     * the name of the theme to use (if left as `false` the default theme is used)
     * @name $.jstree.defaults.core.themes.name
     */
    name?: string;

    /**
     * the URL of the theme's CSS file, leave this as `false` if you have manually included the theme CSS (recommended).
     * You can set this to `true` too which will try to autoload the theme.
     * @name $.jstree.defaults.core.themes.url
     */
    url?: string;

    /**
     * the location of all jstree themes - only used if `url` is set to `true`
     * @name $.jstree.defaults.core.themes.dir
     */
    dir?: string;

    /**
     * a boolean indicating if connecting dots are shown
     * @name $.jstree.defaults.core.themes.dots
     */
    dots?: boolean;

    /**
     * a boolean indicating if node icons are shown
     * @name $.jstree.defaults.core.themes.icons
     */
    icons?: boolean;

    /**
     * a boolean indicating if node ellipsis should be shown - this only works with a fixed with on the container
     * @name $.jstree.defaults.core.themes.ellipsis
     */
    ellipsis?: boolean;

    /**
     * a boolean indicating if the tree background is striped
     * @name $.jstree.defaults.core.themes.stripes
     */
    stripes?: boolean;

    /**
     * a string (or boolean `false`) specifying the theme variant to use (if the theme supports variants)
     * @name $.jstree.defaults.core.themes.variant
     */
    variant?: any;

    /**
     * a boolean specifying if a reponsive version of the theme should kick in on smaller screens (if the theme supports it).
     * Defaults to `false`.
     * @name $.jstree.defaults.core.themes.responsive
     */
    responsive?: boolean;
}

interface JSTreeStaticDefaultsCoreKeyboard {
    'ctrl-space': (e: Event) => void;
    'enter': (e: Event) => void;
    'left': (e: Event) => void;
    'up': (e: Event) => void;
    'right': (e: Event) => void;
    'down': (e: Event) => void;
    '*': (e: Event) => void;
    'home': (e: Event) => void;
    'end': (e: Event) => void;
    'f2': (e: Event) => void;
}

interface JSTreeStaticDefaultsCheckbox {
    /**
     * a boolean indicating if checkboxes should be visible (can be changed at a later time
     * using `show_checkboxes()` and `hide_checkboxes`). Defaults to `true`.
     * @name $.jstree.defaults.checkbox.visible
     * @plugin checkbox
     */
    visible: boolean;

    /**
     * a boolean indicating if checkboxes should cascade down and have an undetermined state. Defaults to `true`.
     * @name $.jstree.defaults.checkbox.three_state
     * @plugin checkbox
     */
    three_state: boolean;

    /**
     * a boolean indicating if clicking anywhere on the node should act as clicking on the checkbox. Defaults to `true`.
     * @name $.jstree.defaults.checkbox.whole_node
     * @plugin checkbox
     */
    whole_node: boolean;

    /**
     * a boolean indicating if the selected style of a node should be kept, or removed. Defaults to `true`.
     * @name $.jstree.defaults.checkbox.keep_selected_style
     * @plugin checkbox
     */
    keep_selected_style: boolean;

    /**
     * This setting controls how cascading and undetermined nodes are applied.
     * If 'up' is in the string - cascading up is enabled, if 'down' is in the string - cascading down is enabled,
     * if 'undetermined' is in the string - undetermined nodes will be used.
     * If `three_state` is set to `true` this setting is automatically set to 'up+down+undetermined'. Defaults to ''.
     * @name $.jstree.defaults.checkbox.cascade
     * @plugin checkbox
     */
    cascade: string;

    /**
     * This setting controls if checkbox are bound to the general tree selection
     * or to an internal array maintained by the checkbox plugin.
     * Defaults to `true`, only set to `false` if you know exactly what you are doing.
     * @name $.jstree.defaults.checkbox.tie_selection
     * @plugin checkbox
     */
    tie_selection: boolean;

    /**
     * This setting controls if cascading down affects disabled checkboxes
     * @name $.jstree.defaults.checkbox.cascade_to_disabled
     * @plugin checkbox
     */
    cascade_to_disabled: boolean;

    /**
     * This setting controls if cascading down affects hidden checkboxes
     * @name $.jstree.defaults.checkbox.cascade_to_hidden
     * @plugin checkbox
     */
    cascade_to_hidden: boolean;
}

interface JSTreeStaticDefaultsContextMenu {
    /**
     * a boolean indicating if the node should be selected when the context menu is invoked on it. Defaults to `true`.
     * @name $.jstree.defaults.contextmenu.select_node
     * @plugin contextmenu
     */
    select_node: boolean;

    /**
     * a boolean indicating if the menu should be shown aligned with the node. Defaults to `true`,
     * otherwise the mouse coordinates are used.
     * @name $.jstree.defaults.contextmenu.show_at_node
     * @plugin contextmenu
     */
    show_at_node: boolean;

    /**
     * an object of actions, or a function that accepts a node and a callback function and calls the callback function
     * with an object of actions available for that node (you can also return the items too).
     *
     * Each action consists of a key (a unique name) and a value which is an object with the following properties
     * (only label and action are required). Once a menu item is activated the `action` function will be invoked
     * with an object containing the following keys: item - the contextmenu item definition as seen below,
     * reference - the DOM node that was used (the tree node), element - the contextmenu DOM element,
     * position - an object with x/y properties indicating the position of the menu.
     *
     * * `separator_before` - a boolean indicating if there should be a separator before this item
     * * `separator_after` - a boolean indicating if there should be a separator after this item
     * * `_disabled` - a boolean indicating if this action should be disabled
     * * `label` - a string - the name of the action (could be a function returning a string)
     * * `title` - a string - an optional tooltip for the item
     * * `action` - a function to be executed if this item is chosen, the function will receive
     * * `icon` - a string, can be a path to an icon or a className,
     *            if using an image that is in the current directory use a `./` prefix, otherwise it will be detected as a class
     * * `shortcut` - keyCode which will trigger the action if the menu is open (for example `113` for rename, which equals F2)
     * * `shortcut_label` - shortcut label (like for example `F2` for rename)
     * * `submenu` - an object with the same structure as $.jstree.defaults.contextmenu.items
     *               which can be used to create a submenu - each key will be rendered as a separate option in a submenu
     *               that will appear once the current item is hovered
     *
     * @name $.jstree.defaults.contextmenu.items
     * @plugin contextmenu
     */
    items: any;
}

interface JSTreeStaticDefaultsDragNDrop {
    /**
     * a boolean indicating if a copy should be possible while dragging (by pressint the meta key or Ctrl). Defaults to `true`.
     * @name $.jstree.defaults.dnd.copy
     * @plugin dnd
     */
    copy: boolean;

    /**
     * a number indicating how long a node should remain hovered while dragging to be opened. Defaults to `500`.
     * @name $.jstree.defaults.dnd.open_timeout
     * @plugin dnd
     */
    open_timeout: number;

    /**
     * a function invoked each time a node is about to be dragged, invoked in the tree's scope and receives the nodes
     * about to be dragged as an argument (array) - return `false` to prevent dragging
     * @name $.jstree.defaults.dnd.is_draggable
     * @plugin dnd
     */
    is_draggable: boolean;

    /**
     * a boolean indicating if checks should constantly be made while the user is dragging the node
     * (as opposed to checking only on drop), default is `true`
     * @name $.jstree.defaults.dnd.check_while_dragging
     * @plugin dnd
     */
    check_while_dragging: boolean;

    /**
     * a boolean indicating if nodes from this tree should only be copied with dnd (as opposed to moved), default is `false`
     * @name $.jstree.defaults.dnd.always_copy
     * @plugin dnd
     */
    always_copy: boolean;

    /**
     * when dropping a node "inside", this setting indicates the position the node should go to
     * - it can be an integer or a string: "first" (same as 0) or "last", default is `0`
     * @name $.jstree.defaults.dnd.inside_pos
     * @plugin dnd
     */
    inside_pos: any;

    /**
     * when starting the drag on a node that is selected this setting controls if all selected nodes are dragged
     * or only the single node, default is `true`, which means all selected nodes are dragged when the drag is started on a selected node
     * @name $.jstree.defaults.dnd.drag_selection
     * @plugin dnd
     */
    drag_selection: boolean;

    /**
     * controls whether dnd works on touch devices. If left as boolean true dnd will work the same as in desktop browsers,
     * which in some cases may impair scrolling. If set to boolean false dnd will not work on touch devices.
     * There is a special third option - string "selected" which means only selected nodes can be dragged on touch devices.
     * @name $.jstree.defaults.dnd.touch
     * @plugin dnd
     */
    touch: boolean;

    /**
     * controls whether items can be dropped anywhere on the node, not just on the anchor,
     * by default only the node anchor is a valid drop target. Works best with the wholerow plugin.
     * If enabled on mobile depending on the interface it might be hard for the user to cancel the drop,
     * since the whole tree container will be a valid drop target.
     * @name $.jstree.defaults.dnd.large_drop_target
     * @plugin dnd
     */
    large_drop_target: boolean;

    /**
     * controls whether a drag can be initiated from any part of the node and not just the text/icon part,
     * works best with the wholerow plugin. Keep in mind it can cause problems with tree scrolling on mobile
     * depending on the interface - in that case set the touch option to "selected".
     * @name $.jstree.defaults.dnd.large_drag_target
     * @plugin dnd
     */
    large_drag_target: boolean;

    /**
     * controls whether use HTML5 dnd api instead of classical.
     * That will allow better integration of dnd events with other HTML5 controls.
     * @reference http://caniuse.com/#feat=dragndrop
     * @name $.jstree.defaults.dnd.use_html5
     * @plugin dnd
     */
    use_html5: boolean;
}

interface JSTreeStaticDefaultsMassload {
    /**
     * massload configuration
     *
     * It is possible to set this to a standard jQuery-like AJAX config.
     * In addition to the standard jQuery ajax options here you can supply functions for `data` and `url`,
     * the functions will be run in the current instance's scope and a param will be passed indicating which node IDs need to be loaded,
     * the return value of those functions will be used.
     *
     * You can also set this to a function, that function will receive the node IDs being loaded as argument and a second param which is a function (callback) which should be called with the result.
     *
     * Both the AJAX and the function approach rely on the same return value - an object where the keys are the node IDs, and the value is the children of that node as an array.
     *
     *  {
     *      "id1" : [{ "text" : "Child of ID1", "id" : "c1" }, { "text" : "Another child of ID1", "id" : "c2" }],
     *      "id2" : [{ "text" : "Child of ID2", "id" : "c3" }]
     *  }
     *
     * @name $.jstree.defaults.massload
     * @plugin massload
     */

    url: any;

    data: any;
}

interface JSTreeStaticDefaultsSearch {
    /**
     * a jQuery-like AJAX config, which jstree uses if a server should be queried for results.
     *
     * A `str` (which is the search string) parameter will be added with the request,
     * an optional `inside` parameter will be added if the search is limited to a node id.
     * The expected result is a JSON array with nodes that need to be opened so that matching nodes will be revealed.
     * Leave this setting as `false` to not query the server. You can also set this to a function,
     * which will be invoked in the instance's scope and receive 3 parameters - the search string,
     * the callback to call with the array of nodes to load, and the optional node ID to limit the search to
     * @name $.jstree.defaults.search.ajax
     * @plugin search
     */
    ajax: any;

    /**
     * Indicates if the search should be fuzzy or not (should `chnd3` match `child node 3`). Default is `true`.
     * @name $.jstree.defaults.search.fuzzy
     * @plugin search
     */
    fuzzy: boolean;

    /**
     * Indicates if the search should be case sensitive. Default is `false`.
     * @name $.jstree.defaults.search.case_sensitive
     * @plugin search
     */
    case_sensitive: boolean;

    /**
     * Indicates if the tree should be filtered (by default) to show only matching nodes
     * (keep in mind this can be a heavy on large trees in old browsers).
     * This setting can be changed at runtime when calling the search method. Default is `false`.
     * @name $.jstree.defaults.search.show_only_matches
     * @plugin search
     */
    show_only_matches: boolean;

    /**
     * Indicates if the children of matched element are shown (when show_only_matches is true)
     * This setting can be changed at runtime when calling the search method. Default is `false`.
     * @name $.jstree.defaults.search.show_only_matches_children
     * @plugin search
     */
    show_only_matches_children: boolean;

    /**
     * Indicates if all nodes opened to reveal the search result,
     * should be closed when the search is cleared or a new search is performed. Default is `true`.
     * @name $.jstree.defaults.search.close_opened_onclear
     * @plugin search
     */
    close_opened_onclear: boolean;

    /**
     * Indicates if only leaf nodes should be included in search results. Default is `false`.
     * @name $.jstree.defaults.search.search_leaves_only
     * @plugin search
     */
    search_leaves_only: boolean;

    /**
     * If set to a function it wil be called in the instance's scope with two arguments -
     * search string and node (where node will be every node in the structure, so use with caution).
     * If the function returns a truthy value the node will be considered a match
     * (it might not be displayed if search_only_leaves is set to true and the node is not a leaf). Default is `false`.
     * @name $.jstree.defaults.search.search_callback
     * @plugin search
     */
    search_callback: any;
}

interface JSTreeStaticDefaultsState {
    /**
     * A string for the key to use when saving the current tree (change if using multiple trees in your project). Defaults to `jstree`.
     * @name $.jstree.defaults.state.key
     * @plugin state
     */
    key: string;

    /**
     * A space separated list of events that trigger a state save. Defaults to `changed.jstree open_node.jstree close_node.jstree`.
     * @name $.jstree.defaults.state.events
     * @plugin state
     */
    events: string;

    /**
     * Time in milliseconds after which the state will expire. Defaults to 'false' meaning - no expire.
     * @name $.jstree.defaults.state.ttl
     * @plugin state
     */
    ttl: any;

    /**
     * A function that will be executed prior to restoring state with one argument - the state object. Can be used to clear unwanted parts of the state.
     * @name $.jstree.defaults.state.filter
     * @plugin state
     */
    filter: any;

    /**
     * Should loaded nodes be restored (setting this to true means that it is possible that the whole tree will be loaded for some users - use with caution). Defaults to `false`
     * @name $.jstree.defaults.state.preserve_loaded
     * @plugin state
     */
    preserve_loaded: boolean;
}

interface JSTreeStaticDefaultsUnique {
    /**
     * Indicates if the comparison should be case sensitive. Default is `false`.
     * @name $.jstree.defaults.unique.case_sensitive
     * @plugin unique
     */
    case_sensitive: boolean;
    /**
     * Indicates if white space should be trimmed before the comparison. Default is `false`.
     * @name $.jstree.defaults.unique.trim_whitespace
     * @plugin unique
     */
    trim_whitespace: boolean;
    /**
     * A callback executed in the instance's scope when a new node is created
     * and the name is already taken, the two arguments are the conflicting name and the counter.
     * The default will produce results like `New node (2)`.
     * @name $.jstree.defaults.unique.duplicate
     * @plugin unique
     */
    duplicate: (name: string, counter: number) => string;
}

interface VakataStatic {
    /**
     * collect attributes
     */
    attributes: (node: any, with_values: any) => any;

    /**
     * returns array with unique elements
     */
    array_unique: (array: any[]) => any[];

    /**
     * remove item from array
     */
    array_remove: (array: any[], from: number) => any[];

    /**
     * remove item from array
     */
    array_remove_item: (array: any[], item: any) => any[];

    /**
     * filter array
     */
    array_filter: (c: any, a: any, b: any, d: any[], e: any) => any[];

    context: any;

    html: any;

    dnd: any;

    search: any;

    storage: any;
}

interface JSTree extends JQuery {
    /**
     * used to decorate an instance with a plugin. Used internally.
     * @private
     * @name plugin(deco [, opts])
     * @param  {String} deco the plugin to decorate with
     * @param  {Object} opts options for the plugin
     * @return {jsTree}
     */
    plugin: (deco: string, opts?: any) => JSTree;

    /**
     * used to decorate an instance with a plugin. Used internally.
     * @private
     * @name init(el, options)
     * @param {DOMElement|jQuery|String} el the element we are transforming
     * @param {Object} options options for this instance
     * @trigger init.jstree, loading.jstree, loaded.jstree, ready.jstree, changed.jstree
     */
    init: (el: HTMLElement|JQuery|string, options: any) => void;

    /**
     * destroy an instance
     * @name destroy()
     * @param  {Boolean} keep_html if not set to `true` the container will be emptied, otherwise the current DOM elements will be kept intact
     */
    destroy: (keep_html?: boolean) => void;

    /**
     * part of the destroying of an instance. Used internally.
     * @private
     * @name teardown()
     */
    teardown: () => void;

    /**
     * Create a prototype node
     * @name _create_prototype_node()
     * @return {DOMElement}
     */
    _create_prototype_node: () => HTMLElement;

    /**
     * bind all events. Used internally.
     * @private
     * @name bind()
     */
    bind: () => any;

    _kbevent_to_func: (e: Event) => ((e: Event) => void);

    /**
     * part of the destroying of an instance. Used internally.
     * @private
     * @name unbind()
     */
    unbind: () => any;

    /**
     * trigger an event. Used internally.
     * @private
     * @name trigger(ev [, data])
     * @param  {String} ev the name of the event to trigger
     * @param  {Object} data additional data to pass with the event
     */
    /*
     * defined in JQuery
     */
    // trigger: (ev: string, data?: Object) => any;

    /**
     * returns the jQuery extended instance container
     * @name get_container()
     * @return {jQuery}
     */
    get_container: () => JQuery;

    /**
     * returns the jQuery extended main UL node inside the instance container. Used internally.
     * @private
     * @name get_container_ul()
     * @return {jQuery}
     */
    get_container_ul: () => JQuery;

    /**
     * gets string replacements (localization). Used internally.
     * @private
     * @name get_string(key)
     * @param  {String} key
     * @return {String}
     */
    get_string: (key: string) => string;

    /**
     * gets the first child of a DOM node. Used internally.
     * @private
     * @name _firstChild(dom)
     * @param  {DOMElement} dom
     * @return {DOMElement}
     */
    _firstChild: (dom: HTMLElement) => HTMLElement;

    /**
     * gets the next sibling of a DOM node. Used internally.
     * @private
     * @name _nextSibling(dom)
     * @param  {DOMElement} dom
     * @return {DOMElement}
     */
    _nextSibling: (dom: HTMLElement) => HTMLElement;

    /**
     * gets the previous sibling of a DOM node. Used internally.
     * @private
     * @name _previousSibling(dom)
     * @param  {DOMElement} dom
     * @return {DOMElement}
     */
    _previousSibling: (dom: HTMLElement) => HTMLElement;

    /**
     * get the JSON representation of a node (or the actual jQuery extended DOM node) by using any input (child DOM element, ID string, selector, etc)
     * @name get_node(obj [, as_dom])
     * @param  {mixed} obj
     * @param  {Boolean} as_dom
     * @return {Object|jQuery}
     */
    get_node: (obj: any, as_dom?: boolean) => any;

    /**
     * get the path to a node, either consisting of node texts, or of node IDs, optionally glued together (otherwise an array)
     * @name get_path(obj [, glue, ids])
     * @param  {mixed} obj the node
     * @param  {String} glue if you want the path as a string - pass the glue here (for example '/'), if a falsy value is supplied here, an array is returned
     * @param  {Boolean} ids if set to true build the path using ID, otherwise node text is used
     * @return {mixed}
     */
    get_path: (obj: any, glue?: string, ids?: boolean) => any;

    /**
     * get the next visible node that is below the `obj` node. If `strict` is set to `true` only sibling nodes are returned.
     * @name get_next_dom(obj [, strict])
     * @param  {mixed} obj
     * @param  {Boolean} strict
     * @return {jQuery}
     */
    get_next_dom: (obj: any, strict?: boolean) => JQuery;

    /**
     * get the previous visible node that is above the `obj` node. If `strict` is set to `true` only sibling nodes are returned.
     * @name get_prev_dom(obj [, strict])
     * @param  {mixed} obj
     * @param  {Boolean} strict
     * @return {jQuery}
     */
    get_prev_dom: (obj: any, strict?: boolean) => JQuery;

    /**
     * get the parent ID of a node
     * @name get_parent(obj)
     * @param  {mixed} obj
     * @return {String}
     */
    get_parent: (obj: any) => string;

    /**
     * get a jQuery collection of all the children of a node (node must be rendered), returns false on error
     * @name get_children_dom(obj)
     * @param  {mixed} obj
     * @return {jQuery}
     */
    get_children_dom: (obj: any) => JQuery|boolean;

    /**
     * checks if a node has children
     * @name is_parent(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_parent: (obj: any) => boolean;

    /**
     * checks if a node is loaded (its children are available)
     * @name is_loaded(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_loaded: (obj: any) => boolean;

    /**
     * check if a node is currently loading (fetching children)
     * @name is_loading(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_loading: (obj: any) => boolean;

    /**
     * check if a node is opened
     * @name is_open(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_open: (obj: any) => boolean;

    /**
     * check if a node is in a closed state
     * @name is_closed(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_closed: (obj: any) => boolean;

    /**
     * check if a node has no children
     * @name is_leaf(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_leaf: (obj: any) => boolean;

    /**
     * loads a node (fetches its children using the `core.data` setting). Multiple nodes can be passed to by using an array.
     * @name load_node(obj [, callback])
     * @param  {mixed} obj
     * @param  {function} callback a function to be executed once loading is conplete, the function is executed in the instance's scope
     * and receives two arguments - the node and a boolean status
     * @return {Boolean}
     * @trigger load_node.jstree
     */
    load_node: (obj: any, callback: (node: any, status: boolean) => void) => boolean;

    /**
     * load an array of nodes (will also load unavailable nodes as soon as they appear in the structure). Used internally.
     * @private
     * @name _load_nodes(nodes [, callback])
     * @param  {array} nodes
     * @param  {function} callback a function to be executed once loading is complete, the function is executed in the instance's scope and receives one argument - the array passed to _load_nodes
     * @param  {Boolean} is_callback - if false reloads node (AP - original comment missing in source code)
     * @param  {Boolean} force_reload - if true force reloads node (AP - original comment missing in source code)
     */
    _load_nodes: (nodes: any[], callback?: (nodes: any[]) => void, is_callback?: boolean, force_reload?: boolean) => void;

    /**
     * loads all unloaded nodes
     * @name load_all([obj, callback])
     * @param {mixed} obj the node to load recursively, omit to load all nodes in the tree
     * @param {function} callback a function to be executed once loading all the nodes is complete,
     * @trigger load_all.jstree
     */
    load_all: (obj: any, callback: () => void) => void;

    /**
     * handles the actual loading of a node. Used only internally.
     * @private
     * @name _load_node(obj [, callback])
     * @param  {mixed} obj
     * @param  {function} callback a function to be executed once loading is complete, the function is executed in the instance's scope and receives one argument - a boolean status
     * @return {Boolean}
     */
    _load_node: (obj: any, callback?: (status: boolean) => void) => boolean;

    /**
     * adds a node to the list of nodes to redraw. Used only internally.
     * @private
     * @name _node_changed(obj)
     * @param  {mixed} obj
     */
    _node_changed: (obj: any) => void;

    /**
     * appends HTML content to the tree. Used internally.
     * @private
     * @name _append_html_data(obj, data)
     * @param  {mixed} obj the node to append to
     * @param  {String} data the HTML string to parse and append
     * @param {function} callback function which takes boolean flag executes after append (AP: originally lack of comment)
     * @trigger model.jstree, changed.jstree
     */
    _append_html_data: (dom: any, data: string, cb: (flag: boolean) => void) => void;

    /**
     * appends JSON content to the tree. Used internally.
     * @private
     * @name _append_json_data(obj, data)
     * @param  {mixed} dom the node to append to
     * @param  {String} data the JSON object to parse and append
     * @param  {function} cb function which takes boolean flag executes after append (AP: originally lack of comment)
     * @param  {Boolean} force_processing internal param - do not set
     * @trigger model.jstree, changed.jstree
     */
    _append_json_data: (dom: any, data: string, cb: (flag: boolean) => void, force_processing: boolean) => void;

    /**
     * parses a node from a jQuery object and appends them to the in memory tree model. Used internally.
     * @private
     * @name _parse_model_from_html(d [, p, ps])
     * @param  {jQuery} d the jQuery object to parse
     * @param  {String} p the parent ID
     * @param  {Array} ps list of all parents
     * @return {String} the ID of the object added to the model
     */
    _parse_model_from_html: (d: JQuery, p?: string, ps?: any[]) => string;

    /**
     * parses a node from a JSON object (used when dealing with flat data, which has no nesting of children,
     * but has id and parent properties) and appends it to the in memory tree model. Used internally.
     * @private
     * @name _parse_model_from_flat_json(d [, p, ps])
     * @param  {Object} d the JSON object to parse
     * @param  {String} p the parent ID
     * @param  {Array} ps list of all parents
     * @return {String} the ID of the object added to the model
     */
    _parse_model_from_flat_json: (d: any, p?: string, ps?: any[]) => string;

    /**
     * parses a node from a JSON object and appends it to the in memory tree model. Used internally.
     * @private
     * @name _parse_model_from_json(d [, p, ps])
     * @param  {Object} d the JSON object to parse
     * @param  {String} p the parent ID
     * @param  {Array} ps list of all parents
     * @return {String} the ID of the object added to the model
     */
    _parse_model_from_json: (d: any, p?: string, ps?: any[]) => string;

    /**
     * redraws all nodes that need to be redrawn. Used internally.
     * @private
     * @name _redraw()
     * @trigger redraw.jstree
     */
    _redraw: () => void ;

    /**
     * redraws all nodes that need to be redrawn or optionally - the whole tree
     * @name redraw([full])
     * @param {Boolean} full if set to `true` all nodes are redrawn.
     */
    redraw: (full?: boolean) => void;

    /**
     * redraws a single node's children. Used internally.
     * @private
     * @name draw_children(node)
     * @param {mixed} node the node whose children will be redrawn
     */
    draw_children: (node: any) => void;

    /**
     * redraws a single node. Used internally.
     * @private
     * @name redraw_node(node, deep, is_callback, force_render)
     * @param {mixed} node the node to redraw
     * @param {Boolean} deep should child nodes be redrawn too
     * @param {Boolean} is_callback is this a recursion call
     * @param {Boolean} force_render should children of closed parents be drawn anyway
     */
    redraw_node: (node: any, deep: boolean, is_callback: boolean, force_render: boolean) => void;

    /**
     * opens a node, revealing its children. If the node is not loaded it will be loaded and opened once ready.
     * @name open_node(obj [, callback, animation])
     * @param {mixed} obj the node to open
     * @param {Function} callback a function to execute once the node is opened
     * @param {Number} animation the animation duration in milliseconds
     * when opening the node (overrides the `core.animation` setting). Use `false` for no animation.
     * @trigger open_node.jstree, after_open.jstree, before_open.jstree
     */
    open_node: (obj: any, callback?: any, animation?: any) => void;

    /**
     * opens every parent of a node (node should be loaded)
     * @name _open_to(obj)
     * @param {mixed} obj the node to reveal
     * @private
     */
    _open_to: (obj: any) => void;

    /**
     * closes a node, hiding its children
     * @name close_node(obj [, animation])
     * @param {mixed} obj the node to close
     * @param {Number} animation the animation duration in milliseconds
     * when closing the node (overrides the `core.animation` setting). Use `false` for no animation.
     * @trigger close_node.jstree, after_close.jstree
     */
    close_node: (obj: any, animation?: any) => void;

    /**
     * toggles a node - closing it if it is open, opening it if it is closed
     * @name toggle_node(obj)
     * @param {mixed} obj the node to toggle
     */
    toggle_node: (obj: any) => void;

    /**
     * opens all nodes within a node (or the tree), revealing their children. If the node is not loaded it will be loaded and opened once ready.
     * @name open_all([obj, animation, original_obj])
     * @param {mixed} obj the node to open recursively, omit to open all nodes in the tree
     * @param {Number} animation the animation duration in milliseconds when opening the nodes, the default is no animation
     * @param {jQuery} reference to the node that started the process (internal use)
     * @trigger open_all.jstree
     */
    open_all: (obj?: any, animation?: number, original_obj?: any) => void;

    /**
     * closes all nodes within a node (or the tree), revealing their children
     * @name close_all([obj, animation])
     * @param {mixed} obj the node to close recursively, omit to close all nodes in the tree
     * @param {Number} animation the animation duration in milliseconds when closing the nodes, the default is no animation
     * @trigger close_all.jstree
     */
    close_all: (obj?: any, animation?: number) => void;

    /**
     * checks if a node is disabled (not selectable)
     * @name is_disabled(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_disabled: (obj: any) => boolean;

    /**
     * enables a node - so that it can be selected
     * @name enable_node(obj)
     * @param {mixed} obj the node to enable
     * @trigger enable_node.jstree
     */
    enable_node: (obj: any) => boolean;

    /**
     * disables a node - so that it can not be selected
     * @name disable_node(obj)
     * @param {mixed} obj the node to disable
     * @trigger disable_node.jstree
     */
    disable_node: (obj: any) => boolean;

    /**
     * determines if a node is hidden
     * @name is_hidden(obj)
     * @param {mixed} obj the node
     */
    is_hidden: (obj: any) => boolean;

    /**
     * hides a node - it is still in the structure but will not be visible
     * @name hide_node(obj)
     * @param {mixed} obj the node to hide
     * @param {Boolean} skip_redraw internal parameter controlling if redraw is called
     * @trigger hide_node.jstree
     */
    hide_node: (obj: any, skip_redraw: boolean) => boolean;

    /**
     * shows a node
     * @name show_node(obj)
     * @param {mixed} obj the node to show
     * @param {Boolean} skip_redraw internal parameter controlling if redraw is called
     * @trigger show_node.jstree
     */
    show_node: (obj: any, skip_redraw: boolean) => boolean;

    /**
     * hides all nodes
     * @name hide_all()
     * @trigger hide_all.jstree
     */
    hide_all: (skip_redraw: boolean) => boolean;

    /**
     * shows all nodes
     * @name show_all()
     * @trigger show_all.jstree
     */
    show_all: (skip_redraw: boolean) => boolean;

    /**
     * called when a node is selected by the user. Used internally.
     * @private
     * @name activate_node(obj, e)
     * @param {mixed} obj the node
     * @param {Object} e the related event
     * @trigger activate_node.jstree, changed.jstree
     */
    activate_node: (obj: any, e: any) => void;

    /**
     * applies the hover state on a node, called when a node is hovered by the user. Used internally.
     * @private
     * @name hover_node(obj)
     * @param {mixed} obj
     * @trigger hover_node.jstree
     */
    hover_node: (obj: any) => void;

    /**
     * removes the hover state from a nodecalled when a node is no longer hovered by the user. Used internally.
     * @private
     * @name dehover_node(obj)
     * @param {mixed} obj
     * @trigger dehover_node.jstree
     */
    dehover_node: (obj: any) => void;

    /**
     * select a node
     * @name select_node(obj [, supress_event, prevent_open])
     * @param {mixed} obj an array can be used to select multiple nodes
     * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
     * @param {Boolean} prevent_open if set to `true` parents of the selected node won't be opened
     * @trigger select_node.jstree, changed.jstree
     */
    select_node: (obj: any, supress_event?: boolean, prevent_open?: boolean, e?: any) => any;

    /**
     * deselect a node
     * @name deselect_node(obj [, supress_event])
     * @param {mixed} obj an array can be used to deselect multiple nodes
     * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
     * @trigger deselect_node.jstree, changed.jstree
     */
    deselect_node: (obj: any, supress_event?: boolean, e?: any) => void;

    /**
     * select all nodes in the tree
     * @name select_all([supress_event])
     * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
     * @trigger select_all.jstree, changed.jstree
     */
    select_all: (supress_event?: boolean) => void;

    /**
     * deselect all selected nodes
     * @name deselect_all([supress_event])
     * @param {Boolean} supress_event if set to `true` the `changed.jstree` event won't be triggered
     * @trigger deselect_all.jstree, changed.jstree
     */
    deselect_all: (supress_event?: boolean) => void;

    /**
     * checks if a node is selected
     * @name is_selected(obj)
     * @param  {mixed}  obj
     * @return {Boolean}
     */
    is_selected: (obj: any) => boolean;

    /**
     * get an array of all selected nodes
     * @name get_selected([full])
     * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
     * @return {Array}
     */
    get_selected: (full?: any) => any[];

    /**
     * get an array of all top level selected nodes (ignoring children of selected nodes)
     * @name get_top_selected([full])
     * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
     * @return {Array}
     */
    get_top_selected: (full?: any) => any[];

    /**
     * get an array of all bottom level selected nodes (ignoring selected parents)
     * @name get_top_selected([full])
     * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
     * @return {Array}
     */
    get_bottom_selected: (full?: any) => any[];

    /**
     * gets the current state of the tree so that it can be restored later with `set_state(state)`. Used internally.
     * @name get_state()
     * @private
     * @return {Object}
     */
    get_state: () => any;

    /**
     * sets the state of the tree. Used internally.
     * @name set_state(state [, callback])
     * @private
     * @param {Object} state the state to restore
     * @param {Function} callback an optional function to execute once the state is restored.
     * @trigger set_state.jstree
     */
    set_state: (state: any, callback: () => void) => void;

    /**
     * refreshes the tree - all nodes are reloaded with calls to `load_node`.
     * @name refresh()
     * @param {Boolean} skip_loading an option to skip showing the loading indicator
     * @param {Mixed} forget_state if set to `true` state will not be reapplied,
     * if set to a function (receiving the current state as argument) the result of that function will be used as state
     * @trigger refresh.jstree
     */
    refresh: (skip_loading?: boolean, forget_state?: any) => void;

    /**
     * refreshes a node in the tree (reload its children) all opened nodes inside that node are reloaded with calls to `load_node`.
     * @name refresh_node(obj)
     * @param  {mixed} obj the node
     * @trigger refresh_node.jstree
     */
    refresh_node: (obj: any) => void;

    /**
     * set (change) the ID of a node
     * @name set_id(obj, id)
     * @param  {mixed} obj the node
     * @param  {String} id the new ID
     * @return {Boolean}
     */
    set_id: (obj: any, id: string) => boolean;

    /**
     * get the text value of a node
     * @name get_text(obj)
     * @param  {mixed} obj the node
     * @return {String}
     */
    get_text: (obj: any) => string;

    /**
     * set the text value of a node. Used internally, please use `rename_node(obj, val)`.
     * @private
     * @name set_text(obj, val)
     * @param  {mixed} obj the node, you can pass an array to set the text on multiple nodes
     * @param  {String} val the new text value
     * @return {Boolean}
     * @trigger set_text.jstree
     */
    set_text: (obj: any, val: string) => boolean;

    /**
     * gets a JSON representation of a node (or the whole tree)
     * @name get_json([obj, options])
     * @param  {mixed} obj
     * @param  {Object} options
     * @param  {Boolean} options.no_state do not return state information
     * @param  {Boolean} options.no_id do not return ID
     * @param  {Boolean} options.no_children do not include children
     * @param  {Boolean} options.no_data do not include node data
     * @param  {Boolean} options.no_li_attr do not include LI attributes
     * @param  {Boolean} options.no_a_attr do not include A attributes
     * @param  {Boolean} options.flat return flat JSON instead of nested
     * @return {Object}
     */
    get_json: (obj?: any, options?: JSTreeGetJsonOptions, flat?: boolean) => any;

    /**
     * create a new node (do not confuse with load_node)
     * @name create_node([obj, node, pos, callback, is_loaded])
     * @param  {mixed}   par       the parent node (to create a root node use either "#" (string) or `null`)
     * @param  {mixed}   node      the data for the new node (a valid JSON object, or a simple string with the name)
     * @param  {mixed}   pos       the index at which to insert the node, "first" and "last" are also supported, default is "last"
     * @param  {Function} callback a function to be called once the node is created
     * @param  {Boolean} is_loaded internal argument indicating if the parent node was succesfully loaded
     * @return {String}            the ID of the newly create node
     * @trigger model.jstree, create_node.jstree
     */
    create_node: (par?: any, node?: any, pos?: any, callback?: any, is_loaded?: boolean) => string;

    /**
     * set the text value of a node
     * @name rename_node(obj, val)
     * @param  {mixed} obj the node, you can pass an array to rename multiple nodes to the same name
     * @param  {String} val the new text value
     * @return {Boolean}
     * @trigger rename_node.jstree
     */
    rename_node: (obj: any, val: string) => boolean;

    /**
     * remove a node
     * @name delete_node(obj)
     * @param  {mixed} obj the node, you can pass an array to delete multiple nodes
     * @return {Boolean}
     * @trigger delete_node.jstree, changed.jstree
     */
    delete_node: (obj: any) => boolean;

    /**
     * check if an operation is premitted on the tree. Used internally.
     * @private
     * @name check(chk, obj, par, pos)
     * @param  {String} chk the operation to check, can be "create_node", "rename_node", "delete_node", "copy_node" or "move_node"
     * @param  {mixed} obj the node
     * @param  {mixed} par the parent
     * @param  {mixed} pos the position to insert at, or if "rename_node" - the new name
     * @param  {mixed} more some various additional information, for example if a "move_node" operations is triggered by DND this will be the hovered node
     * @return {Boolean}
     */
    check: (chk: string, obj: any, par: any, pos: any, more: any) => boolean;

    /**
     * get the last error
     * @name last_error()
     * @return {Object}
     */
    last_error: () => any;

    /**
     * move a node to a new parent
     * @name move_node(obj, par [, pos, callback, is_loaded])
     * @param  {mixed} obj the node to move, pass an array to move multiple nodes
     * @param  {mixed} par the new parent
     * @param  {mixed} pos the position to insert at (besides integer values, "first" and "last" are supported, as well as "before" and "after"), defaults to integer `0`
     * @param  {function} callback a function to call once the move is completed, receives 3 arguments - the node, the new parent and the position
     * @param  {Boolean} is_loaded internal parameter indicating if the parent node has been loaded
     * @param  {Boolean} skip_redraw internal parameter indicating if the tree should be redrawn
     * @param  {Boolean} instance internal parameter indicating if the node comes from another instance
     * @trigger move_node.jstree
     */
    move_node: (obj: any, par: any, pos?: any, callback?: (node: any, new_par: any, pos: any) => void, is_loaded?: boolean, skip_redraw?: boolean, origin?: boolean) => void;

    /**
     * copy a node to a new parent
     * @name copy_node(obj, par [, pos, callback, is_loaded])
     * @param  {mixed} obj the node to copy, pass an array to copy multiple nodes
     * @param  {mixed} par the new parent
     * @param  {mixed} pos the position to insert at (besides integer values, "first" and "last" are supported, as well as "before" and "after"), defaults to integer `0`
     * @param  {function} callback a function to call once the move is completed, receives 3 arguments - the node, the new parent and the position
     * @param  {Boolean} is_loaded internal parameter indicating if the parent node has been loaded
     * @param  {Boolean} skip_redraw internal parameter indicating if the tree should be redrawn
     * @param  {Boolean} instance internal parameter indicating if the node comes from another instance
     * @trigger model.jstree copy_node.jstree
     */
    copy_node: (obj: any, par: any, pos?: any, callback?: (node: any, new_par: any, pos: any) => void, is_loaded?: boolean, skip_redraw?: boolean, origin?: boolean) => void;

    /**
     * cut a node (a later call to `paste(obj)` would move the node)
     * @name cut(obj)
     * @param  {mixed} obj multiple objects can be passed using an array
     * @trigger cut.jstree
     */
    cut: (obj: any) => void;

    /**
     * copy a node (a later call to `paste(obj)` would copy the node)
     * @name copy(obj)
     * @param  {mixed} obj multiple objects can be passed using an array
     * @trigger copy.jstre
     */
    copy: (obj: any) => void;

    /**
     * get the current buffer (any nodes that are waiting for a paste operation)
     * @name get_buffer()
     * @return {Object} an object consisting of `mode` ("copy_node" or "move_node"), `node` (an array of objects) and `inst` (the instance)
     */
    get_buffer: () => Buffer;

    /**
     * check if there is something in the buffer to paste
     * @name can_paste()
     * @return {Boolean}
     */
    can_paste: () => boolean;

    /**
     * copy or move the previously cut or copied nodes to a new parent
     * @name paste(obj [, pos])
     * @param  {mixed} obj the new parent
     * @param  {mixed} pos the position to insert at (besides integer, "first" and "last" are supported), defaults to integer `0`
     * @trigger paste.jstree
     */
    paste: (obj: any, pos: any) => void;

    /**
     * clear the buffer of previously copied or cut nodes
     * @name clear_buffer()
     * @trigger clear_buffer.jstree
     */
    clear_buffer: () => void;

    /**
     * put a node in edit mode (input field to rename the node)
     * @name edit(obj [, default_text, callback])
     * @param  {mixed} obj
     * @param  {String} default_text the text to populate the input with (if omitted or set to a non-string value the node's text value is used)
     * @param  {Function} callback a function to be called once the text box is blurred,
     * it is called in the instance's scope and receives the node, a status parameter (true if the rename is successful, false otherwise)
     * and a boolean indicating if the user cancelled the edit. You can access the node's title using .text
     */
    edit: (obj: any, default_text?: string, callback?: (node: any, status: boolean, canceled: boolean) => void) => void;

    /**
     * changes the theme
     * @name set_theme(theme_name [, theme_url])
     * @param {String} theme_name the name of the new theme to apply
     * @param {mixed} theme_url  the location of the CSS file for this theme. Omit or set to `false`
     * if you manually included the file. Set to `true` to autoload from the `core.themes.dir` directory.
     * @trigger set_theme.jstree
     */
    set_theme: (theme_name: string, theme_url?: any) => void;

    /**
     * gets the name of the currently applied theme name
     * @name get_theme()
     * @return {String}
     */
    get_theme: () => string;

    /**
     * changes the theme variant (if the theme has variants)
     * @name set_theme_variant(variant_name)
     * @param {String|Boolean} variant_name the variant to apply (if `false` is used the current variant is removed)
     */
    set_theme_variant: (variant_name: any) => void;

    /**
     * gets the name of the currently applied theme variant
     * @name get_theme()
     * @return {String}
     */
    get_theme_variant: () => string;

    /**
     * shows a striped background on the container (if the theme supports it)
     * @name show_stripes()
     */
    show_stripes: () => void;

    /**
     * hides the striped background on the container
     * @name hide_stripes()
     */
    hide_stripes: () => void;

    /**
     * toggles the striped background on the container
     * @name toggle_stripes()
     */
    toggle_stripes: () => void;

    /**
     * shows the connecting dots (if the theme supports it)
     * @name show_dots()
     */
    show_dots: () => void;

    /**
     * hides the connecting dots
     * @name hide_dots()
     */
    hide_dots: () => void;

    /**
     * toggles the connecting dots
     * @name toggle_dots()
     */
    toggle_dots: () => void;

    /**
     * show the node icons
     * @name show_icons()
     */
    show_icons: () => void;

    /**
     * hide the node icons
     * @name hide_icons()
     */
    hide_icons: () => void;

    /**
     * toggle the node icons
     * @name toggle_icons()
     */
    toggle_icons: () => void;

    /**
     * show the node ellipsis
     * @name show_icons()
     */
    show_ellipsis: () => void;

    /**
     * hide the node ellipsis
     * @name hide_ellipsis()
     */
    hide_ellipsis: () => void;

    /**
     * toggle the node ellipsis
     * @name toggle_icons()
     */
    toggle_ellipsis: () => void;

    /**
     * set the node icon for a node
     * @name set_icon(obj, icon)
     * @param {mixed} obj
     * @param {String} icon the new icon - can be a path to an icon or a className,
     * if using an image that is in the current directory use a `./` prefix, otherwise it will be detected as a class
     */
    set_icon: (obj: any, icon: string) => void;

    /**
     * get the node icon for a node
     * @name get_icon(obj)
     * @param {mixed} obj
     * @return {String}
     */
    get_icon: (obj: any) => string;

    /**
     * hide the icon on an individual node
     * @name hide_icon(obj)
     * @param {mixed} obj
     */
    hide_icon: (obj: any) => void;

    /**
     * show the icon on an individual node
     * @name show_icon(obj)
     * @param {mixed} obj
     */
    show_icon: (obj: any) => void;

    /**
     * example usage in angular:
     * public sourceTreeNativeElement: JSTree;
     * this.sourceTreeNativeElement = $(this.sourceTree.nativeElement) as JSTree;
     * this.sourceTreeNativeElement.jstree(true).settings.core.data = [];
     * this.sourceTreeNativeElement.jstree(true).refresh();
     */
    settings?: JSTreeStaticDefaults;

    /**
     * checkbox plugin
     */

    /**
     * get an array of all nodes whose state is "undetermined"
     * @name get_undetermined([full])
     * @param  {boolean} full: if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
     * @return {Array}
     * @plugin checkbox
     */
    get_undetermined: (full: boolean) => any[];

    /**
     * set the undetermined state where and if necessary. Used internally.
     * @private
     * @name _undetermined()
     * @plugin checkbox
     */
    _undetermined: () => void;

    /**
     * show the node checkbox icons
     * @name show_checkboxes()
     * @plugin checkbox
     */
    show_checkboxes: () => void;

    /**
     * hide the node checkbox icons
     * @name hide_checkboxes()
     * @plugin checkbox
     */
    hide_checkboxes: () => void;

    /**
     * toggle the node icons
     * @name toggle_checkboxes()
     * @plugin checkbox
     */
    toggle_checkboxes: () => void;

    /**
     * checks if a node is in an undetermined state
     * @name is_undetermined(obj)
     * @param  {mixed} obj
     * @return {Boolean}
     */
    is_undetermined: (obj: any) => boolean;

    /**
     * disable a node's checkbox
     * @name disable_checkbox(obj)
     * @param {mixed} obj an array can be used too
     * @trigger disable_checkbox.jstree
     * @plugin checkbox
     */
    disable_checkbox: (obj: any) => boolean;

    /**
     * enable a node's checkbox
     * @name enable_checkbox(obj)
     * @param {mixed} obj an array can be used too
     * @trigger enable_checkbox.jstree
     * @plugin checkbox
     */
    enable_checkbox: (obj: any) => boolean;

    /**
     * Cascades checked state to a node and all its descendants. This function does NOT affect hidden and disabled nodes (or their descendants).
     * However if these unaffected nodes are already selected their ids will be included in the returned array.
     * @private
     * @param {string} id the node ID
     * @param {bool} checkedState should the nodes be checked or not
     * @returns {Array} Array of all node id's (in this tree branch) that are checked.
     */
    _cascade_new_checked_state: (id: string, checkedState: boolean) => string[];

    /**
     * Gets ids of nodes selected in branch (of tree) specified by id (does not include the node specified by id)
     * @name get_checked_descendants(obj)
     * @param {string} id the node ID
     * @return {Array} array of IDs
     * @plugin checkbox
     */
    get_checked_descendants: (id: string) => string[];

    /**
     * check a node (only if tie_selection in checkbox settings is false, otherwise select_node will be called internally)
     * @name check_node(obj)
     * @param {mixed} obj an array can be used to check multiple nodes
     * @trigger check_node.jstree
     * @plugin checkbox
     */
    check_node: (obj: any, e: any) => any;

    /**
     * uncheck a node (only if tie_selection in checkbox settings is false, otherwise deselect_node will be called internally)
     * @name deselect_node(obj)
     * @param {mixed} obj an array can be used to deselect multiple nodes
     * @trigger uncheck_node.jstree
     * @plugin checkbox
     */
    uncheck_node: (obj: any, e: any) => any;

    /**
     * checks all nodes in the tree (only if tie_selection in checkbox settings is false, otherwise select_all will be called internally)
     * @name check_all()
     * @trigger check_all.jstree, changed.jstree
     * @plugin checkbox
     */
    check_all: () => any;

    /**
     * uncheck all checked nodes (only if tie_selection in checkbox settings is false, otherwise deselect_all will be called internally)
     * @name uncheck_all()
     * @trigger uncheck_all.jstree
     * @plugin checkbox
     */
    uncheck_all: () => any;

    /**
     * checks if a node is checked (if tie_selection is on in the settings this function will return the same as is_selected)
     * @name is_checked(obj)
     * @param  {mixed}  obj
     * @return {Boolean}
     * @plugin checkbox
     */
    is_checked: (obj: any) => boolean;

    /**
     * get an array of all checked nodes (if tie_selection is on in the settings this function will return the same as get_selected)
     * @name get_checked([full])
     * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
     * @return {Array}
     * @plugin checkbox
     */
    get_checked: (full: any) => any[];

    /**
     * get an array of all top level checked nodes (ignoring children of checked nodes) (if tie_selection is on in the settings this function will return the same as get_top_selected)
     * @name get_top_checked([full])
     * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
     * @return {Array}
     * @plugin checkbox
     */
    get_top_checked: (full: any) => any[];

    /**
     * get an array of all bottom level checked nodes (ignoring selected parents) (if tie_selection is on in the settings this function will return the same as get_bottom_selected)
     * @name get_bottom_checked([full])
     * @param  {mixed}  full if set to `true` the returned array will consist of the full node objects, otherwise - only IDs will be returned
     * @return {Array}
     * @plugin checkbox
     */
    get_bottom_checked: (full: any) => any[];

    /**
     * context menu plugin
     */

    /**
     * prepare and show the context menu for a node
     * @name show_contextmenu(obj [, x, y])
     * @param {mixed} obj the node
     * @param {Number} x the x-coordinate relative to the document to show the menu at
     * @param {Number} y the y-coordinate relative to the document to show the menu at
     * @param {Object} e the event if available that triggered the contextmenu
     * @plugin contextmenu
     * @trigger show_contextmenu.jstree
     */
    show_contextmenu: (obj: any, x?: number, y?: number, e?: any) => void;

    /**
     * show the prepared context menu for a node
     * @name _show_contextmenu(obj, x, y, i)
     * @param {mixed} obj the node
     * @param {Number} x the x-coordinate relative to the document to show the menu at
     * @param {Number} y the y-coordinate relative to the document to show the menu at
     * @param {Number} i the object of items to show
     * @plugin contextmenu
     * @trigger show_contextmenu.jstree
     * @private
     */
    _show_contextmenu: (obj: any, x: number, y: number, i: number) => void;

    /**
     * search plugin
     */

    /**
     * used to search the tree nodes for a given string
     * @name search(str [, skip_async])
     * @param {String} str the search string
     * @param {Boolean} skip_async if set to true server will not be queried even if configured
     * @param {Boolean} show_only_matches if set to true only matching nodes will be shown (keep in mind this can be very slow on large trees or old browsers)
     * @param {mixed} inside an optional node to whose children to limit the search
     * @param {Boolean} append if set to true the results of this search are appended to the previous search
     * @param {Boolean} show_only_matches_children show only matched children
     * @plugin search
     * @trigger search.jstree
     */
    search: (str: string, skip_async?: boolean, show_only_matches?: boolean, inside?: any, append?: boolean, show_only_matches_children?: boolean) => void;

    /**
     * used to clear the last search (removes classes and shows all nodes if filtering is on)
     * @name clear_search()
     * @plugin search
     * @trigger clear_search.jstree
     */
    clear_search: () => void;

    /**
     * opens nodes that need to be opened to reveal the search results. Used only internally.
     * @private
     * @name _search_open(d)
     * @param {Array} d an array of node IDs
     * @plugin search
     */
    _search_open: (d: string[]) => void;

    /**
     * sort plugin
     */

    /**
     * used to sort a node's children
     * @private
     * @name sort(obj [, deep])
     * @param  {mixed} obj the node
     * @param {Boolean} deep if set to `true` nodes are sorted recursively.
     * @plugin sort
     * @trigger search.jstree
     */
    sort: (obj: any, deep?: boolean) => void;

    /**
     * state plugin
     */

    /**
     * save the state
     * @name save_state()
     * @plugin state
     */
    save_state: () => void;

    /**
     * restore the state from the user's computer
     * @name restore_state()
     * @plugin state
     */
    restore_state: () => void;

    /**
     * clear the state on the user's computer
     * @name clear_state()
     * @plugin state
     */
    clear_state: () => void;

    /**
     * types plugin
     */

    /**
     * used to retrieve the type settings object for a node
     * @name get_rules(obj)
     * @param {mixed} obj the node to find the rules for
     * @return {Object}
     * @plugin types
     */
    get_rules: (obj: any) => any;

    /**
     * used to retrieve the type string or settings object for a node
     * @name get_type(obj [, rules])
     * @param {mixed} obj the node to find the rules for
     * @param {Boolean} rules if set to `true` instead of a string the settings object will be returned
     * @return {String|Object}
     * @plugin types
     */
    get_type: (obj: any, rules?: any) => any;

    /**
     * used to change a node's type
     * @name set_type(obj, type)
     * @param {mixed} obj the node to change
     * @param {String} type the new type
     * @plugin types
     */
    set_type: (obj: any, type: string) => any;

    /**
     * ### Conditionalselect plugin
     *
     * This plugin allows defining a callback to allow or deny node selection by user input (activate node method).
     */
    conditionalselect: (options: any, parent: any) => any;

    /**
     * ### Conditionalclose plugin
     *
     * This plugin allows defining a callback to allow or deny node close by user input (close node method).
     */
    conditionalclose: (options: any, parent: any) => any;
}

interface JSTreeGetJsonOptions {
    /**
     * do not return state information
     */
    no_state?: boolean;

    /**
     * do not return ID
     */
    no_id?: boolean;

    /**
     * do not include children
     */
    no_children?: boolean;

    /**
     * do not include node data
     */
    no_data?: boolean;

    /**
     * do not include LI attributes
     */
    no_li_attr?: boolean;

    /**
     * do not include A attributes
     */
    no_a_attr?: boolean;

    /**
     * return flat JSON instead of nested
     */
    flat?: boolean;
}

interface JSTreeBindOptions {
    inst?: any;
    args?: any;
    rslt?: any;
    rlbk?: any;
}

interface Buffer {
    mode: string;
    node: any[];
    inst: any;
}
