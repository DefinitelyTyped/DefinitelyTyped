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

declare module 'atom/ide' {
    export interface FindReferencesProvider {
        // Return true if your provider supports finding references for the provided Atom.TextEditor.
        isEditorSupported(editor: Atom.TextEditor): Promise<boolean>;

        // `findReferences` will only be called if `isEditorSupported` previously returned true
        // for the given Atom.TextEditor.
        findReferences(editor: Atom.TextEditor, position: Atom.Point): Promise<FindReferencesReturn | undefined | null>;
    }

    export interface Reference {
        uri: string; // Nuclide URI of the file path
        name: string | undefined | null; // name of calling method/function/symbol
        range: Atom.Range;
    }

    export interface FindReferencesData {
        type: 'data';
        baseUri: string;
        referencedSymbolName: string;
        references: Reference[];
        title?: string; // defaults to 'Symbol References'
    }

    export interface FindReferencesError {
        type: 'error';
        message: string;
    }

    export type FindReferencesReturn = FindReferencesData | FindReferencesError;
}
