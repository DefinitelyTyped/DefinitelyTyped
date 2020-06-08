/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE.Facebook file in the directory containing this source file.
 * An additional grant of patent rights can be found in the PATENTS.Facebook
 * file in the same directory.
 */

import * as Atom from '../index';

declare module 'atom/ide' {
    export interface Definition {
        // Path of the file in which the definition is located.
        path: string;
        // First character of the definition's identifier.
        // e.g. "F" in `class Foo {}`
        position: Atom.Point;
        // Optional: the range of the entire definition.
        // e.g. "c" to "}" in `class Foo {}`
        range?: Atom.Range;
        // Optional: `name` and `projectRoot` can be provided to display a more human-readable title
        // inside of Hyperclick when there are multiple definitions.
        name?: string;
        // If provided, `projectRoot` will be used to display a relativized version of `path`.
        projectRoot?: string;
        // `language` may be used by consumers to identify the source of definitions.
        language: string;
    }

    // Definition queries supply a point.
    // The returned queryRange is the range within which the returned definition is valid.
    // Typically queryRange spans the containing identifier around the query point.
    // (If a null queryRange is returned, the range of the word containing the point is used.)
    export interface DefinitionQueryResult {
        queryRange: ReadonlyArray<Atom.Range> | null | undefined;
        definitions: ReadonlyArray<Definition>; // Must be non-empty.
    }

    // Provides definitions for a set of language grammars.
    export interface DefinitionProvider {
        // If there are multiple providers for a given grammar,
        // the one with the highest priority will be used.
        priority: number;
        grammarScopes: ReadonlyArray<string>;
        wordRegExp: RegExp | null | undefined;
        // Obtains the definition in an editor at the given point.
        // This should return null if no definition is available.
        getDefinition: (
            editor: Atom.TextEditor,
            position: Atom.Point,
        ) => Promise<DefinitionQueryResult | null | undefined>;
    }

    export interface DefinitionPreviewProvider {
        getDefinitionPreview(
            definition: Definition,
        ): Promise<
            | {
                  mime: string;
                  contents: string;
                  encoding: string;
              }
            | null
            | undefined
        >;
    }
}
