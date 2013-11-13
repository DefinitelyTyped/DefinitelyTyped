/// <reference path="..\node\node.d.ts" />
/// <reference path="nodemailer.d.ts" />

var nodemailer: Nodemailer;
var fs: any;
var pathlib: any;

// Create an Amazon SES transport object
var transport:Transport = nodemailer.createTransport("SES", {
    AWSAccessKeyID: "AWSACCESSKEY",
    AWSSecretKey: "/AWS/SECRET",
    ServiceUrl: "https://email.us-east-1.amazonaws.com" // optional
});

console.log('SES Configured');

// optional DKIM signing

transport.useDKIM({
    domainName: "do-not-trust.node.ee", // signing domain
    keySelector: "dkim", // selector name (in this case there's a dkim._domainkey.do-not-trust.node.ee TXT record set up)
    privateKey: fs.readFileSync(pathlib.join(__dirname,"test_private.pem"))
});


// Message object
var message:MailComposer = {

    // sender info
    from: 'Sender Name <sender@example.com>',

    // Comma separated list of recipients
    to: '"Receiver Name" <receiver@example.com>',

    // Subject of the message
    subject: 'Nodemailer is unicode friendly ✔', //

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html: '<p><b>Hello</b> to myself <img src="cid:note@node"/></p>' +
         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@node"/></p>',

    // An array of attachments
    attachments: [

        // String attachment
        {
            fileName: 'notes.txt',
            contents: 'Some notes about this e-mail',
            contentType: 'text/plain' // optional, would be detected from the filename
        },

        // Binary Buffer attachment
        {
            fileName: 'image.png',
            contents: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                                 '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                                 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

            cid: 'note@node' // should be as unique as possible
        },

        // File Stream attachment
        {
            fileName: 'nyancat.gif',
            filePath: __dirname + "/nyan.gif",
            cid: 'nyan@node' // should be as unique as possible
        }
    ]
};

console.log('Sending Mail');

transport.sendMail(message, function (error) {
    if (error) {
        console.log('Error occured');
        console.log(error.message);
        return;
    }
    console.log('Message sent successfully!');
});


// From the SMTP section of https://npmjs.org/package/nodemailer README

var smptTransport1: Transport = nodemailer.createTransport("SMTP", {
    service: "Gmail", // sets automatically host, port and connection security settings
    auth: {
        user: "gmail.user@gmail.com",
        pass: "userpass"
    }
});

var smtpTransport2: Transport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "gmail.user@gmail.com",
        pass: "userpass"
    }
});

