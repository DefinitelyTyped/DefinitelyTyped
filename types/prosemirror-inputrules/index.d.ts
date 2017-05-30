// Type definitions for prosemirror-inputrules 0.21
// Project: https://github.com/ProseMirror/prosemirror-inputrules
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { ProsemirrorNode as Node, NodeType } from 'prosemirror-model';
import { EditorState, Plugin, Transaction } from 'prosemirror-state';

export interface Attrs {
  [key: string]: any;
}

export class InputRule {
  constructor(match: RegExp, handler: string | ((state: EditorState, match: string[], start: number, end: number) => Transaction | null | undefined))
}
export function inputRules(config: { rules: InputRule[] }): Plugin;
export function undoInputRule(state: EditorState, dispatch?: (p: Transaction) => void): boolean;
export let emDash: InputRule;
export let ellipsis: InputRule;
export let openDoubleQuote: InputRule;
export let closeDoubleQuote: InputRule;
export let openSingleQuote: InputRule;
export let closeSingleQuote: InputRule;
export let smartQuotes: InputRule[];
export let allInputRules: InputRule[];
export function wrappingInputRule(regexp: RegExp, nodeType: NodeType, getAttrs?: Attrs | ((p: string[]) => Attrs | null | undefined), joinPredicate?: (p1: string[], p2: Node) => boolean): InputRule;
export function textblockTypeInputRule(regexp: RegExp, nodeType: NodeType, getAttrs?: Attrs | ((p: string[]) => Attrs | null | undefined)): InputRule;
export function blockQuoteRule(nodeType: NodeType): InputRule;
export function orderedListRule(nodeType: NodeType): InputRule;
export function bulletListRule(nodeType: NodeType): InputRule;
export function codeBlockRule(nodeType: NodeType): InputRule;
export function headingRule(nodeType: NodeType, maxLevel: number): InputRule;
