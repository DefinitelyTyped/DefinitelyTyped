// Type definitions for react-reconciler 0.15
// Project: https://reactjs.org/
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from 'react';

declare function ReactReconciler<Type, Props, Container, Instance, TextInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, ChildSet, TimeoutHandle, NoTimeout>(
    // tslint:disable-next-line:no-unnecessary-generics
    config: ReactReconciler.HostConfig<Type, Props, Container, Instance, TextInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, ChildSet, TimeoutHandle, NoTimeout>,
): ReactReconciler.Reconciler<Instance, TextInstance, Container, PublicInstance>;

declare namespace ReactReconciler {
    // react-ronciler/ReactFiber

    // A Fiber is work on a Component that needs to be done or was done. There can
    // be more than one per component.
    interface Fiber {
        // These first fields are conceptually members of an Instance. This used to
        // be split into a separate type and intersected with the other Fiber fields,
        // but until Flow fixes its intersection bugs, we've merged them into a
        // single type.

        // An Instance is shared between all versions of a component. We can easily
        // break this out into a separate object to avoid copying so much to the
        // alternate versions of the tree. We put this on a single object for now to
        // minimize the number of objects created during the initial render.

        // Tag identifying the type of fiber.
        tag: WorkTag;

        // Unique identifier of this child.
        key: null | string;

        // The function/class/module associated with this fiber.
        type: any;

        // The local state associated with this fiber.
        stateNode: any;

        // Conceptual aliases
        // parent : Instance -> return The parent happens to be the same as the
        // return fiber since we've merged the fiber and instance.

        // Remaining fields belong to Fiber

        // The Fiber to return to after finishing processing this one.
        // This is effectively the parent, but there can be multiple parents (two)
        // so this is only the parent of the thing we're currently processing.
        // It is conceptually the same as the return address of a stack frame.
        return: Fiber | null;

        // Singly Linked List Tree Structure.
        child: Fiber | null;
        sibling: Fiber | null;
        index: number;

        // The ref last used to attach this node.
        // I'll avoid adding an owner field for prod and model that as functions.
        ref: null | (((handle: any) => void) & { _stringRef: string | null | undefined }) | RefObject;

        // Input is the data coming into process this fiber. Arguments. Props.
        pendingProps: any; // This type will be more specific once we overload the tag.
        memoizedProps: any; // The props used to create the output.

        // A queue of state updates and callbacks.
        updateQueue: UpdateQueue<any> | null;

        // The state used to create the output
        memoizedState: any;

        // A linked-list of contexts that this fiber depends on
        firstContextDependency: ContextDependency<any> | null;

        // Bitfield that describes properties about the fiber and its subtree. E.g.
        // the AsyncMode flag indicates whether the subtree should be async-by-
        // default. When a fiber is created, it inherits the mode of its
        // parent. Additional flags can be set at creation time, but after that the
        // value should remain unchanged throughout the fiber's lifetime, particularly
        // before its child fibers are created.
        mode: TypeOfMode;

        // Effect
        effectTag: SideEffectTag;

        // Singly linked list fast path to the next fiber with side-effects.
        nextEffect: Fiber | null;

        // The first and last fiber with side-effect within this subtree. This allows
        // us to reuse a slice of the linked list when we reuse the work done within
        // this fiber.
        firstEffect: Fiber | null;
        lastEffect: Fiber | null;

        // Represents a time in the future by which this work should be completed.
        // Does not include work found in its subtree.
        expirationTime: ExpirationTime;

        // This is used to quickly determine if a subtree has no pending changes.
        childExpirationTime: ExpirationTime;

        // This is a pooled version of a Fiber. Every fiber that gets updated will
        // eventually have a pair. There are cases when we can clean up pairs to save
        // memory if we need to.
        alternate: Fiber | null;

        // Time spent rendering this Fiber and its descendants for the current update.
        // This tells us how well the tree makes use of sCU for memoization.
        // It is reset to 0 each time we render and only updated when we don't bailout.
        // This field is only set when the enableProfilerTimer flag is enabled.
        actualDuration?: number;

        // If the Fiber is currently active in the "render" phase,
        // This marks the time at which the work began.
        // This field is only set when the enableProfilerTimer flag is enabled.
        actualStartTime?: number;

        // Duration of the most recent render time for this Fiber.
        // This value is not updated when we bailout for memoization purposes.
        // This field is only set when the enableProfilerTimer flag is enabled.
        selfBaseDuration?: number;

        // Sum of base times for all descedents of this Fiber.
        // This value bubbles up during the "complete" phase.
        // This field is only set when the enableProfilerTimer flag is enabled.
        treeBaseDuration?: number;

