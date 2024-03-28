import {
    ComponentOptionsMixin,
    type ObjectEmitsOptions,
    type PublicProps,
    type SetupContext,
    type SlotsType,
    type VNode,
} from "vue";

export interface RecycleScrollerProps<T> {
    items: readonly T[];
    direction?: "vertical" | "horizontal";
    itemSize?: number | null;
    gridItems?: number;
    itemSecondarySize?: number;
    minItemSize?: number;
    sizeField?: keyof T;
    typeField?: keyof T;
    keyField?: keyof T;
    pageMode?: boolean;
    prerender?: number;
    buffer?: number;
    emitUpdate?: boolean;
    updateInterval?: number;
    listClass?: string;
    itemClass?: string;
    listTag?: string;
    itemTag?: string;
}

export interface DynamicScrollerProps<T> extends RecycleScrollerProps<T> {
    minItemSize: number;
}

export interface RecycleScrollerEmitOptions extends ObjectEmitsOptions {
    resize: () => void;
    visible: () => void;
    hidden: () => void;
    update: (
        startIndex: number,
        endIndex: number,
        visibleStartIndex: number,
        visibleEndIndex: number,
    ) => void;
    "scroll-start": () => void;
    "scroll-end": () => void;
}

export interface RecycleScrollerSlotProps<T> {
    item: T;
    index: number;
    active: boolean;
}

export interface RecycleScrollerSlots<T> {
    default?: (slotProps: RecycleScrollerSlotProps<T>) => unknown;
    before?: () => unknown;
    empty?: () => unknown;
    after?: () => unknown;
}

export interface RecycleScrollerInstance {
    getScroll(): { start: number; end: number };
    scrollToItem(index: number): void;
    scrollToPosition(position: number): void;
}

/**
 * RecycleScroller is a component that only renders the visible items in your list.
 * It also re-uses components and dom elements to be as efficient and performant as possible.
 *
 * @link https://github.com/Akryum/vue-virtual-scroller/blob/master/packages/vue-virtual-scroller/README.md#recyclescroller
 */
export function RecycleScroller<T>(
    props: RecycleScrollerProps<T> & PublicProps,
    ctx?: SetupContext<RecycleScrollerEmitOptions, SlotsType<RecycleScrollerSlots<T>>>,
    expose?: (exposed: RecycleScrollerInstance) => void,
): VNode & {
    __ctx?: {
        props: RecycleScrollerProps<T> & PublicProps;
        expose(exposed: RecycleScrollerInstance): void;
        slots: RecycleScrollerSlots<T>;
    };
};

/**
 * DynamicScroller is a component that wraps the RecycleScroller component
 * and extends its features to include dynamic size management.
 * The main use case for this is when you do not know the size of the items in advance.
 * The Dynamic Scroller automatically "discovers" item dimensions as it renders new items during scrolling.
 *
 * @link https://github.com/Akryum/vue-virtual-scroller/blob/master/packages/vue-virtual-scroller/README.md#dynamicscroller
 */
export function DynamicScroller<T>(
    props: DynamicScrollerProps<T> & PublicProps,
    ctx?: SetupContext<RecycleScrollerEmitOptions, SlotsType<RecycleScrollerSlots<T>>>,
    expose?: (exposed: RecycleScrollerInstance) => void,
): VNode & {
    __ctx?: {
        props: DynamicScrollerProps<T> & PublicProps;
        expose(exposed: RecycleScrollerInstance): void;
        slots: RecycleScrollerSlots<T>;
    };
};

export interface DynamicScrollerItemProps<T> {
    item: T;
    active: boolean;
    sizeDependencies?: unknown[];
    watchData?: boolean;
    tag?: string;
    emitResize?: boolean;
    onResize?: () => void;
}

export interface DynamicScrollerItemEmitOptions extends ObjectEmitsOptions {
    resize: () => void;
}

/**
 * DynamicScrollerItem must wrap each item in a DynamicScroller
 * to handle size computations.
 *
 * @link https://github.com/Akryum/vue-virtual-scroller/blob/master/packages/vue-virtual-scroller/README.md#dynamicscrolleritem
 */
export function DynamicScrollerItem<T>(
    props: DynamicScrollerItemProps<T> & PublicProps,
    ctx?: SetupContext<DynamicScrollerItemEmitOptions>,
): VNode & {
    __ctx?: {
        props: DynamicScrollerItemProps<T> & PublicProps;
    };
};

/**
 * IdState is a mixin that ease the local state management in reused components inside a RecycleScroller.
 *
 * @link https://github.com/Akryum/vue-virtual-scroller/blob/master/packages/vue-virtual-scroller/README.md#idstate
 */
export function IdState(options?: { idProp?: (value: any) => unknown }): ComponentOptionsMixin;
