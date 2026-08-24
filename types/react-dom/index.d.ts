// NOTE: Users of the `experimental` builds of React should add a reference
// to 'react-dom/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

export as namespace ReactDOM;

import { Key, ReactNode, ReactPortal } from "react";

export {};

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface CacheSignal extends AbortSignal {}

    interface RendererUsable<T> {
        "react-dom/browser": BrowserUsable;
    }

    interface ViewTransitionPseudoElement extends Animatable {
        getComputedStyle: () => CSSStyleDeclaration;
    }

    interface ViewTransitionInstance {
        group: ViewTransitionPseudoElement;
        imagePair: ViewTransitionPseudoElement;
        old: ViewTransitionPseudoElement;
        new: ViewTransitionPseudoElement;
    }

    interface FragmentInstance {
        blur: () => void;
        focus: (focusOptions?: FocusOptions | undefined) => void;
        focusLast: (focusOptions?: FocusOptions | undefined) => void;
        observeUsing(observer: IntersectionObserver | ResizeObserver): void;
        unobserveUsing(observer: IntersectionObserver | ResizeObserver): void;
        getClientRects(): Array<DOMRect>;
        getRootNode(getRootNodeOptions?: GetRootNodeOptions | undefined): Document | ShadowRoot | FragmentInstance;
        addEventListener(
            type: string,
            listener: EventListener,
            optionsOrUseCapture?: Parameters<Element["addEventListener"]>[2],
        ): void;
        removeEventListener(
            type: string,
            listener: EventListener,
            optionsOrUseCapture?: Parameters<Element["removeEventListener"]>[2],
        ): void;
        dispatchEvent(event: Event): boolean;
        scrollIntoView(alignToTop?: boolean): void;
    }
}

export function createPortal(
    children: ReactNode,
    container: Element | DocumentFragment,
    key?: Key | null,
): ReactPortal;

export const version: string;

export function flushSync<R>(fn: () => R): R;

export function unstable_batchedUpdates<A, R>(callback: (a: A) => R, a: A): R;
export function unstable_batchedUpdates<R>(callback: () => R): R;

export interface FormStatusNotPending {
    pending: false;
    data: null;
    method: null;
    action: null;
}

export interface FormStatusPending {
    pending: true;
    data: FormData;
    method: string;
    action: string | ((formData: FormData) => void | Promise<void>);
}

export type FormStatus = FormStatusPending | FormStatusNotPending;

export function useFormStatus(): FormStatus;

export function useFormState<State>(
    action: (state: Awaited<State>) => State | Promise<State>,
    initialState: Awaited<State>,
    permalink?: string,
): [state: Awaited<State>, dispatch: () => void, isPending: boolean];
export function useFormState<State, Payload>(
    action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
    initialState: Awaited<State>,
    permalink?: string,
): [state: Awaited<State>, dispatch: (payload: Payload) => void, isPending: boolean];

export function prefetchDNS(href: string): void;

export interface PreconnectOptions {
    // Don't create a helper type.
    // It would have to be in module scope to be inlined in TS tooltips.
    // But then it becomes part of the public API.
    // TODO: Upstream to microsoft/TypeScript-DOM-lib-generator -> w3c/webref
    // since the spec has a notion of a dedicated type: https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
}
export function preconnect(href: string, options?: PreconnectOptions): void;

export type PreloadAs =
    | "audio"
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "track"
    | "script"
    | "style"
    | "video"
    | "worker";
export interface PreloadOptions {
    as: PreloadAs;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    fetchPriority?: "high" | "low" | "auto" | undefined;
    // TODO: These should only be allowed with `as: 'image'` but it's not trivial to write tests against the full TS support matrix.
    imageSizes?: string | undefined;
    imageSrcSet?: string | undefined;
    integrity?: string | undefined;
    type?: string | undefined;
    nonce?: string | undefined;
    referrerPolicy?: ReferrerPolicy | undefined;
    media?: string | undefined;
}
export function preload(href: string, options?: PreloadOptions): void;

// https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload
export type PreloadModuleAs = RequestDestination;
export interface PreloadModuleOptions {
    /**
     * @default "script"
     */
    as: PreloadModuleAs;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    integrity?: string | undefined;
    nonce?: string | undefined;
}
export function preloadModule(href: string, options?: PreloadModuleOptions): void;

export type PreinitAs = "script" | "style";
export interface PreinitOptions {
    as: PreinitAs;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    fetchPriority?: "high" | "low" | "auto" | undefined;
    precedence?: string | undefined;
    integrity?: string | undefined;
    nonce?: string | undefined;
}
export function preinit(href: string, options?: PreinitOptions): void;

// Will be expanded to include all of https://github.com/tc39/proposal-import-attributes
export type PreinitModuleAs = "script";
export interface PreinitModuleOptions {
    /**
     * @default "script"
     */
    as?: PreinitModuleAs;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    integrity?: string | undefined;
    nonce?: string | undefined;
}
export function preinitModule(href: string, options?: PreinitModuleOptions): void;

export function requestFormReset(form: HTMLFormElement): void;

declare const browserUsable: unique symbol;

export interface BrowserUsable {
    readonly [browserUsable]: never;
}

/**
 * Creates an opaque Usable that opts a subtree into browser-only rendering.
 * `reason` is diagnostic metadata: an SSR renderer uses it as the `cause` of
 * the recoverable error it reports when deferring the subtree to the browser.
 * A function is called lazily by that renderer; in the browser the reason is
 * never observed.
 *
 * @version 19.3.0
 */
export function browser(reason?: string | (() => unknown)): BrowserUsable;
