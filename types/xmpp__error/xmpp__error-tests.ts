import XMPPError = require('@xmpp/error');
import { Element } from '@xmpp/xml';

const err = new XMPPError('foo');
const err2: Error = new XMPPError('foo');
new XMPPError('foo', 'text');
new XMPPError('foo', 'text', new Element('foo'));

err.name; // $ExpectType "XMPPError"
// @ts-expect-error
err.name = 'XMPPError';
err.condition; // $ExpectType string
// @ts-expect-error
err.condition = 'foo';
err.text; // $ExpectType string | undefined
// @ts-expect-error
err.text = 'foo';
err.application; // $ExpectType Element | undefined
// @ts-expect-error
err.application = 'foo';
err.element; // $ExpectType Element | undefined
err.element = new Element('foo');

XMPPError.fromElement(new Element('foo')); // $ExpectType XMPPError<"XMPPError">
