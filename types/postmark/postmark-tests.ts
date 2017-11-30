import postmark = require('postmark');

declare var options: typeof postmark.defaults;
const message = { To: 'me', From: 'you' };
const templateMessage = {...message, TemplateId: '1'};
const filter = { offset: 0 };
const editSender = { Color: 'black' };
const templateValidator = {
  Subject: '123',
  HtmlBody: '123345',
  TextBody: '123535',
};

declare function callback(err: any, data: any): void;

const client = new postmark.Client('124345', options);
const adminClient = new postmark.AdminClient('1123235', options);

client.send(message, callback);
client.sendEmailWithTemplate(templateMessage, callback);
client.batch([message, message], callback);
client.sendEmail(message, callback);
client.sendEmailBatch([message, message], callback);
client.getDeliveryStatistics(callback);
client.getBounces(filter, callback);
client.getBounce(1, callback);
client.getBounceDump(1, callback);
client.activateBounce(1, callback);
client.getBounceTags(callback);
client.getServer(callback);
client.editServer(editSender, callback);
client.getOutboundMessages(filter, callback);
client.getOutboundMessageDetails(1, callback);
client.getMessageOpens(filter, callback);
client.getMessageOpensForSingleMessage(1, filter, callback);
client.getInboundMessages(filter, callback);
client.getInboundMessageDetails(1, callback);
client.bypassBlockedInboundMessage(1, callback);
client.retryInboundHookForMessage(1, callback);
client.getOuboundOverview(filter, callback);
client.validateTemplate(templateValidator, callback);

adminClient.listSenderSignatures(filter, callback);
adminClient.createSenderSignature({FromEmail: '', Name: ''}, callback);
adminClient.editSenderSignature(0, {ReplyToEmail: '123'}, callback);
adminClient.deleteSenderSignature(0, callback);
adminClient.resendSenderSignatureConfirmation(0, callback);
adminClient.verifySenderSignatureSPF(0, callback);
adminClient.requestNewDKIMForSenderSignature(0, callback);
adminClient.getServer(0, callback);
adminClient.createServer({Name: '123'}, callback);
adminClient.editServer(0, {Color: 'black'}, callback);
adminClient.deleteServer(0, callback);
adminClient.listServers(filter, callback);
adminClient.listDomains(filter, callback);
adminClient.getDomain(0, callback);
adminClient.createDomain({Name: '1234'}, callback);
adminClient.editDomain(0, {ReturnPathDomain: '/'}, callback);
adminClient.deleteDomain(0, callback);
adminClient.verifyDomainSPF(0, callback);
adminClient.rotateDKIMForDomain(0, callback);
