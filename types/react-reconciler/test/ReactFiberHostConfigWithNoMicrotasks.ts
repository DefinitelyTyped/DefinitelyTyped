// This file is pretty much a copy of https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHostConfigWithNoMicrotasks.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Renderers that don't support microtasks
// can re-export everything from this module.

function shim(...args: any): any {
    throw new Error(
        'The current renderer does not support microtasks. ' +
            'This error is likely caused by a bug in React. ' +
            'Please file an issue.',
    );
}

// Test selectors (when unsupported)
export const supportsMicrotasks = false;
export const scheduleMicrotask = shim;
