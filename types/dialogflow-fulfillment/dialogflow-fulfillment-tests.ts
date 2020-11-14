import * as DfFulfillment from 'dialogflow-fulfillment';

const webhookClient = new DfFulfillment.WebhookClient({});
const card = new DfFulfillment.Card({});
const image = new DfFulfillment.Image('');
const payload = new DfFulfillment.Payload(DfFulfillment.Platforms.UNSPECIFIED, '', {});
const suggestion = new DfFulfillment.Suggestion({});
const text = new DfFulfillment.Text('');
