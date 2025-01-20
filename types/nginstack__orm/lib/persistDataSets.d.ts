export = persistDataSets;
declare function persistDataSets(dataSets: DataSet | DataSet[]): number;
declare namespace persistDataSets {
    export { DataSet };
}
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
