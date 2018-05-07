import * as fs from "fs";
import * as crypto from "crypto";
import * as ssh2 from 'ssh2';
import * as ssh2_streams from 'ssh2-streams';

declare var inspect: any;

//
// # Client Examples
//

// Authenticate using keys and execute uptime on a server:

var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.exec('uptime', (err: Error, stream: ssh2.ClientChannel) => {
        if (err) throw err;
        stream
            .on('close', (code: any, signal: any) => {
                console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                conn.end();
            }).on('data', (data: any) => {
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data: any) => {
                console.log('STDERR: ' + data);
            });
    });
}).connect({
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    privateKey: require('fs').readFileSync('/here/is/my/key')
});

// Authenticate using keys and start an interactive shell session:

var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.shell( (err: Error, stream: ssh2.ClientChannel) => {
        if (err) throw err;
        stream.on('close', () => {
            console.log('Stream :: close');
            conn.end();
        }).on('data', (data: any) => {
            console.log('STDOUT: ' + data);
        }).stderr.on('data', (data: any) => {
                console.log('STDERR: ' + data);
            });
        stream.end('ls -l\nexit\n');
    });
}).connect({
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    privateKey: require('fs').readFileSync('/here/is/my/key')
});

// Authenticate using password and send an HTTP request to port 80 on the server:

var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.forwardOut('192.168.100.102', 8000, '127.0.0.1', 80, (err: Error, stream: ssh2.ClientChannel) => {
        if (err) throw err;
        stream.on('close', () => {
            console.log('TCP :: CLOSED');
            conn.end();
        }).on('data', (data: any) => {
            console.log('TCP :: DATA: ' + data);
        }).end([
            'HEAD / HTTP/1.1',
            'User-Agent: curl/7.27.0',
            'Host: 127.0.0.1',
            'Accept: */*',
            'Connection: close',
            '',
            ''
        ].join('\r\n'));
    });
}).connect({
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    password: 'nodejsrules'
});

// Authenticate using password and forward remote connections on port 8000 to us:

var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.forwardIn('127.0.0.1', 8000, (err: Error) => {
        if (err) throw err;
        console.log('Listening for connections on server on port 8000!');
    });
}).on('tcp connection', (info: any, accept: Function, reject: Function) => {
    console.log('TCP :: INCOMING CONNECTION:');
    console.dir(info);
    accept().on('close', () => {
        console.log('TCP :: CLOSED');
    }).on('data', (data: any) => {
        console.log('TCP :: DATA: ' + data);
    }).end([
        'HTTP/1.1 404 Not Found',
        'Date: Thu, 15 Nov 2012 02:07:58 GMT',
        'Server: ForwardedConnection',
        'Content-Length: 0',
        'Connection: close',
        '',
        ''
    ].join('\r\n'));
}).connect({
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    password: 'nodejsrules'
});

// Authenticate using password and get a directory listing via SFTP:

var Client = require('ssh2').Client;

var conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.sftp( (err: Error, sftp: ssh2.SFTPWrapper) => {
        if (err) throw err;
        sftp.readdir('foo', (err: Error, list: ssh2_streams.FileEntry[]) => {
            if (err) throw err;
            console.dir(list);
            conn.end();
        });
    });
}).connect({
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    password: 'nodejsrules'
});

// Connection hopping:

var Client = require('ssh2').Client;

var conn1 = new Client(),
    conn2 = new Client();

conn1.on('ready', () => {
    console.log('FIRST :: connection ready');
    conn1.exec('nc 192.168.1.2 22', (err: Error, stream: ssh2.ClientChannel) => {
        if (err) {
            console.log('FIRST :: exec error: ' + err);
            return conn1.end();
        }
        conn2.connect({
            sock: stream,
            username: 'user2',
            password: 'password2',
        });
    });
}).connect({
    host: '192.168.1.1',
    username: 'user1',
    password: 'password1',
});

