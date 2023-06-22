// This file is pretty much a copy of https://github.com/facebook/react/blob/main/packages/react-test-renderer/src/ReactTestHostConfig.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import ReactReconcilerConstants = require('react-reconciler/constants');

export const REACT_OPAQUE_ID_TYPE: number | symbol = 0xeae0;

export type TimeoutID = number;

export type Type = string;
export interface Props {
    [key: string]: any;
}
export interface Container {
    children: Array<Instance | TextInstance>;
    createNodeMock: (...args: any[]) => any;
    tag: 'CONTAINER';
}
export interface Instance {
    type: string;
    props: {
        [key: string]: any;
    };
    isHidden: boolean;
    children: Array<Instance | TextInstance>;
    internalInstanceHandle: {
        [key: string]: any;
    };
    rootContainerInstance: Container;
    tag: 'INSTANCE';
}
export interface TextInstance {
    text: string;
    isHidden: boolean;
    tag: 'TEXT';
}
export type HydratableInstance = Instance | TextInstance;
export type PublicInstance = (Instance | TextInstance) & { kind: 'PublicInstance' };
export interface HostContext {
    [key: string]: any;
}
export interface UpdatePayload {
    [key: string]: any;
}
export type ChildSet = undefined; // Unused
export type TimeoutHandle = TimeoutID;
export type NoTimeout = -1;
export type EventResponder = any;
export type OpaqueIDType =
    | string
    | {
          $$typeof: number | symbol;
          toString: () => string | void;
          valueOf: () => string | void;
      };

export type RendererInspectionConfig = Readonly<{}>;

export * from './ReactFiberHostConfigWithNoPersistence';
export * from './ReactFiberHostConfigWithNoMicrotasks';
export * from './ReactFiberHostConfigWithNoHydration';
export * from './ReactFiberHostConfigWithNoTestSelectors';

const NO_CONTEXT = {};
const UPDATE_SIGNAL = {};
const nodeToInstanceMap = new WeakMap();

export function getPublicInstance(inst: Instance | TextInstance): any {
    switch (inst.tag) {
        case 'INSTANCE':
            const createNodeMock = inst.rootContainerInstance.createNodeMock;
            const mockNode = createNodeMock({
                type: inst.type,
                props: inst.props,
            });

            if (typeof mockNode === 'object' && mockNode !== null) {
                nodeToInstanceMap.set(mockNode, inst);
            }

            return mockNode;
        default:
            return inst;
    }
}

export function appendChild(parentInstance: Instance | Container, child: Instance | TextInstance): void {
    const index = parentInstance.children.indexOf(child);
    if (index !== -1) {
        parentInstance.children.splice(index, 1);
    }
    parentInstance.children.push(child);
}

export function insertBefore(
    parentInstance: Instance | Container,
    child: Instance | TextInstance,
    beforeChild: Instance | TextInstance,
): void {
    const index = parentInstance.children.indexOf(child);
    if (index !== -1) {
        parentInstance.children.splice(index, 1);
    }
    const beforeIndex = parentInstance.children.indexOf(beforeChild);
    parentInstance.children.splice(beforeIndex, 0, child);
}

export function removeChild(parentInstance: Instance | Container, child: Instance | TextInstance): void {
    const index = parentInstance.children.indexOf(child);
    parentInstance.children.splice(index, 1);
}

export function clearContainer(container: Container): void {
    container.children.splice(0);
}

export function getRootHostContext(rootContainerInstance: Container): HostContext {
    return NO_CONTEXT;
}

export function getChildHostContext(
    parentHostContext: HostContext,
    type: string,
    rootContainerInstance: Container,
): HostContext {
    return NO_CONTEXT;
}

export function prepareForCommit(containerInfo: Container): null | {
    [key: string]: any;
} {
    // noop
    return null;
}

export function resetAfterCommit(containerInfo: Container): void {
    // noop
}

