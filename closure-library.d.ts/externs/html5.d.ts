/**
 * This is not an official DOM interface. It is used to add generic typing
 * and respective type inference where available.
 * {@see goog.Thenable} inherits from this making all promises
 * interoperate.
 * @interface
 * @template TYPE
 */
interface IThenable<TYPE> {

    /**
     * @param {(function(TYPE):
     *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled
     * @param {(function(*): *)=} opt_onRejected
     * @return {IThenable.<RESULT>}
     * @template RESULT
     */
    then<RESULT>(opt_onFulfilled: (arg0: TYPE) => RESULT, opt_onRejected: (arg0: any) => any): IThenable<RESULT>;
}
