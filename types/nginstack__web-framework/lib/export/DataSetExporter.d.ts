export = DataSetExporter;
declare function DataSetExporter(dataSet: DataSet): void;
declare class DataSetExporter {
    constructor(dataSet: DataSet);
    dataSet: import('@nginstack/engine/lib/dataset/DataSet');
}
declare namespace DataSetExporter {
    export { DataSet };
}
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
