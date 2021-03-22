import {
    CodeBuildCloudWatchStateEvent,
    CodeBuildCloudWatchStateHandler, CodeBuildStateEventDetail,
    SNSEvent,
} from 'aws-lambda';

declare let codeBuildStateEventDetail: CodeBuildStateEventDetail;

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

const eventBridgeHandler: CodeBuildCloudWatchStateHandler = async (event, context, callback) => {
    str = event.account;
    codeBuildStateEventDetail = event.detail;
    str = event.id;
    str = event.region;
    str = event.resources[0];
    str = event.source;
    str = event.time;
    str = event['detail-type'];

    const detail: CodeBuildStateEventDetail = event.detail;

    str = detail['build-status'];
    str = detail['project-name'];
    str = detail['build-id'];
    str = detail['current-phase'];
    str = detail['current-phase-context'];
    str = detail.version;
    str = detail['additional-information'].cache.type;
    num = detail['additional-information']['build-number'];
    num = detail['additional-information']['timeout-in-minutes'];
    bool = detail['additional-information']['build-complete'];
    str = detail['additional-information']['initiator'];
    str = detail['additional-information']['build-start-time'];
    str = detail['additional-information'].source.buildspec;
    str = detail['additional-information'].source.location;
    str = detail['additional-information'].source.type;
    str = detail['additional-information']['source-version'];
    str = detail['additional-information'].artifact.location;
    str = detail['additional-information'].environment.image;
    bool = detail['additional-information'].environment['privileged-mode'];
    strOrUndefined = detail['additional-information'].environment['image-pull-credentials-type'];
    str = detail['additional-information'].environment['compute-type'];
    str = detail['additional-information'].environment.type;
    str = detail['additional-information'].environment['environment-variables'][0].name;
    strOrUndefined = detail['additional-information'].environment['environment-variables'][0].type;
    str = detail['additional-information'].environment['environment-variables'][0].value;
    str = detail['additional-information'].logs['group-name'];
    str = detail['additional-information'].logs['stream-name'];
    str = detail['additional-information'].logs['deep-link'];
    strArrayOrUndefined = detail['additional-information'].phases[0]['phase-context'];
    str = detail['additional-information'].phases[0]['start-time'];
    strOrUndefined = detail['additional-information'].phases[0]['end-time'];
    numOrUndefined = detail['additional-information'].phases[0]['duration-in-seconds'];
    str = detail['additional-information'].phases[0]['phase-type'];
    strOrUndefined = detail['additional-information'].phases[0]['phase-status'];
    num = detail['additional-information']['queued-timeout-in-minutes'];

    callback();
    callback(new Error());
};

export const snsEventCodeBuildStateHandler = async (snsEvent: SNSEvent) => {
    const event: CodeBuildCloudWatchStateEvent = JSON.parse(snsEvent.Records[0].Sns.Message);

    codeBuildStateEventDetail = event.detail;
};
