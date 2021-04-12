import sendmail = require("sendmail");

const emailSender = sendmail({
    silent: false,
});

const sendEmail = (options: sendmail.MailInput): Promise<boolean> =>
    new Promise((resolve, reject) => {
        emailSender(options, (err, reply) => {
            // if error happened or returned code is now started with 2**
            if (err || !reply.startsWith("2")) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });

sendEmail({
    from: "Test Mail <noreply@mydomain.com>",
    to: "test@mydomain.com",
    subject: "First Test",
    html: "This is a <b>HTML</b> Test message!",
});

sendEmail({
    from: "Test Mail <noreply@mydomain.com>",
    to: "test@mydomain.com",
    subject: "Second Test",
    text: "This is a Plain-Text Test message!",
});
