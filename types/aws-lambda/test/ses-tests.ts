import { SESHandler, SESEvent, SESEventRecord } from 'aws-lambda';

// From https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda-event.html#receiving-email-action-lambda-event-lambdaaction

const sesEvent: SESEvent = {
    Records: [
        {
            eventSource: 'aws:ses',
            eventVersion: '1.0',
            ses: {
                mail: {
                    timestamp: '2019-08-05T21:30:02.028Z',
                    source: 'prvs=144d0cba7=sender@example.com',
                    messageId: 'EXAMPLE7c191be45-e9aedb9a-02f9-4d12-a87d-dd0099a07f8a-000000',
                    destination: ['recipient@example.com'],
                    headersTruncated: false,
                    headers: [
                        {
                            name: 'Return-Path',
                            value: '<prvs=144d0cba7=sender@example.com>',
                        },
                        {
                            name: 'Received',
                            value: 'REPLACED',
                        },
                        {
                            name: 'X-SES-Spam-Verdict',
                            value: 'PASS',
                        },
                        {
                            name: 'X-SES-Virus-Verdict',
                            value: 'PASS',
                        },
                        {
                            name: 'Received-SPF',
                            value: 'REPLACED',
                        },
                        {
                            name: 'Authentication-Results',
                            value: 'REPLACED',
                        },
                        {
                            name: 'X-SES-RECEIPT',
                            value: 'AEFBQUFBQUFBQUFHbFo0VU81VzVuYmRDNm51nhTVWpabDh6J4V2l5cG5PSHFtNzlBeUk90example',
                        },
                        {
                            name: 'X-SES-DKIM-SIGNATURE',
                            value: 'REPLACED',
                        },
                        {
                            name: 'DKIM-Signature',
                            value: 'REPLACED',
                        },
                        {
                            name: 'Received',
                            value: 'REPLACED',
                        },
                        {
                            name: 'From',
                            value: '"Doe, John" <sender@example.com>',
                        },
                        {
                            name: 'To',
                            value: '"recipient@example.com" <recipient@example.com>',
                        },
                        {
                            name: 'Subject',
                            value: 'This is a test',
                        },
                        {
                            name: 'Thread-Topic',
                            value: 'This is a test',
                        },
                        {
                            name: 'Thread-Index',
                            value: 'AQHVZDAaQ58yKI8q7kaAjkhC5stGexample',
                        },
                        {
                            name: 'Date',
                            value: 'Mon, 5 Aug 2019 21:29:57 +0000',
                        },
                        {
                            name: 'Message-ID',
                            value: '<F8098FDD-49A3-442D-9935-F6112example@example.com>',
                        },
                        {
                            name: 'References',
                            value: '<1FCED16B-F6B0-4506-A6F0-594DFexample@example.com>',
                        },
                        {
                            name: 'In-Reply-To',
                            value: '<1FCED16B-F6B0-4506-A6F0-594DFexample@example.com>',
                        },
                        {
                            name: 'Accept-Language',
                            value: 'en-US',
                        },
                        {
                            name: 'Content-Language',
                            value: 'en-US',
                        },
                        {
                            name: 'X-MS-Has-Attach',
                            value: '',
                        },
                        {
                            name: 'X-MS-TNEF-Correlator',
                            value: '',
                        },
                        {
                            name: 'x-ms-exchange-messagesentrepresentingtype',
                            value: '1',
                        },
                        {
                            name: 'x-ms-exchange-transport-fromentityheader',
                            value: 'Hosted',
                        },
                        {
                            name: 'x-originating-ip',
                            value: '[203.0.113.0]',
                        },
                        {
                            name: 'Content-Type',
                            value: 'multipart/alternative; boundary="_000_F8098FDD49A344F6112B195BDAexamplecom_"',
                        },
                        {
                            name: 'MIME-Version',
                            value: '1.0',
                        },
                        {
                            name: 'Precedence',
                            value: 'Bulk',
                        },
                    ],
                    commonHeaders: {
                        returnPath: 'prvs=144d0cba7=sender@example.com',
                        from: ['"Doe, John" <sender@example.com>'],
                        date: 'Mon, 5 Aug 2019 21:29:57 +0000',
                        to: ['"recipient@example.com" <recipient@example.com>'],
                        messageId: '<F8098FDD-49A3-442D-9935-F6112B195BDA@example.com>',
                        subject: 'This is a test',
                    },
                },
                receipt: {
                    timestamp: '2019-08-05T21:30:02.028Z',
                    processingTimeMillis: 1205,
                    recipients: ['recipient@example.com'],
                    spamVerdict: {
                        status: 'PASS',
                    },
                    virusVerdict: {
                        status: 'PASS',
                    },
                    spfVerdict: {
                        status: 'PASS',
                    },
                    dkimVerdict: {
                        status: 'PASS',
                    },
                    dmarcVerdict: {
                        status: 'GRAY',
                    },
                    action: {
                        type: 'Lambda',
                        functionArn: 'arn:aws:lambda:us-east-1:123456789012:function:IncomingEmail',
                        invocationType: 'Event',
                    },
                },
            },
        },
    ],
};

// From https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda-example-functions.html

const handler: SESHandler = (event, context, callback) => {
    const record: SESEventRecord = event.Records[num];

    callback();
    callback(new Error());
};
