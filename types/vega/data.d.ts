import { OnTrigger } from './on-trigger';
import { Transform } from './transform';

export declare type FieldParam = {
    field: string;
};
export declare type DataType = 'boolean' | 'number' | 'date' | 'string';
export declare type Parse = 'auto' | {
    [f: string]: DataType | string;
};
export interface FormatJSON {
    type: 'json';
    parse?: Parse;
    property?: string;
    copy?: boolean;
}
export interface FormatSV {
    type: 'csv' | 'tsv';
    parse?: Parse;
}
export interface FormatDSV extends FormatSV {
    delimiter: string;
}
export declare type FormatTopoJSON = {
    type: 'topojson';
    property?: string;
} & ({
    feature: 'string';
} | {
    mesh?: 'string';
});
export declare type Format = FormatJSON | FormatSV | FormatDSV | FormatTopoJSON;
export declare type Data = ({
    source: string;
} | {
    values: any[];
} | {
    url: string;
} | {}) & {
    name: string;
    on?: OnTrigger[];
    format?: Format;
    transform?: Transform;
};
