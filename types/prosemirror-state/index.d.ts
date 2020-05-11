// Type definitions for prosemirror-state 1.2
// Project: https://github.com/ProseMirror/prosemirror-state, https://github.com/prosemirror/prosemirror
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
  Mark,
  MarkType,
  Node as ProsemirrorNode,
  ResolvedPos,
  Schema,
  Slice
} from 'prosemirror-model';
import { Mappable, Mapping, Transform } from 'prosemirror-transform';
import { EditorProps, EditorView } from 'prosemirror-view';

/**
 * This is the type passed to the [`Plugin`](#state.Plugin)
 * constructor. It provides a definition for a plugin.
 */
export interface PluginSpec<T = any, S extends Schema = any> {
  /**
   * The [view props](#view.EditorProps) added by this plugin. Props
   * that are functions will be bound to have the plugin instance as
   * their `this` binding.
   */
  props?: EditorProps<S> | null;
  /**
   * Allows a plugin to define a [state field](#state.StateField), an
   * extra slot in the state object in which it can keep its own data.
   */
  state?: StateField<T, S> | null;
  /**
   * Can be used to make this a keyed plugin. You can have only one
   * plugin with a given key in a given state, but it is possible to
   * access the plugin's configuration and state through the key,
   * without having access to the plugin instance object.
   */
  key?: PluginKey<T, S> | null;
  /**
   * When the plugin needs to interact with the editor view, or
   * set something up in the DOM, use this field. The function
   * will be called when the plugin's state is associated with an
   * editor view.
   */
  view?:
  | ((
    p: EditorView<S>
  ) => {
      update?: ((view: EditorView<S>, prevState: EditorState<S>) => void) | null;
      destroy?: (() => void) | null;
    })
  | null;
  /**
   * When present, this will be called before a transaction is
   * applied by the state, allowing the plugin to cancel it (by
   * returning false).
   */
  filterTransaction?: ((p1: Transaction<S>, p2: EditorState<S>) => boolean) | null;
  /**
   * Allows the plugin to append another transaction to be applied
   * after the given array of transactions. When another plugin
   * appends a transaction after this was called, it is called again
   * with the new state and new transactions—but only the new
   * transactions, i.e. it won't be passed transactions that it
   * already saw.
   */
  appendTransaction?:
  | ((
    transactions: Array<Transaction<S>>,
    oldState: EditorState<S>,
    newState: EditorState<S>
  ) => Transaction<S> | null | undefined | void)
  | null;
}
/**
 * Plugins bundle functionality that can be added to an editor.
 * They are part of the [editor state](#state.EditorState) and
 * may influence that state and the view that contains it.
 */
export class Plugin<T = any, S extends Schema = any> {
  /**
   * Create a plugin.
   */
  constructor(spec: PluginSpec<T, S>);
  /**
   * The [props](#view.EditorProps) exported by this plugin.
   */
  props: EditorProps<S>;
  /**
   * The plugin's [spec object](#state.PluginSpec).
   */
  spec: PluginSpec<T, S>;
  /**
   * Extract the plugin's state field from an editor state.
   */
  getState(state: EditorState<S>): T;
}
/**
 * A plugin spec may provide a state field (under its
 * [`state`](#state.PluginSpec.state) property) of this type, which
 * describes the state it wants to keep. Functions provided here are
 * always called with the plugin instance as their `this` binding.
 */
export interface StateField<T = any, S extends Schema = Schema> {
  /**
   * Initialize the value of the field. `config` will be the object
   * passed to [`EditorState.create`](#state.EditorState^create). Note
   * that `instance` is a half-initialized state instance, and will
   * not have values for plugin fields initialized after this one.
   */
  init(config: { [key: string]: any }, instance: EditorState<S>): T;
  /**
   * Apply the given transaction to this state field, producing a new
   * field value. Note that the `newState` argument is again a partially
   * constructed state does not yet contain the state from plugins
   * coming after this one.
   */
  apply(tr: Transaction<S>, value: T, oldState: EditorState<S>, newState: EditorState<S>): T;
  /**
   * Convert this field to JSON. Optional, can be left off to disable
   * JSON serialization for the field.
   */
  toJSON?: ((value: T) => any) | null;
  /**
   * Deserialize the JSON representation of this field. Note that the
   * `state` argument is again a half-initialized state.
   */
  fromJSON?: ((config: { [key: string]: any }, value: any, state: EditorState<S>) => T) | null;
}
/**
 * A key is used to [tag](#state.PluginSpec.key)
 * plugins in a way that makes it possible to find them, given an
 * editor state. Assigning a key does mean only one plugin of that
 * type can be active in a state.
 */
