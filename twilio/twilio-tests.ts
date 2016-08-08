/// <reference path="./twilio.d.ts" />

var str: string;

const client = new twilio.RestClient(str, str);
const account = client.accounts(str);

account.messages.post({
  body: str,
  from: str,
  to: str
});

account.sms.messages(str).get(function(err, data) {
  // Do nothing
});

