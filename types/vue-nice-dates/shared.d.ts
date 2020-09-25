import { Locale } from 'date-fns';

export type DateLocale = Locale;

export interface Modifiers {
    [propName: string]: (date: Date) => boolean;
}
export interface ModifiersClassNames {
    [propName: string]: string;
}

export interface DatePickerProps {
    locale: DateLocale;
    date: string;
    isFocus: boolean;
    month?: Date;
    format: string;
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
    isFocus: boolean;
    month?: Date;
    format: string;
    startDate: string;
    endDate: string;
    focusName: string;
    minimumDate: Date | null;
    maximumDate: Date | null;
    modifiers: Modifiers;
    modifiersClassNames: ModifiersClassNames;
    validator: {
        [propName: string]: (date: Date) => boolean;
    };
}
