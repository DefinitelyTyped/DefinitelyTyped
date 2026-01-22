import Connection from "@xmpp/connection";
import ConnectionTCP, { SocketConstructor, SocketParameters } from "@xmpp/connection-tcp";
import { Element } from "@xmpp/xml";
import { URL } from "url";

const cTcp = new ConnectionTCP({ domain: "foo", service: "bar" });
const c: Connection = cTcp;
cTcp.sendMany([new Element("foo")]); // $ExpectType Promise<void>
cTcp.sendMany(new Set([new Element("foo")])); // $ExpectType Promise<void>
cTcp.socketParameters("foo"); // $ExpectType SocketParameters | undefined
cTcp.socketParameters(new URL("foo")); // $ExpectType SocketParameters | undefined
cTcp.headerElement(); // $ExpectType Element
