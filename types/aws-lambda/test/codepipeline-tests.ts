import { CodePipelineCloudWatchEvent, CodePipelineEvent } from "aws-lambda";

// TODO

/* CodePipeline events https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html#actions-invoke-lambda-function-json-event-example */
const CodePipelineEvent: CodePipelineEvent = {
    'CodePipeline.job': {
        id: '11111111-abcd-1111-abcd-111111abcdef',
        accountId: '111111111111',
        data: {
            actionConfiguration: {
                configuration: {
                    FunctionName: 'MyLambdaFunctionForAWSCodePipeline',
                    UserParameters: 'some-input-such-as-a-URL',
                },
            },
            inputArtifacts: [
                {
                    location: {
                        s3Location: {
                            bucketName:
                                'the name of the bucket configured as the pipeline artifact store in Amazon S3, for example codepipeline-us-east-2-1234567890',
                            objectKey: 'the name of the application, for example CodePipelineDemoApplication.zip',
                        },
                        type: 'S3',
                    },
                    revision: null,
                    name: 'ArtifactName',
                },
            ],
            outputArtifacts: [],
            artifactCredentials: {
                secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
                sessionToken: `MIICiTCCAfICCQD6m7oRw0uXOjANBgkqhkiG9w
 0BAQUFADCBiDELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZ
 WF0dGxlMQ8wDQYDVQQKEwZBbWF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIw
 EAYDVQQDEwlUZXN0Q2lsYWMxHzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5
 jb20wHhcNMTEwNDI1MjA0NTIxWhcNMTIwNDI0MjA0NTIxWjCBiDELMAkGA1UEBh
 MCVVMxCzAJBgNVBAgTAldBMRAwDgYDVQQHEwdTZWF0dGxlMQ8wDQYDVQQKEwZBb
 WF6b24xFDASBgNVBAsTC0lBTSBDb25zb2xlMRIwEAYDVQQDEwlUZXN0Q2lsYWMx
 HzAdBgkqhkiG9w0BCQEWEG5vb25lQGFtYXpvbi5jb20wgZ8wDQYJKoZIhvcNAQE
 BBQADgY0AMIGJAoGBAMaK0dn+a4GmWIWJ21uUSfwfEvySWtC2XADZ4nB+BLYgVI
 k60CpiwsZ3G93vUEIO3IyNoH/f0wYK8m9TrDHudUZg3qX4waLG5M43q7Wgc/MbQ
 ITxOUSQv7c7ugFFDzQGBzZswY6786m86gpEIbb3OhjZnzcvQAaRHhdlQWIMm2nr
 AgMBAAEwDQYJKoZIhvcNAQEFBQADgYEAtCu4nUhVVxYUntneD9+h8Mg9q6q+auN
 KyExzyLwaxlAoo7TJHidbtS4J5iNmZgXL0FkbFFBjvSfpJIlJ00zbhNYS5f6Guo
 EDmFJl0ZxBHjJnyp378OD8uTs7fLvjx79LjSTbNYiytVbZPQUQ5Yaxu2jXnimvw
 3rrszlaEXAMPLE=`,
                accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
            },
            continuationToken: 'A continuation token if continuing job',
        },
    },
};

CodePipelineEvent['CodePipeline.job'].data.encryptionKey = { type: 'KMS', id: 'key' };

/* CodePipeline CloudWatch Events
 * see https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html
 * Their documentation says that detail.version is a string, but it is actually an integer
 */
const CodePipelineCloudWatchEvent: CodePipelineCloudWatchEvent = {
    version: '0',
    id: 'event_Id',
    'detail-type': 'CodePipeline Pipeline Execution State Change',
    source: 'aws.codepipeline',
    account: 'Pipeline_Account',
    time: 'TimeStamp',
    region: 'us-east-1',
    resources: ['arn:aws:codepipeline:us-east-1:account_ID:myPipeline'],
    detail: {
        pipeline: 'myPipeline',
        version: 1,
        state: 'STARTED',
        'execution-id': 'execution_Id',
    },
};
