// Type definitions for AWS Lambda 8.10
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: James Darbyshire <https://github.com/darbio/aws-lambda-typescript>
//                 Michael Skarum <https://github.com/skarum>
//                 Stef Heyenrath <https://github.com/StefH/DefinitelyTyped>
//                 Toby Hede <https://github.com/tobyhede>
//                 Rich Buggy <https://github.com/buggy>
//                 Yoriki Yamaguchi <https://github.com/y13i>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Ishaan Malhi <https://github.com/OrthoDex>
//                 Michael Marner <https://github.com/MichaelMarner>
//                 Daniel Cottone <https://github.com/daniel-cottone>
//                 Kostya Misura <https://github.com/kostya-misura>
//                 Markus Tacker <https://github.com/coderbyheart>
//                 Palmi Valgeirsson <https://github.com/palmithor>
//                 Danilo Raisi <https://github.com/daniloraisi>
//                 Simon Buchan <https://github.com/simonbuchan>
//                 David Hayden <https://github.com/Haydabase>
//                 Chris Redekop <https://github.com/repl-chris>
//                 Aneil Mallavarapu <https://github.com/aneilbaboo>
//                 Jeremy Nagel <https://github.com/jeznag>
//                 Louis Larry <https://github.com/louislarry>
//                 Daniel Papukchiev <https://github.com/dpapukchiev>
//                 Oliver Hookins <https://github.com/ohookins>
//                 Trevor Leach <https://github.com/trevor-leach>
//                 James Gregory <https://github.com/jagregory>
//                 Erik Dalén <https://github.com/dalen>
//                 Loïk Gaonac'h <https://github.com/loikg>
//                 Roberto Zen <https://github.com/skyzenr>
//                 Grzegorz Redlicki <https://github.com/redlickigrzegorz>
//                 Juan Carbonel <https://github.com/juancarbonel>
//                 Peter McIntyre <https://github.com/pwmcintyre>
//                 Alex Bolenok <https://github.com/alex-bolenok-centralreach>
//                 Marian Zange <https://github.com/marianzange>
//                 Alexander Pepper <https://github.com/apepper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * @module
 * Re-exports all types in the package.
 *
 * There are basic, runtime declarations in `./handler.d.ts`, then a series of declarations
 * in `trigger/` for each trigger source, where `trigger/foo.d.ts` contains something like:
 *
 * ```ts
 * import { Callback, Handler } from "../handler";
 *
 * export type FooHandler = Handler<FooEvent, FooResult>;
 * // Only if there is a FooResult:
 * export type FooCallback = Callback<FooResult>;
 *
 * // the lambda request payload, after JSON.parse():
 * export interface FooEvent { ... }
 *
 * // the lambda response payload, before JSON.stringify():
 * export interface FooResult { ... }
 *
 * // any other types used specifically in this handler...
 * ```
 *
 * To add a handler type, add a new file under trigger named after the AWS service name
 * (lowercase, with hyphens only for spaces in the name, not including "AWS" or "Amazon"),
 * optionally followed by a trigger and/or event structure type, if its not reasonably obvious
 * what they would be. For example `api-gateway-proxy` has an obvious trigger, but
 * API Gateway can trigger lambdas with arbitrary event structures, not just the proxy structure,
 * so the name should include "proxy". On the other hand, `s3` is for an obvious trigger when
 * objects ore modified, but there is also `s3-batch` for the less common S3 batch operations.
 *
 * All exported types should be prefixed at least with the name of the service to avoid collisions
 * and confusion, but there are many pre-existing legacy type names.
 *
 * Also add type tests in `aws-lambda-tests.ts` that at least verify assignability of the event
 * and result types with some example events (the pre-existing tests still need a lot of cleanup).
 *
 * See the sections under the {@link https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html AWS Documentation}
 * for "Working with Other Services" for references. That list may be incomplete.
 */

export * from "./hander";
export * from "./common/api-gateway";
export * from "./common/cloudfront";
export * from "./trigger/alb";
// TODO: export * from "./trigger/alexa";
export * from "./trigger/api-gateway-authorizer";
export * from "./trigger/api-gateway-proxy";
// CloudTrail section just describes using S3 to trigger on cloudtrail changes.
export * from "./trigger/cloudformation-custom-resource";
export * from "./trigger/cloudfront-request";
export * from "./trigger/cloudfront-response";
export * from "./trigger/cloudwatch-events";
export * from "./trigger/cloudwatch-logs";
// TODO: export * from "./trigger/codecommit";
export * from "./trigger/codepipeline";
export * from "./trigger/codepipeline-cloudwatch";
export * from "./trigger/codepipeline-cloudwatch-action";
export * from "./trigger/codepipeline-cloudwatch-pipeline";
export * from "./trigger/codepipeline-cloudwatch-stage";
// TODO: export * from "./trigger/cognito-sync";
export * from "./trigger/cognito-user-pool-trigger";
// TODO: export * from "./trigger/config";
export * from "./trigger/dynamodb-stream";
// ElastiCache section just describes using lambdas in an ElastiCache context (VPC issues, etc.)
// EC2 events are delivered using cloudwatch events...
// TODO: export * from "./trigger/iot"; for "IoT Events"
export * from "./trigger/kinesis-firehose-transformation";
export * from "./trigger/kinesis-stream";
export * from "./trigger/lex";
// RDS events are delivered using SNS events...
export * from "./trigger/s3";
export * from "./trigger/s3-batch";
// SES events are delivered using SNS events...
export * from "./trigger/sns";
export * from "./trigger/sqs";

export as namespace AWSLambda;
