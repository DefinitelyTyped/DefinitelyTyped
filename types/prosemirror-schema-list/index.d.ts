// Type definitions for prosemirror-schema-list 1.0
// Project: https://github.com/ProseMirror/prosemirror-schema-list
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import OrderedMap = require('orderedmap');
import { NodeSpec, NodeType, Schema } from 'prosemirror-model';
import { EditorState, Transaction } from 'prosemirror-state';

/**
 * An ordered list [node spec](#model.NodeSpec). Has a single
 * attribute, `order`, which determines the number at which the list
 * starts counting, and defaults to 1. Represented as an `<ol>`
 * element.
 */
export let orderedList: NodeSpec;
/**
 * A bullet list node spec, represented in the DOM as `<ul>`.
 */
export let bulletList: NodeSpec;
/**
 * A list item (`<li>`) spec.
 */
export let listItem: NodeSpec;
/**
 * Convenience function for adding list-related node types to a map
 * specifying the nodes for a schema. Adds
 * [`orderedList`](#schema-list.orderedList) as `"ordered_list"`,
 * [`bulletList`](#schema-list.bulletList) as `"bullet_list"`, and
 * [`listItem`](#schema-list.listItem) as `"list_item"`.
 *
 * `itemContent` determines the content expression for the list items.
 * If you want the commands defined in this module to apply to your
 * list structure, it should have a shape like `"paragraph block*"` or
 * `"paragraph (ordered_list | bullet_list)*"`. `listGroup` can be
 * given to assign a group name to the list node types, for example
 * `"block"`.
 */
export function addListNodes(
  nodes: OrderedMap<NodeSpec>,
  itemContent: string,
  listGroup?: string
): OrderedMap<NodeSpec>;
/**
 * Returns a command function that wraps the selection in a list with
 * the given type an attributes. If `dispatch` is null, only return a
 * value to indicate whether this is possible, but don't actually
 * perform the change.
 */
export function wrapInList<S extends Schema = any>(
  listType: NodeType<S>,
  attrs?: { [key: string]: any }
): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean;
/**
 * Build a command that splits a non-empty textblock at the top level
 * of a list item by also splitting that list item.
 */
export function splitListItem<S extends Schema = any>(
  itemType: NodeType<S>
): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean;
/**
 * Create a command to lift the list item around the selection up into
 * a wrapping list.
 */
export function liftListItem<S extends Schema = any>(
  itemType: NodeType<S>
): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean;
/**
 * Create a command to sink the list item around the selection down
 * into an inner list.
 */
export function sinkListItem<S extends Schema = any>(
  itemType: NodeType<S>
): (state: EditorState<S>, dispatch?: (tr: Transaction<S>) => void) => boolean;