        // Conceptual aliases
        // workInProgress : Fiber ->  alternate The alternate used for reuse happens
        // to be the same as work in progress.
        // __DEV__ only
        _debugID?: number;
        _debugSource?: Source | null;
        _debugOwner?: Fiber | null;
        _debugIsCurrentlyTiming?: boolean;
    }

    // react-reconciler/ReactFiberExpirationTime

    type ExpirationTime = number;

    // react-reconciler/ReactFiberNewContext

    interface ContextDependency<T> {
        context: ReactContext<T>;
        observedBits: number;
        next: ContextDependency<any> | null;
    }

    // react-reconciler/ReactFiberReconciler

    type OpaqueHandle = Fiber;
    type OpaqueRoot = FiberRoot;

    interface HostConfig<Type, Props, Container, Instance, TextInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, ChildSet, TimeoutHandle, NoTimeout> {
        getPublicInstance(instance: Instance | TextInstance): PublicInstance;
        getRootHostContext(rootContainerInstance: Container): HostContext;
        getChildHostContext(parentHostContext: HostContext, type: Type, rootContainerInstance: Container): HostContext;

        prepareForCommit(containerInfo: Container): void;
        resetAfterCommit(containerInfo: Container): void;

        createInstance(
            type: Type,
            props: Props,
            rootContainerInstance: Container,
            hostContext: HostContext,
            internalInstanceHandle: OpaqueHandle,
        ): Instance;
        appendInitialChild(parentInstance: Instance, child: Instance | TextInstance): void;
        finalizeInitialChildren(
            parentInstance: Instance,
            type: Type,
            props: Props,
            rootContainerInstance: Container,
            hostContext: HostContext,
        ): boolean;

        prepareUpdate(
            instance: Instance,
            type: Type,
            oldProps: Props,
            newProps: Props,
            rootContainerInstance: Container,
            hostContext: HostContext,
        ): null | UpdatePayload;

        shouldSetTextContent(type: Type, props: Props): boolean;
        shouldDeprioritizeSubtree(type: Type, props: Props): boolean;

        createTextInstance(
            text: string,
            rootContainerInstance: Container,
            hostContext: HostContext,
            internalInstanceHandle: OpaqueHandle,
        ): TextInstance;

        scheduleDeferredCallback(
            callback: (deadline: Deadline) => void,
            options?: { timeout: number },
        ): any;
        cancelDeferredCallback(callbackID: any): void;

        setTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandle | NoTimeout;
        clearTimeout(handle: TimeoutHandle | NoTimeout): void;
        noTimeout: NoTimeout;

        now(): number;

        // Temporary workaround for scenario where multiple renderers concurrently
        // render using the same context objects. E.g. React DOM and React ART on the
        // same page. DOM is the primary renderer; ART is the secondary renderer.
        isPrimaryRenderer: boolean;

        supportsMutation: boolean;
        supportsPersistence: boolean;
        supportsHydration: boolean;

        // -------------------
        //      Mutation
        //     (optional)
        // -------------------
        appendChild?(parentInstance: Instance, child: Instance | TextInstance): void;
        appendChildToContainer?(container: Container, child: Instance | TextInstance): void;
        commitTextUpdate?(textInstance: TextInstance, oldText: string, newText: string): void;
        commitMount?(
            instance: Instance,
            type: Type,
            newProps: Props,
            internalInstanceHandle: OpaqueHandle,
        ): void;
        commitUpdate?(
            instance: Instance,
            updatePayload: UpdatePayload,
            type: Type,
            oldProps: Props,
            newProps: Props,
            internalInstanceHandle: OpaqueHandle,
        ): void;
        insertBefore?(parentInstance: Instance, child: Instance | TextInstance, beforeChild: Instance | TextInstance): void;
        insertInContainerBefore?(
            container: Container,
            child: Instance | TextInstance,
            beforeChild: Instance | TextInstance,
        ): void;
        removeChild?(parentInstance: Instance, child: Instance | TextInstance): void;
        removeChildFromContainer?(container: Container, child: Instance | TextInstance): void;
        resetTextContent?(instance: Instance): void;

        // -------------------
        //     Persistence
        //     (optional)
        // -------------------
        cloneInstance?(
            instance: Instance,
            updatePayload: null | UpdatePayload,
            type: Type,
            oldProps: Props,
            newProps: Props,
            internalInstanceHandle: OpaqueHandle,
            keepChildren: boolean,
            recyclableInstance: Instance,
        ): Instance;

        createContainerChildSet?(container: Container): ChildSet;

        appendChildToContainerChildSet?(childSet: ChildSet, child: Instance | TextInstance): void;
        finalizeContainerChildren?(container: Container, newChildren: ChildSet): void;

        replaceContainerChildren?(container: Container, newChildren: ChildSet): void;

