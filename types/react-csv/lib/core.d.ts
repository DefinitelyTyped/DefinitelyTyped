export interface LabelKeyObject {
    label: string;
    key: string;
}

export type Data = object[];
export type Headers = LabelKeyObject[] | string[];
declare function toCSV(data: object[], headers: Headers, separator?: string, enclosingCharacter?: string): string;
export { toCSV };
