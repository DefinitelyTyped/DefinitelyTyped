/**
 * These are types for things that are present in the React `canary` release channel.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react/canary"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react/canary'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react/canary" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react/src/React.js to see how the exports are declared,

import React = require(".");

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

type NativeToggleEvent = ToggleEvent;

declare module "." {
    // eslint-disable-next-line @typescript-eslint/ban-types
    export function cache<CachedFunction extends Function>(fn: CachedFunction): CachedFunction;

    export function unstable_useCacheRefresh(): () => void;

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES {
        cleanup: () => VoidOrUndefinedOnly;
    }

    interface DOMAttributes<T> {
        // Transition Events
        onTransitionCancel?: TransitionEventHandler<T> | undefined;
        onTransitionCancelCapture?: TransitionEventHandler<T> | undefined;
        onTransitionRun?: TransitionEventHandler<T> | undefined;
        onTransitionRunCapture?: TransitionEventHandler<T> | undefined;
        onTransitionStart?: TransitionEventHandler<T> | undefined;
        onTransitionStartCapture?: TransitionEventHandler<T> | undefined;
    }

    type ToggleEventHandler<T = Element> = EventHandler<ToggleEvent<T>>;

    interface HTMLAttributes<T> {
        popover?: "" | "auto" | "manual" | undefined;
        popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
        popoverTarget?: string | undefined;
        onToggle?: ToggleEventHandler<T> | undefined;
        onBeforeToggle?: ToggleEventHandler<T> | undefined;
    }

    interface ToggleEvent<T = Element> extends SyntheticEvent<T, NativeToggleEvent> {
        oldState: "closed" | "open";
        newState: "closed" | "open";
    }

    /**
     * @internal Use `Awaited<ReactNode>` instead
     */
    // Helper type to enable `Awaited<ReactNode>`.
    // Must be a copy of the non-thenables of `ReactNode`.
    type AwaitedReactNode =
        | ReactElement
        | string
        | number
        | Iterable<AwaitedReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined;
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {
        promises: Promise<AwaitedReactNode>;
        bigints: bigint;
    }
}
