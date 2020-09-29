import { VueConstructor } from 'vue';
import { DateLocale, Modifiers, ModifiersClassNames } from './shared.d';

export const CalendarDay: CalendarDay;

export interface CalendarDay extends VueConstructor {
    props: {
        locale: DateLocale;
        date: Date;
        height: number;
        modifiers: Modifiers;
        modifiersClassNames: ModifiersClassNames;
    };
    data: () => {
        dayOfMonth: boolean;
    };
    computed: {
        computedModifiersClassNames: {
            [propName: string]: string;
        };
        computedModifiers: {
            [propName: string]: ((date: Date) => boolean) | boolean;
        };
        dayClassNames: {
            [propName: string]: ((date: Date) => boolean) | boolean;
        };
        monthString: string;
    };
}
