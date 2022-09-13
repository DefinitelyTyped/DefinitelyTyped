export = recordToJson;
declare function recordToJson(
    dataSet: DataSet,
    opt_options?: {
        toLowerCase?: boolean;
        onlyFilled?: boolean;
    }
): string;
declare namespace recordToJson {
    export { DataSet };
}
type DataSet = import('./DataSet');
