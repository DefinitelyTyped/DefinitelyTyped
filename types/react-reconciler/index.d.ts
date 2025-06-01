import { Component, ReactNode } from "react";

/* eslint-disable @definitelytyped/no-unnecessary-generics */
declare function ReactReconciler<
    Type,
    Props,
    Container,
    Instance,
    TextInstance,
    SuspenseInstance,
    HydratableInstance,
    FormInstance,
    PublicInstance,
    HostContext,
    ChildSet,
    TimeoutHandle,
    NoTimeout,
    TransitionStatus,
>(
    /* eslint-enable @definitelytyped/no-unnecessary-generics */
    config: ReactReconciler.HostConfig<
        Type,
        Props,
        Container,
        Instance,
        TextInstance,
        SuspenseInstance,
        HydratableInstance,
        FormInstance,
        PublicInstance,
        HostContext,
        ChildSet,
        TimeoutHandle,
        NoTimeout,
        TransitionStatus
    >,
): ReactReconciler.Reconciler<Container, Instance, TextInstance, SuspenseInstance, FormInstance, PublicInstance>;

declare namespace ReactReconciler {
    interface HostConfig<
        Type,
        Props,
        Container,
        Instance,
        TextInstance,
        SuspenseInstance,
        HydratableInstance,
        FormInstance,
        PublicInstance,
        HostContext,
        ChildSet,
        TimeoutHandle,
        NoTimeout,
        TransitionStatus,
    > {
        // -------------------
        //        Modes
        // -------------------
        /**
         * The reconciler has two modes: mutation mode and persistent mode. You must specify one of them.
         *
         * If your target platform is similar to the DOM and has methods similar to `appendChild`, `removeChild`, and so on, you'll want to use the **mutation mode**. This is the same mode used by React DOM, React ART, and the classic React Native renderer.
         *
         * ```js
         * const HostConfig = {
         *   // ...
         *   supportsMutation: true,
         *   // ...
         * }
         * ```
         *
         * Depending on the mode, the reconciler will call different methods on your host config.
         *
         * If you're not sure which one you want, you likely need the mutation mode.
         */
        supportsMutation: boolean;

        /**
         * The reconciler has two modes: mutation mode and persistent mode. You must specify one of them.
         *
         * If your target platform has immutable trees, you'll want the **persistent mode** instead. In that mode, existing nodes are never mutated, and instead every change clones the parent tree and then replaces the whole parent tree at the root. This is the node used by the new React Native renderer, codenamed "Fabric".
         *
         * ```js
         * const HostConfig = {
         *   // ...
         *   supportsPersistence: true,
         *   // ...
         * }
         * ```
         *
         * Depending on the mode, the reconciler will call different methods on your host config.
         *
         * If you're not sure which one you want, you likely need the mutation mode.
         */
        supportsPersistence: boolean;

        // -------------------
        //    Core Methods
        // -------------------

        /**
         * This method should return a newly created node. For example, the DOM renderer would call `document.createElement(type)` here and then set the properties from `props`.
         *
         * You can use `rootContainer` to access the root container associated with that tree. For example, in the DOM renderer, this is useful to get the correct `document` reference that the root belongs to.
         *
         * The `hostContext` parameter lets you keep track of some information about your current place in the tree. To learn more about it, see `getChildHostContext` below.
         *
         * The `internalHandle` data structure is meant to be opaque. If you bend the rules and rely on its internal fields, be aware that it may change significantly between versions. You're taking on additional maintenance risk by reading from it, and giving up all guarantees if you write something to it.
         *
         * This method happens **in the render phase**. It can (and usually should) mutate the node it has just created before returning it, but it must not modify any other nodes. It must not register any event handlers on the parent tree. This is because an instance being created doesn't guarantee it would be placed in the tree — it could be left unused and later collected by GC. If you need to do something when an instance is definitely in the tree, look at `commitMount` instead.
         */
        createInstance(
            type: Type,
            props: Props,
            rootContainer: Container,
            hostContext: HostContext,
            internalHandle: OpaqueHandle,
        ): Instance;

        /**
         * Same as `createInstance`, but for text nodes. If your renderer doesn't support text nodes, you can throw here.
         */
        createTextInstance(
            text: string,
            rootContainer: Container,
            hostContext: HostContext,
            internalHandle: OpaqueHandle,
        ): TextInstance;

        /**
         * This method should mutate the `parentInstance` and add the child to its list of children. For example, in the DOM this would translate to a `parentInstance.appendChild(child)` call.
         *
         * This method happens **in the render phase**. It can mutate `parentInstance` and `child`, but it must not modify any other nodes. It's called while the tree is still being built up and not connected to the actual tree on the screen.
         */
        appendInitialChild(parentInstance: Instance, child: Instance | TextInstance): void;

        /**
         * In this method, you can perform some final mutations on the `instance`. Unlike with `createInstance`, by the time `finalizeInitialChildren` is called, all the initial children have already been added to the `instance`, but the instance itself has not yet been connected to the tree on the screen.
         *
         * This method happens **in the render phase**. It can mutate `instance`, but it must not modify any other nodes. It's called while the tree is still being built up and not connected to the actual tree on the screen.
         *
         * There is a second purpose to this method. It lets you specify whether there is some work that needs to happen when the node is connected to the tree on the screen. If you return `true`, the instance will receive a `commitMount` call later. See its documentation below.
         *
         * If you don't want to do anything here, you should return `false`.
         */
        finalizeInitialChildren(
            instance: Instance,
            type: Type,
            props: Props,
            rootContainer: Container,
            hostContext: HostContext,
        ): boolean;

        /**
         * Some target platforms support setting an instance's text content without manually creating a text node. For example, in the DOM, you can set `node.textContent` instead of creating a text node and appending it.
         *
         * If you return `true` from this method, React will assume that this node's children are text, and will not create nodes for them. It will instead rely on you to have filled that text during `createInstance`. This is a performance optimization. For example, the DOM renderer returns `true` only if `type` is a known text-only parent (like `'textarea'`) or if `props.children` has a `'string'` type. If you return `true`, you will need to implement `resetTextContent` too.
         *
         * If you don't want to do anything here, you should return `false`.
         *
         * This method happens **in the render phase**. Do not mutate the tree from it.
         */
        shouldSetTextContent(type: Type, props: Props): boolean;

        /**
         * This method lets you return the initial host context from the root of the tree. See `getChildHostContext` for the explanation of host context.
         *
         * If you don't intend to use host context, you can return `null`.
         *
         * This method happens **in the render phase**. Do not mutate the tree from it.
         */
        getRootHostContext(rootContainer: Container): HostContext | null;

        /**
         * Host context lets you track some information about where you are in the tree so that it's available inside `createInstance` as the `hostContext` parameter. For example, the DOM renderer uses it to track whether it's inside an HTML or an SVG tree, because `createInstance` implementation needs to be different for them.
         *
         * If the node of this `type` does not influence the context you want to pass down, you can return `parentHostContext`. Alternatively, you can return any custom object representing the information you want to pass down.
         *
         * If you don't want to do anything here, return `parentHostContext`.
         *
         * This method happens **in the render phase**. Do not mutate the tree from it.
         */
        getChildHostContext(parentHostContext: HostContext, type: Type, rootContainer: Container): HostContext;

        /**
         * Determines what object gets exposed as a ref. You'll likely want to return the `instance` itself. But in some cases it might make sense to only expose some part of it.
         *
         * If you don't want to do anything here, return `instance`.
         */
        getPublicInstance(instance: Instance | TextInstance): PublicInstance;

        /**
         * This method lets you store some information before React starts making changes to the tree on the screen. For example, the DOM renderer stores the current text selection so that it can later restore it. This method is mirrored by `resetAfterCommit`.
         *
         * Even if you don't want to do anything here, you need to return `null` from it.
         */
        prepareForCommit(containerInfo: Container): Record<string, any> | null;

        /**
         * This method is called right after React has performed the tree mutations. You can use it to restore something you've stored in `prepareForCommit` — for example, text selection.
         *
         * You can leave it empty.
         */
        resetAfterCommit(containerInfo: Container): void;

        /**
         * This method is called for a container that's used as a portal target. Usually you can leave it empty.
         */
        preparePortalMount(containerInfo: Container): void;

        /**
         * You can proxy this to `setTimeout` or its equivalent in your environment.
         */
        scheduleTimeout(fn: (...args: unknown[]) => unknown, delay?: number): TimeoutHandle;

        /**
         * You can proxy this to `clearTimeout` or its equivalent in your environment.
         */
        cancelTimeout(id: TimeoutHandle): void;

        /**
         * This is a property (not a function) that should be set to something that can never be a valid timeout ID. For example, you can set it to `-1`.
         */
        noTimeout: NoTimeout;

        /**
         * Set this to true to indicate that your renderer supports `scheduleMicrotask`. We use microtasks as part of our discrete event implementation in React DOM. If you're not sure if your renderer should support this, you probably should. The option to not implement `scheduleMicrotask` exists so that platforms with more control over user events, like React Native, can choose to use a different mechanism.
         */
        supportsMicrotasks?: boolean;

        /**
         * Optional. You can proxy this to `queueMicrotask` or its equivalent in your environment.
         */
        scheduleMicrotask?(fn: () => unknown): void;

        /**
         * This is a property (not a function) that should be set to `true` if your renderer is the main one on the page. For example, if you're writing a renderer for the Terminal, it makes sense to set it to `true`, but if your renderer is used *on top of* React DOM or some other existing renderer, set it to `false`.
         */
        isPrimaryRenderer: boolean;

        /**
         * Whether the renderer shouldn't trigger missing `act()` warnings
         */
        warnsIfNotActing?: boolean;

        getInstanceFromNode(node: any): Fiber | null | undefined;

        beforeActiveInstanceBlur(): void;

        afterActiveInstanceBlur(): void;

        prepareScopeUpdate(scopeInstance: any, instance: any): void;

        getInstanceFromScope(scopeInstance: any): null | Instance;

        detachDeletedInstance(node: Instance): void;

        // -------------------
        //  Mutation Methods
        //    (optional)
        //  If you're using React in mutation mode (you probably do), you'll need to implement a few more methods.
        // -------------------

        /**
         * This method should mutate the `parentInstance` and add the child to its list of children. For example, in the DOM this would translate to a `parentInstance.appendChild(child)` call.
         *
         * Although this method currently runs in the commit phase, you still should not mutate any other nodes in it. If you need to do some additional work when a node is definitely connected to the visible tree, look at `commitMount`.
         */
        appendChild?(parentInstance: Instance, child: Instance | TextInstance): void;

        /**
         * Same as `appendChild`, but for when a node is attached to the root container. This is useful if attaching to the root has a slightly different implementation, or if the root container nodes are of a different type than the rest of the tree.
         */
        appendChildToContainer?(container: Container, child: Instance | TextInstance): void;

        /**
         * This method should mutate the `parentInstance` and place the `child` before `beforeChild` in the list of its children. For example, in the DOM this would translate to a `parentInstance.insertBefore(child, beforeChild)` call.
         *
         * Note that React uses this method both for insertions and for reordering nodes. Similar to DOM, it is expected that you can call `insertBefore` to reposition an existing child. Do not mutate any other parts of the tree from it.
         */
        insertBefore?(
            parentInstance: Instance,
            child: Instance | TextInstance,
            beforeChild: Instance | TextInstance | SuspenseInstance,
        ): void;

        /**
         * Same as `insertBefore`, but for when a node is attached to the root container. This is useful if attaching to the root has a slightly different implementation, or if the root container nodes are of a different type than the rest of the tree.
         */
        insertInContainerBefore?(
            container: Container,
            child: Instance | TextInstance,
            beforeChild: Instance | TextInstance | SuspenseInstance,
        ): void;

        /**
         * This method should mutate the `parentInstance` to remove the `child` from the list of its children.
         *
         * React will only call it for the top-level node that is being removed. It is expected that garbage collection would take care of the whole subtree. You are not expected to traverse the child tree in it.
         */
        removeChild?(parentInstance: Instance, child: Instance | TextInstance | SuspenseInstance): void;

        /**
         * Same as `removeChild`, but for when a node is detached from the root container. This is useful if attaching to the root has a slightly different implementation, or if the root container nodes are of a different type than the rest of the tree.
         */
        removeChildFromContainer?(container: Container, child: Instance | TextInstance | SuspenseInstance): void;

        /**
         * If you returned `true` from `shouldSetTextContent` for the previous props, but returned `false` from `shouldSetTextContent` for the next props, React will call this method so that you can clear the text content you were managing manually. For example, in the DOM you could set `node.textContent = ''`.
         *
         * If you never return `true` from `shouldSetTextContent`, you can leave it empty.
         */
        resetTextContent?(instance: Instance): void;

        /**
         * This method should mutate the `textInstance` and update its text content to `nextText`.
         *
         * Here, `textInstance` is a node created by `createTextInstance`.
         */
        commitTextUpdate?(textInstance: TextInstance, oldText: string, newText: string): void;

        /**
         * This method is only called if you returned `true` from `finalizeInitialChildren` for this instance.
         *
         * It lets you do some additional work after the node is actually attached to the tree on the screen for the first time. For example, the DOM renderer uses it to trigger focus on nodes with the `autoFocus` attribute.
         *
         * Note that `commitMount` does not mirror `removeChild` one to one because `removeChild` is only called for the top-level removed node. This is why ideally `commitMount` should not mutate any nodes other than the `instance` itself. For example, if it registers some events on some node above, it will be your responsibility to traverse the tree in `removeChild` and clean them up, which is not ideal.
         *
         * The `internalHandle` data structure is meant to be opaque. If you bend the rules and rely on its internal fields, be aware that it may change significantly between versions. You're taking on additional maintenance risk by reading from it, and giving up all guarantees if you write something to it.
         *
         * If you never return `true` from `finalizeInitialChildren`, you can leave it empty.
         */
        commitMount?(instance: Instance, type: Type, props: Props, internalInstanceHandle: OpaqueHandle): void;

        /**
         * This method should mutate the instance to match nextProps.
         *
         * The internalHandle data structure is meant to be opaque. If you bend the rules and rely on its internal fields, be aware that it may change significantly between versions. You're taking on additional maintenance risk by reading from it, and giving up all guarantees if you write something to it.
         */
        commitUpdate?(
            instance: Instance,
            type: Type,
            prevProps: Props,
            nextProps: Props,
            internalHandle: OpaqueHandle,
        ): void;

        /**
         * This method should make the `instance` invisible without removing it from the tree. For example, it can apply visual styling to hide it. It is used by Suspense to hide the tree while the fallback is visible.
         */
        hideInstance?(instance: Instance): void;

        /**
         * Same as `hideInstance`, but for nodes created by `createTextInstance`.
         */
        hideTextInstance?(textInstance: TextInstance): void;

        /**
         * This method should make the `instance` visible, undoing what `hideInstance` did.
         */
        unhideInstance?(instance: Instance, props: Props): void;

        /**
         * Same as `unhideInstance`, but for nodes created by `createTextInstance`.
         */
        unhideTextInstance?(textInstance: TextInstance, text: string): void;

        /**
         * This method should mutate the `container` root node and remove all children from it.
         */
        clearContainer?(container: Container): void;

        // -------------------
        // Persistence Methods
        //    (optional)
        //  If you use the persistent mode instead of the mutation mode, you would still need the "Core Methods". However, instead of the Mutation Methods above you will implement a different set of methods that performs cloning nodes and replacing them at the root level. You can find a list of them in the "Persistence" section [listed in this file](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/forks/ReactFiberHostConfig.custom.js). File an issue if you need help.
        // -------------------
        cloneInstance?(
            instance: Instance,
            type: Type,
            oldProps: Props,
            newProps: Props,
            internalInstanceHandle: OpaqueHandle,
            keepChildren: boolean,
            recyclableInstance: null | Instance,
        ): Instance;
        createContainerChildSet?(container: Container): ChildSet;
        appendChildToContainerChildSet?(childSet: ChildSet, child: Instance | TextInstance): void;
        finalizeContainerChildren?(container: Container, newChildren: ChildSet): void;
        replaceContainerChildren?(container: Container, newChildren: ChildSet): void;
        cloneHiddenInstance?(
            instance: Instance,
            type: Type,
            props: Props,
            internalInstanceHandle: OpaqueHandle,
        ): Instance;
        cloneHiddenTextInstance?(instance: Instance, text: Type, internalInstanceHandle: OpaqueHandle): TextInstance;

        // -------------------
        // Hydration Methods
        //    (optional)
        // You can optionally implement hydration to "attach" to the existing tree during the initial render instead of creating it from scratch. For example, the DOM renderer uses this to attach to an HTML markup.
        //
        // To support hydration, you need to declare `supportsHydration: true` and then implement the methods in the "Hydration" section [listed in this file](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/forks/ReactFiberHostConfig.custom.js). File an issue if you need help.
        // -------------------
        supportsHydration: boolean;

        canHydrateInstance?(instance: HydratableInstance, type: Type, props: Props): null | Instance;

        canHydrateTextInstance?(instance: HydratableInstance, text: string): null | TextInstance;

        canHydrateSuspenseInstance?(instance: HydratableInstance): null | SuspenseInstance;

        isSuspenseInstancePending?(instance: SuspenseInstance): boolean;

        isSuspenseInstanceFallback?(instance: SuspenseInstance): boolean;

        registerSuspenseInstanceRetry?(instance: SuspenseInstance, callback: () => void): void;

        getNextHydratableSibling?(instance: HydratableInstance): null | HydratableInstance;

        getFirstHydratableChild?(parentInstance: Container | Instance): null | HydratableInstance;

        hydrateInstance?(
            instance: Instance,
            type: Type,
            props: Props,
            rootContainerInstance: Container,
            hostContext: HostContext,
            internalInstanceHandle: any,
        ): null | any[];

        hydrateTextInstance?(textInstance: TextInstance, text: string, internalInstanceHandle: any): boolean;

        hydrateSuspenseInstance?(suspenseInstance: SuspenseInstance, internalInstanceHandle: any): void;

        getNextHydratableInstanceAfterSuspenseInstance?(suspenseInstance: SuspenseInstance): null | HydratableInstance;

        // Returns the SuspenseInstance if this node is a direct child of a
        // SuspenseInstance. I.e. if its previous sibling is a Comment with
        // SUSPENSE_x_START_DATA. Otherwise, null.
        getParentSuspenseInstance?(targetInstance: any): null | SuspenseInstance;

        commitHydratedContainer?(container: Container): void;

        commitHydratedSuspenseInstance?(suspenseInstance: SuspenseInstance): void;

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

        didNotHydrateContainerInstance?(parentContainer: Container, instance: HydratableInstance): void;

        didNotHydrateInstance?(
            parentType: Type,
            parentProps: Props,
            parentInstance: Instance,
            instance: HydratableInstance,
        ): void;

        didNotFindHydratableContainerInstance?(parentContainer: Container, type: Type, props: Props): void;

        didNotFindHydratableContainerTextInstance?(parentContainer: Container, text: string): void;

        didNotFindHydratableContainerSuspenseInstance?(parentContainer: Container): void;

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

        didNotFindHydratableSuspenseInstance?(parentType: Type, parentProps: Props, parentInstance: Instance): void;

        errorHydratingContainer?(parentContainer: Container): void;

        // Undocumented
        // https://github.com/facebook/react/pull/26722
        NotPendingTransition: TransitionStatus | null;
        HostTransitionContext: ReactContext<TransitionStatus>;

        // https://github.com/facebook/react/pull/28751
        setCurrentUpdatePriority(newPriority: EventPriority): void;
        getCurrentUpdatePriority(): EventPriority;
        resolveUpdatePriority(): EventPriority;

        // https://github.com/facebook/react/pull/28804
        resetFormInstance(form: FormInstance): void;

        // https://github.com/facebook/react/pull/25105
        requestPostPaintCallback(callback: (time: number) => void): void;

        // https://github.com/facebook/react/pull/26025
        shouldAttemptEagerTransition(): boolean;

        // https://github.com/facebook/react/pull/31528
        trackSchedulerEvent(): void;

        // https://github.com/facebook/react/pull/31008
        resolveEventType(): null | string;
        resolveEventTimeStamp(): number;

        /**
         * This method is called during render to determine if the Host Component type and props require some kind of loading process to complete before committing an update.
         */
        maySuspendCommit(type: Type, props: Props): boolean;

        /**
         * This method may be called during render if the Host Component type and props might suspend a commit. It can be used to initiate any work that might shorten the duration of a suspended commit.
         */
        preloadInstance(type: Type, props: Props): boolean;

        /**
         * This method is called just before the commit phase. Use it to set up any necessary state while any Host Components that might suspend this commit are evaluated to determine if the commit must be suspended.
         */
        startSuspendingCommit(): void;

        /**
         * This method is called after `startSuspendingCommit` for each Host Component that indicated it might suspend a commit.
         */
        suspendInstance(type: Type, props: Props): void;

        /**
         * This method is called after all `suspendInstance` calls are complete.
         *
         * Return `null` if the commit can happen immediately.
         *
         * Return `(initiateCommit: Function) => Function` if the commit must be suspended. The argument to this callback will initiate the commit when called. The return value is a cancellation function that the Reconciler can use to abort the commit.
         */
        waitForCommitToBeReady():
            | ((initiateCommit: (...args: unknown[]) => unknown) => (...args: unknown[]) => unknown)
            | null;
    }

