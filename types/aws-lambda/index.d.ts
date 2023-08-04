// Type definitions for AWS Lambda 8.10
// Project: http://docs.aws.amazon.com/lambda
// Definitions by: James Darbyshire <https://github.com/darbio>
//                 Michael Skarum <https://github.com/skarum>
//                 Stef Heyenrath <https://github.com/StefH>
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
//                 Alessandro Palumbo <https://github.com/apalumbo>
//                 Sachin Shekhar <https://github.com/SachinShekhar>
//                 Ivan Martos <https://github.com/ivanmartos>
//                 Zach Anthony <https://github.com/zach-anthony>
//                 Peter Savnik <https://github.com/savnik>
//                 Benoit Boure <https://github.com/bboure>
//                 James Lakin <https://github.com/jamesorlakin>
//                 Ross Gerbasi <https://github.com/aphex>
//                 Joey Kilpatrick <https://github.com/joeykilpatrick>
//                 Luciano Manerich Junior <https://github.com/lmanerich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export * from './handler';
export * from './common/api-gateway';
export * from './common/cloudfront';
export * from './trigger/alb';
// TODO: export * from "./trigger/alexa";
export * from './trigger/api-gateway-authorizer';
export * from './trigger/api-gateway-proxy';
export * from './trigger/appsync-resolver';
export * from './trigger/autoscaling';
// CloudTrail section just describes using S3 to trigger on cloudtrail changes.
export * from './trigger/cdk-custom-resource';
export * from './trigger/cloudformation-custom-resource';
export * from './trigger/cloudfront-request';
export * from './trigger/cloudfront-response';
export * from './trigger/cloudwatch-events';
export * from './trigger/cloudwatch-logs';
export * from './trigger/codecommit';
export * from './trigger/codebuild-cloudwatch-state';
export * from './trigger/codepipeline';
export * from './trigger/codepipeline-cloudwatch';
export * from './trigger/codepipeline-cloudwatch-action';
export * from './trigger/codepipeline-cloudwatch-pipeline';
export * from './trigger/codepipeline-cloudwatch-stage';
// TODO: export * from "./trigger/cognito-sync";
export * from './trigger/cognito-user-pool-trigger/';
export * from './trigger/connect-contact-flow';
// TODO: export * from "./trigger/config";
export * from './trigger/dynamodb-stream';
export * from './trigger/eventbridge';
// ElastiCache section just describes using lambdas in an ElastiCache context (VPC issues, etc.)
// EC2 events are delivered using cloudwatch events...
export * from './trigger/iot';
export * from './trigger/kinesis-firehose-transformation';
export * from './trigger/kinesis-stream';
export * from './trigger/lex';
export * from './trigger/lex-v2';
// RDS events are delivered using SNS events...
export * from './trigger/s3';
export * from './trigger/s3-batch';
export * from './trigger/ses';
export * from './trigger/sns';
export * from './trigger/sqs';
export * from './trigger/msk';
export * from './trigger/self-managed-kafka';
export * from './trigger/secretsmanager';
export * from './trigger/s3-event-notification';
export * from './trigger/amplify-resolver';

export as namespace AWSLambda;
