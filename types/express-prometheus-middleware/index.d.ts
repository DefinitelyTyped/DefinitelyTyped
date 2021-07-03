// Type definitions for express-prometheus-middleware 1.2
// Project: https://github.com/joao-fontenele/express-prometheus-middleware#readme
// Definitions by: Floris de Bijl <https://github.com/Fdebijl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require("express");

interface Labels {
    route: string;
    method: string;
    status: string;
    /** Custom labels */
    [key: string]: string;
}

interface UserOptions {
    /** Url route that will expose the metrics for scraping. Defaults to '/metrics' */
    metricsPath?: string;
    /** Express app that will expose metrics endpoint, if an app is provided, use it, instead of instantiating a new one */
    metricsApp?: express.Express;
    /**
     * Optional authentication predicate, the function should receive as argument, the req object and return truthy for sucessfull authentication, or falsy, otherwise.
     * This option supports Promise results.
     */
    authenticate?: ((req: express.Request) => boolean) | ((req: express.Request) => Promise<boolean>);
    /** Whether or not to collect prom-client default metrics. These metrics are useful for collecting saturation metrics, for example. Defaults to true */
    collectDefaultMetrics?: boolean;
    /**
     * Whether or not to collect garbage collection metrics via module prometheus-gc-stats.
     * Dependency prometheus-gc-stats is marked as optional, hence if this option is set to true but npm/yarn could not install the dependency,
     * no garbage collection metric will be collected. Defaults to false.
     */
    collectGCMetrics?: boolean;
    /** Buckets for the request duration metrics (in milliseconds) histogram. */
    requestDurationBuckets?: number[];
    /** Buckets for the request length metrics (in bytes) histogram. Defaults to [] */
    requestLengthBuckets?: number[];
    /** Buckets for the response length metrics (in bytes) histogram. Defaults to [] */
    responseLengthBuckets?: number[];
    /** Optional, list of regexes to be used as argument to url-value-parser, this will cause extra route params, to be replaced with a #val placeholder. */
    extraMasks?: RegExp[];
    /** Optional prefix for the metrics name. By default, no prefix is added. */
    prefix?: string;
    /** Optional Array containing extra labels, used together with transformLabels */
    customLabels?: string[];
    /** Optional function(labels, req, res) adds to the labels object dynamic values for each label in customLabels */
    transformLabels?: (labels: Labels, req: express.Request, res: express.Response) => void;
    /** Whether or not to normalize http status codes. Defaults to true */
    normalizeStatus?: boolean;
}

declare function expressPrometheusMiddleware(userOptions: UserOptions): express.Express;
export = expressPrometheusMiddleware;
