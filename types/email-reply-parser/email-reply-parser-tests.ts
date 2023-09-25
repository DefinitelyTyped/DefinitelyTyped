import EmailReplyParser = require("email-reply-parser");

// Test EmailReplyParser
const emailReplyParser = new EmailReplyParser();

const email = emailReplyParser.read("text"); // $ExpectType Email
emailReplyParser.parseReply("text"); // $ExpectType string
emailReplyParser.parseReplied("text"); // $ExpectType string

email.fragments; // $ExpectType Fragment[]
email.getFragments(); // $ExpectType Fragment[]
email.getVisibleText(); // $ExpectType string
email.getQuotedText(); // $ExpectType string
