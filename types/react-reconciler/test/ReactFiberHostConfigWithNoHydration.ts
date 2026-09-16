// This file is pretty much a copy of https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHostConfigWithNoHydration.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Renderers that don't support hydration
// can re-export everything from this module.

function shim(...args: any): any {
    throw new Error(
        "The current renderer does not support hydration. "
            + "This error is likely caused by a bug in React. "
            + "Please file an issue.",
    );
}

// Hydration (when unsupported)
export interface ActivityInstance {
    kind: "ActivityInstance";
}
export type SuspenseInstance = any;
export const supportsHydration = false;
export const canHydrateInstance = shim;
export const canHydrateTextInstance = shim;
export const canHydrateActivityInstance = shim;
export const canHydrateSuspenseInstance = shim;
export const isSuspenseInstancePending = shim;
export const isSuspenseInstanceFallback = shim;
export const registerSuspenseInstanceRetry = shim;
export const getNextHydratableSibling = shim;
export const getFirstHydratableChild = shim;
export const getFirstHydratableChildWithinContainer = shim;
export const getFirstHydratableChildWithinActivityInstance = shim;
export const getFirstHydratableChildWithinSuspenseInstance = shim;
export const hydrateInstance = shim;
export const hydrateTextInstance = shim;
export const hydrateActivityInstance = shim;
export const hydrateSuspenseInstance = shim;
export const getNextHydratableInstanceAfterActivityInstance = shim;
export const getNextHydratableInstanceAfterSuspenseInstance = shim;
export const commitHydratedContainer = shim;
export const commitHydratedActivityInstance = shim;
export const commitHydratedSuspenseInstance = shim;
export const clearActivityBoundary = shim;
export const clearSuspenseBoundary = shim;
export const clearActivityBoundaryFromContainer = shim;
export const clearSuspenseBoundaryFromContainer = shim;
export const shouldDeleteUnhydratedTailInstances = shim;
