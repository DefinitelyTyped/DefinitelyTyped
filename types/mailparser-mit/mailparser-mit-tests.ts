import { createReadStream } from "fs";
import { MailParser } from "mailparser-mit";

// $ExpectType MailParser
const parser = new MailParser();
// $ExpectType MailParser
new MailParser({});
// $ExpectType MailParser
new MailParser({
    debug: true,
    defaultCharset: "",
    showAttachmentLinks: true,
    streamAttachments: true,
    unescapeSMTP: true,
});
// @ts-expect-error
new MailParser({ otherProp: "" });

// $ExpectType MailData
parser.mailData;
// $ExpectType MimeTreeNode
parser.mimeTree;
// $ExpectType MailParserOptions
parser.options;
// $ExpectType MailParser
parser.on("end", email => {
    // $ExpectType ParsedEmail
    const _email = email;
});
// $ExpectType MailParser
parser.on("headers", headers => {
    // $ExpectType Headers
    const _email = headers;
});
// $ExpectType MailParser
parser.on("attachment", (attachment, node) => {
    // $ExpectType StreamAttachment
    const _attachment = attachment;
    // $ExpectType MimeTreeNode
    const _node = node;
});
// pipes a readableStream file to MailParser
createReadStream("email.eml").pipe(parser);
