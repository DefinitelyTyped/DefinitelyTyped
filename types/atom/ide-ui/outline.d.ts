/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * index.d.ts file in the directory containing this source file.
 * An additional grant of patent rights can be found in the index.d.ts
 * file in the same directory.
 */

import * as Atom from '../index';

declare module 'atom/ide-ui' {
    export interface OutlineProvider {
        name: string;
        // If there are multiple providers for a given grammar, the one with the highest priority will be
        // used.
        priority: number;
        grammarScopes: ReadonlyArray<string>;
        updateOnEdit?: boolean;
        getOutline(editor: Atom.TextEditor): Promise<Outline | null | undefined>;
    }

    export interface OutlineTree {
        icon?: string; // from Atom.Octicon (that type's not allowed over rpc so we use string)
        kind?: OutlineTreeKind; // kind you can pass to the UI for theming

        // Must be one or the other. If both are present, tokenizedText is preferred.
        plainText?: string;
        tokenizedText?: TokenizedText;

        // If user has atom-ide-outline-view.nameOnly then representativeName is used instead.
        representativeName?: string;

        startPosition: Atom.Point;
        endPosition?: Atom.Point;
        landingPosition?: Atom.Point;
        children: OutlineTree[];
    }

    export interface Outline {
        outlineTrees: OutlineTree[];
    }

    // Kind of outline tree - matches the names from the Language Server Protocol v2.
    export type OutlineTreeKind =
        | 'file'
        | 'module'
        | 'namespace'
        | 'package'
        | 'class'
        | 'method'
        | 'property'
        | 'field'
        | 'constructor'
        | 'enum'
        | 'interface'
        | 'function'
        | 'variable'
        | 'constant'
        | 'string'
        | 'number'
        | 'boolean'
        | 'array';

    export type TokenKind =
        | 'keyword'
        | 'class-name'
        | 'constructor'
        | 'method'
        | 'param'
        | 'string'
        | 'whitespace'
        | 'plain'
        | 'type';

    export interface TextToken {
        kind: TokenKind;
        value: string;
    }

    export type TokenizedText = TextToken[];
}
