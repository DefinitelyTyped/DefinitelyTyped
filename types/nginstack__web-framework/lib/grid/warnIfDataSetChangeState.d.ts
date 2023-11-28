export = warnIfDataSetChangeState;
declare function warnIfDataSetChangeState(
    ds: any,
    message: string,
    func: (arg0: DataSet) => any,
    thisObj?: any
): any;
declare namespace warnIfDataSetChangeState {
    export { logger_, DataSet };
}
type DataSet = any;
declare let logger_: any;