conn2.on('ready', () => {
    console.log('SECOND :: connection ready');
    conn2.exec('uptime', (err: Error, stream: ssh2.ClientChannel) => {
        if (err) {
            console.log('SECOND :: exec error: ' + err);
            return conn1.end();
        }
        stream.on('end', () => {
            conn1.end(); // close parent (and this) connection
        }).on('data', (data: any) => {
            console.log(data.toString());
        });
    });
});

// Forward X11 connections (xeyes):

var net = require('net'),
    Client = require('ssh2').Client;

var conn = new Client();

conn.on('x11', (info: any, accept: any, reject: any) => {
    var xserversock = new net.Socket();
    xserversock.on('connect', () => {
        var xclientsock = accept();
        xclientsock.pipe(xserversock).pipe(xclientsock);
    });
    // connects to localhost:0.0
    xserversock.connect(6000, 'localhost');
});

conn.on('ready', () => {
    conn.exec('xeyes', { x11: true }, (err: Error, stream: ssh2.ClientChannel) => {
        if (err) throw err;
        var code = 0;
        stream.on('end', () => {
            if (code !== 0)
                console.log('Do you have X11 forwarding enabled on your SSH server?');
            conn.end();
        }).on('exit', (exitcode: number) => {
            code = exitcode;
        });
    });
}).connect({
    host: '192.168.1.1',
    username: 'foo',
    password: 'bar'
});

// Dynamic (1:1) port forwarding using a SOCKSv5 proxy (using socksv5):

var socks = require('socksv5'),
    Client = require('ssh2').Client;

var ssh_config = {
    host: '192.168.100.1',
    port: 22,
    username: 'nodejs',
    password: 'rules'
};

socks.createServer( (info: any, accept: any, deny: any) => {
    // NOTE: you could just use one ssh2 client connection for all forwards, but
    // you could run into server-imposed limits if you have too many forwards open
    // at any given time
    var conn = new Client();
    conn.on('ready', () => {
        conn.forwardOut(info.srcAddr,
            info.srcPort,
            info.dstAddr,
            info.dstPort,
             (err: Error, stream: ssh2.ClientChannel) => {
                if (err) {
                    conn.end();
                    return deny();
                }

                var clientSocket: any;
                if (clientSocket = accept(true)) {
                    stream.pipe(clientSocket).pipe(stream).on('close', () => {
                        conn.end();
                    });
                } else
                    conn.end();
            });
    }).on('error', (err: Error) => {
        deny();
    }).connect(ssh_config);
}).listen(1080, 'localhost', () => {
    console.log('SOCKSv5 proxy server started on port 1080');
}).useAuth(socks.auth.None());

// Invoke an arbitrary subsystem (netconf in this example):

var Client = require('ssh2').Client,
    xmlhello = '<?xml version="1.0" encoding="UTF-8"?>'+
        '<hello xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">'+
        '    <capabilities>'+
        '        <capability>urn:ietf:params:netconf:base:1.0</capability>'+
        '    </capabilities>'+
        '</hello>]]>]]>';

var conn = new Client();

conn.on('ready', () => {
    console.log('Client :: ready');
    conn.subsys('netconf', (err: Error, stream: ssh2.ClientChannel) => {
        if (err) throw err;
        stream.on('data', (data: any) => {
            console.log(data);
        }).write(xmlhello);
    });
}).connect({
    host: '1.2.3.4',
    port: 22,
    username: 'blargh',
    password: 'honk'
});

// ConnectConfig

const sshconfig: ssh2.ConnectConfig = {
    host: 'localhost',
    port: 22,
    username: 'ubuntu',
    password: 'password'
};

//
// # Server Examples
//

// Only allow password and public key authentication and command execution:

var buffersEqual = require('buffer-equal-constant-time'),
    //ssh2 = require('ssh2'),
    utils = ssh2.utils;

var pubKey = utils.genPublicKey(<ssh2_streams.ParsedKey>utils.parseKey(fs.readFileSync('user.pub')));

