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
    export interface CodeHighlightProvider {
        priority: number;
        grammarScopes: ReadonlyArray<string>;
        highlight(editor: Atom.TextEditor, bufferPosition: Atom.Point): Promise<Atom.Range[] | undefined | null>;
    }
}
