import * as React from "react";

/**
 * Model is the base for all models.
 * Currently only List is implemented (or even mentioned).
 * Rather than basing all functions on List, I'll base them on Model to make it easier if more models are added.
 */
export interface Model extends React.ComponentClass {
    readonly from: number;
    readonly to: number;
    readonly scrollSize: number;
    getIndex: (offset: number) => number;
    getOffset: (index: number) => number;
    getSize: (index: number) => number;
    readonly visibleFrom: number;
    scrollTo: (index: number, smooth: boolean) => void;
    setOuterNode: (node: HTMLElement) => void;
    el: (index: number, node: React.ReactNode) => void;
}

export interface useVirtualModelProps {
    itemCount?: number;
    // getEstimatedItemSize is not marked explicitly optional in useVirtualModel, but model implmentation gives it a default, thus making it optional.
    getEstimatedItemSize?: (itemSizes: number, scrollSize: number, newItemCount?: number) => number;
    estimatedWidgetSize?: number;
    overscanCount?: number;
    horizontal?: boolean;
}

/**
 * I've created a VirtualModelFunction type because useVirtual is a utility hook that calls (and returns) useVirtualModel.
 * Both hooks accept the same props and return a model.
 */
type VirtualModelFunction = (props?: useVirtualModelProps) => Model;

export const useVirtualModel: VirtualModelFunction;
export const useVirtual: VirtualModelFunction;

/**
 * EventType's are used to describe events that will trigger a callback.
 */
export const EVT_FROM = 0;
export const EVT_TO = 1;
export const EVT_SCROLL_SIZE = 2;
export const EVT_SIZES = 3;
export type EventType = 0 | 1 | 2 | 3;
export const EVT_ALL: EventType[];

/**
 * useSubscription is a hook that subscribes to a model and calls a callback when one of the passed events is triggered.
 */
export function useSubscription(model: Model, events: EventType[], callback: (() => void) | null): void;

/**
 * useComponentSubscription is a hook used for subscribing a component to a model.
 * Usually you won't need to use this hook directly.
 */
export function useComponentSubscription(model: Model, events?: EventType[]): void;

/**
 * useOnce keeps a ref to the underlying component.
 * If the ref is null, the callback is called to create the component.
 */
export function useOnce<T extends React.ReactNode>(callback: () => T): T;

export interface SubscriptionProps {
    model: Model;
    events?: EventType[];
}

/**
 * Subscription is a component that wraps the useComponentSubscription hook.
 */
export const Subscription: React.FC<React.PropsWithChildren<SubscriptionProps>>;

/**
 * mapVisibleRange is a helper function for rendering the visible elements in a model.
 */
export function mapVisibleRange(
    model: Model,
    callback: (from: number, delta?: number) => void,
    countOffset?: boolean,
): void;

export {};