export class PluginKey<T = any, S extends Schema = any> {
  /**
   * Create a plugin key.
   */
  constructor(name?: string);
  /**
   * Get the active plugin with this key, if any, from an editor
   * state.
   */
  get(state: EditorState<S>): Plugin<T, S> | null | undefined;
  /**
   * Get the plugin's state from an editor state.
   */
  getState(state: EditorState<S>): T | null | undefined;
}
/**
 * Superclass for editor selections. Every selection type should
 * extend this. Should not be instantiated directly.
 */
export class Selection<S extends Schema = any> {
  /**
   * Initialize a selection with the head and anchor and ranges. If no
   * ranges are given, constructs a single range across `$anchor` and
   * `$head`.
   */
  constructor($anchor: ResolvedPos<S>, $head: ResolvedPos<S>, ranges?: Array<SelectionRange<S>>);
  /**
   * The ranges covered by the selection.
   */
  ranges: Array<SelectionRange<S>>;
  /**
   * The resolved anchor of the selection (the side that stays in
   * place when the selection is modified).
   */
  $anchor: ResolvedPos<S>;
  /**
   * The resolved head of the selection (the side that moves when
   * the selection is modified).
   */
  $head: ResolvedPos<S>;
  /**
   * The selection's anchor, as an unresolved position.
   */
  anchor: number;
  /**
   * The selection's head.
   */
  head: number;
  /**
   * The lower bound of the selection's main range.
   */
  from: number;
  /**
   * The upper bound of the selection's main range.
   */
  to: number;
  /**
   * The resolved lower  bound of the selection's main range.
   */
  $from: ResolvedPos<S>;
  /**
   * The resolved upper bound of the selection's main range.
   */
  $to: ResolvedPos<S>;
  /**
   * Indicates whether the selection contains any content.
   */
  empty: boolean;
  /**
   * Test whether the selection is the same as another selection.
   */
  eq(p: Selection<S>): boolean;
  /**
   * Map this selection through a [mappable](#transform.Mappable) thing. `doc`
   * should be the new document to which we are mapping.
   */
  map(doc: ProsemirrorNode<S>, mapping: Mappable): Selection<S>;
  /**
   * Get the content of this selection as a slice.
   */
  content(): Slice<S>;
  /**
   * Replace the selection with a slice or, if no slice is given,
   * delete the selection. Will append to the given transaction.
   */
  replace(tr: Transaction<S>, content?: Slice<S>): void;
  /**
   * Replace the selection with the given node, appending the changes
   * to the given transaction.
   */
  replaceWith(tr: Transaction<S>, node: ProsemirrorNode<S>): void;
  /**
   * Convert the selection to a JSON representation. When implementing
   * this for a custom selection class, make sure to give the object a
   * `type` property whose value matches the ID under which you
   * [registered](#state.Selection^jsonID) your class.
   */
  toJSON(): { [key: string]: any };
  /**
   * Get a [bookmark](#state.SelectionBookmark) for this selection,
   * which is a value that can be mapped without having access to a
   * current document, and later resolved to a real selection for a
   * given document again. (This is used mostly by the history to
   * track and restore old selections.) The default implementation of
   * this method just converts the selection to a text selection and
   * returns the bookmark for that.
   */
  getBookmark(): SelectionBookmark<S>;
  /**
   * Controls whether, when a selection of this type is active in the
   * browser, the selected range should be visible to the user. Defaults
   * to `true`.
   */
  visible: boolean;
  /**
   * Find a valid cursor or leaf node selection starting at the given
   * position and searching back if `dir` is negative, and forward if
   * positive. When `textOnly` is true, only consider cursor
   * selections. Will return null when no valid selection position is
   * found.
   */
  static findFrom<S extends Schema = any>(
    $pos: ResolvedPos<S>,
    dir: number,
    textOnly?: boolean
  ): Selection<S> | null | undefined;
  /**
   * Find a valid cursor or leaf node selection near the given
   * position. Searches forward first by default, but if `bias` is
   * negative, it will search backwards first.
   */
  static near<S extends Schema = any>($pos: ResolvedPos<S>, bias?: number): Selection<S>;
  /**
   * Find the cursor or leaf node selection closest to the start of
   * the given document. Will return an
   * [`AllSelection`](#state.AllSelection) if no valid position
   * exists.
   */
  static atStart<S extends Schema = any>(doc: ProsemirrorNode<S>): Selection<S>;
  /**
   * Find the cursor or leaf node selection closest to the end of the
   * given document.
   */
  static atEnd<S extends Schema = any>(doc: ProsemirrorNode<S>): Selection<S>;
  /**
   * Deserialize the JSON representation of a selection. Must be
   * implemented for custom classes (as a static class method).
   */
  static fromJSON<S extends Schema = any>(
    doc: ProsemirrorNode<S>,
    json: { [key: string]: any }
  ): Selection<S>;
  /**
   * To be able to deserialize selections from JSON, custom selection
   * classes must register themselves with an ID string, so that they
   * can be disambiguated. Try to pick something that's unlikely to
   * clash with classes from other modules.
   */
  static jsonID(id: string, selectionClass: { new(...args: any[]): Selection }): void;
}
/**
 * A lightweight, document-independent representation of a selection.
 * You can define a custom bookmark type for a custom selection class
 * to make the history handle it well.
 */
