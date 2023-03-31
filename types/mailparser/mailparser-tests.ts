import { AttachmentStream, MailParser, MailParserOptions, MessageText, simpleParser } from 'mailparser';
import { getDecoder } from 'iconv-lite';

const mailparser = new MailParser();

mailparser.on('headers', headers => {
    const subjectHeader = headers.get('subject');
    subjectHeader; // $ExpectType HeaderValue | undefined
});

const isAttachment = (data: AttachmentStream | MessageText): data is AttachmentStream => {
    return data.type === 'attachment';
};

const isMessageText = (data: AttachmentStream | MessageText): data is MessageText => {
    return data.type === 'text';
};

// Attachments
mailparser.on('data', data => {
    if (isAttachment(data)) {
        const filename = data.filename;
        const content = data.content;
        filename; // $ExpectType string | undefined
        content; // $ExpectType Stream
    }
});

mailparser.on('data', data => {
    if (isMessageText(data)) {
        const html = data.html;
        html; // $ExpectType string | boolean | undefined
    }
});

// Validate options
const mailparserOptions: MailParserOptions = {
    skipHtmlToText: true,
    maxHtmlLengthToParse: 88,
    formatDateString: (d: Date) => d.toDateString(),
    skipImageLinks: true,
    skipTextToHtml: true,
    skipTextLinks: true,
    Iconv: getDecoder('ascii'),
    keepCidLinks: true,
};

mailparserOptions.skipHtmlToText; // $ExpectType boolean | undefined
mailparserOptions.maxHtmlLengthToParse; // $ExpectType number | undefined
mailparserOptions.formatDateString; // $ExpectType ((d: Date) => string) | undefined
mailparserOptions.skipImageLinks; // $ExpectType boolean | undefined
mailparserOptions.skipTextToHtml; // $ExpectType boolean | undefined
mailparserOptions.skipTextLinks; // $ExpectType boolean | undefined
mailparserOptions.Iconv; // $ExpectType DecoderStream | undefined
mailparserOptions.keepCidLinks; // $ExpectType boolean | undefined

// Pipe file to MailParser
// This example pipes a readableStream file to MailParser
import fs = require('fs');
fs.createReadStream('email.eml').pipe(mailparser);

// check different sources and async/await api for simpleParser
const sourceString = '';
const sourceBuffer = new Buffer('');
const sourceStream = fs.createReadStream('foo.eml');

(async () => {
    const res = await simpleParser(sourceString);
    res; // $ExpectType ParsedMail
    res.html; // $ExpectType string | false
})();

(async () => {
    const res = await simpleParser(sourceBuffer);
    res; // $ExpectType ParsedMail
    res.html; // $ExpectType string | false
})();

(async () => {
    const res = await simpleParser(sourceStream);
    res; // $ExpectType ParsedMail
    res.html; // $ExpectType string | false
})();

(async () => {
    const res = await simpleParser(sourceString, { keepCidLinks: true });
    res; // $ExpectType ParsedMail
    res.html; // $ExpectType string | false
})();

(async () => {
    const res = await simpleParser(sourceBuffer, { keepCidLinks: true });
    res; // $ExpectType ParsedMail
    res.html; // $ExpectType string | false
})();

(async () => {
    const res = await simpleParser(sourceStream, { keepCidLinks: true });
    res; // $ExpectType ParsedMail
    res.html; // $ExpectType string | false
})();

(async () => {
    const mail = await simpleParser(sourceString);
    const subjectHeader = mail.headers.get('subject');
    const subject = mail.subject;
    subjectHeader; // $ExpectType HeaderValue | undefined
    subject; // $ExpectType string | undefined

    mail.attachments.forEach(attachment => {
        const filename = attachment.filename;
        filename; // $ExpectType string | undefined
    });

    [mail.to, mail.from, mail.cc, mail.bcc].forEach(addressField => {
        addressField; // $ExpectType AddressObject | undefined
        const value = addressField!.value;
        value; // $ExpectType EmailAddress[]
    });

    const text = mail.text;
    const html = mail.html;
    const textAsHtml = mail.textAsHtml;

    text; // $ExpectType string | undefined
    html; // $ExpectType string | false
    textAsHtml; // $ExpectType string | undefined

    const references = mail.references;
    references; // $ExpectType string[] | undefined
})();

simpleParser(sourceString, (err, mail) => {
    const res = err ? err : mail.html;
    res; // $ExpectType any
});
simpleParser(sourceBuffer, (err, mail) => {
    const res = err ? err : mail.html;
    res; // $ExpectType any
});
simpleParser(sourceStream, (err, mail) => {
    const res = err ? err : mail.html;
    res; // $ExpectType any
});
simpleParser(sourceString, { keepCidLinks: true }, (err, mail) => {
    const res = err ? err : mail.html;
    res; // $ExpectType any
});
simpleParser(sourceBuffer, { keepCidLinks: true }, (err, mail) => {
    const res = err ? err : mail.html;
    res; // $ExpectType any
});
simpleParser(sourceStream, { keepCidLinks: true }, (err, mail) => {
    const res = err ? err : mail.html;
    res; // $ExpectType any
});

simpleParser(sourceString)
    .then(mail => {
        const html = mail.html;
        html; // $ExpectType string | false
    })
    .catch(err => err);
simpleParser(sourceBuffer)
    .then(mail => {
        const html = mail.html;
        html; // $ExpectType string | false
    })
    .catch(err => err);
simpleParser(sourceStream)
    .then(mail => {
        const html = mail.html;
        html; // $ExpectType string | false
    })
    .catch(err => err);
simpleParser(sourceString, { keepCidLinks: true })
    .then(mail => {
        const html = mail.html;
        html; // $ExpectType string | false
    })
    .catch(err => err);
simpleParser(sourceBuffer, { keepCidLinks: true })
    .then(mail => {
        const html = mail.html;
        html; // $ExpectType string | false
    })
    .catch(err => err);
simpleParser(sourceStream, { keepCidLinks: true })
    .then(mail => {
        const html = mail.html;
        html; // $ExpectType string | false
    })
    .catch(err => err);

simpleParser(sourceString, (err, mail) => {
    const subjectHeader = mail.headers.get('subject');
    const subject = mail.subject;
    subjectHeader; // $ExpectType HeaderValue | undefined
    subject; // $ExpectType string | undefined

    mail.attachments.forEach(attachment => {
        const filename = attachment.filename;
        filename; // $ExpectType string | undefined
    });

    [mail.to, mail.from, mail.cc, mail.bcc].forEach(addressField => {
        addressField; // $ExpectType AddressObject | undefined
        const value = addressField!.value;
        value; // $ExpectType EmailAddress[]
    });

    const text = mail.text;
    const html = mail.html;
    const textAsHtml = mail.textAsHtml;

    text; // $ExpectType string | undefined
    html; // $ExpectType string | false
    textAsHtml; // $ExpectType string | undefined

    const references = mail.references;
    references; // $ExpectType string[] | undefined
});
