// Type definitions for flowchart-vue 0.15
// Project: https://github.com/joyceworks/flowchart-vue
// Definitions by: Nikolay Moskvin <https://github.com/moskvin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { VueConstructor } from 'vue';

interface FlowChartVueConstructor extends VueConstructor {
    props: any;
    data: () => any;
    watch: any;
    methods: any;
}

export default flowchart;
export const flowchart: FlowChartVueConstructor;
