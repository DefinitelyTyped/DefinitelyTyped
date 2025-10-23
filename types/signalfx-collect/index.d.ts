/* =================== USAGE ===================

    import * as SignalFxCollect from 'signalfx-collect';

    let config: SignalFxCollect.Config = {
        accessToken: 'MY_ACCESS_TOKEN',
        interval: 1000
    };
    const collect = new SignalFxCollect(config);
    collect.start();

 =============================================== */

import * as express from "express";
import * as koa from "koa";
import { SignalClient } from "signalfx";

declare class SignalFxCollect {
    constructor(config: SignalFxCollect.Config);

    // Start polling for the metrics based on a provided interval in milliseconds.
    start(): void;

    // Returns an Express or Koa middleware to register into the web server
    // The middleware collects metrics about the successfully completed requests
    getMiddleware(framework: "express"): express.RequestHandler;
    getMiddleware(framework: "koa"): koa.Middleware;
}

declare namespace SignalFxCollect {
    interface Config {
        // How often to collect and report the data, in milliseconds; default value: 10000 ms (once every 10 seconds).
        interval?: number;
        // A signalFx client already created by the caller.
        // If it is not provided, an instance of class 'Ingest' exported by package 'signalfx' is created
        // using the provided 'ingestEndpoint' and 'accessToken'.
        signalFxClient?: SignalClient;
        // Custom URL to send datapoints in format 'http://custom.domain/api/path'
        // This property is ignored if 'signalFxClient' is provided.
        ingestEndpoint?: string;
        // An access token used to authenticate on the ingest endpoint.
        // This property is required if 'signalFxClient' is not provided. It is ignored otherwise.
        accessToken?: string;
        // The logging level; one of 'debug' (more verbose) or 'info' (less verbose); default is to not log anything
        // A level for logging verbosity. Available levels are 'debug' and 'info'.
        // No log will be shown except system exceptions if the level is not specified.
        logLevel?: "debug" | "info";
        // A dictionary of additional dimensions sent with metrics and events with string keys/values.
        // Default is an empty dictionary.
        extraDimensions?: Record<string, string>;
    }
}

export = SignalFxCollect;
