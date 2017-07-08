// Type definitions for prosemirror-schema-list 0.21
// Project: https://github.com/ProseMirror/prosemirror-schema-list
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import OrderedMap = require('orderedmap');
import { NodeSpec, NodeType } from 'prosemirror-model';
import { EditorState, Transaction } from 'prosemirror-state';

export let orderedList: NodeSpec;
export let bulletList: NodeSpec;
export let listItem: NodeSpec;
export function addListNodes<T>(nodes: OrderedMap<T>, itemContent: string, listGroup?: string): OrderedMap<T>;
export function wrapInList(listType: NodeType, attrs?: { [key: string]: any }): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
export function splitListItem(itemType: NodeType): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
export function liftListItem(itemType: NodeType): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
export function sinkListItem(itemType: NodeType): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
