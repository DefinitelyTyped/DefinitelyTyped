import { VueConstructor } from 'vue';
import { DateRangePickerProps } from './shared.d';

export const DateRangePicker: DateRangePicker;

export interface DateRangePicker extends VueConstructor {
    props: DateRangePickerProps;
    date: () => {
        receivedStartDate: string;
        receivedEndDate: string;
        receivedIsFocus: boolean;
        receivedFocusName: string;
        $lastValidStartDate: string;
        $lastValidEndDate: string;
        $hasTouchedStartDate: boolean;
        $hasTouchedEndDate: boolean;
    };
    watch: {
        startDate(date: string): void;
        endDate(date: string): void;
        isFocus(isFocus: boolean): void;
        receivedFocusName(focusName: string): void;
    };
    methods: {
        handleClickDate(date: Date, type: string): void;
        changeLastValidStartDate(date: string): void;
        changeLastValidEndDate(date: string): void;
        updateReceivedStartDate(date: string): void;
        updateReceivedEndDate(date: string): void;
        handleOutsideClick(e: MouseEvent): void;
        handleFocusIn(e: MouseEvent): void;
        triggerFocusEvent(focusName: string): void;
    };
}
