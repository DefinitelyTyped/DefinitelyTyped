// This file is pretty much a copy of https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHostConfigWithNoPersistence.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Renderers that don't support persistence
// can re-export everything from this module.

function shim(...args: any): any {
    throw new Error(
        'The current renderer does not support persistence. ' +
            'This error is likely caused by a bug in React. ' +
            'Please file an issue.',
    );
}

// Persistence (when unsupported)
export const supportsPersistence = false;
export const cloneInstance = shim;
export const createContainerChildSet = shim;
export const appendChildToContainerChildSet = shim;
export const finalizeContainerChildren = shim;
export const replaceContainerChildren = shim;
export const cloneHiddenInstance = shim;
export const cloneHiddenTextInstance = shim;
