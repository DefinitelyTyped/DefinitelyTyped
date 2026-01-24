/// <reference types="node" />

import {
    Advert,
    BufferUtils,
    CayenneLpp,
    Channel,
    Connection,
    Constants,
    Contact,
    Message,
    NodeJSSerialConnection,
    Packet,
    SelfInfo,
    SerialConnection,
    TCPConnection,
    WebBleConnection,
    WebSerialConnection,
} from "@liamcottle/meshcore.js";

// Test NodeJSSerialConnection
const serialConnection = new NodeJSSerialConnection("/dev/ttyUSB0");
serialConnection; // $ExpectType NodeJSSerialConnection

// Test connection methods
serialConnection.connect(); // $ExpectType Promise<void>
serialConnection.close(); // $ExpectType Promise<void>

// Test getSelfInfo
serialConnection.getSelfInfo(); // $ExpectType Promise<SelfInfo>
serialConnection.getSelfInfo(5000); // $ExpectType Promise<SelfInfo>

// Test getWaitingMessages
serialConnection.getWaitingMessages(); // $ExpectType Promise<Message[]>

// Test getChannels
serialConnection.getChannels(); // $ExpectType Promise<Channel[]>

// Test getContacts
serialConnection.getContacts(); // $ExpectType Promise<Contact[]>
serialConnection.getContacts(1234567890); // $ExpectType Promise<Contact[]>

// Test syncNextMessage
serialConnection.syncNextMessage(); // $ExpectType Promise<void>

// Test sendTextMessage
const publicKey = Buffer.from("abcdef123456", "hex");
serialConnection.sendTextMessage(publicKey, "Hello"); // $ExpectType Promise<void>

// Test sendChannelTextMessage
serialConnection.sendChannelTextMessage(0, "Hello channel"); // $ExpectType Promise<void>

// Test findContactByPublicKeyPrefix
const prefix = Buffer.from("abcdef", "hex");
serialConnection.findContactByPublicKeyPrefix(prefix); // $ExpectType Promise<Contact | null>

// Test event listeners
serialConnection.on("connected", () => {
    // Connected handler
});

serialConnection.on("disconnected", () => {
    // Disconnected handler
});

serialConnection.on(Constants.ResponseCodes.ContactMsgRecv, (message: Message) => {
    message.text; // $ExpectType string
});

serialConnection.on(Constants.ResponseCodes.ChannelMsgRecv, (message: any) => {
    message.text;
});

// Test other connection types
const tcpConnection = new TCPConnection("192.168.1.100", 8080);
tcpConnection; // $ExpectType TCPConnection

const webSerialConnection = new WebSerialConnection();
webSerialConnection; // $ExpectType WebSerialConnection

const webBleConnection = new WebBleConnection();
webBleConnection; // $ExpectType WebBleConnection

const genericSerialConnection = new SerialConnection();
genericSerialConnection; // $ExpectType SerialConnection

// Test SelfInfo interface
async function testSelfInfo() {
    const selfInfo = await serialConnection.getSelfInfo();
    selfInfo.publicKey.toString(); // Buffer methods available
    selfInfo.name; // $ExpectType string | undefined
}

// Test Message interface
async function testMessage() {
    const messages = await serialConnection.getWaitingMessages();
    const message = messages[0];
    message.pubKeyPrefix.toString(); // Buffer methods available
    message.pathLen; // $ExpectType number
    message.txtType; // $ExpectType number
    message.senderTimestamp; // $ExpectType number
    message.text; // $ExpectType string
}

// Test Channel interface
async function testChannel() {
    const channels = await serialConnection.getChannels();
    const channel = channels[0];
    channel.channelIdx; // $ExpectType number
    channel.name; // $ExpectType string
    channel.secret.toString(); // Buffer methods available
}

// Test Contact interface
async function testContact() {
    const contacts = await serialConnection.getContacts();
    const contact = contacts[0];
    contact.publicKey.toString(); // Buffer methods available
    contact.name; // $ExpectType string | undefined
    contact.lastSeen; // $ExpectType number | undefined
}

// Test Constants
Constants.SupportedCompanionProtocolVersion; // $ExpectType number
Constants.ResponseCodes.ContactMsgRecv; // $ExpectType number
Constants.ResponseCodes.ChannelMsgRecv; // $ExpectType number
Constants.PushCodes.MsgWaiting; // $ExpectType number
Constants.PushCodes.NewAdvert; // $ExpectType number
Constants.CommandCodes.AppStart; // $ExpectType number
Constants.CommandCodes.SendTxtMsg; // $ExpectType number
Constants.CommandCodes.SendChannelTxtMsg; // $ExpectType number
Constants.CommandCodes.GetContacts; // $ExpectType number

// Test Advert
const advertData = Buffer.from("0123456789abcdef", "hex");
const advert = new Advert(advertData);
advert; // $ExpectType Advert
advert.publicKey.toString(); // Buffer methods available
advert.advName; // $ExpectType string | undefined

// Test Packet
const packetData = Buffer.from("packet", "utf8");
const packet = new Packet(packetData);
packet; // $ExpectType Packet

// Test BufferUtils
const buf1 = Buffer.from("abc");
const buf2 = Buffer.from("def");
const xorResult = BufferUtils.xor(buf1, buf2);
xorResult.toString(); // Buffer methods available
const concatResult = BufferUtils.concat(buf1, buf2);
concatResult.toString(); // Buffer methods available

// Test CayenneLpp
const lpp = new CayenneLpp();
lpp; // $ExpectType CayenneLpp

// Test that invalid arguments cause errors
// @ts-expect-error - Missing required argument
new NodeJSSerialConnection();

// @ts-expect-error - Wrong type for port
new NodeJSSerialConnection(123);

// @ts-expect-error - Missing required argument
new TCPConnection("host");

// @ts-expect-error - Wrong type for port
new TCPConnection("host", "port");
