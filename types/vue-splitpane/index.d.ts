// Type definitions for vue-splitpane 1.0
// Project: https://github.com/PanJiaChen/vue-split-pane/
// Definitions by: noonhorse <https://github.com/noonhorse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5
import { VueConstructor } from 'vue';

export default Splitpane;
export const Splitpane: SplitpaneConstructor;

export interface SplitpaneProps {
  minPercent: number;
  defaultPercent: number;
  split: string; // = ['vertical', 'horizontal']
  className: string;
}

export interface SplitpaneData {
  active: boolean;
  hasMoved: boolean;
  height: any; // null number string
  percent: number;
  type: string;
  resizeType: string;
}

export interface SplitpaneWatch {
  defaultPercent: (val: any) => void;
}

export interface SplitpaneMethods {
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseMove: (e: Event) => void;
}

export interface SplitpaneComputed {
  userSelect: () => string;
  cursor: () => string;
}

export interface SplitpaneConstructor extends VueConstructor {
  props: SplitpaneProps;
  data: () => SplitpaneData;
  watch: SplitpaneWatch;
  methods: SplitpaneMethods;
  computed: SplitpaneComputed;
}
