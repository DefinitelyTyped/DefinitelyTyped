import Email from ".";

const attachment: Email.Attachment = {
    name: "smtpjs.png",
    path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
}

const email: Email.UnsecureEmail = {
    Host: "smtp.yourisp.com",
    Username: "username",
    Password: "password",
    To: 'them@website.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body"
}

// $ExpectType Promise<void>
Email.send(email).then(message => alert(message));

// $ExpectType Promise<string>
Email.send({...email, Attachments: [attachment]});

// $ExpectType Promise<string>
Email.send({
    SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: 'them@website.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body"
});
