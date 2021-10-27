export = FieldNameRepository;
declare function FieldNameRepository(fieldList: any): void;
declare class FieldNameRepository {
    constructor(fieldList: any);
    hashList: {};
    getArrayFromList(list: any): any;
    setFieldNameList(list: any): void;
    private list_;
    clear(): void;
    hasFieldName(fieldName: any): boolean;
}
