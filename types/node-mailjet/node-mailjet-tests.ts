import MailJet = require('node-mailjet');

const connection: MailJet.Email.Client = MailJet.connect('MJ_APIKEY_PUBLIC', 'MJ_APIKEY_PRIVATE');

// *** Email API *** //

// send api v3.1
const params: MailJet.Email.SendParams = {
    Messages: [{
        From: {
            Email: "sender@email.com",
            Name: "Me"
        },
        To: [{
            Email: "passenger1@mailjet.com",
            Name: "You"
        }],
        Cc: [{
            Email: "copilot@mailjet.com",
            Name: "Copilot"
        }],
        Bcc: [{
            Email: "air-traffic-control@mailjet.com",
            Name: "Air traffic control"
        }],
        Subject: "My first Mailjet Email!",
        TextPart: "Greetings from Mailjet!",
        HTMLPart: "<h3>Welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3>"
    }],
    SandboxMode: true,
};
const mailJetRequest: MailJet.Email.PostResource = connection.post("send", {version: 'v3.1'});
const mailJetResponse: Promise<MailJet.Email.PostResponse> = mailJetRequest.request(params);
mailJetResponse.then((res: MailJet.Email.PostResponse) => {
    const body: MailJet.Email.PostResponseData = res.body;
    const messages: ReadonlyArray<MailJet.Email.PostResponseDataMessage> = body.Messages;
    const message: MailJet.Email.PostResponseDataMessage = messages[0];
    const to: ReadonlyArray<MailJet.Email.PostResponseDataTo> = message.To;
    const cc: ReadonlyArray<MailJet.Email.PostResponseDataTo> = message.Cc;
    const bcc: ReadonlyArray<MailJet.Email.PostResponseDataTo> = message.Bcc;
    const email: string = to[0].Email;
    const messageHref: string = to[0].MessageHref;
    const messageId: number = to[0].MessageID;
    const messageUUID: string = to[0].MessageUUID;
}).catch((err: Error) => {
    // ignore
});

// send api v3
const paramsV3: object = {
    FromEmail: "sender@email.com",
    FromName: "Mailjet Pilot",
    Subject: "Your email flight plan!",
    "Text-part": "Dear passenger, welcome to Mailjet! May the delivery force be with you!",
    "Html-part": "<h3>Welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!",
    Recipients: [{Email: "passenger@mailjet.com"}],
    SandboxMode: true
};
const mailJetRequestV3: MailJet.Email.PostResource = connection.post("send");
const mailJetResponseV3: Promise<MailJet.Email.Response> = mailJetRequestV3.request(paramsV3);
mailJetResponseV3.then((res: MailJet.Email.Response) => {
    const responseBody: object = res.body;
}).catch((err: Error) => {
    // ignore
});

// add template
const paramsAddTemplate: object = {
    "Html-part": "<html><body><p>Hello {{var:name}}</p></body></html>",
    "Text-part": "Hello {{var:name}}"
};
const mailJetRequestTemplate: MailJet.Email.PostResource = connection.post('template');
const mailJetPostResource: MailJet.Email.PostResource = mailJetRequestTemplate.id('762957');
const mailJetPostActionResource: MailJet.Email.PostResource = mailJetPostResource.action("detailcontent");
const mailJetResponseTemplate: Promise<MailJet.Email.Response> = mailJetPostActionResource.request(paramsAddTemplate);
mailJetResponseTemplate.then((res: MailJet.Email.Response) => {
    const responseBody: object = res.body;
}).catch((err: Error) => {
    // ignore
});

// get all message
const messageId = '576460753004591401';
const mailJetRequestMessages: MailJet.Email.GetResource = connection.get('message');
const mailJetGetResource: MailJet.Email.GetResource = mailJetRequestMessages.id(messageId);
const mailJetResponseMessages: Promise<MailJet.Email.GetResponse> = mailJetGetResource.request();
mailJetResponseMessages.then((res: MailJet.Email.GetResponse) => {
    const responseBody: MailJet.Email.GetResponseData = res.body;
    const count: number = responseBody.Count;
    const data: ReadonlyArray<object> = responseBody.Data;
    const total: number = responseBody.Total;
}).catch((err: Error) => {
    // ignore
});

// put contact data
const putParams: object = {
    Data: [{
        Name: "Age",
        value: 30
    }]
};
const mailJetRequestPutData: MailJet.Email.PutResource = connection.put('contactdata');
const mailJetPutResource: MailJet.Email.PutResource = mailJetRequestPutData.id('1934644827');
const mailJetPutResponse: Promise<MailJet.Email.PutResponse> = mailJetPutResource.request(putParams);
mailJetPutResponse.then((res: MailJet.Email.PutResponse) => {
    const responseBody: MailJet.Email.PutResponseData = res.body;
    const count: number = res.body.Count;
    const data: ReadonlyArray<object> = res.body.Data;
    const total: number = res.body.Total;
}).catch((err: Error) => {
    // ignore
});

