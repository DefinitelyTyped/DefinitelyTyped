import { VueConstructor } from "vue";
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
