import { VueConstructor } from 'vue';
import { DatePickerProps } from './shared.d';

export const DatePickerCalendar: DatePickerCalendar;

export interface DatePickerCalendar extends VueConstructor {
    props: Omit<DatePickerProps, 'isFocus'>;
    date: () => {
        receivedDate: string | Date | null;
    };
    watch: {
        [propName: string]: (date: Date) => void;
    };
    methods: {
        initDate(): void;
        isValidAndSelectable(date: Date): boolean;
        handleClickDate(date: Date, type: string): void;
        changeLastValidDate(date: string): void;
    };
}
