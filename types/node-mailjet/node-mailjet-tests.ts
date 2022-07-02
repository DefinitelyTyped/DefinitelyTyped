import mailJet = require('node-mailjet');
import { Email, SMS, ConnectOptions } from 'node-mailjet';

const connection: Email.Client = mailJet.connect('MJ_APIKEY_PUBLIC', 'MJ_APIKEY_PRIVATE');

// *** Email API *** //

// send api v3.1
const params: Email.SendParams = {
    Messages: [
        {
            From: {
                Email: 'sender@email.com',
                Name: 'Me',
            },
            To: [
                {
                    Email: 'passenger1@mailjet.com',
                    Name: 'You',
                },
            ],
            Cc: [
                {
                    Email: 'copilot@mailjet.com',
                    Name: 'Copilot',
                },
            ],
            Bcc: [
                {
                    Email: 'air-traffic-control@mailjet.com',
                    Name: 'Air traff ic control',
                },
            ],
            ReplyTo: {
                Email: 'someone@email.com',
            },
            Subject: 'My first Mailjet Email!',
            TextPart: 'Greetings from Mailjet!',
            HTMLPart: '<h3>Welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3>',
            Attachments: [
                {
                    Base64Content: 'aGVsbG8sIHdvcmxkCg==',
                    ContentType: 'plain/text',
                    Filename: 'textfile.txt',
                },
            ],
            InlinedAttachments: [
                {
                    Filename: 'test.png',
                    Base64Content:
                        'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', // 1px png as base64
                    ContentType: 'image/png',
                    ContentID: 'abc123',
                },
            ],
        },
    ],
    SandboxMode: true,
};
const mailJetRequest: Email.PostResource = connection.post('send', { version: 'v3.1' });
const mailJetResponse: Promise<Email.PostResponse> = mailJetRequest.request(params);
mailJetResponse
    .then((res: Email.PostResponse) => {
        const body: Email.PostResponseData = res.body;
        const messages: ReadonlyArray<Email.PostResponseDataMessage> = body.Messages;
        const message: Email.PostResponseDataMessage = messages[0];
        const to: ReadonlyArray<Email.PostResponseDataTo> = message.To;
        const cc: ReadonlyArray<Email.PostResponseDataTo> = message.Cc;
        const bcc: ReadonlyArray<Email.PostResponseDataTo> = message.Bcc;
        const email: string = to[0].Email;
        const messageHref: string = to[0].MessageHref;
        const messageId: number = to[0].MessageID;
        const messageUUID: string = to[0].MessageUUID;
    })
    .catch((err: Error) => {
        // ignore
    });

// send api v3
const paramsV3: object = {
    FromEmail: 'sender@email.com',
    FromName: 'Mailjet Pilot',
    Subject: 'Your email flight plan!',
    'Text-part': 'Dear passenger, welcome to Mailjet! May the delivery force be with you!',
    'Html-part': '<h3>Welcome to <a href="https://www.mailjet.com/">Mailjet</a>!',
    Recipients: [{ Email: 'passenger@mailjet.com' }],
    SandboxMode: true,
};
const mailJetRequestV3: Email.PostResource = connection.post('send');
const mailJetResponseV3: Promise<Email.Response> = mailJetRequestV3.request(paramsV3);
mailJetResponseV3
    .then((res: Email.Response) => {
        const responseBody: object = res.body;
    })
    .catch((err: Error) => {
        // ignore
    });

// add template
const paramsAddTemplate: object = {
    'Html-part': '<html><body><p>Hello {{var:name}}</p></body></html>',
    'Text-part': 'Hello {{var:name}}',
};
const mailJetRequestTemplate: Email.PostResource = connection.post('template');
const mailJetPostResource: Email.PostResource = mailJetRequestTemplate.id(762957);
const mailJetPostActionResource: Email.PostResource = mailJetPostResource.action('detailcontent');
const mailJetResponseTemplate: Promise<Email.Response> = mailJetPostActionResource.request(paramsAddTemplate);
mailJetResponseTemplate
    .then((res: Email.Response) => {
        const responseBody: object = res.body;
    })
    .catch((err: Error) => {
        // ignore
    });

// get all message
const messageId = 576460753004591401;
const mailJetRequestMessages: Email.GetResource = connection.get('message');
const mailJetGetResource: Email.GetResource = mailJetRequestMessages.id(messageId);
const mailJetResponseMessages: Promise<Email.GetResponse> = mailJetGetResource.request();
mailJetResponseMessages
    .then((res: Email.GetResponse) => {
        const responseBody: Email.GetResponseData = res.body;
        const count: number = responseBody.Count;
        const data: ReadonlyArray<object> = responseBody.Data;
        const total: number = responseBody.Total;
    })
    .catch((err: Error) => {
        // ignore
    });

// get contact
connection.get('contact').id('bob@example.com');

