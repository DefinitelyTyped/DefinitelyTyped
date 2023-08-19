Types helpful for implementing subscribers for the AWS/Amazon Simple 
Notification Service (Amazon SNS).

These types are specifically for SNS messages with subscriber destinations 
like custom HTTP(S) endpoints or email using JSON-Payload. For SNS messages
delivered as events for AWS Lambda functions please refer to the 
`@types/aws-lambda` package. When used SNS with Lambda the JSON-Payload is 
slightly different and not part of this package.

## Future ideas

-   Verify types with JSON send for subscriptions using the `sqs`, `application`
    or `firehose` protocol.
