import ErrorListener from "./ErrorListener";

export default class ProxyErrorListener extends ErrorListener {
    readonly delegates: ErrorListener[];

    constructor(delegates: ErrorListener[]);
}