export interface SelectionBookmark<S extends Schema = any> {
  /**
   * Map the bookmark through a set of changes.
   */
  map(mapping: Mapping): SelectionBookmark<S>;
  /**
   * Resolve the bookmark to a real selection again. This may need to
   * do some error checking and may fall back to a default (usually
   * [`TextSelection.between`](#state.TextSelection^between)) if
   * mapping made the bookmark invalid.
   */
  resolve(doc: ProsemirrorNode<S>): Selection<S>;
}
/**
 * Represents a selected range in a document.
 */
export class SelectionRange<S extends Schema = any> {
  constructor($from: ResolvedPos<S>, $to: ResolvedPos<S>);
  /**
   * The lower bound of the range.
   */
  $from: ResolvedPos<S>;
  /**
   * The upper bound of the range.
   */
  $to: ResolvedPos<S>;
}
/**
 * A text selection represents a classical editor selection, with
 * a head (the moving side) and anchor (immobile side), both of which
 * point into textblock nodes. It can be empty (a regular cursor
 * position).
 */
export class TextSelection<S extends Schema = any> extends Selection<S> {
  /**
   * Construct a text selection between the given points.
   */
  constructor($anchor: ResolvedPos<S>, $head?: ResolvedPos<S>);
  /**
   * Returns a resolved position if this is a cursor selection (an
   * empty text selection), and null otherwise.
   */
  $cursor?: ResolvedPos<S> | null;
  /**
   * Create a text selection from non-resolved positions.
   */
  static create<S extends Schema = any>(
    doc: ProsemirrorNode<S>,
    anchor: number,
    head?: number
  ): TextSelection<S>;
  /**
   * Return a text selection that spans the given positions or, if
   * they aren't text positions, find a text selection near them.
   * `bias` determines whether the method searches forward (default)
   * or backwards (negative number) first. Will fall back to calling
   * [`Selection.near`](#state.Selection^near) when the document
   * doesn't contain a valid text position.
   */
  static between<S extends Schema = any>(
    $anchor: ResolvedPos<S>,
    $head: ResolvedPos<S>,
    bias?: number
  ): Selection<S>;
}
/**
 * A node selection is a selection that points at a single node.
 * All nodes marked [selectable](#model.NodeSpec.selectable) can be
 * the target of a node selection. In such a selection, `from` and
 * `to` point directly before and after the selected node, `anchor`
 * equals `from`, and `head` equals `to`..
 */
