import flow = require("xml-flow");
import * as fs from "fs";

import type { EventEmitter } from "events";

// setup files to read as streams
fs.writeFileSync("./test.xml", "<head><childOne>text</childOne><childTwo>text</childTwo></head>");
const readStreamOne = fs.createReadStream("./test.xml", "utf8");
const readStreamTwo = fs.createReadStream("./test.xml", "utf8");

// $ExpectType EventEmitter
const myFlow = flow(readStreamOne);

const myOptions = {
    preserveMarkup: flow.ALWAYS as typeof flow.ALWAYS,
    simplifyNodes: false,
    useArrays: flow.SOMETIMES as typeof flow.SOMETIMES,
    lowercase: false,
    trim: false,
    normalize: true,
    cdataAsText: true,
    strict: true,
};

// $ExpectType EventEmitter
const myFlowWithOptions = flow(readStreamTwo, myOptions);

// Create object to xml-ise
const xmlTarget = {
    head: {
        childOne: "text",
        childTwo: "text",
    },
};

// $ExpectType string
const xmlString = flow.toXml(xmlTarget);

const xmlOptions = {
    indent: "\t",
    selfClosing: true,
    escape: (s: string) => s,
};

// $ExpectType string
const xmlStringWithOptions = flow.toXml(xmlTarget, xmlOptions);

// clean up files
fs.unlinkSync("./test.xml");
