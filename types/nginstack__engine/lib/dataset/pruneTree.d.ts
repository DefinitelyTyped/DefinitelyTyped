export = pruneTree;
declare function pruneTree(
    ds: DataSet,
    idField: string,
    parentField: string,
    filterFunc: (arg0: DataSet) => boolean
): void;
declare namespace pruneTree {
    export { DataSet };
}
type DataSet = import('./DataSet');
