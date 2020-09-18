import { VueConstructor } from 'vue';
import { DateRangePickerProps } from './shared.d';

export const DateRangePickerCalendar: DateRangePickerCalendar;

export interface DateRangePickerCalendar extends VueConstructor {
    props: Partial<DateRangePickerProps>;
    date: () => {
        receivedStartDate: string | Date | null;
        receivedEndDate: string | Date | null;
        hoveredDate: Date | null;
    };
    computed: {
        displayedStartDate: string | Date | null;
        displayedEndDate: string | Date | null;
        receivedDate: string | Date | null;
    };
    watch: {
        startDate(date: string): void;
        endDate(date: string): void;
    };
    methods: {
        initStartDate(): void;
        initEndDate(): void;
        processInitalDate(): void;
        handleClickDate(date: Date): void;
        handleMouseEnterDate(date: Date): void;
        handleMouseLeaveDates(): void;
        handleMonthChange(date: Date): void;
        changeLastValidDate(name: string, date: string | Date): void;
        isStartDate(date: Date): boolean;
        isMiddleDate(date: Date): boolean;
        isEndDate(date: Date): boolean;
        mergeModifiers(): {
            [propName: string]: ((date: Date) => boolean) | boolean;
        };
        isValidAndSelectable(date: Date): boolean;
    };
}
