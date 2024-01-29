// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "SyntheticsMetricEmitter" {
    class SyntheticsMetricEmitter {
        _namespace: string;
        _awsCloudWatchClient: any;
        _syntheticsConfiguration: SyntheticsConfiguration;
        configure(namespace: any, syntheticsConfiguration: any): void;
        setNamespace(namespace: any): void;
        getAwsAccountLevelMetricParameters(
            namespace: any,
            metricName: any,
            value: any,
            unit: any,
            date: any,
        ): {
            MetricName: any;
            Timestamp: any;
            Unit: any;
            Value: any;
        };
        getCanaryLevelMetricParameters(
            namespace: any,
            metricName: any,
            value: any,
            unit: any,
            date: any,
            canaryName: any,
        ): {
            MetricName: any;
            Dimensions: Array<{
                Name: string;
                Value: any;
            }>;
            Timestamp: any;
            Unit: any;
            Value: any;
        };
        getCanaryStepLevelMetricParameters(
            namespace: any,
            metricName: any,
            value: any,
            unit: any,
            date: any,
            canaryName: any,
            stepName: any,
        ): {
            MetricName: any;
            Dimensions: Array<{
                Name: string;
                Value: any;
            }>;
            Timestamp: any;
            Unit: any;
            Value: any;
        };
        putMetric(params: any): Promise<void>;
        publishResult(
            canaryName: any,
            result: any,
            startDateTimeInUTC: Date,
            endDateTimeInUTC: Date,
            timestamp: Date,
            stepName: any,
            requestsResult: any,
            stepConfiguration: any,
        ): Promise<boolean>;
    }
    import { SyntheticsConfiguration } from "SyntheticsConfiguration";
}
