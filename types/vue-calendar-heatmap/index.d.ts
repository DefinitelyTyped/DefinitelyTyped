// Type definitions for vue-calendar-heatmap 0.8
// Project: https://github.com/julienr114/vue-calendar-heatmap
// Definitions by: Chika Ishikawa <https://github.com/chikaichikai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

import { VueConstructor } from 'vue';
export const VueCalendarHeatmap: VueCalendarHeatmapConstructor;
export default VueCalendarHeatmap;

export interface VueCalendarHeatmapProps {
    max: number;
    rangeColor: any[];
    values: any[];
    locale: object;
    tooltip: boolean;
    tooltipUnit: string;
    vertical: boolean;
    noDataText: string;
}

export interface VueCalendarHeatmapData {
    now: Date;
}

/**
 * NOTE: computedプラパティは、返り値の型を1つ1つ調べねばならず時間かかりそう
 * translate()の返り値の型がわかればmethodsでも型定義かけそう
 */
/* export interface VueCalendarHeatmapComputed {
    position: () => string
}
*/

// export interface VueCalendarHeatmapMethods {}

export interface VueCalendarHeatmapConstructor extends VueConstructor {
    props: VueCalendarHeatmapProps;
    data: () => VueCalendarHeatmapData;
    // computed: VueCalendarHeatmapComputed
    computed: any;
    // methods: VueCalendarHeatmapMethods
    methods: any;
}
