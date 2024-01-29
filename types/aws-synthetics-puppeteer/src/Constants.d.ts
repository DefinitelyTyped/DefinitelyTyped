// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "Constants" {
    const ARTIFACT_UPLOAD_DIR: string;
    const SSE_KMS: string;
    const S3_PREFIX: string;
    const SYNTHETICS_REPORT_NAME: string;
    const HTTP_REQUESTS_REPORT_JSON: string;
    const HAR_FILE_NAME: string;
    const AMAZON_TRACE_ID_HEADER_NAME: string;
    const CLOUDWATCH_SYNTHETICS_XRAY_ORIGIN_NAME: string;
    const MINIMUM_AWS_SDK_VERSION_FOR_CAPTURING: string;
    const USER_AGENT_SERVICE_NAME_PREFIX: string;
    const CUSTOM_USER_AGENT: string;
    const CW_METRIC_NAMESPACE: string;
    const NOT_ENABLED: string;
    const NOT_SUPPORTED: string;
    const IS_NOT_SUPPORTED: string;
    const COMPRESSED_RESPONSE_BODY: string;
    const CONTENT_TYPE: string;
    const RESTRICTED_HEADER_VALUE: string;
    const REPORT_SUPPORTED_CONTENT_TYPE: string[];
    const DEFAULT_PATH: string;
    const DEFAULT_METHOD: string;
    const HTTP_PROTOCOL: string;
    const HTTPS_PROTOCOL: string;
    const STEP_CONFIG_HEADER: string;
    const REQUEST_BODY_HEADER: string;
    const STEP_ID_HEADER: string;
    const SYNTHETICS_RUNTIME_VERSION: string;
}
