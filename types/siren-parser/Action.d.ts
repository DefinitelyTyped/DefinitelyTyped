import { Field } from './Field';

export default function(action: object): Action;

export interface Action {
    name: string;
    href: string;
    class?: string[];
    method?: string;
    title?: string;
    type?: string;
    fields?: Field[];

    hasClass(cls: string | RegExp): boolean;
    hasField(fieldName: string | RegExp): boolean;
    hasFieldByName(fieldName: string | RegExp): boolean;
    hasFieldByClass(fieldClass: string | RegExp): boolean;
    hasFieldByType(fieldType: string | RegExp): boolean;

    getField(fieldName: string | RegExp): Field | undefined;
    getFieldByName(fieldName: string | RegExp): Field | undefined;
    getFieldByClass(fieldClass: string | RegExp): Field | undefined;
    getFieldsByClass(fieldClass: string | RegExp): Field[];
    getFieldByClasses(fieldClasses: ReadonlyArray<string | RegExp>): Field | undefined;
    getFieldsByClasses(fieldClasses: ReadonlyArray<string | RegExp>): Field[];
    getFieldByType(fieldType: string | RegExp): Field | undefined;
    getFieldsByType(fieldType: string | RegExp): Field[];
}

export { Field, FieldType } from './Field';
