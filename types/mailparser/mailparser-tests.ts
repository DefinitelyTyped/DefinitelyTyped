import mailparser_mod = require("mailparser");
import MailParser = mailparser_mod.MailParser;
import ParsedMail = mailparser_mod.ParsedMail;
import Attachment = mailparser_mod.Attachment;
import simpleParser = mailparser_mod.simpleParser;

var mailparser = new MailParser();


mailparser.on("headers", function(headers){
    console.log(headers.received);
});

mailparser.on("end", function(mail){
    mail; // object structure for parsed e-mail
});


// Decode a simple e-mail
// This example decodes an e-mail from a string

var email = "From: 'Sender Name' <sender@example.com>\r\n"+
            "To: 'Receiver Name' <receiver@example.com>\r\n"+
            "Subject: Hello world!\r\n"+
            "\r\n"+
            "How are you today?";
    // setup an event listener when the parsing finishes
mailparser.on("end", function(mail_object){
    console.log("From:", mail_object.from); //[{address:'sender@example.com',name:'Sender Name'}]
    console.log("Subject:", mail_object.subject); // Hello world!
    console.log("Text body:", mail_object.text); // How are you today?
});
    // send the email source to the parser
mailparser.write(email);
mailparser.end();


// Pipe file to MailParser
// This example pipes a readableStream file to MailParser
mailparser = new MailParser();
import fs = require("fs");
mailparser.on("end", function(mail_object){
    console.log("Subject:", mail_object.subject);
});

fs.createReadStream("email.eml").pipe(mailparser);


// Attachments
mailparser.on("end", function(mail_object : ParsedMail){
    mail_object.attachments.forEach(function(attachment){
        console.log(attachment.fileName);
    });
});


// Attachment streaming
var mp = new MailParser({
    streamAttachments: true
})

mp.on("attachment", function(attachment : Attachment, mail : ParsedMail){
    var output = fs.createWriteStream(attachment.generatedFileName);
    attachment.stream.pipe(output);
});

// check different sources and promise/callback api for simpleParser
var sourceString = "";
var sourceBuffer = new Buffer("");
var sourceStream = fs.createReadStream("foo.eml");

simpleParser(sourceString, (err, mail) => err ? err : mail.html);
simpleParser(sourceBuffer, (err, mail) => err ? err : mail.html);
simpleParser(sourceStream, (err, mail) => err ? err : mail.html);

simpleParser(sourceString).then(mail => mail.html).catch(err => err);
simpleParser(sourceBuffer).then(mail => mail.html).catch(err => err);
simpleParser(sourceStream).then(mail => mail.html).catch(err => err);
