// Type definitions for prosemirror-commands 0.21
// Project: https://github.com/ProseMirror/prosemirror-commands
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { EditorState } from 'prosemirror-state';
import { Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { NodeType } from 'prosemirror-model';
import { MarkType } from 'prosemirror-model';
import { ProsemirrorNode as Node } from 'prosemirror-model';

export function deleteSelection(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function joinBackward(state: EditorState, dispatch?: (tr: Transaction) => void, view?: EditorView): boolean;
export function joinForward(state: EditorState, dispatch?: (tr: Transaction) => void, view?: EditorView): boolean;
export function joinUp(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function joinDown(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function lift(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function newlineInCode(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function exitCode(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function createParagraphNear(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function liftEmptyBlock(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function splitBlock(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function splitBlockKeepMarks(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function selectParentNode(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function selectAll(state: EditorState, dispatch?: (tr: Transaction) => void): boolean;
export function wrapIn(nodeType: NodeType, attrs?: { [key: string]: any }): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
export function setBlockType(nodeType: NodeType, attrs?: { [key: string]: any }): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
export function toggleMark(markType: MarkType, attrs?: { [key: string]: any }): (state: EditorState, dispatch?: (tr: Transaction) => void) => boolean;
export function autoJoin(command: (state: EditorState, _1?: (tr: Transaction) => void) => boolean,
                         isJoinable: ((before: Node, after: Node) => boolean) | string[]): (state: EditorState, _1?: (tr: Transaction) => void) => boolean;
export function chainCommands(...commands: Array<(_0: EditorState, _1?: (tr: Transaction) => void) => boolean>): (_0: EditorState, _1?: (tr: Transaction) => void) => boolean;
export const baseKeymap: { [key: string]: any };