// *** SMS API *** //

// send SMS
const smsConnectOptions: MailJet.ConnectOptions = {
    url: 'api.mailjet.com', // default is the API url
    version: 'v4', // default is '/v3'
    perform_api_call: false // used for tests. default is true
};
const smsConnection: MailJet.SMS.Client = MailJet.connect("MJ_API_TOKEN", smsConnectOptions);
const smsSend: MailJet.SMS.PostResource = smsConnection.post('sms-send');
const smsData: MailJet.SMS.SendParams = {
    Text: 'Have a nice SMS flight with Mailjet !',
    To: '+33600000000',
    From: 'MJPilot',
};
const smsResponse: Promise<MailJet.SMS.SendResponse> = smsSend.request(smsData);
smsResponse.then((res: MailJet.SMS.SendResponse) => {
    const url: string = res.url;
    const body: MailJet.SMS.PostResponseData = res.body;
    const from: string = body.From;
    const to: string = body.To;
    const text: string = body.Text;
    const messageId: string = body.MessageId;
    const smsCount: number = body.SmsCount;
    const creationTS: number = body.CreationTS;
    const sentTS: number = body.SentTS;
    const cost: MailJet.SMS.ResponseCost = body.Cost;
    const costValue: number = cost.Value;
    const costCurrency: string = cost.Currency;
    const status: MailJet.SMS.ResponseStatus = body.Status;
    const statusCode: number = status.Code;
    const statusName: string = status.Name;
    const statusDescription: string = status.Description;
}).catch((err: Error) => {
    // ignore
});

// export CSV
const smsExport: MailJet.SMS.PostResource = smsConnection.post('sms').action('export');
const exportResponsePromise: Promise<MailJet.SMS.ExportResponse> = smsSend.request();
exportResponsePromise.then((res: MailJet.SMS.ExportResponse) => {
    const body: MailJet.SMS.ExportResponseData = res.body;
    const id: number = body.ID;
    const creationTS: number | undefined = body.CreationTS;
    const expirationTS: number | undefined = body.ExpirationTS;
    const uRL: string | undefined = body.URL;
    const fromTs: number | undefined = body.FromTs;
    const toTs: number | undefined = body.ToTs;
    const status: MailJet.SMS.ResponseStatus = body.Status;
    const code: number = status.Code;
    const name: string = status.Name;
    const description: string = status.Description;
}).catch((err: Error) => {
    // ignore
});

// get SMS with limit and offset
const nowMilliseconds = +new Date();
const getSmsParams: MailJet.SMS.GetParams = {
    FromTS: nowMilliseconds,
    ToTS: nowMilliseconds
};
const smsGetResource: MailJet.SMS.GetResource = smsConnection.get('sms');
const smsGetResponsePromise: Promise<MailJet.SMS.GetResponse> =  smsGetResource.request(getSmsParams);
smsGetResponsePromise.then((res: MailJet.SMS.GetResponse) => {
    const body: MailJet.SMS.GetResponseData = res.body;
    const data: ReadonlyArray<MailJet.SMS.GetResponseDataData> = body.Data;
    const from: string = data[0].From;
    const to: string = data[0].To;
    const messageId: string = data[0].MessageId;
    const creationTs: number = data[0].CreationTS;
    const sentTs: number = data[0].SentTS;
    const smsCount: number = data[0].SMSCount;
    const cost: MailJet.SMS.ResponseCost = data[0].Cost;
    const value: number = cost.Value;
    const currency: string = cost.Currency;
    const status: MailJet.SMS.ResponseStatus = data[0].Status;
    const code: number = status.Code;
    const name: string = status.Name;
    const description: string = status.Description;
}).catch((err: Error) => {
    // ignore
});

// get SMS count
const smsActionResponse: MailJet.SMS.GetResourceAction = smsGetResource.action('count');
const smsActionResponsePromise: Promise<MailJet.SMS.GetResponseAction> = smsActionResponse.request();
smsActionResponsePromise.then((res: MailJet.SMS.GetResponseAction) => {
    const body: MailJet.SMS.GetResponseActionData = res.body;
    const count: number = body.Count;
}).catch((err: Error) => {
    // ignore
});

// get exported CSV
const getResourceActionId: MailJet.SMS.GetResourceActionId = smsConnection.get('sms').action('export').id('160875105');
const exportResponseAction: Promise<MailJet.SMS.ExportResponse> = getResourceActionId.request();
exportResponseAction.then((res: MailJet.SMS.ExportResponse) => {
    // types allready checked
}).catch((err: Error) => {
    // ignore
});
