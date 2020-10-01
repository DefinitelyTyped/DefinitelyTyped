import { VueConstructor } from 'vue';
import { DatePickerProps } from './shared.d';

export const DatePicker: DatePicker;

export interface DatePicker extends VueConstructor {
    props: Partial<DatePickerProps>;
    date: () => {
        receivedDate: string;
        receivedIsFocus: boolean;
        $lastValidDate: string;
    };
    watch: {
        [propName: string]: (date: Date) => void;
    };
    methods: {
        handleClickDate(date: Date): void;
        handleMouseEnterDate(date: Date): void;
        handleMouseLeaveDates(): void;
        handleMonthChange(date: Date): void;
        changeLastValidDate(date: string): void;
        handleOutsideClick(e: MouseEvent): void;
        handleFocusIn(e: MouseEvent): void;
    };
}
