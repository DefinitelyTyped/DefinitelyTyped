// Type definitions for history v2.0.0
// Project: https://github.com/rackt/history
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Nathan Brown <https://github.com/ngbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace HistoryModule {

    // types based on https://github.com/rackt/history/blob/master/docs/Terms.md

    type Action = string

    type BeforeUnloadHook = () => string | boolean

    type CreateHistory<T> = (options?: HistoryOptions) => T

    type CreateHistoryEnhancer<T, E> = (createHistory: CreateHistory<T>) => CreateHistory<T & E>

    interface History {
        listenBefore(hook: TransitionHook): () => void
        listen(listener: LocationListener): () => void
        transitionTo(location: Location): void
        push(path: LocationDescriptor): void
        replace(path: LocationDescriptor): void
        go(n: number): void
        goBack(): void
        goForward(): void
        createKey(): LocationKey
        createPath(path: LocationDescriptor): Path
        createHref(path: LocationDescriptor): Href
        createLocation(path?: LocationDescriptor, action?: Action, key?: LocationKey): Location
        getCurrentLocation: () => Location

        /** @deprecated use a location descriptor instead */
        createLocation(path?: Path, state?: LocationState, action?: Action, key?: LocationKey): Location
        /** @deprecated use location.key to save state instead */
        pushState(state: LocationState, path: Path): void
        /** @deprecated use location.key to save state instead */
        replaceState(state: LocationState, path: Path): void
        /** @deprecated use location.key to save state instead */
        setState(state: LocationState): void
        /** @deprecated use listenBefore instead */
        registerTransitionHook(hook: TransitionHook): void
        /** @deprecated use the callback returned from listenBefore instead */
        unregisterTransitionHook(hook: TransitionHook): void
    }

    type HistoryOptions = {
        getCurrentLocation?: () => Location
        finishTransition?: (nextLocation: Location) => boolean
        saveState?: (key: LocationKey, state: LocationState) => void
        go?: (n: number) => void
        getUserConfirmation?: (message: string, callback: (result: boolean) => void) => void
        keyLength?: number
        queryKey?: string | boolean
        stringifyQuery?: (obj: any) => string
        parseQueryString?: (str: string) => any
        basename?: string
        entries?: string | [any]
        current?: number
    }

    type Href = string

    type Location = {
        pathname: Pathname
        search: Search
        query: Query
        state: LocationState
        action: Action
        key: LocationKey
        hash: Hash
        basename?: string
    }

    type LocationDescriptorObject = {
        pathname?: Pathname
        search?: Search
        query?: Query
        state?: LocationState
    }

    type LocationDescriptor = LocationDescriptorObject | Path

    type LocationKey = string

    type LocationListener = (location: Location) => void

    type LocationState = Object

    type Path = string // Pathname + QueryString

    type Pathname = string

    type Query = { [key: string]: any; }

    type QueryString = string

    type Search = string

    type TransitionHook = (location: Location, callback: (result: any) => void) => any

    type Hash = string


    interface HistoryBeforeUnload {
        listenBeforeUnload(hook: BeforeUnloadHook): () => void
    }

    interface HistoryQueries {
        pushState(state: LocationState, pathname: Pathname | Path, query?: Query): void
        replaceState(state: LocationState, pathname: Pathname | Path, query?: Query): void
        createPath(path: Path, query?: Query): Path
        createHref(path: Path, query?: Query): Href
    }


    // Global usage, without modules, needs the small trick, because lib.d.ts
    // already has `history` and `History` global definitions:
    // var createHistory = ((window as any).History as HistoryModule.Module).createHistory;
    interface Module {
        createHistory: CreateHistory<History>
        createHashHistory: CreateHistory<History>
        createMemoryHistory: CreateHistory<History>
        createLocation(path?: Path, state?: LocationState, action?: Action, key?: LocationKey): Location
        useBasename<T>(createHistory: CreateHistory<T>): CreateHistory<T>
        useBeforeUnload<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryBeforeUnload>
        useQueries<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryQueries>
        actions: {
            PUSH: string
            REPLACE: string
            POP: string
        }
    }

}


declare module "history/lib/createBrowserHistory" {

    export default function createBrowserHistory(options?: HistoryModule.HistoryOptions): HistoryModule.History

}


declare module "history/lib/createHashHistory" {

    export default function createHashHistory(options?: HistoryModule.HistoryOptions): HistoryModule.History

}


declare module "history/lib/createMemoryHistory" {

    export default function createMemoryHistory(options?: HistoryModule.HistoryOptions): HistoryModule.History

}


declare module "history/lib/createLocation" {

    export default function createLocation(path?: HistoryModule.Path, state?: HistoryModule.LocationState, action?: HistoryModule.Action, key?: HistoryModule.LocationKey): HistoryModule.Location

}


declare module "history/lib/useBasename" {

    export default function useBasename<T>(createHistory: HistoryModule.CreateHistory<T>): HistoryModule.CreateHistory<T>

}


declare module "history/lib/useBeforeUnload" {

    export default function useBeforeUnload<T>(createHistory: HistoryModule.CreateHistory<T>): HistoryModule.CreateHistory<T & HistoryModule.HistoryBeforeUnload>

}


declare module "history/lib/useQueries" {

    export default function useQueries<T>(createHistory: HistoryModule.CreateHistory<T>): HistoryModule.CreateHistory<T & HistoryModule.HistoryQueries>

}


declare module "history/lib/actions" {

    export const PUSH: string

    export const REPLACE: string

    export const POP: string

    export default {
        PUSH,
        REPLACE,
        POP
    }

}

declare module "history/lib/DOMUtils" {
    export function addEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
    export function removeEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
    export function getHashPath(): string;
    export function replaceHashPath(path: string): void;
    export function getWindowPath(): string;
    export function go(n: number): void;
    export function getUserConfirmation(message: string, callback: (result: boolean) => void): void;
    export function supportsHistory(): boolean;
    export function supportsGoWithoutReloadUsingHash(): boolean;
}


declare module "history" {

    export { default as createHistory } from "history/lib/createBrowserHistory"

    export { default as createHashHistory } from "history/lib/createHashHistory"

    export { default as createMemoryHistory } from "history/lib/createMemoryHistory"

    export { default as createLocation } from "history/lib/createLocation"

    export { default as useBasename } from "history/lib/useBasename"

    export { default as useBeforeUnload } from "history/lib/useBeforeUnload"

    export { default as useQueries } from "history/lib/useQueries"

    import * as Actions from "history/lib/actions"

    export { Actions }

}
