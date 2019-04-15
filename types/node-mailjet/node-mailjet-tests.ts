import MailJet = require('node-mailjet');

const connection: MailJet.EmailClient = MailJet.connect('MJ_APIKEY_PUBLIC', 'MJ_APIKEY_PRIVATE');

const params: MailJet.EmailSendParams = {
    Messages: [{
        From: {
            Email: 'sender@email.com',
            Name: "Me"
        },
        To: [{
            Email: "passenger1@mailjet.com",
            Name: "You"
        }],
        Subject: "My first Mailjet Email!",
        TextPart: "Greetings from Mailjet!",
        HTMLPart: "<h3>Welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3>"
    }],
    SandboxMode: true,
};
// Act
const mailJetRequest: MailJet.EmailPostResource = connection.post("send", {version: 'v3.1'});
const mailJetResponse: Promise<MailJet.EmailPostResponse> = mailJetRequest.request(params);
mailJetResponse.then((res: MailJet.EmailPostResponse) => {
    const body: MailJet.EmailPostResponseData = res.body;
    const messages: ReadonlyArray<MailJet.PostResponseDataMessage> = body.Messages;
    const message: MailJet.PostResponseDataMessage = messages[0];
    const to: ReadonlyArray<MailJet.PostResponseDataTo> = message.To;
    const email: string = to[0].Email;
    const messageHref: string = to[0].MessageHref;
    const messageId: number = to[0].MessageID;
    const messageUUID: string = to[0].MessageUUID;
}).catch((err: Error) => {
    // ignore
});
