import fs = require("fs");
import { getDecoder } from "iconv-lite";
import {
    AttachmentStream,
    HeaderLines,
    Headers,
    HeaderValue,
    MailParser,
    MailParserOptions,
    MessageText,
    ParsedMail,
    simpleParser,
    Source,
} from "mailparser";

const sourceString = "";
const sourceBuffer = Buffer.from("");
const sourceStream = fs.createReadStream("foo.eml");
const source: Source = sourceString;

const parser = new MailParser();

// $ExpectType MailParser
parser.on("headers", (headers) => {
    // $ExpectType HeaderValue | undefined
    headers.get("subject");
    // $ExpectType HeaderValue | undefined
    headers.get("from");
});

// $ExpectType MailParser
parser.on("headerLines", (headerLines) => {
    // $ExpectType HeaderLines
    headerLines;
    // $ExpectType string
    headerLines[0].key;
    // $ExpectType string
    headerLines[0].line;
});

// $ExpectType MailParser
parser.on("data", (data) => {
    if ((data as AttachmentStream).type === "attachment") {
        const attachment = data as AttachmentStream;

        // $ExpectType AttachmentStream
        attachment;
        // $ExpectType string | undefined
        attachment.filename;
        // $ExpectType void
        attachment.release();
        // $ExpectType Stream
        attachment.content;
    } else {
        const message = data as MessageText;

        // $ExpectType MessageText
        message;
        // $ExpectType string | boolean | undefined
        message.html;
        // $ExpectType string | undefined
        message.text;
        // $ExpectType string | undefined
        message.textAsHtml;
    }
});

// $ExpectType MailParser
parser.on("readable", (data) => {
    const readableData = data as AttachmentStream | MessageText;

    // $ExpectType AttachmentStream | MessageText
    readableData;
});

const options: MailParserOptions = {
    skipHtmlToText: true,
    maxHtmlLengthToParse: 88,
    formatDateString: (d: Date) => d.toDateString(),
    skipImageLinks: true,
    skipTextToHtml: true,
    skipTextLinks: true,
    keepDeliveryStatus: true,
    Iconv: getDecoder("ascii"),
    checksumAlgo: "md5",
    keepCidLinks: true,
};

// $ExpectType MailParserOptions
options;

const configuredParser = new MailParser(options);
// $ExpectType MailParser
configuredParser;

// $ExpectType void
simpleParser(sourceString, (err, mail) => {
    // $ExpectType any
    err;
    // $ExpectType ParsedMail
    mail;
    // $ExpectType HeaderValue | undefined
    mail.headers.get("subject");
    // $ExpectType string | undefined
    mail.subject;
    // $ExpectType string | false
    mail.html;
    // $ExpectType string | undefined
    mail.text;
    // $ExpectType string | undefined
    mail.textAsHtml;
    // $ExpectType string[] | string | undefined
    mail.references;
    // $ExpectType AddressObject | AddressObject[] | undefined
    mail.to;
    // $ExpectType string | undefined
    mail.messageId;
    // $ExpectType Date | undefined
    mail.date;
    // $ExpectType Attachment[]
    mail.attachments;
    // $ExpectType string | undefined
    mail.attachments[0]?.filename;
    // $ExpectType Buffer || Buffer<ArrayBufferLike>
    mail.attachments[0].content;
});

// $ExpectType void
simpleParser(sourceBuffer, (err, mail) => {
    // $ExpectType any
    err;
    // $ExpectType ParsedMail
    mail;
    // $ExpectType string | false
    mail.html;
});

// $ExpectType void
simpleParser(sourceStream, (err, mail) => {
    // $ExpectType any
    err;
    // $ExpectType ParsedMail
    mail;
    // $ExpectType string | false
    mail.html;
});

// $ExpectType void
simpleParser(sourceString, { keepCidLinks: true }, (err, mail) => {
    // $ExpectType any
    err;
    // $ExpectType ParsedMail
    mail;
    // $ExpectType string | false
    mail.html;
});

