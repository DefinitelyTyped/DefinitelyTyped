export interface LabelKeyObject {
    label: string;
    key: string;
}

export type Data = object[];
export type Headers = LabelKeyObject[] | string[];
declare function toCsv(data: object[], headers: Headers, separator?: string, enclosingCharacter?: string): string;
export { toCsv };
