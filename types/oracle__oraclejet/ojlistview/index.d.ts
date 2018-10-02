import { KeySet } from '../ojkeyset';
import { DataProvider } from '../ojdataprovider';
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojListView<K, D> extends baseComponent<ojListViewSettableProperties<K, D>> {
    as: string;
    currentItem: K;
    data: DataProvider<K, D>;
    dnd: {
        drag?: {
            items: {
                dataTypes?: string | string[];
                drag?: ((param0: Event) => void);
                dragEnd?: ((param0: Event) => void);
                dragStart?: ((param0: Event, param1: {
                    items: Element[];
                }) => void);
            };
        };
        drop?: {
            items: {
                dataTypes?: string | string[];
                dragEnter?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragLeave?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragOver?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                drop?: ((param0: Event, param1: ojListView.ItemsDropContext) => void);
            };
        };
        reorder: {
            items: 'enabled' | 'disabled';
        };
    };
    drillMode: 'collapsible' | 'none';
    expanded: KeySet<K>;
    readonly firstSelectedItem: {
        key: K;
        data: D;
    };
    groupHeaderPosition: 'static' | 'sticky';
    item: {
        focusable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
        renderer?: ((param0: ojListView.ItemContext<K, D>) => {
            insert: Element | string;
        } | undefined) | null;
        selectable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
    };
    scrollPolicy: 'auto' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize?: number;
        maxCount?: number;
        scroller?: Element;
    };
    scrollPosition: {
        x?: number;
        y?: number;
        index?: number;
        parent?: K;
        key?: K;
        offsetX?: number;
        offsetY?: number;
    };
    selection: K[];
    selectionMode: 'none' | 'single' | 'multiple';
    selectionRequired: boolean;
    translations: {
        accessibleNavigateSkipItems?: string;
        accessibleReorderAfterItem?: string;
        accessibleReorderBeforeItem?: string;
        accessibleReorderInsideItem?: string;
        accessibleReorderTouchInstructionText?: string;
        indexerCharacters?: string;
        labelCopy?: string;
        labelCut?: string;
        labelPaste?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
        msgFetchingData?: string;
        msgNoData?: string;
    };
    onAsChanged: ((event: JetElementCustomEvent<ojListView<K, D>["as"]>) => any) | null;
    onCurrentItemChanged: ((event: JetElementCustomEvent<ojListView<K, D>["currentItem"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojListView<K, D>["data"]>) => any) | null;
    onDndChanged: ((event: JetElementCustomEvent<ojListView<K, D>["dnd"]>) => any) | null;
    onDrillModeChanged: ((event: JetElementCustomEvent<ojListView<K, D>["drillMode"]>) => any) | null;
    onExpandedChanged: ((event: JetElementCustomEvent<ojListView<K, D>["expanded"]>) => any) | null;
    onFirstSelectedItemChanged: ((event: JetElementCustomEvent<ojListView<K, D>["firstSelectedItem"]>) => any) | null;
    onGroupHeaderPositionChanged: ((event: JetElementCustomEvent<ojListView<K, D>["groupHeaderPosition"]>) => any) | null;
    onItemChanged: ((event: JetElementCustomEvent<ojListView<K, D>["item"]>) => any) | null;
    onScrollPolicyChanged: ((event: JetElementCustomEvent<ojListView<K, D>["scrollPolicy"]>) => any) | null;
    onScrollPolicyOptionsChanged: ((event: JetElementCustomEvent<ojListView<K, D>["scrollPolicyOptions"]>) => any) | null;
    onScrollPositionChanged: ((event: JetElementCustomEvent<ojListView<K, D>["scrollPosition"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojListView<K, D>["selection"]>) => any) | null;
    onSelectionModeChanged: ((event: JetElementCustomEvent<ojListView<K, D>["selectionMode"]>) => any) | null;
    onSelectionRequiredChanged: ((event: JetElementCustomEvent<ojListView<K, D>["selectionRequired"]>) => any) | null;
    onOjAnimateEnd: ((event: ojListView.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojListView.ojAnimateStart) => any) | null;
    onOjBeforeCollapse: ((event: ojListView.ojBeforeCollapse<K>) => any) | null;
    onOjBeforeCurrentItem: ((event: ojListView.ojBeforeCurrentItem<K>) => any) | null;
    onOjBeforeExpand: ((event: ojListView.ojBeforeExpand<K>) => any) | null;
    onOjCollapse: ((event: ojListView.ojCollapse<K>) => any) | null;
    onOjCopy: ((event: ojListView.ojCopy) => any) | null;
    onOjCut: ((event: ojListView.ojCut) => any) | null;
    onOjExpand: ((event: ojListView.ojExpand<K>) => any) | null;
    onOjPaste: ((event: ojListView.ojPaste) => any) | null;
    onOjReorder: ((event: ojListView.ojReorder) => any) | null;
    addEventListener<T extends keyof ojListViewEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojListViewEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojListViewSettableProperties<K, D>>(property: T): ojListView<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojListViewSettableProperties<K, D>>(property: T, value: ojListViewSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojListViewSettableProperties<K, D>>): void;
    setProperties(properties: ojListViewSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojListView.ContextByNode<K> | null;
    getDataForVisibleItem(context: {
        key?: K;
        index?: number;
        parent?: Element;
    }): D;
    refresh(): void;
    scrollToItem(item: {
        key: K;
    }): void;
}
export namespace ojListView {
    interface ojAnimateEnd extends CustomEvent<{
        action: string;
        element: Element;
        [propName: string]: any;
    }> {
    }
    interface ojAnimateStart extends CustomEvent<{
        action: string;
        element: Element;
        endCallback: (() => void);
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCollapse<K> extends CustomEvent<{
        key: K;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCurrentItem<K> extends CustomEvent<{
        previousKey: K;
        previousItem: Element;
        key: K;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeExpand<K> extends CustomEvent<{
        key: K;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojCollapse<K> extends CustomEvent<{
        key: K;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojCopy extends CustomEvent<{
        items: Element[];
        [propName: string]: any;
    }> {
    }
    interface ojCut extends CustomEvent<{
        items: Element[];
        [propName: string]: any;
    }> {
    }
    interface ojExpand<K> extends CustomEvent<{
        key: K;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojPaste extends CustomEvent<{
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojReorder extends CustomEvent<{
        items: Element[];
        position: string;
        reference: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type ContextByNode<K> = {
        subId: string;
        key: K;
        index: number;
        parent?: Element;
        group?: boolean;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext<K, D> = {
        datasource: DataProvider<K, D>;
        index: number;
        key: K;
        data: D;
        parentElement: Element;
        depth?: number;
        parentKey?: K;
        leaf?: boolean;
    };
    // tslint:disable-next-line interface-over-type-literal
    type ItemsDropContext = {
        item: Element;
        position: 'before' | 'after' | 'inside';
        reorder: boolean;
    };
}
export interface ojListViewEventMap<K, D> extends baseComponentEventMap<ojListViewSettableProperties<K, D>> {
    'ojAnimateEnd': ojListView.ojAnimateEnd;
    'ojAnimateStart': ojListView.ojAnimateStart;
    'ojBeforeCollapse': ojListView.ojBeforeCollapse<K>;
    'ojBeforeCurrentItem': ojListView.ojBeforeCurrentItem<K>;
    'ojBeforeExpand': ojListView.ojBeforeExpand<K>;
    'ojCollapse': ojListView.ojCollapse<K>;
    'ojCopy': ojListView.ojCopy;
    'ojCut': ojListView.ojCut;
    'ojExpand': ojListView.ojExpand<K>;
    'ojPaste': ojListView.ojPaste;
    'ojReorder': ojListView.ojReorder;
    'asChanged': JetElementCustomEvent<ojListView<K, D>["as"]>;
    'currentItemChanged': JetElementCustomEvent<ojListView<K, D>["currentItem"]>;
    'dataChanged': JetElementCustomEvent<ojListView<K, D>["data"]>;
    'dndChanged': JetElementCustomEvent<ojListView<K, D>["dnd"]>;
    'drillModeChanged': JetElementCustomEvent<ojListView<K, D>["drillMode"]>;
    'expandedChanged': JetElementCustomEvent<ojListView<K, D>["expanded"]>;
    'firstSelectedItemChanged': JetElementCustomEvent<ojListView<K, D>["firstSelectedItem"]>;
    'groupHeaderPositionChanged': JetElementCustomEvent<ojListView<K, D>["groupHeaderPosition"]>;
    'itemChanged': JetElementCustomEvent<ojListView<K, D>["item"]>;
    'scrollPolicyChanged': JetElementCustomEvent<ojListView<K, D>["scrollPolicy"]>;
    'scrollPolicyOptionsChanged': JetElementCustomEvent<ojListView<K, D>["scrollPolicyOptions"]>;
    'scrollPositionChanged': JetElementCustomEvent<ojListView<K, D>["scrollPosition"]>;
    'selectionChanged': JetElementCustomEvent<ojListView<K, D>["selection"]>;
    'selectionModeChanged': JetElementCustomEvent<ojListView<K, D>["selectionMode"]>;
    'selectionRequiredChanged': JetElementCustomEvent<ojListView<K, D>["selectionRequired"]>;
}
export interface ojListViewSettableProperties<K, D> extends baseComponentSettableProperties {
    as: string;
    currentItem: K;
    data: DataProvider<K, D>;
    dnd: {
        drag?: {
            items: {
                dataTypes?: string | string[];
                drag?: ((param0: Event) => void);
                dragEnd?: ((param0: Event) => void);
                dragStart?: ((param0: Event, param1: {
                    items: Element[];
                }) => void);
            };
        };
        drop?: {
            items: {
                dataTypes?: string | string[];
                dragEnter?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragLeave?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                dragOver?: ((param0: Event, param1: {
                    item: Element;
                }) => void);
                drop?: ((param0: Event, param1: ojListView.ItemsDropContext) => void);
            };
        };
        reorder: {
            items: 'enabled' | 'disabled';
        };
    };
    drillMode: 'collapsible' | 'none';
    expanded: KeySet<K>;
    readonly firstSelectedItem: {
        key: K;
        data: D;
    };
    groupHeaderPosition: 'static' | 'sticky';
    item: {
        focusable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
        renderer?: ((param0: ojListView.ItemContext<K, D>) => {
            insert: Element | string;
        } | undefined) | null;
        selectable?: ((param0: ojListView.ItemContext<K, D>) => boolean) | boolean;
    };
    scrollPolicy: 'auto' | 'loadMoreOnScroll';
    scrollPolicyOptions: {
        fetchSize?: number;
        maxCount?: number;
        scroller?: Element;
    };
    scrollPosition: {
        x?: number;
        y?: number;
        index?: number;
        parent?: K;
        key?: K;
        offsetX?: number;
        offsetY?: number;
    };
    selection: K[];
    selectionMode: 'none' | 'single' | 'multiple';
    selectionRequired: boolean;
    translations: {
        accessibleNavigateSkipItems?: string;
        accessibleReorderAfterItem?: string;
        accessibleReorderBeforeItem?: string;
        accessibleReorderInsideItem?: string;
        accessibleReorderTouchInstructionText?: string;
        indexerCharacters?: string;
        labelCopy?: string;
        labelCut?: string;
        labelPaste?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
        msgFetchingData?: string;
        msgNoData?: string;
    };
}
export interface ojListViewSettablePropertiesLenient<K, D> extends Partial<ojListViewSettableProperties<K, D>> {
    [key: string]: any;
}
