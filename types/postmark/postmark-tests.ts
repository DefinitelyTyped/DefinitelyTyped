import * as postmark from "postmark";

declare const options: typeof postmark.defaults;
const message = { To: "me", From: "you" };
const templateMessage = { ...message, TemplateId: "1" };
const filter = { offset: 0 };
const editSender = { Color: "black" };
const templateValidator = {
    Subject: "123",
    HtmlBody: "123345",
    TextBody: "123535"
};

declare const error: postmark.PostmarkError;

declare function callback(err: any, data: any): undefined;

const client = new postmark.Client("124345", options);
const adminClient = new postmark.AdminClient("1123235", options);

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

client.send(message).then(() => {});
client.sendEmailWithTemplate(templateMessage).then(() => {});
client.batch([message, message]).then(() => {});
client.sendEmail(message).then(() => {});
client.sendEmailBatch([message, message]).then(() => {});
client.getDeliveryStatistics().then(() => {});
client.getBounces(filter).then(() => {});
client.getBounce(1).then(() => {});
client.getBounceDump(1).then(() => {});
client.activateBounce(1).then(() => {});
client.getBounceTags().then(() => {});
client.getServer().then(() => {});
client.editServer(editSender).then(() => {});
client.getOutboundMessages(filter).then(() => {});
client.getOutboundMessageDetails(1).then(() => {});
client.getMessageOpens(filter).then(() => {});
client.getMessageOpensForSingleMessage(1, filter).then(() => {});
client.getInboundMessages(filter).then(() => {});
client.getInboundMessageDetails(1).then(() => {});
client.bypassBlockedInboundMessage(1).then(() => {});
client.retryInboundHookForMessage(1).then(() => {});
client.getOuboundOverview(filter).then(() => {});
client.validateTemplate(templateValidator).then(() => {});

adminClient.listSenderSignatures(filter, callback);
adminClient.createSenderSignature({ FromEmail: "", Name: "" }, callback);
adminClient.editSenderSignature(0, { Name: "123" }, callback);
adminClient.deleteSenderSignature(0, callback);
adminClient.resendSenderSignatureConfirmation(0, callback);
adminClient.verifySenderSignatureSPF(0, callback);
adminClient.requestNewDKIMForSenderSignature(0, callback);
adminClient.getServer(0, callback);
adminClient.createServer({ Name: "123" }, callback);
adminClient.editServer(0, { Name: "black" }, callback);
adminClient.deleteServer(0, callback);
adminClient.listServers(filter, callback);
adminClient.listDomains(filter, callback);
adminClient.getDomain(0, callback);
adminClient.createDomain({ Name: "1234" }, callback);
adminClient.editDomain(0, { ReturnPathDomain: "/" }, callback);
adminClient.deleteDomain(0, callback);
adminClient.verifyDomainSPF(0, callback);
adminClient.rotateDKIMForDomain(0, callback);

adminClient.listSenderSignatures(filter).then(() => {});
adminClient.createSenderSignature({ FromEmail: "", Name: "" }).then(() => {});
adminClient
    .editSenderSignature(0, { Name: "somename", ReplyToEmail: "123" })
    .then(() => {});
adminClient.deleteSenderSignature(0).then(() => {});
adminClient.resendSenderSignatureConfirmation(0).then(() => {});
adminClient.verifySenderSignatureSPF(0).then(() => {});
adminClient.requestNewDKIMForSenderSignature(0).then(() => {});
adminClient.getServer(0).then(() => {});
adminClient.createServer({ Name: "123" }).then(() => {});
adminClient.editServer(0, { Name: "black" }).then(() => {});
adminClient.deleteServer(0).then(() => {});
adminClient.listServers(filter).then(() => {});
adminClient.listDomains(filter).then(() => {});
adminClient.getDomain(0).then(() => {});
adminClient.createDomain({ Name: "1234" }).then(() => {});
adminClient.editDomain(0, { ReturnPathDomain: "/" }).then(() => {});
adminClient.deleteDomain(0).then(() => {});
adminClient.verifyDomainSPF(0).then(() => {});
adminClient.rotateDKIMForDomain(0).then(() => {});
