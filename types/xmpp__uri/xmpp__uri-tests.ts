import { parse, XMPPURI, XMPPURIQuery } from '@xmpp/uri';

// test type exports
type XU = XMPPURI;
type XUQ = XMPPURIQuery;

const uri = parse('foo'); // $ExpectType XMPPURI

uri.path; // $ExpectType JID
uri.authority; // $ExpectType JID | undefined
uri.query; // $ExpectType XMPPURIQuery | undefined
uri.query!.type; // $ExpectType string
uri.query!.params; // $ExpectType ParsedUrlQuery
