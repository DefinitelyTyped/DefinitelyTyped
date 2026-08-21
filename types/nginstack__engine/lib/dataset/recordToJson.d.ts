export = recordToJson;
declare function recordToJson(
    dataSet: DataSet,
    options?: {
        toLowerCase?: boolean;
        onlyFilled?: boolean;
    }
): string;
declare namespace recordToJson {
    export { DataSet };
}
type DataSet = import('./DataSet');