        // -------------------
        //     Hydration
        //     (optional)
        // -------------------
        canHydrateInstance?(instance: HydratableInstance, type: Type, props: Props): null | Instance;
        canHydrateTextInstance?(instance: HydratableInstance, text: string): null | TextInstance;
        getNextHydratableSibling?(instance: Instance | TextInstance | HydratableInstance): null | HydratableInstance;
        getFirstHydratableChild?(parentInstance: Instance | Container): null | HydratableInstance;
        hydrateInstance?(
            instance: Instance,
            type: Type,
            props: Props,
            rootContainerInstance: Container,
            hostContext: HostContext,
            internalInstanceHandle: OpaqueHandle,
        ): null | UpdatePayload;
        hydrateTextInstance?(
            textInstance: TextInstance,
            text: string,
            internalInstanceHandle: OpaqueHandle,
        ): boolean;
        didNotMatchHydratedContainerTextInstance?(
            parentContainer: Container,
            textInstance: TextInstance,
            text: string,
        ): void;
        didNotMatchHydratedTextInstance?(
            parentType: Type,
            parentProps: Props,
            parentInstance: Instance,
            textInstance: TextInstance,
            text: string,
        ): void;
        didNotHydrateContainerInstance?(parentContainer: Container, instance: Instance | TextInstance): void;
        didNotHydrateInstance?(
            parentType: Type,
            parentProps: Props,
            parentInstance: Instance,
            instance: Instance | TextInstance,
        ): void;
        didNotFindHydratableContainerInstance?(
            parentContainer: Container,
            type: Type,
            props: Props,
        ): void;
        didNotFindHydratableContainerTextInstance?(
            parentContainer: Container,
            text: string,
        ): void;
        didNotFindHydratableInstance?(
            parentType: Type,
            parentProps: Props,
            parentInstance: Instance,
            type: Type,
            props: Props,
        ): void;
        didNotFindHydratableTextInstance?(
            parentType: Type,
            parentProps: Props,
            parentInstance: Instance,
            text: string,
        ): void;
    }

    // 0 is PROD, 1 is DEV.
    // Might add PROFILE later.
    type BundleType = 0 | 1;

    interface DevToolsConfig<Instance, TextInstance> {
        bundleType: BundleType;
        version: string;
        rendererPackageName: string;
        // Note: this actually *does* depend on Fiber internal fields.
        // Used by "inspect clicked DOM element" in React DevTools.
        findFiberByHostInstance?: (instance: Instance | TextInstance) => Fiber;
        // Used by RN in-app inspector.
        // This API is unfortunately RN-specific.
        // TODO: Change it to accept Fiber instead and type it properly.
        getInspectorDataForViewTag?: (tag: number) => object;
    }

    interface Reconciler<Instance, TextInstance, Container, PublicInstance> {
        updateContainerAtExpirationTime(
            element: ReactNodeList,
            container: OpaqueRoot,
            parentComponent: Component<any, any> | null | undefined,
            expirationTime: ExpirationTime,
            callback: () => void | null | undefined,
        ): ExpirationTime;
        createContainer(
            containerInfo: Container,
            isAsync: boolean,
            hydrate: boolean,
        ): OpaqueRoot;
        updateContainer(
            element: ReactNodeList,
            container: OpaqueRoot,
            parentComponent: Component<any, any> | null | undefined,
            callback: () => void | null | undefined,
        ): ExpirationTime;
        flushRoot(root: OpaqueRoot, expirationTime: ExpirationTime): void;
        requestWork(root: OpaqueRoot, expirationTime: ExpirationTime): void;
        computeUniqueAsyncExpiration(): ExpirationTime;
        batchedUpdates<A>(fn: () => A): A;
        unbatchedUpdates<A>(fn: () => A): A;
        deferredUpdates<A>(fn: () => A): A;
        syncUpdates<A>(fn: () => A): A;
        interactiveUpdates<A>(fn: () => A): A;
        flushInteractiveUpdates(): void;
        flushControlled(fn: () => any): void;
        flushSync<A>(fn: () => A): A;

        // Used to extract the return value from the initial render. Legacy API.
        getPublicRootInstance(
            container: OpaqueRoot,
        ): Component<any, any> | PublicInstance | null;

        // Use for findDOMNode/findHostNode. Legacy API.
        findHostInstance(component: object): PublicInstance | null;

        // Used internally for filtering out portals. Legacy API.
        findHostInstanceWithNoPortals(component: Fiber): PublicInstance | null;
        injectIntoDevTools(devToolsConfig: DevToolsConfig<Instance, TextInstance>): boolean;
    }

    // react-reconciler/ReactFiberRoot

    // TODO: This should be lifted into the renderer.
    interface Batch {
        _defer: boolean;
        _expirationTime: ExpirationTime;
        _onComplete: () => any;
        _next: Batch | null;
    }

