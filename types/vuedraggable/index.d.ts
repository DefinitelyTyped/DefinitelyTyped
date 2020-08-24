// Type definitions for vuedraggable 2.23
// Project: https://github.com/SortableJS/Vue.Draggable
// Definitions by: Beomy <https://github.com/beomy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { VueConstructor } from 'vue';

interface DraggableConstructor extends VueConstructor {
  props: any;
  data: () => any;
  watch: any;
  methods: any;
}

export default draggable;
export const draggable: DraggableConstructor;
