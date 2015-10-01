// Type definitions for history v1.11.1
// Project: https://github.com/rackt/history
// Definitions by: Sergey Buturlakin <http://github.com/sergey-buturlakin>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare namespace HistoryModule {

    // types based on https://github.com/rackt/history/blob/master/docs/Terms.md

    type Action = string

    type BeforeUnloadHook = () => string

    type CreateHistory<T> = (options?: HistoryOptions) => T

    type CreateHistoryEnhancer<T, E> = (createHistory: CreateHistory<T>) => CreateHistory<T & E>

    interface History {
        listenBefore(hook: TransitionHook): Function
        listen(listener: LocationListener): Function
        transitionTo(location: Location): void
        pushState(state: LocationState, path: Path): void
        replaceState(state: LocationState, path: Path): void
        setState(state: LocationState): void
        go(n: number): void
        goBack(): void
        goForward(): void
        createKey(): LocationKey
        createPath(path: Path): Path
        createHref(path: Path): Href
    }

    type HistoryOptions = Object

    type Href = string

    type Location = {
        pathname: Pathname
        search: QueryString
        query: Query
        state: LocationState
        action: Action
        key: LocationKey
    }

    type LocationKey = string

    type LocationListener = (location: Location) => void

    type LocationState = Object

    type Path = string // Pathname + QueryString

    type Pathname = string

    type Query = Object

    type QueryString = string

    type TransitionHook = (location: Location, callback: Function) => any


    interface HistoryBeforeUnload {
        listenBeforeUnload(hook: () => string | boolean): Function
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
        createLocation(): Location
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

    export default function createLocation(): HistoryModule.Location

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
