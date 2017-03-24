// Type definitions for prosemirror-inputrules 0.18
// Project: https://github.com/ProseMirror/prosemirror-inputrules
// Definitions by: David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { EditorState } from 'prosemirror-state'
import { Transaction } from 'prosemirror-state'
import { Plugin } from 'prosemirror-state'
import { NodeType } from 'prosemirror-model'
import { ProsemirrorNode } from 'prosemirror-model'

declare module "prosemirror-inputrules" {
  export class InputRule {
    constructor(match: RegExp, handler: string | ((state: EditorState, match: string[], start: number, end: number) => Transaction))

  }
  export function inputRules(config: { rules: InputRule[] }): Plugin
  export let emDash: InputRule;
  export let ellipsis: InputRule;
  export let openDoubleQuote: InputRule;
  export let closeDoubleQuote: InputRule;
  export let openSingleQuote: InputRule;
  export let closeSingleQuote: InputRule;
  export let smartQuotes: InputRule[];
  export let allInputRules: InputRule[];
  export function wrappingInputRule(regexp: RegExp, nodeType: NodeType, getAttrs?: Object | ((p: string[]) => Object | void), joinPredicate?: (p1: string[], p2: ProsemirrorNode) => boolean): InputRule
  export function textblockTypeInputRule(regexp: RegExp, nodeType: NodeType, getAttrs?: Object | ((p: string[]) => Object | void)): InputRule
  export function blockQuoteRule(nodeType: NodeType): InputRule
  export function orderedListRule(nodeType: NodeType): InputRule
  export function bulletListRule(nodeType: NodeType): InputRule
  export function codeBlockRule(nodeType: NodeType): InputRule
  export function headingRule(nodeType: NodeType, maxLevel: number): InputRule

}