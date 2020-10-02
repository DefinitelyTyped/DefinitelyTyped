// Type definitions for vue-datetime 1.0
// Project: https://github.com/mariomka/vue-datetime#readme
// Definitions by: Olavo Rocha Neto <https://github.com/olavorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { VueConstructor } from 'vue';
export const Datetime: VueDateTimeConstructor;
export const DatetimePopup: VueDateTimeConstructor;
export default Datetime;

export interface VueDateTimeProps {
    inputClass: any;
    inputStyle: any;
}

export interface VueDateTimeData {
    value: string;
}

export interface VueDateTimeConstructor extends VueConstructor {
    props: VueDateTimeProps;
    data: () => VueDateTimeData;
    methods: any;
}
