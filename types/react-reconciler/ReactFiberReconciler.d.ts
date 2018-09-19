import { Component } from 'react';
import { Fiber } from './ReactFiber';
import { ExpirationTime } from './ReactFiberExpirationTime';
import { FiberRoot } from './ReactFiberRoot';
import { Deadline } from './ReactFiberScheduler';
import { ReactNodeList } from './ReactTypes';

export type OpaqueHandle = Fiber;
export type OpaqueRoot = FiberRoot;

export interface HostConfig<Type, Props, Container, Instance, TextInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, ChildSet, TimeoutHandle, NoTimeout> {
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
    ): number;
    cancelDeferredCallback(callbackID: number): void;

    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
    clearTimeout(handle: number): void;
    noTimeout: number;

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
export type BundleType = 0 | 1;

export interface DevToolsConfig<Instance, TextInstance> {
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

export interface Reconciler<Instance, TextInstance, Container, PublicInstance> {
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
    batchedUpdates<A, R>(fn: (a: A) => R, a: A): R;
    unbatchedUpdates<A, R>(fn: (a: A) => R, a: A): R;
    deferredUpdates<A>(fn: () => A): A;
    syncUpdates<A, B, C0, D, R>(
        fn: (a: A, b: B, c: C0, d: D) => R,
        a: A,
        b: B,
        c: C0,
        d: D,
    ): R;
    interactiveUpdates<A, B, R>(fn: (a: A, b: B) => R, a: A, b: B): R;
    flushInteractiveUpdates(): void;
    flushControlled(fn: () => any): void;
    flushSync<A, R>(fn: (a: A) => R, a: A): R;

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

export default function <Type, Props, Container, Instance, TextInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, ChildSet, TimeoutHandle, NoTimeout>(
    config: HostConfig<Type, Props, Container, Instance, TextInstance, HydratableInstance, PublicInstance, HostContext, UpdatePayload, ChildSet, TimeoutHandle, NoTimeout>,
): Reconciler<Instance, TextInstance, Container, PublicInstance>;
