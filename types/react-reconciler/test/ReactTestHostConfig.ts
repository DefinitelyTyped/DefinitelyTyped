import * as TestRendererScheduling from './ReactTestRendererScheduling';

export type Type = string;
export type Props = object;
export interface Container {
    children: Array<Instance | TextInstance>;
    createNodeMock: ({ type, props }: { type: Type, props: Props }) => PublicInstance;
    tag: 'CONTAINER';
}
export interface Instance {
    type: string;
    props: object;
    children: Array<Instance | TextInstance>;
    rootContainerInstance: Container;
    tag: 'INSTANCE';
}
export interface TextInstance {
    text: string;
    tag: 'TEXT';
}
export type HydratableInstance = Instance | TextInstance;
export type PublicInstance = Instance | TextInstance;
export type HostContext = object;
export type UpdatePayload = object;
export type ChildSet = undefined; // Unused
export type TimeoutHandle = any;
export type NoTimeout = -1;
/* eslint-enable no-use-before-define */

export * from './HostConfigWithNoPersistence';
export * from './HostConfigWithNoHydration';

const NO_CONTEXT = {};
const UPDATE_SIGNAL = {};
declare const __DEV__: boolean;
if (__DEV__) {
    Object.freeze(NO_CONTEXT);
    Object.freeze(UPDATE_SIGNAL);
}

export function getPublicInstance(inst: Instance | TextInstance) {
    switch (inst.tag) {
        case 'INSTANCE':
            const createNodeMock = inst.rootContainerInstance.createNodeMock;
            return createNodeMock({
                type: inst.type,
                props: inst.props,
            });
        default:
            return inst;
    }
}

export function appendChild(
    parentInstance: Instance | Container,
    child: Instance | TextInstance,
): void {
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

export function removeChild(
    parentInstance: Instance | Container,
    child: Instance | TextInstance,
): void {
    const index = parentInstance.children.indexOf(child);
    parentInstance.children.splice(index, 1);
}

export function getRootHostContext(
    rootContainerInstance: Container,
): HostContext {
    return NO_CONTEXT;
}

export function getChildHostContext(
    parentHostContext: HostContext,
    type: string,
    rootContainerInstance: Container,
): HostContext {
    return NO_CONTEXT;
}

export function prepareForCommit(containerInfo: Container): void {
    // noop
}

export function resetAfterCommit(containerInfo: Container): void {
    // noop
}

export function createInstance(
    type: string,
    props: Props,
    rootContainerInstance: Container,
    hostContext: object,
    internalInstanceHandle: object,
): Instance {
    return {
        type,
        props,
        children: [],
        rootContainerInstance,
        tag: 'INSTANCE',
    };
}

export function appendInitialChild(
    parentInstance: Instance,
    child: Instance | TextInstance,
): void {
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
    hostContext: object,
): boolean {
    return false;
}

export function prepareUpdate(
    testElement: Instance,
    type: string,
    oldProps: Props,
    newProps: Props,
    rootContainerInstance: Container,
    hostContext: object,
): null | {} {
    return UPDATE_SIGNAL;
}

export function shouldSetTextContent(type: string, props: Props): boolean {
    return false;
}

export function shouldDeprioritizeSubtree(type: string, props: Props): boolean {
    return false;
}

export function createTextInstance(
    text: string,
    rootContainerInstance: Container,
    hostContext: object,
    internalInstanceHandle: object,
): TextInstance {
    return {
        text,
        tag: 'TEXT',
    };
}

export const isPrimaryRenderer = false;
// This approach enables `now` to be mocked by tests,
// Even after the reconciler has initialized and read host config values.
export const now = () => TestRendererScheduling.nowImplementation();
export const scheduleDeferredCallback =
    TestRendererScheduling.scheduleDeferredCallback;
export const cancelDeferredCallback =
    TestRendererScheduling.cancelDeferredCallback;

export const setTimeout = (handler: any) => -1;
export const clearTimeout = (handle: number) => { };
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
    internalInstanceHandle: object,
): void {
    instance.type = type;
    instance.props = newProps;
}

export function commitMount(
    instance: Instance,
    type: string,
    newProps: Props,
    internalInstanceHandle: object,
): void {
    // noop
}

export function commitTextUpdate(
    textInstance: TextInstance,
    oldText: string,
    newText: string,
): void {
    textInstance.text = newText;
}

export function resetTextContent(testElement: Instance): void {
    // noop
}

export const appendChildToContainer = appendChild;
export const insertInContainerBefore = insertBefore;
export const removeChildFromContainer = removeChild;