// put contact data
const putParams: object = {
    Data: [
        {
            Name: 'Age',
            value: 30,
        },
    ],
};
const mailJetRequestPutData: Email.PutResource = connection.put('contactdata');
const mailJetPutResource: Email.PutResource = mailJetRequestPutData.id(1934644827);
const mailJetPutResponse: Promise<Email.PutResponse> = mailJetPutResource.request(putParams);
mailJetPutResponse
    .then((res: Email.PutResponse) => {
        const responseBody: Email.PutResponseData = res.body;
        const count: number = res.body.Count;
        const data: ReadonlyArray<object> = res.body.Data;
        const total: number = res.body.Total;
    })
    .catch((err: Error) => {
        // ignore
    });

// delete parse route
const mailJetRequestDelete: Email.DeleteResource = connection.delete('parseroute', { version: 'v3' }).id('fake-id');
const mailJetDeleteResponse: Promise<void> = mailJetRequestDelete
    .request({
        SandboxMode: true,
    })
    .then((res) => {
        const responseBody: Email.DeleteResponse['body'] = res;
    })
    .catch((err: Error) => {
        // ignore
    });

// *** SMS API *** //

// send SMS
const smsConnectOptions: ConnectOptions = {
    url: 'api.mailjet.com', // default is the API url
    version: 'v4', // default is '/v3'
    perform_api_call: false, // used for tests. default is true
};
const smsConnection: SMS.Client = mailJet.connect('MJ_API_TOKEN', smsConnectOptions);
const smsSend: SMS.PostResource = smsConnection.post('sms-send');
const smsData: SMS.SendParams = {
    Text: 'Have a nice SMS flight with Mailjet !',
    To: '+33600000000',
    From: 'MJPilot',
};
const smsResponse: Promise<SMS.SendResponse> = smsSend.request(smsData);
smsResponse
    .then((res: SMS.SendResponse) => {
        const url: string = res.url;
        const body: SMS.PostResponseData = res.body;
        const from: string = body.From;
        const to: string = body.To;
        const text: string = body.Text;
        const messageId: string = body.MessageId;
        const smsCount: number = body.SmsCount;
        const creationTS: number = body.CreationTS;
        const sentTS: number = body.SentTS;
        const cost: SMS.ResponseCost = body.Cost;
        const costValue: number = cost.Value;
        const costCurrency: string = cost.Currency;
        const status: SMS.ResponseStatus = body.Status;
        const statusCode: number = status.Code;
        const statusName: string = status.Name;
        const statusDescription: string = status.Description;
    })
    .catch((err: Error) => {
        // ignore
    });

// export CSV
const smsExport: SMS.PostResource = smsConnection.post('sms').action('export');
const exportResponsePromise: Promise<SMS.ExportResponse> = smsSend.request();
exportResponsePromise
    .then((res: SMS.ExportResponse) => {
        const body: SMS.ExportResponseData = res.body;
        const id: number = body.ID;
        const creationTS: number | undefined = body.CreationTS;
        const expirationTS: number | undefined = body.ExpirationTS;
        const uRL: string | undefined = body.URL;
        const fromTs: number | undefined = body.FromTs;
        const toTs: number | undefined = body.ToTs;
        const status: SMS.ResponseStatus = body.Status;
        const code: number = status.Code;
        const name: string = status.Name;
        const description: string = status.Description;
    })
    .catch((err: Error) => {
        // ignore
    });

// get SMS with limit and offset
const nowMilliseconds = +new Date();
const getSmsParams: SMS.GetParams = {
    FromTS: nowMilliseconds,
    ToTS: nowMilliseconds,
};
const smsGetResource: SMS.GetResource = smsConnection.get('sms');
const smsGetResponsePromise: Promise<SMS.GetResponse> = smsGetResource.request(getSmsParams);
smsGetResponsePromise
    .then((res: SMS.GetResponse) => {
        const body: SMS.GetResponseData = res.body;
        const data: ReadonlyArray<SMS.GetResponseDataData> = body.Data;
        const from: string = data[0].From;
        const to: string = data[0].To;
        const messageId: string = data[0].MessageId;
        const creationTs: number = data[0].CreationTS;
        const sentTs: number = data[0].SentTS;
        const smsCount: number = data[0].SMSCount;
        const cost: SMS.ResponseCost = data[0].Cost;
        const value: number = cost.Value;
        const currency: string = cost.Currency;
        const status: SMS.ResponseStatus = data[0].Status;
        const code: number = status.Code;
        const name: string = status.Name;
        const description: string = status.Description;
    })
    .catch((err: Error) => {
        // ignore
    });

// get SMS count
const smsActionResponse: SMS.GetResourceAction = smsGetResource.action('count');
const smsActionResponsePromise: Promise<SMS.GetResponseAction> = smsActionResponse.request();
smsActionResponsePromise
    .then((res: SMS.GetResponseAction) => {
        const body: SMS.GetResponseActionData = res.body;
        const count: number = body.Count;
    })
    .catch((err: Error) => {
        // ignore
    });

// get exported CSV
const getResourceActionId: SMS.GetResourceActionId = smsConnection
    .get('sms')
    .action('export')
    .id(160875105);
const exportResponseAction: Promise<SMS.ExportResponse> = getResourceActionId.request();
exportResponseAction
    .then((res: SMS.ExportResponse) => {
        // types allready checked
    })
    .catch((err: Error) => {
        // ignore
    });
