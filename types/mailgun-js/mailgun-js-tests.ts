import * as mailgunFactory from 'mailgun-js';
import mailgunFactory2 = require('mailgun-js');

import * as FormData from 'form-data';

const mailgun = new mailgunFactory({
    apiKey: 'auth.api_key',
    domain: 'auth.domain',
});

const mailgun2 = new mailgunFactory2({
    apiKey: 'auth.api_key',
    domain: 'auth.domain',
});

const logger = (httpOptions: mailgunFactory.LoggerHttpOptions, payload: string, form: FormData) => {};

const mailgun3 = new mailgunFactory2({
    apiKey: 'auth.api_key',
    domain: 'auth.domain',

    testMode: true,

    testModeLogger: logger,
});

mailgun.messages().send(
    {
        to: 'fixture.message.to',
    },
    err => {
        console.log;
    },
);

const exampleSendData: mailgunFactory.messages.SendData = {
    to: 'someone@email.com',
    attachment: new mailgun.Attachment({
        data: 'filepath',
        filename: 'my_custom_name.png',
    }),
    inline: [
        new mailgun.Attachment({
            data: 'filepath',
            filename: 'my_custom_name_2.png',
        }),
        'my_custom_file_3.png',
        Buffer.from('plain text'),
    ],
};

mailgun.messages().send(exampleSendData, (err, body) => {});

const arraySendData: mailgunFactory.messages.SendData = {
    to: ['someone@email.com', 'else@email.com'],
    cc: ['cc1@email.com', 'cc2@email.com'],
    bcc: ['bcc1@email.com', 'bcc2@email.com'],
    attachment: [
        new mailgun.Attachment({
            data: 'filepath',
            filename: 'my_custom_name.png',
        }),
    ],
    'o:tag': ['cats', 'rainbows'],
};

mailgun.messages().send(arraySendData, (err, body) => {});

const exampleSendDataWithTemplate: mailgunFactory.messages.SendTemplateData = {
    to: 'someone@email.com',
    template: 'my-template',
    'v:template-variable': 'foo',
};

const exampleSendDataWithTemplate2: mailgunFactory.messages.SendTemplateData = {
    to: 'someone@email.com',
    template: 'my-template',
    'v:number': 123,
    'v:boolean': true,
    'v:string': '',
    'v:undefined': undefined,
    'v:complexObject': {
        whatever: 123,
        test: true,
    },
};

const exampleBatchDataWithRecipientVariables1: mailgunFactory.messages.BatchData = {
    to: 'someone@email.com',
    subject: 'Hello, %recipient.name%',
    text: 'You have %recipient.invitations% new invitations',
    'recipient-variables': {
        'alice@example.com': {
            name: 'Alice',
            invitations: 3
        },
        'bob@example.com': {
            name: 'Bob',
            invitations: 2
        },
    }
};

const exampleBatchDataWithRecipientVariables2: mailgunFactory.messages.BatchData = {
    to: 'someone@email.com',
    subject: 'Hello, %recipient.name%',
    text: 'You have %recipient.invitations% new invitations',
    'recipient-variables': JSON.stringify({
        'alice@example.com': {
            name: 'Alice',
            invitations: 3
        },
    })
};

const exampleSendDataTemplateResponse: Promise<mailgunFactory.messages.SendResponse> = mailgun
    .messages()
    .send(exampleSendDataWithTemplate);

let validationResultPromise: Promise<mailgunFactory.validation.ValidateResponse>;
validationResultPromise = mailgun.validate('foo@mailgun.net');
validationResultPromise = mailgun.validate('foo@mailgun.net', true);
validationResultPromise = mailgun.validate('foo@mailgun.net', true, { mailbox_verification: true });
validationResultPromise = mailgun.validate('foo@mailgun.net', { mailbox_verification: false, api_key: '...' });
mailgun.validate('foo@mailgun.net', (error, body) => {});
mailgun.validate('foo@mailgun.net', true, (error, body) => {});
mailgun.validate('foo@mailgun.net', true, { mailbox_verification: true }, (error, body) => {});
mailgun.validate('foo@mailgun.net', { mailbox_verification: false, api_key: '...' }, (error, body) => {});

const validationResult6: mailgunFactory.validation.ValidateResponse = {
    address: 'foo@mailgun.net',
    did_you_mean: 'bar@mailgun.net',
    is_disposable_address: false,
    is_role_address: true,
    is_valid: true,
    mailbox_verification: 'true',
    parts: {
        display_name: 'foo',
        domain: 'mailgun.net',
        local_part: 'foo',
    },
};

// Generic requests
mailgun.get('/samples.mailgun.org/stats', (error: any, body: any) => {});
const response1: Promise<any> = mailgun.get('/samples.mailgun.org/stats', { event: ['sent', 'delivered'] });
const response2: Promise<any> = mailgun.get('/samples.mailgun.org/stats');

const list = mailgun.lists('example@mailgun.net');

// Delete mailing list
list.delete((error, body) => { });

// Creating a mailing list with a single member
list.members().create({ address: 'simple@example.net', name: 'Simple Example', subscribed: true });

// Adding multiple members to a list
list.members().add({
    members: [{ address: 'Jane Doe <janedoe@example.net>', subscribed: true }, { address: 'John Doe <johndoe@example.net>', subscribed: false }]
}, (error, data) => {  });

// Listing members of a list
list.members().list((error, members) => {  });

// Updating an existing member of a list
list.members('johndoe@example.net').update({
    name: 'John D.',
    subscribed: true
}, (error, data) => {  });

// Deleting a member of a list
list.members('janedoe@example.net').delete((error, body) => {  });
