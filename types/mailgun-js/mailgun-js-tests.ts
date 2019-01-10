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
    }),
    inline: [
        new mailgun.Attachment({
            data: "filepath",
            filename: "my_custom_name_2.png"
        }),
        "my_custom_file_3.png",
        Buffer.from("plain text")
    ]
  };

mailgun.messages().send(exampleSendData, (err, body) => {});

let validationResultPromise: Promise<mailgunFactory.validation.ValidateResponse>;
validationResultPromise = mailgun.validate("foo@mailgun.net");
validationResultPromise = mailgun.validate("foo@mailgun.net", true);
validationResultPromise = mailgun.validate("foo@mailgun.net", true, { mailbox_verification: true });
validationResultPromise = mailgun.validate("foo@mailgun.net", { mailbox_verification: false, api_key: "..." });
mailgun.validate("foo@mailgun.net", (error, body) => {});
mailgun.validate("foo@mailgun.net", true, (error, body) => {});
mailgun.validate("foo@mailgun.net", true, { mailbox_verification: true }, (error, body) => {});
mailgun.validate("foo@mailgun.net", { mailbox_verification: false, api_key: "..." }, (error, body) => {});

const validationResult6: mailgunFactory.validation.ValidateResponse = {
    address: "foo@mailgun.net",
    did_you_mean: "bar@mailgun.net",
    is_disposable_address: false,
    is_role_address: true,
    is_valid: true,
    mailbox_verification: "true",
    parts: {
        display_name: "foo",
        domain: "mailgun.net",
        local_part: "foo"
    }
};
