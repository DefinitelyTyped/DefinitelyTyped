import * as fs from "fs";
import * as crypto from "crypto";
import * as ssh2 from 'ssh2';

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
    privateKey: fs.readFileSync('/here/is/my/key')
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
        sftp.readdir('foo', (err: Error | undefined, list: ssh2.FileEntry[]) => {
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

function checkValue(input: Buffer, allowed: Buffer) {
    const autoReject = (input.length !== allowed.length);
    if (autoReject) {
        // Prevent leaking length information by always making a comparison with the
        // same input when lengths don't match what we expect ...
        allowed = input;
    }
    const isMatch = crypto.timingSafeEqual(input, allowed);
    return (!autoReject && isMatch);
}

// Host verification:
new ssh2.Client().connect({
    hostVerifier: (hash: Buffer) => {
        const expected = Buffer.from('cool');
        return checkValue(hash, expected);
    }
});

new ssh2.Client().connect({
    hostVerifier: (hash: Buffer, callback: ssh2.VerifyCallback) => {
        const expected = Buffer.from('cool');
        callback(checkValue(hash, expected));
    }
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
    password: 'password',
    authHandler: (methodsLeft, partialSuccess, callback) => { if(!methodsLeft) callback('password') }
};

//
// # Server Examples
//

// Only allow password and public key authentication and command execution:

var buffersEqual = require('buffer-equal-constant-time'),
    //ssh2 = require('ssh2'),
    utils = ssh2.utils;

var pubKey = utils.parseKey(fs.readFileSync('user.pub')) as ssh2.ParsedKey;
var pubKeySSH = Buffer.from(pubKey.getPublicSSH());

var flags = utils.sftp.OPEN_MODE.READ | utils.sftp.OPEN_MODE.WRITE;
var flagsString = utils.sftp.flagsToString(flags);
utils.sftp.stringToFlags(flagsString!);

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
            && ctx.key.algo === pubKey.type
            && buffersEqual(ctx.key.data, pubKeySSH)) {
            if (ctx.signature && ctx.blob) {
                if (pubKey.verify(ctx.blob, ctx.signature)) {
                    ctx.accept();
                } else {
                    ctx.reject();
                }
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
}).listen(0, '127.0.0.1', function () {
        console.log('Listening on port ' + this.address().port);
    });

// SFTP only server:

//var ssh2 = require('ssh2');
var OPEN_MODE = ssh2.utils.sftp.OPEN_MODE,
    STATUS_CODE = ssh2.utils.sftp.STATUS_CODE;
const allowedUser = Buffer.from('foo');
const allowedPassword = Buffer.from('bar');

// This simple SFTP server implements file uploading where the contents get
// ignored ...

new ssh2.Server({
    hostKeys: [fs.readFileSync('host.key')]
}, (client) => {
    console.log('Client connected!');

    client.on('authentication', (ctx) => {
        let allowed = true;
        if (!checkValue(Buffer.from(ctx.username), allowedUser))
            allowed = false;

        switch (ctx.method) {
            case 'password':
                if (!checkValue(Buffer.from(ctx.password), allowedPassword)) {
                    ctx.reject();
                    return
                }
                break;
            default:
                ctx.reject();
                return;
        }

        if (allowed)
            ctx.accept();
        else
            ctx.reject();
    }).on('ready', () => {
        console.log('Client authenticated!');

        client.on('session', (accept, reject) => {
            const session = accept();
            session.on('sftp', (accept, reject) => {
                console.log('Client SFTP session');
                const openFiles = new Map();
                let handleCount = 0;
                const sftp = accept();
                sftp.on('OPEN', (reqid, filename, flags, attrs) => {
                    // Only allow opening /tmp/foo.txt for writing
                    if (filename !== '/tmp/foo.txt' || !(flags & OPEN_MODE.WRITE)) {
                        sftp.status(reqid, STATUS_CODE.FAILURE);
                        return;
                    }

                    // Create a fake handle to return to the client, this could easily
                    // be a real file descriptor number for example if actually opening
                    // a file on disk
                    const handle = Buffer.alloc(4);
                    openFiles.set(handleCount, true);
                    handle.writeUInt32BE(handleCount++, 0);

                    console.log('Opening file for write')
                    sftp.handle(reqid, handle);
                }).on('WRITE', (reqid, handle, offset, data) => {
                    if (handle.length !== 4
                        || !openFiles.has(handle.readUInt32BE(0))) {
                        sftp.status(reqid, STATUS_CODE.FAILURE);
                        return;
                    }

                    // Fake the write operation
                    sftp.status(reqid, STATUS_CODE.OK);

                    console.log(`Write to file at offset ${offset}: ${inspect(data)}`);
                }).on('CLOSE', (reqid, handle) => {
                    let fnum;
                    if (handle.length !== 4
                        || !openFiles.has(fnum = handle.readUInt32BE(0))) {
                        sftp.status(reqid, STATUS_CODE.FAILURE);
                        return;
                    }

                    console.log('Closing file');
                    openFiles.delete(fnum);

                    sftp.status(reqid, STATUS_CODE.OK);
                });
            });
        });
    }).on('close', () => {
        console.log('Client disconnected');
    });
}).listen(0, '127.0.0.1', function() {
    console.log('Listening on port ' + this.address().port);
});

// ssh agents
new ssh2.Client().connect({
    agent: ssh2.createAgent('openssh')
});

new ssh2.Client().connect({
    agent: new (class extends ssh2.BaseAgent<string> {
        getIdentities(callback: (err: Error | undefined, publicKeys: string[]) => void): void {
            callback(undefined, ['some key'])
        }
        sign(publicKey: string, data: Buffer, options: ssh2.SigningRequestOptions | ssh2.SignCallback, callback?: ssh2.SignCallback): void {
            const cb = typeof options === 'function' ? options : callback;
            cb && cb(undefined, Buffer.concat([Buffer.from(publicKey), data]));
        }
    })()
});

new ssh2.HTTPAgent({
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    privateKey: fs.readFileSync('/here/is/my/key')
}, {
    srcIP: '127.0.0.1',
});

new ssh2.HTTPSAgent({
    host: '192.168.100.100',
    port: 22,
    username: 'frylock',
    privateKey: fs.readFileSync('/here/is/my/key')
}, {
    srcIP: '127.0.0.1',
});
