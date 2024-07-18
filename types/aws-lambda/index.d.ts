export * from "./common/api-gateway";
export * from "./common/cloudfront";
export * from "./handler";
export * from "./trigger/alb";
// TODO: export * from "./trigger/alexa";
export * from "./trigger/api-gateway-authorizer";
export * from "./trigger/api-gateway-proxy";
export * from "./trigger/appsync-resolver";
export * from "./trigger/autoscaling";
// CloudTrail section just describes using S3 to trigger on cloudtrail changes.
export * from "./trigger/cdk-custom-resource";
export * from "./trigger/cloudformation-custom-resource";
export * from "./trigger/cloudfront-request";
export * from "./trigger/cloudfront-response";
export * from "./trigger/cloudwatch-alarm";
export * from "./trigger/cloudwatch-events";
export * from "./trigger/cloudwatch-logs";
export * from "./trigger/codebuild-cloudwatch-state";
export * from "./trigger/codecommit";
export * from "./trigger/codepipeline";
export * from "./trigger/codepipeline-cloudwatch";
export * from "./trigger/codepipeline-cloudwatch-action";
export * from "./trigger/codepipeline-cloudwatch-pipeline";
export * from "./trigger/codepipeline-cloudwatch-stage";
// TODO: export * from "./trigger/cognito-sync";
export * from "./trigger/cognito-user-pool-trigger/";
export * from "./trigger/connect-contact-flow";
// TODO: export * from "./trigger/config";
export * from "./trigger/dynamodb-stream";
export * from "./trigger/eventbridge";
// ElastiCache section just describes using lambdas in an ElastiCache context (VPC issues, etc.)
// EC2 events are delivered using cloudwatch events...
export * from "./trigger/iot";
export * from "./trigger/iot-authorizer";
export * from "./trigger/kinesis-firehose-transformation";
export * from "./trigger/kinesis-stream";
export * from "./trigger/lambda-function-url";
export * from "./trigger/lex";
export * from "./trigger/lex-v2";
// RDS events are delivered using SNS events...
export * from "./trigger/amplify-resolver";
export * from "./trigger/msk";
export * from "./trigger/s3";
export * from "./trigger/s3-batch";
export * from "./trigger/s3-event-notification";
export * from "./trigger/secretsmanager";
export * from "./trigger/self-managed-kafka";
export * from "./trigger/ses";
export * from "./trigger/sns";
export * from "./trigger/sqs";
export * from "./trigger/transfer-family-authorizer";

export as namespace AWSLambda;
