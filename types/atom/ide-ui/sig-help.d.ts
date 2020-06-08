/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * index.d.ts file in the directory containing this source file.
 * An additional grant of patent rights can be found in the index.d.ts
 * file in the same directory.
 */

import { DisposableLike, Point, TextEditor } from '../index';

declare module 'atom/ide-ui' {
    export type SignatureHelpRegistry = (provider: SignatureHelpProvider) => DisposableLike;

    export interface SignatureHelpProvider {
        priority: number;
        grammarScopes: ReadonlyArray<string>;

        triggerCharacters?: Set<string>;

        getSignatureHelp(editor: TextEditor, point: Point): Promise<SignatureHelp | undefined | null>;
    }

    export interface SignatureHelp {
        signatures: Signature[];
        activeSignature?: number;
        activeParameter?: number;
    }

    export interface Signature {
        label: string;
        documentation?: string;
        parameters?: SignatureParameter[];
    }

    export interface SignatureParameter {
        label: string;
        documentation?: string;
    }
}
