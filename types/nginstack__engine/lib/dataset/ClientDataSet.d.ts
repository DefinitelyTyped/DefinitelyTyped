export = ClientDataSet;
/**
 * Classe que busca emular a API do DataSet em navegadores Web. Ela não deve ser utilizada, pois
 * não implementa corretamente a API do DataSet, nem possui desempenho adequado. Ela existe apenas
 * para garantir a compatibilidade com códigos que fazem uso da função deprecated
 * *serialize*.
 * @param {*} dataSetOrArray
 * @param {*} howManyRecords
 * @param {*} fields
 * @constructor
 * @deprecated
 */
declare function ClientDataSet(dataSetOrArray: any, howManyRecords: any, fields: any): void;
declare class ClientDataSet {
    /**
     * Classe que busca emular a API do DataSet em navegadores Web. Ela não deve ser utilizada, pois
     * não implementa corretamente a API do DataSet, nem possui desempenho adequado. Ela existe apenas
     * para garantir a compatibilidade com códigos que fazem uso da função deprecated
     * *serialize*.
     * @param {*} dataSetOrArray
     * @param {*} howManyRecords
     * @param {*} fields
     * @constructor
     * @deprecated
     */
    constructor(dataSetOrArray: any, howManyRecords: any, fields: any);
    fieldNames: any;
    fieldTypes: any;
    fieldSizes: any;
    records: any;
    fieldCount: any;
    recordCount: any;
    isEmpty: boolean;
    bof: boolean;
    eof: boolean;
    recNo: any;
    bookmark: string;
    private indexOfFieldName_;
    private readRecord_;
    setRecNo(newRecNo: any, increment: any): void;
    setBookmark(bookmark: any): void;
    first(): void;
    last(): void;
    next(): void;
    prior(): void;
    getField(fieldReference: any): any;
    setField(fieldReference: any, value: any): void;
    fieldIsNull(fieldReference: any): boolean;
    getFieldName(fieldIndex: any): any;
    getFieldType(fieldReference: any): any;
    getFieldSize(fieldReference: any): any;
    append(): void;
    del(): void;
    deleteRecord: any;
    post(): void;
    cancel(): void;
    updateDataSet(dataSet: any): void;
}
