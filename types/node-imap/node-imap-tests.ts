/*
 * This code contains all of the example code that was on https://www.npmjs.com/package/node-imap as of Fri Jul 15, 2022.
 */

import IMAP = require('imap');
import util = require('util');
import inspect = util.inspect;

const imap = new IMAP({
    user: 'mygmailname@gmail.com',
    password: 'mygmailpassword',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
});

function openInbox(cb: (error: Error, box: IMAP.Box) => void) {
    imap.openBox('INBOX', true, cb);
}

imap.once('ready', () => {
    openInbox((err, box) => {
        if (err) throw err;
        const f = imap.seq.fetch('1:3', {
            bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
            struct: true,
        });
        f.on('message', (msg: IMAP.ImapMessage, seqno: number) => {
            console.log('Message #%d', seqno);
            const prefix = `(#${seqno}) `;
            msg.on('body', (stream: NodeJS.ReadableStream, info: object) => {
                let buffer = '';
                stream.on('data', (chunk: Buffer) => {
                    buffer += chunk.toString('utf8');
                });
                stream.once('end', () => {
                    console.log(prefix + 'Parsed header: %s', inspect(IMAP.parseHeader(buffer)));
                });
            });
            msg.once('attributes', (attrs: object) => {
                console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            });
            msg.once('end', () => {
                console.log(prefix + 'Finished');
            });
        });
        f.once('error', (err: Error) => {
            console.log('Fetch error: ' + err);
        });
        f.once('end', () => {
            console.log('Done fetching all messages!');
            imap.end();
        });
    });
});

imap.once('error', (err: Error) => {
    console.log(err);
});

imap.once('end', () => {
    console.log('Connection ended');
});

imap.connect();

// using the functions and variables already defined in the first example ...

openInbox((err: Error, box: IMAP.Box) => {
    if (err) throw err;
    const f = imap.seq.fetch(box.messages.total + ':*', { bodies: ['HEADER.FIELDS (FROM)', 'TEXT'] });
    f.on('message', (msg: IMAP.ImapMessage, seqno: number) => {
        console.log('Message #%d', seqno);
        const prefix = `(#${seqno}) `;
        msg.on('body', (stream: NodeJS.ReadableStream, info: any) => {
            if (info.which === 'TEXT')
                console.log(prefix + 'Body [%s] found, %d total bytes', inspect(info.which), info.size);
            let buffer = '';
            let count = 0;
            stream.on('data', (chunk: Buffer) => {
                count += chunk.length;
                buffer += chunk.toString('utf8');
                if (info.which === 'TEXT')
                    console.log(prefix + 'Body [%s] (%d/%d)', inspect(info.which), count, info.size);
            });
            stream.once('end', () => {
                if (info.which !== 'TEXT') console.log(prefix + 'Parsed header: %s', inspect(IMAP.parseHeader(buffer)));
                else console.log(prefix + 'Body [%s] Finished', inspect(info.which));
            });
        });
        msg.once('attributes', (attrs: object) => {
            console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        msg.once('end', () => {
            console.log(prefix + 'Finished');
        });
    });
    f.once('error', (err: Error) => {
        console.log('Fetch error: ' + err);
    });
    f.once('end', () => {
        console.log('Done fetching all messages!');
        imap.end();
    });
});

// using the functions and variables already defined in the first example ...

import fs = require('fs');

openInbox((err: Error, box: IMAP.Box) => {
    if (err) throw err;
    imap.search(['UNSEEN', ['SINCE', 'May 20, 2010']], (err: Error, results: number[]) => {
        if (err) throw err;
        const f = imap.fetch(results, { bodies: '' });
        f.on('message', (msg: IMAP.ImapMessage, seqno: number) => {
            console.log('Message #%d', seqno);
            const prefix = `(#${seqno}) `;
            msg.on('body', (stream: NodeJS.ReadableStream, info: any) => {
                console.log(prefix + 'Body');
                stream.pipe(fs.createWriteStream(`msg-${seqno}-body.txt`));
            });
            msg.once('attributes', (attrs: object) => {
                console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            });
            msg.once('end', () => {
                console.log(prefix + 'Finished');
            });
        });
        f.once('error', (err: Error) => {
            console.log('Fetch error: ' + err);
        });
        f.once('end', () => {
            console.log('Done fetching all messages!');
            imap.end();
        });
    });
});

openInbox((err: Error, box: IMAP.Box) => {
    if (err) throw err;
    imap.sort(['-DATE'], ['UNSEEN', ['SINCE', 'May 20, 2020']], (err, uids) => {
        if (err) throw err;
        const f = imap.fetch(uids, { bodies: '' });
        f.on('message', (msg: IMAP.ImapMessage, seqno: number) => {
            console.log('Message #%d', seqno);
            const prefix = `(#${seqno}) `;
            msg.on('body', (stream: NodeJS.ReadableStream, info: any) => {
                console.log(prefix + 'Body');
                stream.pipe(fs.createWriteStream(`msg-${seqno}-body.txt`));
            });
            msg.once('attributes', (attrs: object) => {
                console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            });
            msg.once('end', () => {
                console.log(prefix + 'Finished');
            });
        });
        f.once('error', (err: Error) => {
            console.log('Fetch error: ' + err);
        });
        f.once('end', () => {
            console.log('Done fetching all messages!');
            imap.end();
        });
    });
});

const rawHeader = '';
let headers = IMAP.parseHeader(rawHeader);
headers = IMAP.parseHeader(rawHeader, true);

let f: IMAP.ImapFetch;
f = imap.fetch('1:3', { bodies: '' });
f = imap.seq.fetch('1:3', { bodies: '' });
