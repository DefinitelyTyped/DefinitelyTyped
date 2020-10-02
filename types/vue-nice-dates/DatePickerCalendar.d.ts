import { VueConstructor } from 'vue';
import { DatePickerProps } from './shared.d';

export const DatePickerCalendar: DatePickerCalendar;

export interface DatePickerCalendar extends VueConstructor {
    props: Partial<DatePickerProps>;
    date: () => {
        receivedDate: string | Date | null;
    };
    watch: {
        [propName: string]: (date: Date) => void;
    };
    methods: {
        initDate(): void;
        isSelected(date: Date): boolean;
        isValidAndSelectable(date: Date): boolean;
        mergeModifiers(): {
            [propName: string]: (date: Date) => boolean;
        };
        handleClickDate(date: Date): void;
        handleMouseEnterDate(date: Date): void;
        handleMouseLeaveDates(): void;
        handleMonthChange(date: Date): void;
    };
}
