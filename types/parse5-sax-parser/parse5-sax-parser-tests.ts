import {
    StartTagToken,
    EndTagToken,
    CommentToken,
    TextToken,
    DoctypeToken
} from "parse5-sax-parser";
import SAXParser = require("parse5-sax-parser");
import { createReadStream, createWriteStream } from "fs";

let sax = new SAXParser();

sax = new SAXParser({ sourceCodeLocationInfo: true });

sax.stop();

sax
    .on("startTag", (startTag: StartTagToken) => {
        startTag.tagName; // $ExpectType string
        startTag.attrs; // $ExpectType Attribute[]
        startTag.selfClosing; // $ExpectType boolean
        startTag.sourceCodeLocation!; // $ExpectType StartTagLocation
    })
    .on("endTag", (endTag: EndTagToken) => {
        endTag.tagName; // $ExpectType string
        endTag.sourceCodeLocation!; // $ExpectType Location
    })
    .on("comment", (comment: CommentToken) => {
        comment.text; // $ExpectType string
        comment.sourceCodeLocation!; // $ExpectType Location
    })
    .on("text", (text: TextToken) => {
        text.text; // $ExpectType string
        text.sourceCodeLocation!; // $ExpectType Location
    })
    .on("doctype", (doctype: DoctypeToken) => {
        doctype.name; // $ExpectType string
        doctype.publicId; // $ExpectType string
        doctype.systemId; // $ExpectType string
        doctype.sourceCodeLocation!; // $ExpectType Location
    })
    .on("finish", () => {});

createReadStream("file1")
    .pipe(sax)
    .pipe(createWriteStream("file2"));
