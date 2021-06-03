import { Locale } from 'date-fns';

export type DateLocale = Locale;

export interface Modifiers {
    [propName: string]: (date: Date, type: string) => boolean;
}
export interface ModifiersClassNames {
    [propName: string]: string;
}

export interface DatePickerProps {
    locale: DateLocale;
    date: string;
    isFocus: boolean;
    initialDate?: Date;
    format: string;
    enableGridSwitch: boolean;
    minimumDate: Date | null;
    maximumDate: Date | null;
    modifiers: Modifiers;
    modifiersClassNames: ModifiersClassNames;
    validator: {
        [propName: string]: (date: Date) => boolean;
    };
}

export interface DateRangePickerProps {
    locale: DateLocale;
    format: string;
    startDate: string;
    endDate: string;
    initialDate?: Date;
    isFocus: boolean;
    focusName: string;
    enableGridSwitch: boolean;
    minimumDate: Date | null;
    maximumDate: Date | null;
    modifiers: Modifiers;
    modifiersClassNames: ModifiersClassNames;
    validator: {
        [propName: string]: (date: Date) => boolean;
    };
}
