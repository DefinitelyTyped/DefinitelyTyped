import { Field, FieldObject, Formatters } from '.';

export interface Options {
    fields?: Field[] | undefined;
    transforms?: Array<(dataRow: any) => any> | undefined;
    formatters?: Formatters | undefined;
    defaultValue?: string | undefined;
    delimiter?: string | undefined;
    eol?: string | undefined;
    header?: boolean | undefined;
    includeEmptyRows?: boolean | undefined;
    withBOM?: boolean | undefined;
}

export default class JSON2CSVBase {
    constructor(opts?: Options);

    opts: Required<Options>;

    getHeader(): string;

    preprocessOpts(opts?: Options): Required<Options>;
    preprocessFieldsInfo(fields: Field[], globalDefaultValue: string): FieldObject[];
    preprocessRow(row: any[]): any[];

    processRow(row?: any[]): string | undefined;
    processCell(row: any[], fieldInfo: FieldObject): string;
    processValue(value: any): string;
}
