

// Type definitions for vue-datetime 1.0.0
// Project: https://github.com/mariomka/vue-datetime#readme
// Definitions by: Olavo Rocha Neto <https://github.com/olavorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6.2

import { VueConstructor } from 'vue';

export const Datetime: VueDateTimeConstructor;
export const DatetimePopup: VueDateTimeConstructor;
export default Datetime;

export interface VueDateTimeProps {
}

export interface VueDateTimeData {
}

export interface VueDateTimeWatch {
}

export interface VueDateTimeMethods {
}

export interface VueDateTimeComputed {
}

export interface VueDateTimeConstructor extends VueConstructor {
    props: VueDateTimeProps;
    data: () => VueDateTimeData;
    watch: VueDateTimeWatch;
    methods: VueDateTimeMethods;
    computed: VueDateTimeComputed;
}
