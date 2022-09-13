import { VueConstructor } from 'vue';
import { DateRangePickerProps } from './shared.d';

export const DateRangePickerCalendar: DateRangePickerCalendar;

export interface DateRangePickerCalendar extends VueConstructor {
    props: Omit<DateRangePickerProps, 'isFocus'>;
    date: () => {
        receivedStartDate: string | Date | null;
        receivedEndDate: string | Date | null;
        hoveredDate: Date | null;
    };
    computed: {
        displayedStartDate: string | Date | null;
        displayedEndDate: string | Date | null;
        receivedDate: string | Date | null;
        mergedModifiers: {
            [prop: string]: (date: Date, type: string) => boolean;
        };
    };
    watch: {
        [prop: string]: (date: string) => void;
    };
    methods: {
        initStartDate(): void;
        initEndDate(): void;
        processInitalDate(): void;
        handleClickDate(date: Date, type: string): void;
        handleMouseEnterDate(date: Date): void;
        handleMouseLeaveDates(): void;
        changeLastValidDate(name: string, date: string | Date): void;
        isStartDate(date: Date): boolean;
        isMiddleDate(date: Date): boolean;
        isEndDate(date: Date): boolean;
        isValidAndSelectable(date: Date): boolean;
    };
}
