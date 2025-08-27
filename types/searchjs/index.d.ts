export function setDefaults(options: {
    negator: boolean;
    joinAnd: string;
    text: boolean;
    word: boolean;
    start: boolean;
    end: boolean;
    separator: string;
    propertySearch: boolean;
    propertySearchDepth: number;
}): void;

export function resetDefaults(): void;

export function singleMatch(field: any, s: any, text: boolean, word: boolean, start: boolean, end: boolean): any;

export function matchArray(ary: any[], search: any): any;

export function matchObject(obj: any, search: any): any;