    interface Thenable<T> {
        then(resolve: () => T, reject?: () => T): T;
    }

    type RootTag = 0 | 1 | 2;

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
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22
        | 23
        | 24;

    type HookType =
        | "useState"
        | "useReducer"
        | "useContext"
        | "useRef"
        | "useEffect"
        | "useLayoutEffect"
        | "useCallback"
        | "useMemo"
        | "useImperativeHandle"
        | "useDebugValue"
        | "useDeferredValue"
        | "useTransition"
        | "useMutableSource"
        | "useOpaqueIdentifier"
        | "useCacheRefresh";

    interface Source {
        fileName: string;
        lineNumber: number;
    }

    // TODO: Ideally these types would be opaque but that doesn't work well with
    // our reconciler fork infra, since these leak into non-reconciler packages.
    type LanePriority = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

    type Lanes = number;
    type Lane = number;

    type Flags = number;

    type TypeOfMode = number;

    type EventPriority = number;

    interface ReactProvider<T> {
        $$typeof: symbol | number;
        type: ReactProviderType<T>;
        key: null | string;
        ref: null;
        props: {
            value: T;
            children?: ReactNode;
        };
    }

    interface ReactProviderType<T> {
        $$typeof: symbol | number;
        _context: ReactContext<T>;
    }

