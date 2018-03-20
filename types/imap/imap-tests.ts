/*
* This code contains all of the example code that was on https://www.npmjs.com/package/imap as of Sat Dec 13, 2014.
*/

import IMAP     = require('imap');
import util     = require('util');
import inspect  = util.inspect;

var imap = new IMAP({
    user: 'mygmailname@gmail.com',
    password: 'mygmailpassword',
    host: 'imap.gmail.com',
    port: 993,
    tls: true
});


function openInbox(cb : (error : Error, box: IMAP.Box) => void) {
    imap.openBox('INBOX', true, cb);
}


imap.once('ready', function() {
    openInbox(function(err, box) {
        if (err) throw err;
        var f = imap.seq.fetch('1:3', {
            bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
            struct: true
        });
        f.on('message', function(msg : IMAP.ImapMessage, seqno : number) {
            console.log('Message #%d', seqno);
            var prefix = '(#' + seqno + ') ';
            msg.on('body', function(stream : NodeJS.ReadableStream, info : Object) {
                var buffer = '';
                stream.on('data', function(chunk : Buffer) {
                    buffer += chunk.toString('utf8');
                });
                stream.once('end', function() {
                    console.log(prefix + 'Parsed header: %s', inspect(IMAP.parseHeader(buffer)));
                });
            });
            msg.once('attributes', function(attrs : Object) {
                console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            });
            msg.once('end', function() {
                console.log(prefix + 'Finished');
            });
        });
        f.once('error', function(err : Error) {
            console.log('Fetch error: ' + err);
        });
        f.once('end', function() {
            console.log('Done fetching all messages!');
            imap.end();
        });
    });
});

imap.once('error', function(err : Error) {
    console.log(err);
});

imap.once('end', function() {
    console.log('Connection ended');
});

imap.connect();



// using the functions and variables already defined in the first example ...

openInbox(function(err : Error, box : IMAP.Box) {
    if (err) throw err;
    var f = imap.seq.fetch(box.messages.total + ':*', { bodies: ['HEADER.FIELDS (FROM)','TEXT'] });
    f.on('message', function(msg : IMAP.ImapMessage, seqno : number) {
        console.log('Message #%d', seqno);
        var prefix = '(#' + seqno + ') ';
        msg.on('body', function(stream : NodeJS.ReadableStream, info : any) {
            if (info.which === 'TEXT')
                console.log(prefix + 'Body [%s] found, %d total bytes', inspect(info.which), info.size);
            var buffer = '', count = 0;
            stream.on('data', function(chunk : Buffer) {
                count += chunk.length;
                buffer += chunk.toString('utf8');
                if (info.which === 'TEXT')
                    console.log(prefix + 'Body [%s] (%d/%d)', inspect(info.which), count, info.size);
            });
            stream.once('end', function() {
                if (info.which !== 'TEXT')
                    console.log(prefix + 'Parsed header: %s', inspect(IMAP.parseHeader(buffer)));
                else
                    console.log(prefix + 'Body [%s] Finished', inspect(info.which));
            });
        });
        msg.once('attributes', function(attrs : Object) {
            console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        msg.once('end', function() {
            console.log(prefix + 'Finished');
        });
    });
    f.once('error', function(err : Error) {
        console.log('Fetch error: ' + err);
    });
    f.once('end', function() {
        console.log('Done fetching all messages!');
        imap.end();
    });
});




// using the functions and variables already defined in the first example ...

var fs = require('fs');

openInbox(function(err : Error, box : IMAP.Box) {
    if (err) throw err;
    imap.search([ 'UNSEEN', ['SINCE', 'May 20, 2010'] ], function(err : Error, results : number[]) {
        if (err) throw err;
        var f = imap.fetch(results, { bodies: '' });
        f.on('message', function(msg : IMAP.ImapMessage, seqno : number) {
            console.log('Message #%d', seqno);
            var prefix = '(#' + seqno + ') ';
            msg.on('body', function(stream : NodeJS.ReadableStream, info : any) {
                console.log(prefix + 'Body');
                stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
            });
            msg.once('attributes', function(attrs : Object) {
                console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
            });
            msg.once('end', function() {
                console.log(prefix + 'Finished');
            });
        });
        f.once('error', function(err : Error) {
            console.log('Fetch error: ' + err);
        });
        f.once('end', function() {
            console.log('Done fetching all messages!');
            imap.end();
        });
    });
});



var rawHeader : string = '';
var headers = IMAP.parseHeader(rawHeader);
headers = IMAP.parseHeader(rawHeader, true);

var f : IMAP.ImapFetch;
f = imap.fetch('1:3', { bodies: '' });
f = imap.seq.fetch('1:3', { bodies: '' });
