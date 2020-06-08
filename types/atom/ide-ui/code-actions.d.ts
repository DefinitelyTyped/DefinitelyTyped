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
import { Message } from '../linter';

declare module 'atom/ide' {
    export interface CodeAction {
        apply(): Promise<void>;
        getTitle(): Promise<string>;
        dispose(): void;
    }

    export interface CodeActionProvider {
        grammarScopes?: ReadonlyArray<string>;
        priority: number;
        getCodeActions(
            editor: Atom.TextEditor,
            range: Atom.Range,
            diagnostics: Message[],
        ): Promise<CodeAction[] | null | undefined>;
    }

    /**
     * atom-ide-code-actions provides a CodeActionFetcher which offers an API to
     * request CodeActions from all CodeAction providers. For now, CodeActionFetcher
     * can only fetch CodeActions for a Diagnostic. In the future, this API can be
     * extended to provide a stream of CodeActions based on the cursor position.
     */
    export interface CodeActionFetcher {
        getCodeActionForDiagnostic: (diagnostic: Message, editor: Atom.TextEditor) => Promise<CodeAction[]>;
    }
}
