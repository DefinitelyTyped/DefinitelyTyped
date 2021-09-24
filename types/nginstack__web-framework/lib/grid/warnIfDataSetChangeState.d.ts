export = warnIfDataSetChangeState;
declare function warnIfDataSetChangeState(
    ds: DataSet,
    message: string,
    func: (arg0: DataSet) => any,
    thisObj?: any
): any;
declare namespace warnIfDataSetChangeState {
    export { logger_, DataSet };
}
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
declare var logger_: Logger;
import Logger = require('@nginstack/engine/lib/log/Logger.js');
