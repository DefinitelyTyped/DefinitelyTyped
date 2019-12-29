import mailparser_mod = require('mailparser');
import MailParser = mailparser_mod.MailParser;
import simpleParser = mailparser_mod.simpleParser;

var mailparser = new MailParser();

mailparser.on('headers', function(headers){
	console.log('Subject:', headers.get('subject'));
});

// Attachments
mailparser.on('data', data => {
	if (data.type === 'attachment'){
		console.log(data.filename);
		data.content.pipe(process.stdout);
		data.content.on('end', () => data.release());
	}
});

mailparser.on('data', data => {
	if (data.type === 'text'){
		console.log(data.html);
	}
});

// Pipe file to MailParser
// This example pipes a readableStream file to MailParser
import fs = require('fs');
fs.createReadStream('email.eml').pipe(mailparser);

// check different sources and promise/callback api for simpleParser
var sourceString = '';
var sourceBuffer = new Buffer('');
var sourceStream = fs.createReadStream('foo.eml');

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

	// Text
	console.log(mail.text);
	console.log(mail.html);
	console.log(mail.textAsHtml);
});