export class NodeSelection<S extends Schema = any> extends Selection<S> {
  /**
   * Create a node selection. Does not verify the validity of its
   * argument.
   */
  constructor($pos: ResolvedPos<S>);
  /**
   * The selected node.
   */
  node: ProsemirrorNode<S>;
  /**
   * Create a node selection from non-resolved positions.
   */
  static create<S extends Schema = any>(
    doc: ProsemirrorNode<S>,
    from: number
  ): NodeSelection<S>;
  /**
   * Determines whether the given node may be selected as a node
   * selection.
   */
  static isSelectable(node: ProsemirrorNode): boolean;
}
/**
 * A selection type that represents selecting the whole document
 * (which can not necessarily be expressed with a text selection, when
 * there are for example leaf block nodes at the start or end of the
 * document).
 */
export class AllSelection<S extends Schema = any> extends Selection<S> {
  /**
   * Create an all-selection over the given document.
   */
  constructor(doc: ProsemirrorNode<S>);
}
/**
 * The state of a ProseMirror editor is represented by an object
 * of this type. A state is a persistent data structure—it isn't
 * updated, but rather a new state value is computed from an old one
 * using the [`apply`](#state.EditorState.apply) method.
 *
 * A state holds a number of built-in fields, and plugins can
 * [define](#state.PluginSpec.state) additional fields.
 */
export class EditorState<S extends Schema = any> {
  /**
   * The current document.
   */
  doc: ProsemirrorNode<S>;
  /**
   * The selection.
   */
  selection: Selection<S>;
  /**
   * A set of marks to apply to the next input. Will be null when
   * no explicit marks have been set.
   */
  storedMarks?: Array<Mark<S>> | null;
  /**
   * The schema of the state's document.
   */
  schema: S;
  /**
   * The plugins that are active in this state.
   */
  plugins: Array<Plugin<any, S>>;
  /**
   * Apply the given transaction to produce a new state.
   */
  apply(tr: Transaction<S>): EditorState<S>;
  /**
   * Verbose variant of [`apply`](#state.EditorState.apply) that
   * returns the precise transactions that were applied (which might
   * be influenced by the [transaction
   * hooks](#state.PluginSpec.filterTransaction) of
   * plugins) along with the new state.
   */
  applyTransaction(tr: Transaction<S>): { state: EditorState<S>; transactions: Array<Transaction<S>> };
  /**
   * Start a [transaction](#state.Transaction) from this state.
   */
  tr: Transaction<S>;
  /**
   * Create a new state based on this one, but with an adjusted set of
   * active plugins. State fields that exist in both sets of plugins
   * are kept unchanged. Those that no longer exist are dropped, and
   * those that are new are initialized using their
   * [`init`](#state.StateField.init) method, passing in the new
   * configuration object..
   */
  reconfigure(config: { schema?: S | null; plugins?: Array<Plugin<any, S>> | null }): EditorState<S>;
  /**
   * Serialize this state to JSON. If you want to serialize the state
   * of plugins, pass an object mapping property names to use in the
   * resulting JSON object to plugin objects.
   */
  toJSON(pluginFields?: { [name: string]: Plugin<any, S> } | string | number): { [key: string]: any };
  /**
   * Create a new state.
   */
  static create<S extends Schema = any>(config: {
    schema?: S | null;
    doc?: ProsemirrorNode<S> | null;
    selection?: Selection<S> | null;
    storedMarks?: Mark[] | null;
    plugins?: Array<Plugin<any, S>> | null;
  }): EditorState<S>;
  /**
   * Deserialize a JSON representation of a state. `config` should
   * have at least a `schema` field, and should contain array of
   * plugins to initialize the state with. `pluginFields` can be used
   * to deserialize the state of plugins, by associating plugin
   * instances with the property names they use in the JSON object.
   */
  static fromJSON<S extends Schema = any>(
    config: { schema: S; plugins?: Array<Plugin<any, S>> | null },
    json: { [key: string]: any },
    pluginFields?: { [name: string]: Plugin<any, S> }
  ): EditorState<S>;
}
/**
 * An editor state transaction, which can be applied to a state to
 * create an updated state. Use
 * [`EditorState.tr`](#state.EditorState.tr) to create an instance.
 *
 * Transactions track changes to the document (they are a subclass of
 * [`Transform`](#transform.Transform)), but also other state changes,
 * like selection updates and adjustments of the set of [stored
 * marks](#state.EditorState.storedMarks). In addition, you can store
 * metadata properties in a transaction, which are extra pieces of
 * information that client code or plugins can use to describe what a
 * transacion represents, so that they can update their [own
 * state](#state.StateField) accordingly.
 *
 * The [editor view](#view.EditorView) uses a few metadata properties:
 * it will attach a property `"pointer"` with the value `true` to
 * selection transactions directly caused by mouse or touch input, and
 * a `"paste"` property of true to transactions caused by a paste..
 */
