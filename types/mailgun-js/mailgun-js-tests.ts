import * as mailgunFactory from "mailgun-js";
import mailgunFactory2 = require('mailgun-js');

const mailgun = new mailgunFactory({
    apiKey: "auth.api_key",
    domain: "auth.domain"
});

const mailgun2 = new mailgunFactory2({
    apiKey: "auth.api_key",
    domain: "auth.domain"
});

mailgun.messages().send(
    {
        to: "fixture.message.to"
    },
    err => {
        console.log;
    }
);

const exampleSendData: mailgunFactory.messages.SendData = {
    to: "someone@email.com",
    attachment: new mailgun.Attachment({
        data: "filepath",
        filename: "my_custom_name.png"
    })
  };

mailgun.messages().send(exampleSendData, (err, body) => {});
