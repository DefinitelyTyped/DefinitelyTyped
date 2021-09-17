// Type definitions for prosemirror-menu 1.0
// Project: https://github.com/ProseMirror/prosemirror-menu
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { NodeType, Schema } from 'prosemirror-model';
import { EditorState, Plugin, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

/**
 * The types defined in this module aren't the only thing you can
 * display in your menu. Anything that conforms to this interface can
 * be put into a menu structure.
 */
export interface MenuElement<S extends Schema = any> {
    /**
     * Render the element for display in the menu. Must return a DOM
     * element and a function that can be used to update the element to
     * a new state. The `update` function will return false if the
     * update hid the entire element.
     */
    render(pm: EditorView<S>): { dom: Node; update(p: EditorState<S>): boolean };
}
/**
 * An icon or label that, when clicked, executes a command.
 */
export class MenuItem<S extends Schema = any> {
    constructor(spec: MenuItemSpec<S>);
    /**
     * The spec used to create the menu item.
     */
    spec: MenuItemSpec<S>;
    /**
     * Renders the icon according to its [display
     * spec](#menu.MenuItemSpec.display), and adds an event handler which
     * executes the command when the representation is clicked.
     */
    render(view: EditorView<S>): { dom: Node; update(p: EditorState<S>): boolean };
}
/**
 * The configuration object passed to the `MenuItem` constructor.
 */
export interface MenuItemSpec<S extends Schema = any> {
    /**
     * The function to execute when the menu item is activated.
     */
    run(p1: EditorState<S>, p2: (p: Transaction<S>) => void, p3: EditorView<S>, p4: Event): void;
    /**
     * Optional function that is used to determine whether the item is
     * appropriate at the moment. Deselected items will be hidden.
     */
    select?: ((p: EditorState<S>) => boolean) | null | undefined;
    /**
     * Function that is used to determine if the item is enabled. If
     * given and returning false, the item will be given a disabled
     * styling.
     */
    enable?: ((p: EditorState<S>) => boolean) | null | undefined;
    /**
     * A predicate function to determine whether the item is 'active' (for
     * example, the item for toggling the strong mark might be active then
     * the cursor is in strong text).
     */
    active?: ((p: EditorState<S>) => boolean) | null | undefined;
    /**
     * A function that renders the item. You must provide either this,
     * [`icon`](#menu.MenuItemSpec.icon), or [`label`](#MenuItemSpec.label).
     */
    render?: ((p: EditorView<S>) => Node) | null | undefined;
    /**
     * Describes an icon to show for this item. The object may specify
     * an SVG icon, in which case its `path` property should be an [SVG
     * path
     * spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d),
     * and `width` and `height` should provide the viewbox in which that
     * path exists. Alternatively, it may have a `text` property
     * specifying a string of text that makes up the icon, with an
     * optional `css` property giving additional CSS styling for the
     * text. _Or_ it may contain `dom` property containing a DOM node.
     */
    icon?: { [key: string]: any } | null | undefined;
    /**
     * Makes the item show up as a text label. Mostly useful for items
     * wrapped in a [drop-down](#menu.Dropdown) or similar menu. The object
     * should have a `label` property providing the text to display.
     */
    label?: string | null | undefined;
    /**
     * Defines DOM title (mouseover) text for the item.
     */
    title?: string | ((p: EditorState<S>) => string) | null | undefined;
    /**
     * Optionally adds a CSS class to the item's DOM representation.
     */
    class?: string | undefined;
    /**
     * Optionally adds a string of inline CSS to the item's DOM
     * representation.
     */
    css?: string | undefined;
}
/**
 * A drop-down menu, displayed as a label with a downwards-pointing
 * triangle to the right of it.
 */
export class Dropdown<S extends Schema = any> {
    /**
     * Create a dropdown wrapping the elements. Options may include
     * the following properties:
     *
     * **`label`**`: string`
     * : The label to show on the drop-down control.
     *
     * **`title`**`: string`
     * : Sets the
     * [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)
     * attribute given to the menu control.
     *
     * **`class`**`: string`
     * : When given, adds an extra CSS class to the menu control.
     *
     * **`css`**`: string`
     * : When given, adds an extra set of CSS styles to the menu control.
     */
    constructor(content: ReadonlyArray<MenuElement<S>>, options?: { [key: string]: any });
    /**
     * Render the dropdown menu and sub-items.
     */
    render(view: EditorView<S>): { dom: Node; update(p: EditorState<S>): void };
}
/**
 * Represents a submenu wrapping a group of elements that start
 * hidden and expand to the right when hovered over or tapped.
 */
export class DropdownSubmenu<S extends Schema = any> {
    /**
     * Creates a submenu for the given group of menu elements. The
     * following options are recognized:
     *
     * **`label`**`: string`
     * : The label to show on the submenu.
     */
    constructor(content: ReadonlyArray<MenuElement<S>>, options?: { [key: string]: any });
    /**
     * Renders the submenu.
     */
    render(view: EditorView<S>): { dom: Node; update(p: EditorState<S>): boolean };
}
/**
 * Render the given, possibly nested, array of menu elements into a
 * document fragment, placing separators between them (and ensuring no
 * superfluous separators appear when some of the groups turn out to
 * be empty).
 */
export function renderGrouped<S extends Schema = any>(
    view: EditorView<S>,
    content: ReadonlyArray<ReadonlyArray<MenuElement<S>>>,
): { dom: DocumentFragment; update(p: EditorState<S>): boolean };
/**
 * A set of basic editor-related icons. Contains the properties
 * `join`, `lift`, `selectParentNode`, `undo`, `redo`, `strong`, `em`,
 * `code`, `link`, `bulletList`, `orderedList`, and `blockquote`, each
 * holding an object that can be used as the `icon` option to
 * `MenuItem`.
 */
export let icons: { [key: string]: any };
/**
 * Menu item for the `joinUp` command.
 */
export let joinUpItem: MenuItem;
/**
 * Menu item for the `lift` command.
 */
export let liftItem: MenuItem;
/**
 * Menu item for the `selectParentNode` command.
 */
export let selectParentNodeItem: MenuItem;
/**
 * Menu item for the `undo` command.
 */
export function undoItem(p: { [key: string]: any }): MenuItem;
/**
 * Menu item for the `redo` command.
 */
export function redoItem(p: { [key: string]: any }): MenuItem;
/**
 * Build a menu item for wrapping the selection in a given node type.
 * Adds `run` and `select` properties to the ones present in
 * `options`. `options.attrs` may be an object or a function, as in
 * `toggleMarkItem`.
 */
export function wrapItem<S extends Schema = any>(nodeType: NodeType<S>, options: { [key: string]: any }): MenuItem<S>;
/**
 * Build a menu item for changing the type of the textblock around the
 * selection to the given type. Provides `run`, `active`, and `select`
 * properties. Others must be given in `options`. `options.attrs` may
 * be an object to provide the attributes for the textblock node.
 */
export function blockTypeItem<S extends Schema = any>(
    nodeType: NodeType<S>,
    options: { [key: string]: any },
): MenuItem<S>;
/**
 * A plugin that will place a menu bar above the editor. Note that
 * this involves wrapping the editor in an additional `<div>`.
 */
export function menuBar<S extends Schema = any>(options: {
    content: ReadonlyArray<ReadonlyArray<MenuElement<S>>>;
    floating?: boolean | null | undefined;
}): Plugin<S>;
