// Type definitions for fullcalendar-vue 4.4.0
// Project: https://github.com/fullcalendar/fullcalendar-vue
// Definitions by: Nader Al-Shamma <https://github.com/nadershamma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import Vue from 'vue';
import { Component } from 'vue/types/options';
import { CalendarProps } from './options';

declare const FullCalendar: Component<any, any, any, CalendarProps>;

interface CalendarComponent extends Vue {
    buildCalendarOptions: () => void;
    recordDirtyOption: (optionName: any, newVal: any) => void;
    renderDirty: () => void;
    getApi: () => any;
}

export function install(Vue: () => any): void;

export type FullCalendarComponent = CalendarComponent;
export default FullCalendar;
