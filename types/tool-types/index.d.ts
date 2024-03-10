/// <reference types="node"/>

export {}


declare global {

    interface Cookie {
        get(key: string, defaultValue?: any): string;
        set(key: string, value: any, expires?: number, path?: string, domain?: string, secure?: string): void;
        del(key: string): void;
    }

    interface Window {
        isFunction(obj: any): boolean;

        isArray(obj: any): boolean;

        isNumber(obj: any): boolean;

        uuid(format?: string): string;

        cookie: Cookie;
    }

    interface Location {
        query(name: string, defaultValue?:any): string;
    }

    interface String {

        base64(): string;

        colorRgba(): {R: number; G: number; B: number; A: number};

        ellipsis(len: number, ellipsis?: string, textOverflow?: string | 'left' | 'center' | 'right'): string;

        uuid(): string;

        toNumber(): number;

        format(data: any): string;

        toJSON(reviver?: (this: any, key: string, value: any) => any): any;

    }

    interface Object {

        toJSONString(): string;
        toJSONString(replacer?: (number | string)[] | null, space?: string | number): string;
        toJSONString(replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;

    }

    interface LocalStorageConstructor {

        setJSON<T = any>(key: string, value: T): T;

        getJSON<T = any>(key: string): T;

    }

    interface Number {
        toDate(): Date;
    }

    interface DateConstructor {
        DAYS: number;
        HOURS: number;
        MINUTES: number;
        SECONDS: number;
        MILLISECONDS: number;

        FORMAT_DATE: string;
        FORMAT_TIME: string;
        FORMAT_DATE_TIME: string;
        FORMAT_DATE_TIMEZ: string;
        FORMAT_IOS_DATE_TIME: string;

        newDate(noTime?: boolean): Date;

        unixTime(): number;
    }

    interface Date {
        localeTimeString(style?: "full" | "long" | "medium" | "short" | undefined): string;
        localeDateString(style?: "full" | "long" | "medium" | "short" | undefined): string;

        format(format: string): string;

        addYears(years: number): Date;
        addMonths(months: number): Date;
        addDays(days: number): Date;
        addHours(hours: number): Date;
        addSeconds(seconds: number): Date;

    }
}


