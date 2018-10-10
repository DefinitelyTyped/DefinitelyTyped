import { KeySet } from '../ojkeyset';
import { DataProvider } from '../ojdataprovider';
import { baseComponent, baseComponentEventMap, baseComponentSettableProperties, JetElementCustomEvent, JetSetPropertyType } from '..';
export interface ojNavigationList<K, D> extends baseComponent<ojNavigationListSettableProperties<K, D>> {
    as: string;
    currentItem: K;
    data: DataProvider<K, D> | null;
    display: 'all' | 'icons';
    drillMode: 'none' | 'collapsible' | 'sliding';
    edge: 'top' | 'start';
    expanded: KeySet<K>;
    hierarchyMenuThreshold: number;
    item: {
        renderer?: (((context: ojNavigationList.ItemContext<K, D>) => void) | null);
        selectable?: (((context: ojNavigationList.ItemContext<K, D>) => boolean) | boolean);
    };
    overflow: 'popup' | 'hidden';
    rootLabel: string | null;
    selection: K;
    translations: {
        defaultRootLabel?: string;
        hierMenuBtnLabel?: string;
        previousIcon?: string;
    };
    onAsChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["as"]>) => any) | null;
    onCurrentItemChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["currentItem"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["data"]>) => any) | null;
    onDisplayChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["display"]>) => any) | null;
    onDrillModeChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["drillMode"]>) => any) | null;
    onEdgeChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["edge"]>) => any) | null;
    onExpandedChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["expanded"]>) => any) | null;
    onHierarchyMenuThresholdChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["hierarchyMenuThreshold"]>) => any) | null;
    onItemChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["item"]>) => any) | null;
    onOverflowChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["overflow"]>) => any) | null;
    onRootLabelChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["rootLabel"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojNavigationList<K, D>["selection"]>) => any) | null;
    onOjAnimateEnd: ((event: ojNavigationList.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojNavigationList.ojAnimateStart) => any) | null;
    onOjBeforeCollapse: ((event: ojNavigationList.ojBeforeCollapse) => any) | null;
    onOjBeforeCurrentItem: ((event: ojNavigationList.ojBeforeCurrentItem) => any) | null;
    onOjBeforeExpand: ((event: ojNavigationList.ojBeforeExpand) => any) | null;
    onOjBeforeSelect: ((event: ojNavigationList.ojBeforeSelect) => any) | null;
    onOjCollapse: ((event: ojNavigationList.ojCollapse) => any) | null;
    onOjExpand: ((event: ojNavigationList.ojExpand) => any) | null;
    addEventListener<T extends keyof ojNavigationListEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojNavigationListEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojNavigationListSettableProperties<K, D>>(property: T): ojNavigationList<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojNavigationListSettableProperties<K, D>>(property: T, value: ojNavigationListSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojNavigationListSettableProperties<K, D>>): void;
    setProperties(properties: ojNavigationListSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojNavigationList.NodeContext<K> | null;
    refresh(): void;
}
export namespace ojNavigationList {
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
    interface ojBeforeCollapse extends CustomEvent<{
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeCurrentItem extends CustomEvent<{
        previousKey: any;
        previousItem: Element;
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeExpand extends CustomEvent<{
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeSelect extends CustomEvent<{
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojCollapse extends CustomEvent<{
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojExpand extends CustomEvent<{
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext<K, D> = {
        componentElement: Element;
        datasource?: DataProvider<K, D>;
        index: number;
        key: any;
        data: any;
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContext<K> = {
        subId: string;
        index: number;
        key: K;
        group: boolean;
        parent?: Element;
    };
}
export interface ojNavigationListEventMap<K, D> extends baseComponentEventMap<ojNavigationListSettableProperties<K, D>> {
    'ojAnimateEnd': ojNavigationList.ojAnimateEnd;
    'ojAnimateStart': ojNavigationList.ojAnimateStart;
    'ojBeforeCollapse': ojNavigationList.ojBeforeCollapse;
    'ojBeforeCurrentItem': ojNavigationList.ojBeforeCurrentItem;
    'ojBeforeExpand': ojNavigationList.ojBeforeExpand;
    'ojBeforeSelect': ojNavigationList.ojBeforeSelect;
    'ojCollapse': ojNavigationList.ojCollapse;
    'ojExpand': ojNavigationList.ojExpand;
    'asChanged': JetElementCustomEvent<ojNavigationList<K, D>["as"]>;
    'currentItemChanged': JetElementCustomEvent<ojNavigationList<K, D>["currentItem"]>;
    'dataChanged': JetElementCustomEvent<ojNavigationList<K, D>["data"]>;
    'displayChanged': JetElementCustomEvent<ojNavigationList<K, D>["display"]>;
    'drillModeChanged': JetElementCustomEvent<ojNavigationList<K, D>["drillMode"]>;
    'edgeChanged': JetElementCustomEvent<ojNavigationList<K, D>["edge"]>;
    'expandedChanged': JetElementCustomEvent<ojNavigationList<K, D>["expanded"]>;
    'hierarchyMenuThresholdChanged': JetElementCustomEvent<ojNavigationList<K, D>["hierarchyMenuThreshold"]>;
    'itemChanged': JetElementCustomEvent<ojNavigationList<K, D>["item"]>;
    'overflowChanged': JetElementCustomEvent<ojNavigationList<K, D>["overflow"]>;
    'rootLabelChanged': JetElementCustomEvent<ojNavigationList<K, D>["rootLabel"]>;
    'selectionChanged': JetElementCustomEvent<ojNavigationList<K, D>["selection"]>;
}
export interface ojNavigationListSettableProperties<K, D> extends baseComponentSettableProperties {
    as: string;
    currentItem: K;
    data: DataProvider<K, D> | null;
    display: 'all' | 'icons';
    drillMode: 'none' | 'collapsible' | 'sliding';
    edge: 'top' | 'start';
    expanded: KeySet<K>;
    hierarchyMenuThreshold: number;
    item: {
        renderer?: (((context: ojNavigationList.ItemContext<K, D>) => void) | null);
        selectable?: (((context: ojNavigationList.ItemContext<K, D>) => boolean) | boolean);
    };
    overflow: 'popup' | 'hidden';
    rootLabel: string | null;
    selection: K;
    translations: {
        defaultRootLabel?: string;
        hierMenuBtnLabel?: string;
        previousIcon?: string;
    };
}
export interface ojNavigationListSettablePropertiesLenient<K, D> extends Partial<ojNavigationListSettableProperties<K, D>> {
    [key: string]: any;
}
export interface ojTabBar<K, D> extends baseComponent<ojTabBarSettableProperties<K, D>> {
    as: string;
    currentItem: any;
    data: DataProvider<K, D> | null;
    display: 'all' | 'icons';
    edge: 'top' | 'bottom' | 'start' | 'end';
    item: {
        renderer?: (((context: ojTabBar.ItemContext<K, D>) => void) | null);
        selectable?: (((context: ojTabBar.ItemContext<K, D>) => boolean) | boolean);
    };
    overflow: 'popup' | 'hidden';
    reorderable: 'enabled' | 'disabled';
    selection: any;
    truncation: 'none' | 'progressive';
    translations: {
        accessibleReorderAfterItem?: string;
        accessibleReorderBeforeItem?: string;
        accessibleReorderTouchInstructionText?: string;
        labelCut?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
        labelRemove?: string;
        msgFetchingData?: string;
        msgNoData?: string;
        overflowItemLabel?: string;
        removeCueText?: string;
        selectedLabel?: string;
    };
    onAsChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["as"]>) => any) | null;
    onCurrentItemChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["currentItem"]>) => any) | null;
    onDataChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["data"]>) => any) | null;
    onDisplayChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["display"]>) => any) | null;
    onEdgeChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["edge"]>) => any) | null;
    onItemChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["item"]>) => any) | null;
    onOverflowChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["overflow"]>) => any) | null;
    onReorderableChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["reorderable"]>) => any) | null;
    onSelectionChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["selection"]>) => any) | null;
    onTruncationChanged: ((event: JetElementCustomEvent<ojTabBar<K, D>["truncation"]>) => any) | null;
    onOjAnimateEnd: ((event: ojTabBar.ojAnimateEnd) => any) | null;
    onOjAnimateStart: ((event: ojTabBar.ojAnimateStart) => any) | null;
    onOjBeforeCurrentItem: ((event: ojTabBar.ojBeforeCurrentItem) => any) | null;
    onOjBeforeDeselect: ((event: ojTabBar.ojBeforeDeselect) => any) | null;
    onOjBeforeRemove: ((event: ojTabBar.ojBeforeRemove) => any) | null;
    onOjBeforeSelect: ((event: ojTabBar.ojBeforeSelect) => any) | null;
    onOjDeselect: ((event: ojTabBar.ojDeselect) => any) | null;
    onOjRemove: ((event: ojTabBar.ojRemove) => any) | null;
    onOjReorder: ((event: ojTabBar.ojReorder) => any) | null;
    addEventListener<T extends keyof ojTabBarEventMap<K, D>>(type: T, listener: (this: HTMLElement, ev: ojTabBarEventMap<K, D>[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    getProperty<T extends keyof ojTabBarSettableProperties<K, D>>(property: T): ojTabBar<K, D>[T];
    getProperty(property: string): any;
    setProperty<T extends keyof ojTabBarSettableProperties<K, D>>(property: T, value: ojTabBarSettableProperties<K, D>[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, ojTabBarSettableProperties<K, D>>): void;
    setProperties(properties: ojTabBarSettablePropertiesLenient<K, D>): void;
    getContextByNode(node: Element): ojTabBar.NodeContext<K> | null;
    refresh(): void;
}
export namespace ojTabBar {
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
    interface ojBeforeCurrentItem extends CustomEvent<{
        previousKey: any;
        previousItem: Element;
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeDeselect extends CustomEvent<{
        fromKey: any;
        fromItem: Element;
        toKey: any;
        toItem: Element;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeRemove extends CustomEvent<{
        item: Element;
        key: any;
        [propName: string]: any;
    }> {
    }
    interface ojBeforeSelect extends CustomEvent<{
        key: any;
        item: Element;
        [propName: string]: any;
    }> {
    }
    interface ojDeselect extends CustomEvent<{
        fromKey: any;
        fromItem: Element;
        toKey: any;
        toItem: Element;
        [propName: string]: any;
    }> {
    }
    interface ojRemove extends CustomEvent<{
        item: Element;
        key: any;
        [propName: string]: any;
    }> {
    }
    interface ojReorder extends CustomEvent<{
        item: Element;
        position: 'before' | 'after';
        reference: Element;
        [propName: string]: any;
    }> {
    }
    // tslint:disable-next-line interface-over-type-literal
    type ItemContext<K, D> = {
        componentElement: Element;
        datasource?: DataProvider<K, D>;
        index: number;
        key: K;
        data: D;
        parentElement: Element;
    };
    // tslint:disable-next-line interface-over-type-literal
    type NodeContext<K> = {
        subId: string;
        index: number;
        key: K;
    };
}
export interface ojTabBarEventMap<K, D> extends baseComponentEventMap<ojTabBarSettableProperties<K, D>> {
    'ojAnimateEnd': ojTabBar.ojAnimateEnd;
    'ojAnimateStart': ojTabBar.ojAnimateStart;
    'ojBeforeCurrentItem': ojTabBar.ojBeforeCurrentItem;
    'ojBeforeDeselect': ojTabBar.ojBeforeDeselect;
    'ojBeforeRemove': ojTabBar.ojBeforeRemove;
    'ojBeforeSelect': ojTabBar.ojBeforeSelect;
    'ojDeselect': ojTabBar.ojDeselect;
    'ojRemove': ojTabBar.ojRemove;
    'ojReorder': ojTabBar.ojReorder;
    'asChanged': JetElementCustomEvent<ojTabBar<K, D>["as"]>;
    'currentItemChanged': JetElementCustomEvent<ojTabBar<K, D>["currentItem"]>;
    'dataChanged': JetElementCustomEvent<ojTabBar<K, D>["data"]>;
    'displayChanged': JetElementCustomEvent<ojTabBar<K, D>["display"]>;
    'edgeChanged': JetElementCustomEvent<ojTabBar<K, D>["edge"]>;
    'itemChanged': JetElementCustomEvent<ojTabBar<K, D>["item"]>;
    'overflowChanged': JetElementCustomEvent<ojTabBar<K, D>["overflow"]>;
    'reorderableChanged': JetElementCustomEvent<ojTabBar<K, D>["reorderable"]>;
    'selectionChanged': JetElementCustomEvent<ojTabBar<K, D>["selection"]>;
    'truncationChanged': JetElementCustomEvent<ojTabBar<K, D>["truncation"]>;
}
export interface ojTabBarSettableProperties<K, D> extends baseComponentSettableProperties {
    as: string;
    currentItem: any;
    data: DataProvider<K, D> | null;
    display: 'all' | 'icons';
    edge: 'top' | 'bottom' | 'start' | 'end';
    item: {
        renderer?: (((context: ojTabBar.ItemContext<K, D>) => void) | null);
        selectable?: (((context: ojTabBar.ItemContext<K, D>) => boolean) | boolean);
    };
    overflow: 'popup' | 'hidden';
    reorderable: 'enabled' | 'disabled';
    selection: any;
    truncation: 'none' | 'progressive';
    translations: {
        accessibleReorderAfterItem?: string;
        accessibleReorderBeforeItem?: string;
        accessibleReorderTouchInstructionText?: string;
        labelCut?: string;
        labelPasteAfter?: string;
        labelPasteBefore?: string;
        labelRemove?: string;
        msgFetchingData?: string;
        msgNoData?: string;
        overflowItemLabel?: string;
        removeCueText?: string;
        selectedLabel?: string;
    };
}
export interface ojTabBarSettablePropertiesLenient<K, D> extends Partial<ojTabBarSettableProperties<K, D>> {
    [key: string]: any;
}
