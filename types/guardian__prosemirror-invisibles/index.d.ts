// Type definitions for @guardian/prosemirror-invisibles 0.1
// Project: https://github.com/guardian/prosemirror-invisibles
// Definitions by: Daniil Dotsev <https://github.com/dddotsev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Node } from 'prosemirror-model';
import { DecorationSet } from "prosemirror-view";
import { Plugin } from 'prosemirror-state';

export type Builder = (from: number, to: number, doc: Node, decos: DecorationSet) => DecorationSet;

export default function(builders: Builder[]): Plugin;

export const hardBreak: Builder;
export const paragraph: Builder;
export const space: Builder;
