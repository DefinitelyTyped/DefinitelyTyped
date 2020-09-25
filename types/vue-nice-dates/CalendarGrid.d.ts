import { VueConstructor } from 'vue';
import { Locale } from 'date-fns';
import { DateLocale, Modifiers, ModifiersClassNames } from './shared.d';

export const CalendarGrid: CalendarGrid;

export interface CalendarGrid extends VueConstructor {
    props: {
        locale: DateLocale;
        month: Date;
        transitionDuration: number;
        modifiers: Modifiers;
        modifiersClassNames: ModifiersClassNames;
    };
    data: () => {
        startDate: Date | null;
        endDate: Date | null;
        cellHeight: number;
        isWide: boolean;
        offset: number;
        origin: string;
        transition: boolean;
        days: Date[];
        $timeoutId: null | number;
        $hasMounted: boolean;
    };
    computed: {
        classObject: {
            [propName: string]: boolean;
        };
        styleObject: {
            [propName: string]: string;
        };
        styleObjectGrid: {
            [propName: string]: string;
        };
    };
    watch: {
        [propName: string]: (newValue: Date, oldValue: Date) => void;
    };
    methods: {
        resetData(date: Date): void;
        initCell(): void;
        generateDays(): void;
        handleMouseLeaveDates(): void;
        handleClickDate(date: Date): void;
        handleMouseEnterDate(date: Date): void;
        generateModifiers(
            date: Date,
        ): {
            [propName: string]: boolean;
        };
        computeModifiers(
            modifiers: any,
            date: Date,
        ): {
            [propName: string]: boolean;
        };
        lightFormat(date: Date, format?: string): string;
        getStartDate(date: Date, locale: Locale): Date;
        getEndDate(date: Date, locale: Locale): Date;
        rowsInMonth(date: Date, locale: Locale): number;
        rowsBetweenDates(startDate: Date, endDate: Date, locale: Locale): number;
        transitionToCurrentMonth(newValue: Date, oldValue: Date): void;
    };
}