export class Transaction<S extends Schema = any> extends Transform<S> {
  /**
   * The timestamp associated with this transaction, in the same
   * format as `Date.now()`.
   */
  time: number;
  /**
   * The stored marks set by this transaction, if any.
   */
  storedMarks?: Mark[] | null;
  /**
   * The transaction's current selection. This defaults to the editor
   * selection [mapped](#state.Selection.map) through the steps in the
   * transaction, but can be overwritten with
   * [`setSelection`](#state.Transaction.setSelection).
   */
  selection: Selection;
  /**
   * Update the transaction's current selection. Will determine the
   * selection that the editor gets when the transaction is applied.
   */
  setSelection(selection: Selection): Transaction;
  /**
   * Whether the selection was explicitly updated by this transaction.
   */
  selectionSet: boolean;
  /**
   * Set the current stored marks.
   */
  setStoredMarks(marks?: Mark[]): Transaction;
  /**
   * Make sure the current stored marks or, if that is null, the marks
   * at the selection, match the given set of marks. Does nothing if
   * this is already the case.
   */
  ensureMarks(marks: Mark[]): Transaction;
  /**
   * Add a mark to the set of stored marks.
   */
  addStoredMark(mark: Mark): Transaction;
  /**
   * Remove a mark or mark type from the set of stored marks.
   */
  removeStoredMark(mark: Mark | MarkType): Transaction;
  /**
   * Whether the stored marks were explicitly set for this transaction.
   */
  storedMarksSet: boolean;
  /**
   * Update the timestamp for the transaction.
   */
  setTime(time: number): Transaction;
  /**
   * Replace the current selection with the given slice.
   */
  replaceSelection(slice: Slice): Transaction;
  /**
   * Replace the selection with the given node. When `inheritMarks` is
   * true and the content is inline, it inherits the marks from the
   * place where it is inserted.
   */
  replaceSelectionWith(node: ProsemirrorNode, inheritMarks?: boolean): Transaction;
  /**
   * Delete the selection.
   */
  deleteSelection(): Transaction;
  /**
   * Replace the given range, or the selection if no range is given,
   * with a text node containing the given string.
   */
  insertText(text: string, from?: number, to?: number): Transaction;
  /**
   * Store a metadata property in this transaction, keyed either by
   * name or by plugin.
   */
  setMeta(key: string | Plugin<any, S> | PluginKey<any, S>, value: any): Transaction;
  /**
   * Retrieve a metadata property for a given name or plugin.
   */
  getMeta(key: string | Plugin<any, S> | PluginKey<any, S>): any;
  /**
   * Returns true if this transaction doesn't contain any metadata,
   * and can thus safely be extended.
   */
  isGeneric: boolean;
  /**
   * Indicate that the editor should scroll the selection into view
   * when updated to the state produced by this transaction.
   */
  scrollIntoView(): Transaction;
}