    interface ReactConsumer<T> {
        $$typeof: symbol | number;
        type: ReactContext<T>;
        key: null | string;
        ref: null;
        props: {
            children: (value: T) => ReactNode;
            unstable_observedBits?: number;
        };
    }

    interface ReactContext<T> {
        $$typeof: symbol | number;
        Consumer: ReactContext<T>;
        Provider: ReactProviderType<T>;
        _currentValue: T;
        _currentValue2: T;
        _threadCount: number;
        // DEV only
        _currentRenderer?: {
            [key: string]: any;
        } | null;
        _currentRenderer2?: {
            [key: string]: any;
        } | null;
        // This value may be added by application code
        // to improve DEV tooling display names
        displayName?: string;
    }

    interface ReactPortal {
        $$typeof: symbol | number;
        key: null | string;
        containerInfo: any;
        children: ReactNode;
        // TODO: figure out the API for cross-renderer implementation.
        implementation: any;
    }

    interface RefObject {
        current: any;
    }

    interface ContextDependency<T> {
        context: ReactContext<T>;
        observedBits: number;
        next: ContextDependency<unknown> | null;
    }

    interface Dependencies {
        lanes: Lanes;
        firstContext: ContextDependency<unknown> | null;
    }

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

        // The value of element.type which is used to preserve the identity during
        // reconciliation of this child.
        elementType: any;

