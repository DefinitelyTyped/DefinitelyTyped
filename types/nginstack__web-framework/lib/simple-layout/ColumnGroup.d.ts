export = ColumnGroup;
declare function ColumnGroup(name: string): void;
declare class ColumnGroup {
    constructor(name: string);
    name: string;
    color: string;
    lineHeight: number;
    bold: boolean;
    italic: boolean;
    align: string;
    style: string;
    private getColumnGroupDiv;
}
