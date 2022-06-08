// This file is pretty much a copy of https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHostConfigWithNoTestSelectors.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// Renderers that don't support test selectors
// can re-export everything from this module.

function shim(...args: any): any {
    throw new Error(
        'The current renderer does not support test selectors. ' +
            'This error is likely caused by a bug in React. ' +
            'Please file an issue.',
    );
}

// Test selectors (when unsupported)
export const supportsTestSelectors = false;
export const findFiberRoot = shim;
export const getBoundingRect = shim;
export const getTextContent = shim;
export const isHiddenSubtree = shim;
export const matchAccessibilityRole = shim;
export const setFocusIfFocusable = shim;
export const setupIntersectionObserver = shim;
