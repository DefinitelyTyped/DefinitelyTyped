export = recordToObject;
declare function recordToObject(
    dataSet: DataSet,
    opt_options?: {
        toLowerCase?: boolean;
        onlyFilled?: boolean;
    }
): any;
declare namespace recordToObject {
    export { DataSet };
}
type DataSet = import('./DataSet');
