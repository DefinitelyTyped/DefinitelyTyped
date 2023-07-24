// Type definitions for apminsight 3.0
// Project: https://www.npmjs.com/package/apminsight
// Definitions by: Site24x7 <https://github.com/site24x7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// https://www.site24x7.com/help/apm/nodejs-agent/nodejs-custom-instrumentation.html

export = AgentAPI;
declare function AgentAPI(optionsFromAgentInit?: JSON): typeof AgentAPI;
declare namespace AgentAPI {
    /**
     * This function is called in the cases of ES and TS to start the agent.
     */
    function config(): void;

    /**
     * @param txnName Transaction name of the web transaction.
     * @param func Function that will be executed once txn is created.
     * This API is called to create web transactions and will track the method calls made within func.
     */
    function startWebTransaction(txnName: string, func: any): any;

    /**
     * @param txnName Transaction name of the background transaction.
     * @param func Function that will be executed once txn is created.
     * This API is called to create background transactions and will track the method calls made within func.
     */
    function startBackgroundTransaction(txnName: string, func: any): any;

    /**
     * @param err Error occured in the transaction can be passed.
     * API to end a transaction that got created using the above APIs. We can also pass an error object as an argument.
     */
    function endTransaction(err?: any): void;

    /**
     * @param trackerName Name of the tracker.
     * @param componentName Name of the component if any.
     * @param handler Handler will be executed after creating tracker.
     * @param cb Call back function which will be executed after the tracker completion.
     * The agent captures default framework components, classes, and methods. However, user-defined classes and methods
     * can be monitored only by instrumenting them with the following API.
     */
    function startTracker(trackerName: string, componentName: string, handler: any, cb?: any): any;

    /**
     * @param err Error object of the error which is occured in a tracker.
     * This API is used to track errors that occur in a tracker.
     */
    function trackError(err: any): void;

    /**
     * @param name New transaction name.
     * You can change the default name of the transaction using this API.
     */
    function setTransactionName(name: string): void;

    /**
     * @param key Key of the custom param.
     * @param value Value of the custom param.
     * To give contextual meaning to traces, you can add additional parameters to help you identify the context of the transaction trace.
     * Contextual metrics can be anything, such as a session id, a user id, or certain method parameters, which can help you identify the specific information about a transaction trace.
     */
    function addParameter(key: string, value: any): void;

    /**
     * This will ignore the current transaction from the tracking.
     */
    function ignoreCurrentTransaction(): void;

    /**
     * @param metricName Name of the metric.
     * @param incrValue Incremental value.
     * This API collects the sum of custom metrics.
     */
    function incrementCustomMetric(metricName: string, incrValue?: number): void;

    /**
     * @param metricName Name of the metric.
     * @param metricValue Value of the metric.
     * This API collects the average of custom metrics.
     */
    function averageCustomMetric(metricName: string, metricValue: number): void;

    /**
     * This API returns the RUM script that should be injected into the application in order to enable RUM monitoring.
     */
    function getRumScript(): any;

    /**
     * @param moduleName Name of the module.
     * @param moduleInfo File path which has the function info to instrument.
     * This API is used to instrument user-defined modules and their functions.
     */
    function instrumentWebFramework(moduleName: string, moduleInfo: string): void;
}
