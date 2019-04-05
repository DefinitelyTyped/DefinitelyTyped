// Type definitions for @guardian/prosemirror-invisibles 1.2
// Project: https://github.com/guardian/prosemirror-invisibles
// Definitions by: Daniil Dotsev <https://github.com/dddotsev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Node } from 'prosemirror-model';
import { Decoration, DecorationSet } from "prosemirror-view";
import { Plugin } from 'prosemirror-state';

export type Builder = (from: number, to: number, doc: Node, decos: DecorationSet) => DecorationSet;

export interface TextBetweenPosition {
  pos: number;
  text: string;
}

export default function(builders: Builder[]): Plugin;

export function character(type: string): (predicate: (char: string) => boolean) => Builder;
export function node(type: string, toPosition: (node: Node, pos: number) => number):
  (predicate: (node: Node) => boolean) => Builder;

export function hardBreak(predicate?: (node: Node) => boolean): Builder;
export function paragraph(predicate?: (node: Node) => boolean): Builder;
export function space(predicate?: (char: string) => boolean): Builder;

export function createDeco(pos: number, type: string): Decoration;
export function textBetween(from: number, to: number, doc: Node): TextBetweenPosition[];