// $ExpectType void
simpleParser(sourceBuffer, { keepCidLinks: true }, (err, mail) => {
    // $ExpectType any
    err;
    // $ExpectType ParsedMail
    mail;
    // $ExpectType string | false
    mail.html;
});

// $ExpectType void
simpleParser(sourceStream, { keepCidLinks: true }, (err, mail) => {
    // $ExpectType any
    err;
    // $ExpectType ParsedMail
    mail;
    // $ExpectType string | false
    mail.html;
});

// $ExpectType Promise<ParsedMail>
simpleParser(sourceString);

// $ExpectType Promise<ParsedMail>
simpleParser(sourceBuffer);

// $ExpectType Promise<ParsedMail>
simpleParser(sourceStream);

// $ExpectType Promise<ParsedMail>
simpleParser(sourceString, { keepCidLinks: true });

// $ExpectType Promise<ParsedMail>
simpleParser(sourceBuffer, { keepCidLinks: true });

// $ExpectType Promise<ParsedMail>
simpleParser(sourceStream, { keepCidLinks: true });

simpleParser(sourceString).then((mail) => {
    // $ExpectType ParsedMail
    mail;
    // $ExpectType string | false
    mail.html;
    // $ExpectType string[] | string | undefined
    mail.references;
});

simpleParser(sourceString, { keepCidLinks: true }).then((mail) => {
    // $ExpectType ParsedMail
    mail;
    // $ExpectType string | false
    mail.html;
    // $ExpectType string[] | string | undefined
    mail.references;
});

const headerMap: Headers = new Map<string, HeaderValue>();
// $ExpectType Headers
headerMap;
// $ExpectType HeaderValue | undefined
headerMap.get("subject");

const rawHeaderLines: HeaderLines = [{ key: "subject", line: "Subject: test" }];
// $ExpectType HeaderLines
rawHeaderLines;
// $ExpectType string
rawHeaderLines[0].key;
// $ExpectType string
rawHeaderLines[0].line;

const messageText: MessageText = {
    type: "text",
    text: "hello",
    html: "<p>hello</p>",
    textAsHtml: "<p>hello</p>",
};
// $ExpectType MessageText
messageText;
// $ExpectType "text"
messageText.type;

const streamData: AttachmentStream = {
    type: "attachment",
    content: sourceStream,
    contentType: "text/plain",
    headers: new Map<string, HeaderValue>(),
    headerLines: rawHeaderLines,
    checksum: "abc123",
    size: 3,
    filename: "test.txt",
    partId: "1",
    release: () => undefined,
};
// $ExpectType AttachmentStream
streamData;
// $ExpectType void
streamData.release();
// $ExpectType Stream
streamData.content;

const parsedMail: ParsedMail = {
    attachments: [{
        type: "attachment",
        content: Buffer.from("x"),
        contentType: "text/plain",
        headers: new Map<string, HeaderValue>(),
        headerLines: rawHeaderLines,
        checksum: "abc123",
        size: 1,
        filename: "test.txt",
        partId: "1",
        related: false,
    }],
    headers: new Map<string, HeaderValue>(),
    headerLines: rawHeaderLines,
    html: "<p>hello</p>",
    text: "hello",
    textAsHtml: "<p>hello</p>",
    subject: "Hello",
    references: "abc",
    date: new Date(),
    to: [{ value: [], html: "", text: "" }],
    from: { value: [], html: "", text: "" },
    cc: [{ value: [], html: "", text: "" }],
    bcc: [{ value: [], html: "", text: "" }],
    replyTo: { value: [], html: "", text: "" },
    messageId: "<id>",
    inReplyTo: "<in-reply>",
    priority: "normal",
};
// $ExpectType ParsedMail
parsedMail;
// $ExpectType string | false
parsedMail.html;
// $ExpectType string[] | string | undefined
parsedMail.references;
// $ExpectType AddressObject | AddressObject[] | undefined
parsedMail.to;
// $ExpectType "normal" | "low" | "high" | undefined
parsedMail.priority;
// $ExpectType Buffer[] || Buffer<ArrayBufferLike>[]
parsedMail.attachments.map((attachment) => attachment.content);

source;
fs.createReadStream("email.eml").pipe(parser);