        // The resolved function/class/ associated with this fiber.
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
        ref:
            | null
            | (((handle: unknown) => void) & {
                _stringRef?: string | null;
            })
            | RefObject;

        // Input is the data coming into process this fiber. Arguments. Props.
        pendingProps: any; // This type will be more specific once we overload the tag.
        memoizedProps: any; // The props used to create the output.

        // A queue of state updates and callbacks.
        updateQueue: unknown;

        // The state used to create the output
        memoizedState: any;

        // Dependencies (contexts, events) for this fiber, if it has any
        dependencies: Dependencies | null;

        // Bitfield that describes properties about the fiber and its subtree. E.g.
        // the ConcurrentMode flag indicates whether the subtree should be async-by-
        // default. When a fiber is created, it inherits the mode of its
        // parent. Additional flags can be set at creation time, but after that the
        // value should remain unchanged throughout the fiber's lifetime, particularly
        // before its child fibers are created.
        mode: TypeOfMode;

        // Effect
        flags: Flags;
        subtreeFlags: Flags;
        deletions: Fiber[] | null;

        // Singly linked list fast path to the next fiber with side-effects.
        nextEffect: Fiber | null;

        // The first and last fiber with side-effect within this subtree. This allows
        // us to reuse a slice of the linked list when we reuse the work done within
        // this fiber.
        firstEffect: Fiber | null;
        lastEffect: Fiber | null;

