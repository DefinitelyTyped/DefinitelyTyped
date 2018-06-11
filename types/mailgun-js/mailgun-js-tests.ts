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

mailgun.messages().send(
    {
        to: "someone@email.com",
        attachment: new mailgun.Attachment({
            data: "filepath",
            filename: "my_custom_name.png"
        })
    },
    (err, body) => {}
);
