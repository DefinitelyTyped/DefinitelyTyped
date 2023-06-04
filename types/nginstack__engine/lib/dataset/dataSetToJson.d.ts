export = dataSetToJson;
declare function dataSetToJson(
    ds: DataSet,
    options?: {
        toLowerCase?: boolean;
        onlyFilled?: boolean;
    }
): string;
declare namespace dataSetToJson {
    export { DataSet };
}
type DataSet = import('./DataSet');