    type PendingInteractionMap = Map<ExpirationTime, Set<Interaction>>;

    interface BaseFiberRootProperties {
        // Any additional information from the host associated with this root.
        containerInfo: any;
        // Used only by persistent updates.
        pendingChildren: any;
        // The currently active root fiber. This is the mutable root of the tree.
        current: Fiber;

        // The following priority levels are used to distinguish between 1)
        // uncommitted work, 2) uncommitted work that is suspended, and 3) uncommitted
        // work that may be unsuspended. We choose not to track each individual
        // pending level, trading granularity for performance.
        //
        // The earliest and latest priority levels that are suspended from committing.
        earliestSuspendedTime: ExpirationTime;
        latestSuspendedTime: ExpirationTime;
        // The earliest and latest priority levels that are not known to be suspended.
        earliestPendingTime: ExpirationTime;
        latestPendingTime: ExpirationTime;
        // The latest priority level that was pinged by a resolved promise and can
        // be retried.
        latestPingedTime: ExpirationTime;

        // If an error is thrown, and there are no more updates in the queue, we try
        // rendering from the root one more time, synchronously, before handling
        // the error.
        didError: boolean;

        pendingCommitExpirationTime: ExpirationTime;
        // A finished work-in-progress HostRoot that's ready to be committed.
        finishedWork: Fiber | null;
        // Timeout handle returned by setTimeout. Used to cancel a pending timeout, if
        // it's superseded by a new one.
        timeoutHandle: any;
        // Top context object, used by renderSubtreeIntoContainer
        context: object | null;
        pendingContext: object | null;
        // Determines if we should attempt to hydrate on the initial mount
        readonly hydrate: boolean;
        // Remaining expiration time on this root.
        // TODO: Lift this into the renderer
        nextExpirationTimeToWorkOn: ExpirationTime;
        expirationTime: ExpirationTime;
        // List of top-level batches. This list indicates whether a commit should be
        // deferred. Also contains completion callbacks.
        // TODO: Lift this into the renderer
        firstBatch: Batch | null;
        // Linked-list of roots
        nextScheduledRoot: FiberRoot | null;
    }

    // The following attributes are only used by interaction tracking builds.
    // They enable interactions to be associated with their async work,
    // And expose interaction metadata to the React DevTools Profiler plugin.
    // Note that these attributes are only defined when the enableSchedulerTracking flag is enabled.
    interface ProfilingOnlyFiberRootProperties {
        interactionThreadID: number;
        memoizedInteractions: Set<Interaction>;
        pendingInteractionMap: PendingInteractionMap;
    }

    type FiberRoot = BaseFiberRootProperties & ProfilingOnlyFiberRootProperties;

    // react-reconciler/ReactFiberScheduler

    interface Deadline {
        timeRemaining: () => number;
        didTimeout: boolean;
    }

    // react-reconciler/ReactTypeOfMode

    type TypeOfMode = number;

    // react-reconciler/ReactUpdateQueue

    interface Update<State> {
        expirationTime: ExpirationTime;

        tag: 0 | 1 | 2 | 3;
        payload: any;
        callback: (() => any) | null;

        next: Update<State> | null;
        nextEffect: Update<State> | null;
    }

    interface UpdateQueue<State> {
        baseState: State;

        firstUpdate: Update<State> | null;
        lastUpdate: Update<State> | null;

        firstCapturedUpdate: Update<State> | null;
        lastCapturedUpdate: Update<State> | null;

        firstEffect: Update<State> | null;
        lastEffect: Update<State> | null;

        firstCapturedEffect: Update<State> | null;
        lastCapturedEffect: Update<State> | null;
    }

    // schedule/Tracking

    interface Interaction {
        __count: number;
        id: number;
        name: string;
        timestamp: number;
    }

    // shared/ReactElementType

    interface Source {
        fileName: string;
        lineNumber: number;
    }

    // shared/ReactSideEffectTags

    type SideEffectTag = number;

    // shared/ReactTypes

    type ReactEmpty = null | undefined | boolean;

    type ReactNodeList = ReactEmpty | ReactNode;

    interface ReactProviderType<T> {
        $$typeof: symbol | number;
        _context: ReactContext<T>;
    }

    interface ReactContext<T> {
        $$typeof: symbol | number;
        Consumer: ReactContext<T>;
        Provider: ReactProviderType<T>;
        unstable_read: () => T;

        _calculateChangedBits: ((a: T, b: T) => number) | null;

        _currentValue: T;
        _currentValue2: T;

        // DEV only
        _currentRenderer?: object | null;
        _currentRenderer2?: object | null;
    }

    interface RefObject {
        current: any;
    }

    // shared/ReactWorkTags

    type WorkTag =
        | 0
        | 1
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16;
}

export = ReactReconciler;
