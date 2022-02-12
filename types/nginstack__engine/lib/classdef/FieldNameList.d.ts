export = FieldNameList;
declare function FieldNameList(): void;
declare class FieldNameList {
    private init_;
    private _items;
    private _nameToFieldId;
    getCount(): any;
    clear(): void;
    add(fieldName: string): void;
    remove(fieldName: string): void;
    assign(fieldNameList: FieldNameList): void;
    clone(): FieldNameList;
    map(func: (arg0: string, ...args: any[]) => void, ...args: any[]): void;
    toArray(): any[];
}
