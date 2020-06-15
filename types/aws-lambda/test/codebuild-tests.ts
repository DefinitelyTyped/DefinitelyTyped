import { CodeBuildCloudWatchStateEvent } from 'aws-lambda';

/* CodeBuild CloudWatch Events
 * see https://docs.aws.amazon.com/codebuild/latest/userguide/sample-build-notifications.html
 */
const CodeBuildCloudWatchStateEvent: CodeBuildCloudWatchStateEvent = {
    version: '0',
    id: 'abcdefgrt-2384-7605-5520-1530a88cf416',
    'detail-type': 'CodeBuild Build State Change',
    source: 'aws.codebuild',
    account: '123456789123',
    time: '2020-06-15T10:41:43Z',
    region: 'eu-west-1',
    resources: [
        'arn:aws:codebuild:eu-west-1:123456789123:build/codebuild-project-name:12345678-1234-5678-aaaa-bbbbbbbbbbbb',
    ],
    detail: {
        'build-status': 'FAILED',
        'project-name': 'codebuild-project-name',
        'build-id':
            'arn:aws:codebuild:eu-west-1:123456789123:build/codebuild-project-name:12345678-1234-5678-aaaa-bbbbbbbbbbbb',
        'additional-information': {
            cache: {
                type: 'NO_CACHE',
            },
            'build-number': 1027,
            'timeout-in-minutes': 60,
            'build-complete': true,
            initiator: 'GitHub-Hookshot/123456',
            'build-start-time': 'Jun 15, 2020 10:30:41 AM',
            source: {
                buildspec: 'folder/buildspec.yml',
                location: 'https://github.com/org/project-name',
                type: 'GITHUB',
            },
            'source-version': '123456e065cfbfd44b4a21871c83fdyagdansindr',
            artifact: {
                location: '',
            },
            environment: {
                image: 'aws/codebuild/standard:3.0',
                'privileged-mode': true,
                'image-pull-credentials-type': 'CODEBUILD',
                'compute-type': 'BUILD_GENERAL1_MEDIUM',
                type: 'LINUX_CONTAINER',
                'environment-variables': [
                    {
                        name: 'AWS_ACCOUNT_ID',
                        type: 'PLAINTEXT',
                        value: '123456789123',
                    },
                    {
                        name: 'STAGE',
                        type: 'PLAINTEXT',
                        value: 'stageName',
                    },
                ],
            },
            'project-file-system-locations': [],
            logs: {
                'group-name': '/aws/codebuild/codebuild-project-name',
                'stream-name': '12345678-1234-5678-aaaa-bbbbbbbbbbbb',
                'deep-link':
                    'https://console.aws.amazon.com/cloudwatch/home?region=eu-west-1#logEvent:group=/aws/codebuild/codebuild-project-name;stream=12345678-1234-5678-aaaa-bbbbbbbbbbbb',
            },
            phases: [
                {
                    'phase-context': [],
                    'start-time': 'Jun 15, 2020 10:30:41 AM',
                    'end-time': 'Jun 15, 2020 10:30:42 AM',
                    'duration-in-seconds': 0,
                    'phase-type': 'SUBMITTED',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [],
                    'start-time': 'Jun 15, 2020 10:30:42 AM',
                    'end-time': 'Jun 15, 2020 10:30:43 AM',
                    'duration-in-seconds': 1,
                    'phase-type': 'QUEUED',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [': '],
                    'start-time': 'Jun 15, 2020 10:30:43 AM',
                    'end-time': 'Jun 15, 2020 10:31:07 AM',
                    'duration-in-seconds': 23,
                    'phase-type': 'PROVISIONING',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [': '],
                    'start-time': 'Jun 15, 2020 10:31:07 AM',
                    'end-time': 'Jun 15, 2020 10:31:33 AM',
                    'duration-in-seconds': 26,
                    'phase-type': 'DOWNLOAD_SOURCE',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [': '],
                    'start-time': 'Jun 15, 2020 10:31:33 AM',
                    'end-time': 'Jun 15, 2020 10:33:12 AM',
                    'duration-in-seconds': 99,
                    'phase-type': 'INSTALL',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [': '],
                    'start-time': 'Jun 15, 2020 10:33:12 AM',
                    'end-time': 'Jun 15, 2020 10:33:12 AM',
                    'duration-in-seconds': 0,
                    'phase-type': 'PRE_BUILD',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [
                        'COMMAND_EXECUTION_ERROR: Error while executing command: $(npm bin)/cypress run --headless --browser chrome. Reason: exit status 10',
                    ],
                    'start-time': 'Jun 15, 2020 10:33:12 AM',
                    'end-time': 'Jun 15, 2020 10:41:39 AM',
                    'duration-in-seconds': 506,
                    'phase-type': 'BUILD',
                    'phase-status': 'FAILED',
                },
                {
                    'phase-context': [': '],
                    'start-time': 'Jun 15, 2020 10:41:39 AM',
                    'end-time': 'Jun 15, 2020 10:41:39 AM',
                    'duration-in-seconds': 0,
                    'phase-type': 'POST_BUILD',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [': '],
                    'start-time': 'Jun 15, 2020 10:41:39 AM',
                    'end-time': 'Jun 15, 2020 10:41:39 AM',
                    'duration-in-seconds': 0,
                    'phase-type': 'UPLOAD_ARTIFACTS',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'phase-context': [': '],
                    'start-time': 'Jun 15, 2020 10:41:39 AM',
                    'end-time': 'Jun 15, 2020 10:41:41 AM',
                    'duration-in-seconds': 2,
                    'phase-type': 'FINALIZING',
                    'phase-status': 'SUCCEEDED',
                },
                {
                    'start-time': 'Jun 15, 2020 10:41:41 AM',
                    'phase-type': 'COMPLETED',
                },
            ],
            'queued-timeout-in-minutes': 480,
        },
        'current-phase': 'COMPLETED',
        'current-phase-context': '[: ]',
        version: '1',
    },
};
