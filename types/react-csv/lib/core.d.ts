export interface LabelKeyObject {
    label: string;
    key: string;
}

export type Data = object[];
export type Headers = LabelKeyObject[] | string[];
export type toCsv = (data: object[], headers: Headers, separator?: string | undefined, enclosingCharacter?: string | undefined) => void;
