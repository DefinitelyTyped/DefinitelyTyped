import { VueConstructor } from 'vue';
import { DateLocale, Modifiers, ModifiersClassNames } from './shared.d';

export const Calendar: Calendar;

export interface Calendar extends VueConstructor {
    props: {
        locale: DateLocale;
        date: Date | string;
        month?: Date;
        modifiers: Modifiers;
        modifiersClassNames: ModifiersClassNames;
        minimumDate: Date | null;
        maximumDate: Date | null;
    };
    data: () => {
        receivedMonth?: Date | null;
        $isChangedFromInput: boolean;
    };
    computed: {
        mergedModifiers: {
            [propName: string]: (date: Date) => boolean;
        };
    };
    watch: {
        [propName: string]: (date: Date | string) => void;
    };
    methods: {
        [propName: string]: (date?: Date | string) => void;
    };
}
