// Type definitions for @fullcalendar/vue 4.4
// Project: https://github.com/fullcalendar/fullcalendar-vue#readme
// Definitions by: Nader Al-Shamma <https://github.com/nadershamma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import Vue from 'vue';
import { Component } from 'vue/types/options';
import { CalendarProps } from './options';

export interface FullCalendarComponent extends Vue {
    buildCalendarOptions: () => void;
    recordDirtyOption: (optionName: any, newVal: any) => void;
    renderDirty: () => void;
    getApi: () => any;
}

declare const FullCalendar: Component<any, any, any, CalendarProps>;
export function install(Vue: () => any): void;
export default FullCalendar;
