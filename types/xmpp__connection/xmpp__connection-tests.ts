import Connection = require('@xmpp/connection');
import StreamError = require('@xmpp/connection/lib/StreamError');
import * as util from '@xmpp/connection/lib/util';
import XMPPError = require('@xmpp/error');
import { JID } from '@xmpp/jid';
import { Element } from '@xmpp/xml';
import { SocketConnectOpts } from 'net';
import { URL } from 'url';

// test type exports
type ParsedHost = util.ParsedHost;
type ParsedURI = util.ParsedURI;
type ParsedService = util.ParsedService;
type Status = Connection.Status;
type Options = Connection.Options;
type OpenOptions = Connection.OpenOptions;
type ConnectionEvents = Connection.ConnectionEvents;
type StatusEvents = Connection.StatusEvents;
type SocketConstructor = Connection.SocketConstructor;
type SocketBase = Connection.SocketBase;
type SocketEvents = Connection.SocketEvents;

const streamErr = new StreamError('foo');
const xmppErr: XMPPError<'StreamError'> = streamErr;
class MyStreamErr extends StreamError {}

const uri = util.parseURI('https://foo.bar'); // $ExpectType ParsedURI
util.parseURI(new URL('https://foo.bar')); // $ExpectType ParsedURI
uri.hostname; // $ExpectType string
uri.port; // $ExpectType string
uri.protocol; // $ExpectType string
const host = util.parseHost('foo.bar'); // $ExpectType ParsedHost
host.hostname; // $ExpectType string
host.port; // $ExpectType string
const service = util.parseService('foo.bar'); // $ExpectType ParsedService
service.hostname; // $ExpectType string
service.port; // $ExpectType string
service.protocol; // $ExpectType string | undefined

class MyConn extends Connection {
    headerElement(): Element {
        return new Element('foo');
    }
    footerElement(): Element {
        return new Element('foo');
    }
    socketParameters(service: string) {
        return {
            foo: 'bar' as const,
        };
    }
}

class MyConn2 extends Connection {
    headerElement(): Element {
        return new Element('foo');
    }
    footerElement(): Element {
        return new Element('foo');
    }
    socketParameters(service: string) {
        return null as any as SocketConnectOpts;
    }
}

const conn = new MyConn({});
new MyConn({ service: 'foo' });
new MyConn({ service: 'foo', domain: 'bar.baz' });
new MyConn({ service: 'foo', domain: 'bar.baz', lang: 'en' });

conn.jid; // $ExpectType JID | null
conn.timeout; // $ExpectType number
conn.options; // $ExpectType Partial<Options>
conn.socketListeners.data; // $ExpectType ((data: Buffer) => void) | undefined
conn.socketListeners.close; // $ExpectType ((hadError: boolean, event?: string | undefined) => void) | undefined
conn.socketListeners.connect; // $ExpectType (() => void) | undefined
conn.socketListeners.error; // $ExpectType ((error: Error) => void) | undefined
conn.parserListeners.element; // $ExpectType ((element: Element) => void) | undefined
conn.parserListeners.error; // $ExpectType ((error: Error) => void) | undefined
conn.parserListeners.end; // $ExpectType ((element: Element) => void) | undefined
conn.parserListeners.start; // $ExpectType ((element: Element) => void) | undefined
const s: keyof StatusEvents = conn.status;
conn.socket; // $ExpectType SocketBase | null
conn.parser; // $ExpectType Parser | null
conn.root; // $ExpectType Element | null
conn.NS; // $ExpectType string
conn.Socket; // $ExpectType SocketConstructor | null
conn.Parser; // $ExpectType typeof Parser | null

conn.start(); // $ExpectType Promise<JID>
conn.connect('foo'); // $ExpectType Promise<void>
conn.disconnect(); // $ExpectType Promise<void>
conn.disconnect(100); // $ExpectType Promise<void>
conn.open('foo'); // $ExpectType Promise<Element>
conn.open({ domain: 'foo' }); // $ExpectType Promise<Element>
conn.open({ domain: 'foo', lang: 'en' }); // $ExpectType Promise<Element>
conn.open({ domain: 'foo', timeout: 100 }); // $ExpectType Promise<Element>
conn.stop(); // $ExpectType Promise<Element>
conn.close(); // $ExpectType Promise<Element>
conn.close(100); // $ExpectType Promise<Element>
conn.restart(); // $ExpectType Promise<Element>
conn.send(new Element('foo')); // $ExpectType Promise<void>
conn.sendReceive(new Element('foo')); // $ExpectType Promise<Element>
conn.sendReceive(new Element('foo'), 100); // $ExpectType Promise<Element>
conn.write('foo'); // $ExpectType Promise<void>
conn.isStanza(new Element('foo')); // $ExpectType boolean
conn.isNonza(new Element('foo')); // $ExpectType boolean

