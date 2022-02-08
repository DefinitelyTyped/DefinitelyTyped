import { VueConstructor } from 'vue';
import { DatePickerProps } from './shared.d';

export const DatePicker: DatePicker;

export interface DatePicker extends VueConstructor {
    props: DatePickerProps;
    date: () => {
        receivedDate: string;
        receivedIsFocus: boolean;
        $lastValidDate: string;
    };
    watch: {
        date(newValue: Date): void;
        isFocus(newValue: boolean): void;
    };
    methods: {
        handleClickDate(date: Date, type: string): void;
        changeLastValidDate(date: string): void;
        handleOutsideClick(e: MouseEvent): void;
        handleFocusIn(e: MouseEvent): void;
    };
}
