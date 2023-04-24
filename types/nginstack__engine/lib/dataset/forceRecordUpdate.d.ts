export = forceRecordUpdate;
declare function forceRecordUpdate(
    queryFunc: () => DataSet,
    updateFunc: (arg0: DataSet) => any,
    opt_options?: {
        context?: any;
        timeout?: number;
    }
): DataSet;
declare namespace forceRecordUpdate {
    export { DataSet };
}
type DataSet = import('./DataSet');