conn.addListener('input', input => {
    input; // $ExpectType string
});
conn.addListener('send', el => {
    el; // $ExpectType Element
});
conn.addListener('error', (error: Error) => {});
conn.addListener('element', el => {
    el; // $ExpectType Element
});
conn.addListener('stanza', el => {
    el; // $ExpectType Element
});
conn.addListener('nonza', el => {
    el; // $ExpectType Element
});
conn.addListener('status', (status, ...args) => {
    const s: keyof StatusEvents = status;
    const a = args[0]; // $ExpectType string | JID | Element | { clean: boolean; event: unknown; } | undefined
});
conn.addListener('online', jid => {
    jid; // $ExpectType JID
});
conn.addListener('offline', el => {
    el; // $ExpectType Element
});
conn.addListener('connect', () => {});
conn.addListener('connecting', service => {
    service; // $ExpectType string
});
conn.addListener('disconnect', result => {
    result; // $ExpectType { clean: boolean; event: unknown; }
});
conn.addListener('disconnecting', () => {});
conn.addListener('open', el => {
    el; // $ExpectType Element
});
conn.addListener('opening', () => {});
conn.addListener('close', el => {
    el; // $ExpectType Element
});
conn.addListener('closing', () => {});

conn.on('input', input => {
    input; // $ExpectType string
});
conn.on('send', el => {
    el; // $ExpectType Element
});
conn.on('error', (error: Error) => {});
conn.on('element', el => {
    el; // $ExpectType Element
});
conn.on('stanza', el => {
    el; // $ExpectType Element
});
conn.on('nonza', el => {
    el; // $ExpectType Element
});
conn.on('status', (status, ...args) => {
    const s: keyof StatusEvents = status;
    const a = args[0]; // $ExpectType string | JID | Element | { clean: boolean; event: unknown; } | undefined
});
conn.on('online', el => {
    el; // $ExpectType JID
});
conn.on('offline', el => {
    el; // $ExpectType Element
});
conn.on('connect', () => {});
conn.on('connecting', service => {
    service; // $ExpectType string
});
conn.on('disconnect', result => {
    result; // $ExpectType { clean: boolean; event: unknown; }
});
conn.on('disconnecting', () => {});
conn.on('open', el => {
    el; // $ExpectType Element
});
conn.on('opening', () => {});
conn.on('close', el => {
    el; // $ExpectType Element
});
conn.on('closing', () => {});

conn.once('input', input => {
    input; // $ExpectType string
});
conn.once('send', el => {
    el; // $ExpectType Element
});
conn.once('error', (error: Error) => {});
conn.once('element', el => {
    el; // $ExpectType Element
});
conn.once('stanza', el => {
    el; // $ExpectType Element
});
conn.once('nonza', el => {
    el; // $ExpectType Element
});
conn.once('status', (status, ...args) => {
    const s: keyof StatusEvents = status;
    if (status === 'disconnect') {
        const a = args[0]; // $ExpectType string | JID | Element | { clean: boolean; event: unknown; } | undefined
    }
});
conn.once('online', el => {
    el; // $ExpectType JID
});
conn.once('offline', el => {
    el; // $ExpectType Element
});
conn.once('connect', () => {});
conn.once('connecting', service => {
    service; // $ExpectType string
});
conn.once('disconnect', result => {
    result; // $ExpectType { clean: boolean; event: unknown; }
});
conn.once('disconnecting', () => {});
conn.once('open', el => {
    el; // $ExpectType Element
});
conn.once('opening', () => {});
conn.once('close', el => {
    el; // $ExpectType Element
});
conn.once('closing', () => {});

conn.prependListener('input', input => {
    input; // $ExpectType string
});
conn.prependListener('send', el => {
    el; // $ExpectType Element
});
conn.prependListener('error', (error: Error) => {});
conn.prependListener('element', el => {
    el; // $ExpectType Element
});
conn.prependListener('stanza', el => {
    el; // $ExpectType Element
});
conn.prependListener('nonza', el => {
    el; // $ExpectType Element
});
conn.prependListener('status', (status, ...args) => {
    const s: keyof StatusEvents = status;
    const a = args[0]; // $ExpectType string | JID | Element | { clean: boolean; event: unknown; } | undefined
});
conn.prependListener('online', el => {
    el; // $ExpectType JID
});
conn.prependListener('offline', el => {
    el; // $ExpectType Element
});
conn.prependListener('connect', () => {});
conn.prependListener('connecting', service => {
    service; // $ExpectType string
});
conn.prependListener('disconnect', result => {
    result; // $ExpectType { clean: boolean; event: unknown; }
});
conn.prependListener('disconnecting', () => {});
conn.prependListener('open', el => {
    el; // $ExpectType Element
});
conn.prependListener('opening', () => {});
conn.prependListener('close', el => {
    el; // $ExpectType Element
});
conn.prependListener('closing', () => {});

