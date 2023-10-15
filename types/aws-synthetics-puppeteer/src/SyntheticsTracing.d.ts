// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "SyntheticsTracing" {
    const _exports: SyntheticsTracing;
    export = _exports;
    /**
     * The Synthetics Tracing Library for adding tracing to canaries.
     *
     * The primary behavior of this library is to facilitate the creation of traces
     * to aid in the debugging of canary run failures.
     * Traces can be seen in the CloudWatch ServiceLens ServiceMap.
     */
    class SyntheticsTracing {
        _activeTracing: boolean;
        _canaryArn: any;
        _canaryName: any;
        _canaryRunId: any;
        _awsXRaySDKClient: typeof AWSXRaySDKClient;
        _segments: Map<any, any>;
        _xrayClientRoleArn: any;
        _xrayClientRegion: any;
        _xrayClientEndpoint: any;
        _awsXRayClient: any;
        _executionError: any;
        /**
         * On Lambda warm starts, we might have the same NodeJS process running with this same instatiated class
         * already created.  Reset all the this._* variables that should be reset between Lambda invocations.
         */
        reset(): Promise<void>;
        logAndThrow(message: string, err: any): void;
        /**
         * Configures the AWSXRaySDKClient with plugin AWS::CloudWatchSynthetics::Canary origin.
         * Used for creating new Segments and closing them
         *
         * canaryName - required
         * canaryArn - required
         * canaryRunId - required
         */
        createXRaySDKClient(canaryName: any, canaryArn: any, canaryRunId: any): Promise<void>;
        setLogger(logger: AWSXRaySDKClient.Logger): void;
        setCaptureAWSAllowlist(source: string | object): void;
        appendCaptureAWSAllowlist(source: string | object): void;
        /**
         * Configures the AWS SDK client for the service specified
         * to automatically capture segment information for each call made
         * @param service - An instance of an AWS.Service to wrap.
         * @returns instrumented service that was passed in
         */
        captureAWSClient<AWSClient>(service: AWSClient): AWSClient;
        /**
         * Configures the AWS SDK to automatically capture segment information
         * for each call made.
         * All created clients will automatically be captured.
         * To capture individual clients see 'captureAWSClient'
         * @param awssdk - The Javascript AWS SDK.
         * @returns awssdk that was passed in
         * @see https://github.com/aws/aws-sdk-js
         */
        captureAWS<AWS>(awssdk: AWS): AWS;
        /**
         * Wraps the http/https.request() and .get() calls to automatically capture information for the segment.
         * Returns an instance of the HTTP or HTTPS module that is patched.
         * @param module - The built in Node.js HTTP or HTTPS module.
         * @param downstreamXRayEnabled - when true, adds a "traced:true" property to the subsegment
         *   so the AWS X-Ray service expects a corresponding segment from the downstream service.
         * @param subsegmentCallback - a callback that is called with the subsegment, the Node.js
         *   http.ClientRequest, and the Node.js http.IncomingMessage to allow custom annotations and metadata
         *   to be added to the subsegment.
         * @returns the module that was passed in
         */
        captureHTTPs(
            module: any,
            downstreamXRayEnabled: boolean,
            subsegmentCallback: (
                subsegment: AWSXRaySDKClient.Subsegment,
                request: http.ClientRequest,
                response?: http.IncomingMessage,
                error?: Error,
            ) => void,
        ): any;
        /**
         * Wraps the http/https.request() and .get() calls to automatically capture information for the segment.
         * This patches the built-in HTTP and HTTPS modules globally. If using a 3rd party HTTP library,
         * it should still use HTTP under the hood. Be sure to patch globally before requiring the 3rd party library.
         * 3rd party library compatibility is best effort. Some incompatibility issues may arise.
         * @param module - The built in Node.js HTTP or HTTPS module.
         * @param downstreamXRayEnabled - when true, adds a "traced:true" property to the subsegment
         *   so the AWS X-Ray service expects a corresponding segment from the downstream service.
         * @param subsegmentCallback - a callback that is called with the subsegment, the Node.js
         *   http.ClientRequest, the Node.js http.IncomingMessage (if a response was received) and any error issued,
         *   allowing custom annotations and metadata to be added to the subsegment.
         */
        captureHTTPsGlobal(
            module: any,
            downstreamXRayEnabled: boolean,
            subsegmentCallback: (
                subsegment: AWSXRaySDKClient.Subsegment,
                request: http.ClientRequest,
                response?: http.IncomingMessage,
                error?: Error,
            ) => void,
        ): void;
        /**
         * Creates an AWS.XRay client with the specified role arn, region, and endpoint
         *
         *  @param roleArn optional - IAM Role Arn to send traces to
         *     If roleArn is not specified, the current canary execution Role Arn
         *     will be used
         *  @param region optional - AWS SDK region to send traces to
         *     (e.g. "us-east-1")
         *     If region is not specified, the current region will be used
         *  @param endpoint optional - AWS X-Ray endpoint to send traces to
         *     (e.g. "https://xray.us-east-1.amazonaws.com/")
         *     If endpoint is not specified, the default endpoint for the region
         *     will be used
         *
         * returns - AWS.XRay client configured as specified
         */
        createAWSXRayClient(roleArn?: string, region?: string, endpoint?: string): Promise<any>;
        activeTracing(): boolean;
        setActiveTracing(activeTracing: boolean): Promise<void>;
        /**
         * Configures tracing source properties for canary name, canary arn, and canary run id
         *
         * canaryName: "canary-name",
         * canaryArn: "arn:aws:accountId:region:synthetics:canary:canary-name",
         * canaryRunId: "98203495-6546-2343-230203020102",
         */
        configureTracing(canaryName: string, canaryArn: string, canaryRunId: string): void;
        /**
         * Set the AWS X-Ray client configuration for role arn, region, and endpoint.
         * Useful for sending traces to a different account.
         * If the X-Ray client already exists, re-creates the X-Ray client in use.
         *
         *  @param roleArn optional - IAM Role Arn to send traces to
         *     If roleArn is not specified, the current canary execution Role Arn
         *     will be used
         *  @param region optional - AWS SDK region to send traces to
         *     (e.g. "us-east-1")
         *     If region is not specified, the current region will be used
         *  @param endpoint optional - AWS X-Ray endpoint to send traces to
         *     (e.g. "https://xray.us-east-1.amazonaws.com/")
         *     If endpoint is not specified, the default endpoint for the region
         *     will be used
         */
        setXRayClientConfiguration(roleArn?: string, region?: string, endpoint?: string): Promise<void>;
        /**
         * Creates a new Segment and SubSegment that could be used for tracing a request/response
         * Keeps track of subsegments and segments created to be closed later.
         *
         * Configure Tracing before calling createSubSegment
         *
         * If activeTracing is false, this method returns null
         *
         * returns - SubSegment for a call that has a parent Segment with CloudWatch Synthetics canary annotations
         */
        createSubSegment(name: string): AWSXRaySDKClient.Subsegment;
        /**
         * Closes the subsegment and its parent segment
         * Sends the subsegment and parent segment.
         *
         * Note: No further modification on the segment will be allowed.
         * The segment should already have added any annotations, metadata
         * Called addError, addErrorFlag, addThrottleFlag, and addFaultFlag
         * before making this call to close the segment.
         */
        closeSubSegment(subsegment: AWSXRaySDKClient.Subsegment): void;
        setExecutionError(err: any): void;
        getExecutionError(): any;
        sendTraceSegment(xRayClient: any, segment: AWSXRaySDKClient.Segment): void;
        /**
         * Returns an Amazon Trace Id (X-AMZN-TRACE-ID) formatted header for an existing segment
         * Sampled is set to true.
         */
        getAmazonTraceIdHeader(segment: AWSXRaySDKClient.Segment): string;
        /**
         * Returns the open segment matching the traceHeader or null if there is no match
         */
        getSubSegment(traceHeader: string): AWSXRaySDKClient.Segment;
        addSegmentById(id: string, segment: AWSXRaySDKClient.Segment): void;
        removeSegmentById(id: string): boolean;
        getSegmentById(id: string): AWSXRaySDKClient.Segment;
        resetSegments(): void;
    }
    import * as AWSXRaySDKClient from "aws-xray-sdk-core";
    import * as http from "http";
}
