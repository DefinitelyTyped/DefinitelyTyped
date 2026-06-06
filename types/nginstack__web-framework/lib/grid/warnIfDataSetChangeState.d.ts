export = warnIfDataSetChangeState;
declare function warnIfDataSetChangeState(
    ds: DataSet,
    message: string,
    func: (arg0: DataSet) => any,
    thisObj?: any,
): any;
declare namespace warnIfDataSetChangeState {
    export { DataSet, logger_ };
}
declare let logger_: Logger;
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
import Logger = require("@nginstack/engine/lib/log/Logger.js");