export function createInstance(
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: {
        [key: string]: any;
    },
    internalInstanceHandle: {
        [key: string]: any;
    },
): Instance {
    return {
        type,
        props,
        isHidden: false,
        children: [],
        internalInstanceHandle,
        rootContainerInstance,
        tag: 'INSTANCE',
    };
}

export function appendInitialChild(parentInstance: Instance, child: Instance | TextInstance): void {
    const index = parentInstance.children.indexOf(child);
    if (index !== -1) {
        parentInstance.children.splice(index, 1);
    }
    parentInstance.children.push(child);
}

export function finalizeInitialChildren(
    testElement: Instance,
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: {
        [key: string]: any;
    },
): boolean {
    return false;
}

export function prepareUpdate(
    testElement: Instance,
    type: string,
    oldProps: Props,
    newProps: Props,
    rootContainerInstance: Container,
    hostContext: {
        [key: string]: any;
    },
): null | {} {
    return UPDATE_SIGNAL;
}

export function shouldSetTextContent(type: string, props: Props): boolean {
    return false;
}

export function createTextInstance(
    text: string,
    rootContainerInstance: Container,
    hostContext: {
        [key: string]: any;
    },
    internalInstanceHandle: {
        [key: string]: any;
    },
): TextInstance {
    return {
        text,
        isHidden: false,
        tag: 'TEXT',
    };
}

export function getCurrentEventPriority() {
    return ReactReconcilerConstants.DefaultEventPriority;
}

export const isPrimaryRenderer = false;
export const warnsIfNotActing = true;

export const scheduleTimeout = (_fn: () => void, _timeout: number): TimeoutID => noTimeout;
export const cancelTimeout = (_id: TimeoutID) => {};

export const noTimeout = -1;

// -------------------
//     Mutation
// -------------------

export const supportsMutation = true;

export function commitUpdate(
    instance: Instance,
    updatePayload: {},
    type: string,
    oldProps: Props,
    newProps: Props,
    internalInstanceHandle: {
        [key: string]: any;
    },
): void {
    instance.type = type;
    instance.props = newProps;
}

export function commitMount(
    instance: Instance,
    type: string,
    newProps: Props,
    internalInstanceHandle: {
        [key: string]: any;
    },
): void {
    // noop
}

export function commitTextUpdate(textInstance: TextInstance, oldText: string, newText: string): void {
    textInstance.text = newText;
}

export function resetTextContent(testElement: Instance): void {
    // noop
}

export const appendChildToContainer = appendChild;
export const insertInContainerBefore = insertBefore;
export const removeChildFromContainer = removeChild;

export function hideInstance(instance: Instance): void {
    instance.isHidden = true;
}

export function hideTextInstance(textInstance: TextInstance): void {
    textInstance.isHidden = true;
}

export function unhideInstance(instance: Instance, props?: Props): void {
    instance.isHidden = false;
}

export function unhideTextInstance(textInstance: TextInstance, text?: string): void {
    textInstance.isHidden = false;
}

export function getInstanceFromNode(mockNode: { [key: string]: any }) {
    const instance = nodeToInstanceMap.get(mockNode);
    if (instance !== undefined) {
        return instance.internalInstanceHandle;
    }
    return null;
}

export function beforeActiveInstanceBlur() {
    // noop
}

export function afterActiveInstanceBlur() {
    // noop
}

export function preparePortalMount(portalInstance: Container): void {
    // noop
}

export function prepareScopeUpdate(
    scopeInstance: {
        [key: string]: any;
    },
    inst: {
        [key: string]: any;
    },
): void {
    nodeToInstanceMap.set(scopeInstance, inst);
}

export function getInstanceFromScope(scopeInstance: { [key: string]: any }): null | Instance {
    return nodeToInstanceMap.get(scopeInstance) || null;
}

export function detachDeletedInstance(node: Instance): void {
    // noop
}

export function logRecoverableError(error: any): void {
    // noop
}
