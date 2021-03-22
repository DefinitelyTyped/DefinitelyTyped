import { MailParser, simpleParser } from 'mailparser';

const mailparser = new MailParser();

mailparser.on('headers', (headers) => {
        console.log('Subject:', headers.get('subject'));
    });

// Attachments
mailparser.on('data', data => {
    if (data.type === 'attachment') {
        console.log(data.filename);
        data.content.pipe(process.stdout);
        data.content.on('end', () => data.release());
    }
});

mailparser.on('data', data => {
    if (data.type === 'text') {
        console.log(data.html);
    }
});

// Pipe file to MailParser
// This example pipes a readableStream file to MailParser
import fs = require('fs');
fs.createReadStream('email.eml').pipe(mailparser);

// check different sources and promise/callback api for simpleParser
const sourceString = '';
const sourceBuffer = new Buffer('');
const sourceStream = fs.createReadStream('foo.eml');

simpleParser(sourceString, (err, mail) => err ? err : mail.html);
simpleParser(sourceBuffer, (err, mail) => err ? err : mail.html);
simpleParser(sourceStream, (err, mail) => err ? err : mail.html);
simpleParser(sourceString, { keepCidLinks: true }, (err, mail) => err ? err : mail.html);
simpleParser(sourceBuffer, { keepCidLinks: true }, (err, mail) => err ? err : mail.html);
simpleParser(sourceStream, { keepCidLinks: true }, (err, mail) => err ? err : mail.html);

simpleParser(sourceString).then(mail => mail.html).catch(err => err);
simpleParser(sourceBuffer).then(mail => mail.html).catch(err => err);
simpleParser(sourceStream).then(mail => mail.html).catch(err => err);
simpleParser(sourceString, { keepCidLinks: true }).then(mail => mail.html).catch(err => err);
simpleParser(sourceBuffer, { keepCidLinks: true }).then(mail => mail.html).catch(err => err);
simpleParser(sourceStream, { keepCidLinks: true }).then(mail => mail.html).catch(err => err);

simpleParser(sourceString, (err, mail) => {
    console.log(mail.headers.get('subject'));
    console.log(mail.subject);

    // Attachments
    mail.attachments.forEach(attachment => console.log(attachment.filename));

    // TO Recipieints
    if (Array.isArray(mail.to)) {
        mail.to.forEach(recipient => console.log(recipient));
    } else {
        console.log(mail.to);
    }

    // Texte
    console.log(mail.text);
    console.log(mail.html);
    console.log(mail.textAsHtml);

    // References are either arrays or strings
    if (mail.references && !Array.isArray(mail.references))
        mail.references.toLowerCase();
});
