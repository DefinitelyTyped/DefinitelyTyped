import XMPPError = require('@xmpp/error');
import { Element } from '@xmpp/xml';

const err = new XMPPError('foo');
const err2: Error = new XMPPError('foo');
new XMPPError('foo', 'text');
new XMPPError('foo', 'text', new Element('foo'));

err.name; // $ExpectType "XMPPError"
err.name = 'XMPPError'; // $ExpectError
err.condition; // $ExpectType string
err.condition = 'foo'; // $ExpectError
err.text; // $ExpectType string | undefined
err.text = 'foo'; // $ExpectError
err.application; // $ExpectType Element | undefined
err.application = 'foo'; // $ExpectError
err.element; // $ExpectType Element | undefined
err.element = new Element('foo');

XMPPError.fromElement(new Element('foo')); // $ExpectType XMPPError<"XMPPError">