new ssh2.Server({
    hostKeys: [fs.readFileSync('host.key')]
}, (client: ssh2.Connection) => {
    console.log('Client connected!');

    client.on('authentication', ctx => {
        if (ctx.method === 'password'
            && ctx.username === 'foo'
            && ctx.password === 'bar')
            ctx.accept();
        else if (ctx.method === 'publickey'
            && ctx.key.algo === pubKey.fulltype
            && buffersEqual(ctx.key.data, pubKey.public)) {
            if (ctx.signature) {
                var verifier = crypto.createVerify(ctx.sigAlgo);
                verifier.update(ctx.blob);
                if (verifier.verify(pubKey.publicOrig.toString("utf8"), ctx.signature))
                    ctx.accept();
                else
                    ctx.reject();
            } else {
                // if no signature present, that means the client is just checking
                // the validity of the given public key
                ctx.accept();
            }
        } else
            ctx.reject();
    }).on('ready', () => {
        console.log('Client authenticated!');

        client.on('session', (accept: any, reject: any) => {
            var session = accept();
            session.once('exec', (accept: any, reject: any, info: any) => {
                console.log('Client wants to execute: ' + inspect(info.command));
                var stream = accept();
                stream.stderr.write('Oh no, the dreaded errors!\n');
                stream.write('Just kidding about the errors!\n');
                stream.exit(0);
                stream.end();
            });
        });
    }).on('end', () => {
        console.log('Client disconnected');
    });
}).listen(0, '127.0.0.1', () => {
        console.log('Listening on port ' + this.address().port);
    });

// SFTP only server:

//var ssh2 = require('ssh2');
var OPEN_MODE = ssh2.SFTP_OPEN_MODE,
    STATUS_CODE = ssh2.SFTP_STATUS_CODE;

new ssh2.Server({
    hostKeys: [fs.readFileSync('host.key')]
}, (client: any) => {
    console.log('Client connected!');

    client.on('authentication', (ctx: any) => {
        if (ctx.method === 'password'
            && ctx.username === 'foo'
            && ctx.password === 'bar')
            ctx.accept();
        else
            ctx.reject();
    }).on('ready', () => {
        console.log('Client authenticated!');

        client.on('session', (accept: any, reject: any) => {
            var session = accept();
            session.on('sftp', (accept: any, reject: any) => {
                console.log('Client SFTP session');
                var openFiles = new Set<number>();
                var handleCount = 0;
                // `sftpStream` is an `SFTPStream` instance in server mode
                // see: https://github.com/mscdex/ssh2-streams/blob/master/SFTPStream.md
                var sftpStream = accept();
                sftpStream.on('OPEN', (reqid: any, filename: any, flags: any, attrs: any) => {
                    // only allow opening /tmp/foo.txt for writing
                    if (filename !== '/tmp/foo.txt' || !(flags & OPEN_MODE.WRITE))
                        return sftpStream.status(reqid, STATUS_CODE.FAILURE);
                    // create a fake handle to return to the client, this could easily
                    // be a real file descriptor number for example if actually opening
                    // the file on the disk
                    var handle = new Buffer(4);
                    openFiles.add(handleCount);
                    handle.writeUInt32BE(handleCount++, 0, true);
                    sftpStream.handle(reqid, handle);
                    console.log('Opening file for write')
                }).on('WRITE', (reqid: any, handle: any, offset: any, data: any) => {
                    if (handle.length !== 4 || !openFiles.has(handle.readUInt32BE(0, true)))
                        return sftpStream.status(reqid, STATUS_CODE.FAILURE);
                    // fake the write
                    sftpStream.status(reqid, STATUS_CODE.OK);
                    var inspected = require('util').inspect(data);
                    console.log('Write to file at offset %d: %s', offset, inspected);
                }).on('CLOSE', (reqid: any, handle: any) => {
                    var fnum: any;
                    if (handle.length !== 4 || !openFiles.has((fnum = handle.readUInt32BE(0, true))))
                        return sftpStream.status(reqid, STATUS_CODE.FAILURE);
                    openFiles.delete(fnum);
                    sftpStream.status(reqid, STATUS_CODE.OK);
                    console.log('Closing file');
                });
            });
        });
    }).on('end', () => {
        console.log('Client disconnected');
    });
}).listen(0, '127.0.0.1', () => {
        console.log('Listening on port ' + this.address().port);
    });





