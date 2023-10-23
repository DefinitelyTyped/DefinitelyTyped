import { VueConstructor } from "vue";

// Misc
export interface ContainerType {
    vnode: any;
    offsetLeft: null | number;
    offsetTop: null | number;
}

export interface TouchType {
    mouseDown: boolean;
    dragging: boolean;
    activeSplitter: null | number;
}

export interface CoordinateType {
    x: number;
    y: number;
}

export interface SumsType {
    prevPanesSize: number;
    nextPanesSize: number;
    prevReachedMinPanes: number;
    nextReachedMinPanes: number;
}

export interface SumsPanesType {
    sums: SumsType;
    panesToResize: number[];
}

export interface RequestUpdateType {
    target: Pane;
    min?: number | undefined;
    max?: number | undefined;
    size?: number | undefined;
}

export interface RemovedPaneType {
    [key: number]: Pane;

    index: number;
}

export interface ChangedPaneType {
    addedPane?: Pane | undefined;
    removedPane?: RemovedPaneType | undefined;
}

// Splitpane
export interface SplitterTapsType {
    splitter: null | number;
    timeoutId: null | object;
}

export interface SplitpaneWatchPaneType {
    deep: boolean;
    immediate: boolean;
    handler: () => void;
}

export interface SplitpaneIndexedElementType {
    givenSize: number | null;
    id: number;
    index: number;
    max: number;
    min: number;
    size: number;
}

// This is sort of a weird type, i might have misunderstood something regarding vue?
export interface SplitpaneIndexedType {
    [key: number]: SplitpaneIndexedElementType;
}

export interface SplitpaneProps {
    horizontal: boolean; // false
    pushOtherPanes: boolean; // true
    dblClickSplitter: boolean; // true
    firstSplitter: boolean; // false
}

export interface SplitpaneData {
    container: ContainerType;
    ready: boolean;
    panes: Pane[];
    touch: TouchType;
    splitterTaps: SplitterTapsType;
}

export interface SplitpaneComputed {
    panesCount: () => number;
    indexedPanes: () => SplitpaneIndexedType | null;
}

export interface SplitPaneMethods {
    updatePaneComponents: () => void;
    bindEvents: () => void;
    unbindEvents: () => void;
    onMouseDown: (event: Event, splitterIndex: number) => void;
    onMouseMove: (event: Event) => void;
    onMouseUp: () => void;
    onSplitterClick: (event: Event, splitterIndex: number) => void;
    onSplitterDblClick: (event: Event, splitterIndex: number) => Pane | void;
    onPaneClick: (event: Event, splitterIndex: number) => void;
    getCurrentMouseDrag: (event: Event) => CoordinateType;
    getCurrentDragPercentage: (drag: CoordinateType) => number;
    calculatePanesSize: (drag: CoordinateType) => void;
    doPushOtherPanes: (sums: SumsType, dragPercent: number) => null | {};
    sumPrevPanesSize: (splitterIndex: number) => number;
    sumNextPanesSize: (splitterIndex: number) => number;
    findPrevExpandedPane: (splitterIndex: number) => Pane | {};
    checkSplitpanesNodes: () => void;
    addSplitter: (paneIndex: number, nextPaneNode: Node, isVeryFirst: boolean) => void;
    removeSplitter: (node: Node) => void;
    redoSplitters: () => void;
    requestUpdate: (arg0: RequestUpdateType) => void;
    onPaneAdd: (pane: Pane) => void;
    onPaneRemove: (pane: Pane) => void;
    resetPaneSizes: (changedPanes: ChangedPaneType) => void;
    equalize: () => void;
    initialPanesSizing: () => void;
    equalizeAfterAddOrRemove: (arg0: ChangedPaneType) => void;
    readjustSizes: (leftToAllocate: number, ungrowable: number[], unshrinkable: number[]) => void;
}

export interface SplitpaneWatch {
    panes: SplitpaneWatchPaneType;
    horizontal: () => void;
    firstSplitter: () => void;
    dblClickSplitter: (enable: boolean) => void;
}

export interface Splitpanes extends VueConstructor {
    props: SplitpaneProps;
    data: () => SplitpaneData;
    computed: SplitpaneComputed;
    methods: SplitPaneMethods;
    watch: SplitpaneWatch;
    mounted: () => void;
    beforeDestroy: () => void;
    beforeUpdate: () => void;
    render: (createEl: any) => any;
}

export interface PaneProps {
    size: number | string;
    minSize: number | string;
    maxSize: number | string;
}

export interface PaneData {
    style: any;
}

export interface PaneMethods {
    update: (style: any) => void;
}

export interface PaneComputed {
    sizeNumber: () => number | null;
    maxSizeNumber: () => number;
    minSizeNumber: () => number;
}

export interface PaneWatch {
    sizeNumber: (size: number) => void;
    minSizeNumber: (min: number) => void;
    maxSizeNumber: (max: number) => void;
}

export interface Pane extends VueConstructor {
    props: PaneProps;
    data: () => PaneData;
    methods: PaneMethods;
    computed: PaneComputed;
    watch: PaneWatch;
    mounted: () => void;
    beforeDestroy: () => void;
    beforeUpdate: () => void;
    render: (createEl: any) => any;
}

export const Pane: Pane;
export const Splitpanes: Splitpanes;
