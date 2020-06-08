/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE.Facebook file in the directory containing this source file.
 * An additional grant of patent rights can be found in the PATENTS.Facebook
 * file in the same directory.
 */

import * as Atom from "../index"

declare module "atom/ide" {

  export interface DatatipService {
    addProvider(provider: DatatipProvider): Atom.DisposableLike
    addModifierProvider(provider: ModifierDatatipProvider): Atom.DisposableLike
    createPinnedDataTip(
      datatip: Datatip,
      editor: Atom.TextEditor,
      options?: PinnedDatatipOptions,
    ): Atom.DisposableLike
  }

  export interface PinnedDatatipOptions {
    // Defaults to 'end-of-line'.
    position?: PinnedDatatipPosition
    // Defaults to true.
    showRangeHighlight?: boolean
  }

  export type PinnedDatatipPosition = "end-of-line" | "above-range"

  export interface DatatipProvider {
    priority: number
    grammarScopes?: ReadonlyArray<string>
    // A unique name for the provider to be used for analytics.
    // It is recommended that it be the name of the provider's package.
    providerName: string
    datatip(
      editor: Atom.TextEditor,
      bufferPosition: Atom.Point,
    ): Promise<Datatip | undefined | null>
  }

  export interface ModifierDatatipProvider {
    priority: number
    grammarScopes?: string[]
    providerName: string
    modifierDatatip(
      editor: Atom.TextEditor,
      bufferPosition: Atom.Point,
      heldKeys: Set<ModifierKey>,
    ): Promise<Datatip | undefined | null>
  }

  export type AnyDatatipProvider = DatatipProvider | ModifierDatatipProvider

  export type Datatip =
    | {
        markedStrings: MarkedString[]
        range: Atom.Range
        pinnable?: boolean
      }
    | {
        component: () => JSX.Element // React component
        range: Atom.Range
        pinnable?: boolean
      }

  // Borrowed from the LSP API.
  export type MarkedString =
    | {
        type: "markdown"
        value: string
      }
    | {
        type: "snippet"
        grammar: Atom.Grammar
        value: string
      }

  export type ModifierKey = "metaKey" | "shiftKey" | "altKey" | "ctrlKey"
}
