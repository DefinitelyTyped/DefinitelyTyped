export = DataSetManager;
declare function DataSetManager(): void;
declare class DataSetManager {
    private _dataSets;
    addDataSetQuery(dataSetName: string, query: string, union?: boolean): void;
    addDataSet(dataSetName: string, dataSet: DataSet): void;
    setDataSetQuery(dataSetName: string, query: string, keepDataSet: any, union: any): void;
    setDataSet(dataSetName: string, dataSet: DataSet): void;
    private _executeQueries;
    private _executeQuerys;
    executeAllQueries(): void;
    private executeAllQuerys;
    executePendingQueries(): void;
    private executePendingQuerys;
    getDataSet(dataSetName: string): DataSet;
    getQuery(dataSetName: string): string | any[];
    getDataSetNames(): any[];
    dataSetNameExists(dataSetName: string): boolean;
    clearAll(): void;
    clearDataSets(): void;
    delDataSets(names: any): void;
    saveToStream(stream: MemoryStream): void;
    private _getDataSetNameFromStream;
    loadFromStream(stream: File | MemoryStream): void;
}
declare namespace DataSetManager {
    export { File, MemoryStream };
}
import DataSet = require('./DataSet.js');
type MemoryStream = import('../io/MemoryStream');
type File = import('../io/File');