conn.prependOnceListener('input', input => {
    input; // $ExpectType string
});
conn.prependOnceListener('send', el => {
    el; // $ExpectType Element
});
conn.prependOnceListener('error', (error: Error) => {});
conn.prependOnceListener('element', el => {
    el; // $ExpectType Element
});
conn.prependOnceListener('stanza', el => {
    el; // $ExpectType Element
});
conn.prependOnceListener('nonza', el => {
    el; // $ExpectType Element
});
conn.prependOnceListener('status', (status, ...args) => {
    const s: keyof StatusEvents = status;
    const a = args[0]; // $ExpectType string | JID | Element | { clean: boolean; event: unknown; } | undefined
});
conn.prependOnceListener('online', el => {
    el; // $ExpectType JID
});
conn.prependOnceListener('offline', el => {
    el; // $ExpectType Element
});
conn.prependOnceListener('connect', () => {});
conn.prependOnceListener('connecting', service => {
    service; // $ExpectType string
});
conn.prependOnceListener('disconnect', result => {
    result; // $ExpectType { clean: boolean; event: unknown; }
});
conn.prependOnceListener('disconnecting', () => {});
conn.prependOnceListener('open', el => {
    el; // $ExpectType Element
});
conn.prependOnceListener('opening', () => {});
conn.prependOnceListener('close', el => {
    el; // $ExpectType Element
});
conn.prependOnceListener('closing', () => {});

conn.removeListener('input', input => {
    input; // $ExpectType string
});
conn.removeListener('send', el => {
    el; // $ExpectType Element
});
conn.removeListener('error', (error: Error) => {});
conn.removeListener('element', el => {
    el; // $ExpectType Element
});
conn.removeListener('stanza', el => {
    el; // $ExpectType Element
});
conn.removeListener('nonza', el => {
    el; // $ExpectType Element
});
conn.removeListener('status', (status, ...args) => {
    const s: keyof StatusEvents = status;
    const a = args[0]; // $ExpectType string | JID | Element | { clean: boolean; event: unknown; } | undefined
});
conn.removeListener('online', el => {
    el; // $ExpectType JID
});
conn.removeListener('offline', el => {
    el; // $ExpectType Element
});
conn.removeListener('connect', () => {});
conn.removeListener('connecting', service => {
    service; // $ExpectType string
});
conn.removeListener('disconnect', result => {
    result; // $ExpectType { clean: boolean; event: unknown; }
});
conn.removeListener('disconnecting', () => {});
conn.removeListener('open', el => {
    el; // $ExpectType Element
});
conn.removeListener('opening', () => {});
conn.removeListener('close', el => {
    el; // $ExpectType Element
});
conn.removeListener('closing', () => {});

conn.off('input', input => {
    input; // $ExpectType string
});
conn.off('send', el => {
    el; // $ExpectType Element
});
conn.off('error', (error: Error) => {});
conn.off('element', el => {
    el; // $ExpectType Element
});
conn.off('stanza', el => {
    el; // $ExpectType Element
});
conn.off('nonza', el => {
    el; // $ExpectType Element
});
conn.off('status', (status, ...args) => {
    const s: keyof StatusEvents = status;
    const a = args[0]; // $ExpectType string | JID | Element | { clean: boolean; event: unknown; } | undefined
});
conn.off('online', el => {
    el; // $ExpectType JID
});
conn.off('offline', el => {
    el; // $ExpectType Element
});
conn.off('connect', () => {});
conn.off('connecting', service => {
    service; // $ExpectType string
});
conn.off('disconnect', result => {
    result; // $ExpectType { clean: boolean; event: unknown; }
});
conn.off('disconnecting', () => {});
conn.off('open', el => {
    el; // $ExpectType Element
});
conn.off('opening', () => {});
conn.off('close', el => {
    el; // $ExpectType Element
});
conn.off('closing', () => {});

conn.emit<'input'>('input', 'foo');
conn.emit<'send'>('send', new Element('foo'));
conn.emit<'error'>('error', new Error('foo'));
conn.emit<'element'>('element', new Element('foo'));
conn.emit<'stanza'>('stanza', new Element('foo'));
conn.emit<'nonza'>('nonza', new Element('foo'));
conn.emit<'online'>('status', 'online', new JID('foo', 'bar'));
conn.emit<'offline'>('status', 'offline', new Element('foo'));
conn.emit<'connect'>('status', 'connect');
conn.emit<'connecting'>('status', 'connecting', 'foo');
conn.emit<'disconnect'>('status', 'disconnect', { clean: true, event: 'foo' });
conn.emit<'disconnecting'>('status', 'disconnecting');
conn.emit<'open'>('status', 'open', new Element('foo'));
conn.emit<'opening'>('status', 'opening');
conn.emit<'close'>('status', 'close', new Element('foo'));
conn.emit<'closing'>('status', 'closing');
conn.emit<'online'>('online', new JID('foo', 'bar'));
conn.emit<'offline'>('offline', new Element('foo'));
conn.emit<'connect'>('connect');
conn.emit<'connecting'>('connecting', 'foo');
conn.emit<'disconnect'>('disconnect', { clean: true, event: 'foo' });
conn.emit<'disconnecting'>('disconnecting');
conn.emit<'open'>('open', new Element('foo'));
conn.emit<'opening'>('opening');
conn.emit<'close'>('close', new Element('foo'));
conn.emit<'closing'>('closing');