        lanes: Lanes;
        childLanes: Lanes;

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

        // Sum of base times for all descendants of this Fiber.
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
        _debugNeedsRemount?: boolean;

        // Used to verify that the order of hooks does not change between renders.
        _debugHookTypes?: HookType[] | null;
    }

    type FiberRoot = any;

    // Concurrent related struct
    type MutableSource = any;

    type OpaqueHandle = any;
    type OpaqueRoot = any;

    // 0 is PROD, 1 is DEV.
    // Might add PROFILE later.
    type BundleType = 0 | 1;

    interface DevToolsConfig<Instance, TextInstance, RendererInspectionConfig> {
        bundleType: BundleType;
        version: string;
        rendererPackageName: string;
        // Note: this actually *does* depend on Fiber internal fields.
        // Used by "inspect clicked DOM element" in React DevTools.
        findFiberByHostInstance?: (instance: Instance | TextInstance) => Fiber | null;
        rendererConfig?: RendererInspectionConfig;
    }

    interface SuspenseHydrationCallbacks<SuspenseInstance> {
        onHydrated?: (suspenseInstance: SuspenseInstance) => void;
        onDeleted?: (suspenseInstance: SuspenseInstance) => void;
    }

    interface TransitionTracingCallbacks {
        onTransitionStart?: (transitionName: string, startTime: number) => void;
        onTransitionProgress?: (
            transitionName: string,
            startTime: number,
            currentTime: number,
            pending: Array<{ name: null | string }>,
        ) => void;
        onTransitionIncomplete?: (
            transitionName: string,
            startTime: number,
            deletions: Array<{
                type: string;
                name?: string;
                newName?: string;
                endTime: number;
            }>,
        ) => void;
        onTransitionComplete?: (transitionName: string, startTime: number, endTime: number) => void;
        onMarkerProgress?: (
            transitionName: string,
            marker: string,
            startTime: number,
            currentTime: number,
            pending: Array<{ name: null | string }>,
        ) => void;
        onMarkerIncomplete?: (
            transitionName: string,
            marker: string,
            startTime: number,
            deletions: Array<{
                type: string;
                name?: string;
                newName?: string;
                endTime: number;
            }>,
        ) => void;
        onMarkerComplete?: (transitionName: string, marker: string, startTime: number, endTime: number) => void;
    }

    interface ComponentSelector {
        $$typeof: symbol | number;
        value: React$AbstractComponent<never, unknown>;
    }

    interface HasPseudoClassSelector {
        $$typeof: symbol | number;
        value: Selector[];
    }

    interface RoleSelector {
        $$typeof: symbol | number;
        value: string;
    }

    interface TextSelector {
        $$typeof: symbol | number;
        value: string;
    }

    interface TestNameSelector {
        $$typeof: symbol | number;
        value: string;
    }

    type Selector = ComponentSelector | HasPseudoClassSelector | RoleSelector | TextSelector | TestNameSelector;

    // TODO can not find React$AbstractComponent def
    type React$AbstractComponent<Config, Instance = any> = any;

    interface BoundingRect {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    type IntersectionObserverOptions = any;

    interface Reconciler<Container, Instance, TextInstance, SuspenseInstance, FormInstance, PublicInstance> {
        createContainer(
            containerInfo: Container,
            tag: RootTag,
            hydrationCallbacks: null | SuspenseHydrationCallbacks<SuspenseInstance>,
            isStrictMode: boolean,
            concurrentUpdatesByDefaultOverride: null | boolean,
            identifierPrefix: string,
            onRecoverableError: (error: Error) => void,
            transitionCallbacks: null | TransitionTracingCallbacks,
        ): OpaqueRoot;

        createPortal(
            children: ReactNode,
            containerInfo: any, // TODO: figure out the API for cross-renderer implementation.
            implementation: any,
            key?: string | null,
        ): ReactPortal;

        registerMutableSourceForHydration(root: FiberRoot, mutableSource: MutableSource): void;

        createComponentSelector(component: React$AbstractComponent<never, unknown>): ComponentSelector;

        createHasPseudoClassSelector(selectors: Selector[]): HasPseudoClassSelector;

        createRoleSelector(role: string): RoleSelector;

        createTextSelector(text: string): TextSelector;

        createTestNameSelector(id: string): TestNameSelector;

        getFindAllNodesFailureDescription(hostRoot: Instance, selectors: Selector[]): string | null;

        findAllNodes(hostRoot: Instance, selectors: Selector[]): Instance[];

        findBoundingRects(hostRoot: Instance, selectors: Selector[]): BoundingRect[];

        focusWithin(hostRoot: Instance, selectors: Selector[]): boolean;

        observeVisibleRects(
            hostRoot: Instance,
            selectors: Selector[],
            callback: (intersections: Array<{ ratio: number; rect: BoundingRect }>) => void,
            options?: IntersectionObserverOptions,
        ): { disconnect: () => void };

        createHydrationContainer(
            initialChildren: ReactNode,
            callback: (() => void) | null | undefined,
            containerInfo: Container,
            tag: RootTag,
            hydrationCallbacks: null | SuspenseHydrationCallbacks<SuspenseInstance>,
            isStrictMode: boolean,
            concurrentUpdatesByDefaultOverride: null | boolean,
            identifierPrefix: string,
            onRecoverableError: (error: Error) => void,
            transitionCallbacks: null | TransitionTracingCallbacks,
        ): OpaqueRoot;

        updateContainer(
            element: ReactNode,
            container: OpaqueRoot,
            parentComponent?: Component<any, any> | null,
            callback?: (() => void) | null,
        ): Lane;

        batchedUpdates<A, R>(fn: (a: A) => R, a: A): R;

        deferredUpdates<A>(fn: () => A): A;

        discreteUpdates<A, B, C, D, R>(fn: (arg0: A, arg1: B, arg2: C, arg3: D) => R, a: A, b: B, c: C, d: D): R;

        flushControlled(fn: () => any): void;

        flushSync(): void;
        flushSync<R>(fn: () => R): R;

        isAlreadyRendering(): boolean;

        flushPassiveEffects(): boolean;

        getPublicRootInstance(container: OpaqueRoot): Component<any, any> | PublicInstance | null;

        attemptSynchronousHydration(fiber: Fiber): void;

        attemptDiscreteHydration(fiber: Fiber): void;

        attemptContinuousHydration(fiber: Fiber): void;

        attemptHydrationAtCurrentPriority(fiber: Fiber): void;

        getCurrentUpdatePriority(): LanePriority;

        runWithPriority<T>(priority: LanePriority, fn: () => T): T;

        findHostInstance(component: any): PublicInstance | null;

        findHostInstanceWithWarning(component: any, methodName: string): PublicInstance | null;

        findHostInstanceWithNoPortals(fiber: Fiber): PublicInstance | null;

        shouldError(fiber: Fiber): boolean | undefined;

        shouldSuspend(fiber: Fiber): boolean;

        injectIntoDevTools(devToolsConfig: DevToolsConfig<Instance, TextInstance, any>): boolean;
    }
}

export = ReactReconciler;
