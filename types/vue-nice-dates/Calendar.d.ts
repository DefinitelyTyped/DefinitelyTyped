import { VueConstructor } from 'vue';
import { DateLocale, Modifiers, ModifiersClassNames } from './shared.d';

export const Calendar: Calendar;

export interface Calendar extends VueConstructor {
    props: {
        locale: DateLocale;
        date: Date | string;
        initialDate?: Date;
        enableGridSwitch: boolean;
        modifiers: Modifiers;
        modifiersClassNames: ModifiersClassNames;
        minimumDate: Date | null;
        maximumDate: Date | null;
    };
    data: () => {
        receivedInitialDate: Date | null;
        gridType: string;
    };
    computed: {
        mergedModifiers: {
            [propName: string]: (date: Date, type: string) => boolean;
        };
    };
    watch: {
        [propName: string]: (newValue: Date | string, oldValue: Date | string) => void;
    };
    methods: {
        handleClickTitle(): void;
        handleNavigate(date: Date): void;
        handleClickDate(date: Date, type: string): void;
        handleMouseEnterDate(date: Date): void;
        handleMouseLeaveDates(): void;
        getGridType(type: string, isReverse: boolean): string;
    };
}
