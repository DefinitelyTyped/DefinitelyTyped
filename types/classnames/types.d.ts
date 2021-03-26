// This is the only way I found to break circular references between ClassArray and ClassValue
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface ClassArray extends Array<ClassValue> {}

export interface ClassDictionary {
    [id: string]: any;
}

export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

export type ClassNamesFn = (...classes: ClassValue[]) => string;

export type ClassNamesExport = ClassNamesFn & { default: ClassNamesFn };
