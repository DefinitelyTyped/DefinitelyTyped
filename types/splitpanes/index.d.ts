// Type definitions for splitPanes 1.0
// Project: https://github.com/antoniandre/splitpanes
// Definitions by: teenhe <https://github.com/noonhorse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5
import { VueConstructor } from 'vue';

export default splitPanes;
export const splitPanes: splitPanesConstructor;

export interface positionTypes {
  x: number;
  y: number;
}
export interface containerTypes {
  vnode: any;
  offsetLeft: null | number;
  offsetTop: null | number;
}
export interface touchTypes {
  mouseDown: boolean;
  dragging: boolean;
  activeSplitter: null | number;
}

export interface splitterTapsTypes {
  splitter: null | number;
  timeoutId: null | object;
}

export interface splitPanesProps {
  watchSlots: boolean; // 是否监控插槽 false
  horizontal: boolean; // 是否水平 false
  pushOtherPanes: boolean; // 支持添加 true
  dblClickSplitter: boolean; // 双击分离 true
}

export interface splitPanesData {
  container: containerTypes;
  slotsCount: number;
  vnodes: any[];
  panes: any[];
  splitters: any[];
  touch: touchTypes;
  // Detect double click on touch devices.
  splitterTaps: splitterTapsTypes;
  slotsCopy: string;
}

export interface splitPanesWatch {
  defaultPercent: (val: any) => void;
}

export interface splitPanesMethods {
  bindEvents: () => void;
  onMouseDown: (e: Event, splitterIndex: number) => void;
  onMouseMove: (e: Event) => void;
  onMouseUp: () => void;
  onSplitterClick: (e: Event, splitterIndex: number) => void;
  onSplitterDblClick: (e: Event, splitterIndex: number) => void;
  getCurrentMouseDrag: (e: Event) => positionTypes;
  getCurrentDragPercentage: (drag: object) => number;
  calculatePanesSize: (drag: object) => boolean | void;
  doPushOtherPanes: (sums: object, dragPercentage: number) => any;
  sumPrevPanesSize: (splitterIndex: number) => object;
  sumNextPanesSize: (splitterIndex: number) => object;
  findPrevExpandedPane: (splitterIndex: number) => object;
  findNextExpandedPane: (splitterIndex: number) => object;
}

export interface splitPanesComputed {
  defaultWidth: () => number;
}

export interface splitPanesConstructor extends VueConstructor {
  props: splitPanesProps;
  data: () => splitPanesData;
  watch: splitPanesWatch;
  methods: splitPanesMethods;
  computed: splitPanesComputed;
  mounted: () => void;
  beforeDestroy: () => void;
  beforeUpdate: () => void;
  render: (createEl: any) => any;
}
