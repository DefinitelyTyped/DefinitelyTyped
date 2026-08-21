type CallBackFunction = () => Promise<any>;

/**
 * @param fn The function which will be used as parameter should return a PROMISE & SHOULD NOT HAVE ANY PARAMETER it's compulsory, as its a async retry mechanism. Also you can BIND the global scope too with the function in order use the global scoped variables like this => <function name>.bind(this).
 * @param maxRetries Max Retries in number.
 * @param delayInMS Delay time for retries in number as mili-seconds(ms).
 * @param alwaysRetry To retry always untill the positive response, If its true then maxRetries will not count.
 * @param showLogs To show logs for all retries.
 */
declare function runAsync(
    fn: CallBackFunction,
    maxRetries: number,
    delayInMS: number,
    alwaysRetry?: boolean,
    showLogs?: boolean,
): Promise<any>;

export { runAsync };
