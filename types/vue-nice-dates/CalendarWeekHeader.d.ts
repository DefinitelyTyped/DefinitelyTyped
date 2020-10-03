import { VueConstructor } from 'vue';
import { DateLocale } from './shared.d';

export const CalendarWeekHeader: CalendarWeekHeader;

export interface CalendarWeekHeader extends VueConstructor {
    props: {
        locale: DateLocale;
    };
    methods: {
        weekDays(): string[];
    };
}
