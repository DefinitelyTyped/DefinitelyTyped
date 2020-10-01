import { VueConstructor } from 'vue';
import { DateLocale } from './shared.d';

export const CalendarNavigation: CalendarNavigation;

export interface CalendarNavigation extends VueConstructor {
    props: {
        locale: DateLocale;
        month: Date;
        minimumDate: Date | null;
        maximumDate: Date | null;
    };
    computed: {
        isMinimumMonth: boolean;
        isMaximumMonth: boolean;
        monthText: string;
    };
    methods: {
        [propName: string]: () => void;
    };
}
