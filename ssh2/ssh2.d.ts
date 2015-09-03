// Type definitions for ssh2
// Project: https://github.com/mscdex/ssh2
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "ssh2" {
    import stream = require('stream');

    namespace ssh2 {
        interface Client {
            Server: ServerStatic;
            new(): Client;
            /**
             * SFTPStream.STATUS_CODE from ssh2-streams.
             */
            SFTP_STATUS_CODE: Sftp.StatusCode;
            /**
             * SFTPStream.OPEN_MODE from ssh2-streams.
             */
            SFTP_OPEN_MODE: Sftp.OpenMode;
            //TODO: Type ssh2-streams
            /**
             * utility methods from ssh2-streams.
             */
            utils: Utils;

            connect(config: ConnectConfig): void;
            end(): void;
            destroy(): void;
            exec(command: string, options: ExecOption, callback: ChannelCallback): boolean;
            exec(command: string, callback: ChannelCallback): boolean;
            shell(window: boolean|PseudoTtySettings, options: boolean|number|X11Settings, callback: ChannelCallback): boolean;
            shell(window: boolean|PseudoTtySettings, callback: ChannelCallback): boolean;
            shell(callback: ChannelCallback): boolean;
            subsys(subsystem: string, callback: ChannelCallback): boolean;
            sftp(callback: SftpCallback): boolean;
            forwardIn(bindAddr: string, bindPort: number, callback?: ForwardInCallback): boolean;
            unforwardIn(bindAddr: string, bindPort: number, callback?: ErrorCallback): boolean;
            forwardOut(srcIP: string, srcPort: number, dstIP: string, dstPort: number, callback: ChannelCallback): boolean;
            openssh_noMoreSessions(callback?: ErrorCallback): boolean;
            openssh_forwardInStreamLocal(socketPath: string, callback?: ErrorCallback): boolean;
            openssh_unforwardInStreamLocal(socketPath: string, callback?: ErrorCallback): boolean;
            openssh_forwardOutStreamLocal(socketPath: string, callback?: ChannelCallback): boolean;
        }

        interface ConnectConfig {
            /**
             * @description Hostname or IP address of the server.
             * @default 'localhost'
             */
            host?: string;
            /**
             * @description Port number of the server.
             * @default 22
             */
            port?: number;
            /**
             * @description Only connect via resolved IPv4 address for `host`.
             * @default false
             */
            forceIPv4?: boolean;
            /**
             * @description Only connect via resolved IPv6 address for `host`.
             * @default false
             */
            forceIPv6?: boolean;
            /**
             * @description 'md5' or 'sha1'. The host's key is hashed using this method and passed to the **hostVerifier** function.
             * @default (none)
             */
            hostHash?: string;
            /**
             * @description Function that is passed a string hex hash of the host's key for verification purposes.
             * Return `true` to continue with the handshake or `false` to reject and disconnect.
             */
            hostVerifier?: (keyHash: string) => boolean;
            /**
             * @description Username for authentication.
             */
            username?: string;
            /**
             * @description Password for password-based user authentication.
             */
            password?: string;
            /**
             * @description Path to ssh-agent's UNIX socket for ssh-agent-based user authentication.
             * Windows users: set to 'pageant' for authenticating with Pageant or (actual) path to a cygwin "UNIX socket."
             */
            agent?: string;
            /**
             * @description Buffer or string that contains a private key for either key-based or hostbased user authentication (OpenSSH format).
             */
            privateKey?: Buffer|string;
            /**
             * @description For an encrypted private key, this is the passphrase used to decrypt it.
             */
            passphrase?: string;
            /**
             * @description Along with **localUsername** and **privateKey**, set this to a non-empty string for hostbased user authentication.
             */
            localHostname?: string;
            /**
             * @description Along with **localHostname** and **privateKey**, set this to a non-empty string for hostbased user authentication.
             */
            localUsername?: string;
            /**
             * @description Try keyboard-interactive user authentication if primary user authentication method fails.
             * If you set this to `true`, you need to handle the `keyboard-interactive` event.
             */
            tryKeyboard: boolean;
            /**
             * @description How often (in milliseconds) to send SSH-level keepalive packets to the server
             * (in a similar way as OpenSSH's ServerAliveInterval config option). Set to 0 to disable.
             * @default 0
             */
            keepaliveInterval?: number;
            /**
             * @description How many consecutive, unanswered SSH-level keepalive packets that can be sent to the server
             * before disconnection (similar to OpenSSH's ServerAliveCountMax config option).
             * @default 3
             */
            keepaliveCountMax?: number;
            /**
             * @description How long (in milliseconds) to wait for the SSH handshake to complete.
             * @default 20000
             */
            readyTimeout?: number;
            /**
             * @description Performs a strict server vendor check before sending vendor-specific requests,
             * etc. (e.g. check for OpenSSH server when using `openssh_noMoreSessions()`)
             * @default true
             */
            strictVendor?: boolean;
            /**
             * A ReadableStream to use for communicating with the server instead of creating and using a new TCP connection (useful for connection hopping).
             */
            sock?: NodeJS.ReadableStream;
            /**
             * @description Set to `true` to use OpenSSH agent forwarding (`auth-agent@openssh.com`) for the life of the connection. `agent` must also be set to use this feature.
             * @default false
             */
            agentForward?: boolean;
            /**
             * @description Set this to a function that receives a single string argument to get detailed (local) debug information.
             */
            debug: (information: string) => any;
        }

        interface ExecOption {
            /**
             * @description An environment to use for the execution of the command.
             */
            env?: any;
            /**
             * @description Set to true to allocate a pseudo-tty with defaults, or an object containing specific pseudo-tty settings
             * (see 'Pseudo-TTY settings'). Setting up a pseudo-tty can be useful when working with remote processes
             * that expect input from an actual terminal (e.g. sudo's password prompt).
             */
            pty?: boolean|PseudoTtySettings;
            /**
             * @description Set to true to use defaults below, set to a number to specify a specific screen number,
             * or an object.
             */
            x11?: boolean|number|X11Settings;
        }

        interface X11Settings {
            /**
             * Allow just a single connection?
             * @default false
             */
            single?: boolean;
            /**
             * Screen number to use
             * @default 0
             */
            screen?: number;
        }

        interface PseudoTtySettings {
            /**
             * @description * Number of rows
             * @default 24
             */
            rows?: number;
            /**
             * @description * Number of columns
             * @default 80
             */
            cols?: number;
            /**
             * @description * Height in pixels
             * @default 480
             */
            height?: number;
            /**
             * @description * Width in pixels
             * @default 640
             */
            width?: number;
            /**
             * @description The value to use for $TERM
             * @default 'vt100'
             */
            term?: string;
        }

        interface ForwardInCallback {
            (err?: Error, bindPort?: number): void;
        }

        interface ChannelCallback {
            (err?: Error, channel?: Channel): void;
        }

        interface SftpCallback {
            (err?: Error, sftp?: Sftp.Wrapper): void;
        }

        interface ErrorCallback {
            (err?: Error): void;
        }

        interface Channel extends stream.Duplex {
            new(info?: any, client?: any, options?: any): Channel;
            eof(): boolean;
            close(): boolean;
            destroy(): void;
            setWindow(rows: number, cols: number, height: number, width: number): boolean;
            signal(signalName: string): boolean;
            exit(name: string, coreDumped: boolean, msg: string): boolean;
            exit(status: number): boolean;
            stderr?: ServerStderr;

            // EventEmitter overrides
            addListener(event: string, listener: Function): Channel;
            on(event: string, listener: Function): Channel;
            once(event: string, listener: Function): Channel;
            removeListener(event: string, listener: Function): Channel;
            removeAllListeners(event?: string): Channel;
        }

        interface ServerStderr extends NodeJS.WritableStream {
            new(channel: Channel): ServerStderr;
        }

        interface ServerStatic {
            new(config: ServerConfig, listener?: any): Server;
            createServer(config: ServerConfig, listener?: any): Server;
            KEEPALIVE_INTERVAL: number;
            KEEPALIVE_CLIENT_INTERVAL: number;
            KEEPALIVE_CLIENT_COUNT_MAX: number;
        }

        interface Server extends NodeJS.EventEmitter {
            listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
            listen(port: number, hostname?: string, callback?: Function): Server;
            listen(path: string, callback?: Function): Server;
            listen(handle: any, listeningListener?: Function): Server;
            address(): { port: number; family: string; address: string; };
            getConnections(callback: any): any; //TODO: No type
            close(callback?: Function): Server;
            ref(): void;
            unref(): void;
        }

        interface ServerConfig {
            /**
             * @description Buffer or string that contains the host private key (OpenSSH format).
             */
            privateKey: Buffer|string;
            /**
             * @description For an encrypted host private key, this is the passphrase used to decrypt it.
             */
            passphrase?: string;
            /**
             * @description A message that is sent to clients immediately upon connection, before handshaking begins.
             */
            banner?: string;
            /**
             * @description A custom server software name/version identifier.
             * @default 'ssh2js' + moduleVersion + 'srv'
             */
            indent?: string;
            /**
             * @description This is the highWaterMark to use for the parser stream.
             * @default 32 * 1024
             */
            highWaterMark?: number;
            /**
             * @description Set this to a function that receives a single string argument to get detailed (local) debug information.
             */
            debug?: (information: string) => any;
        }

        // utility methods from ssh2-streams.
        interface Utils {
            iv_inc: Function;
            isStreamCipher: Function;
            isGCM: Function;
            readInt: Function;
            readString: Function;
            parseKey: Function;
            genPublicKey: Function;
            convertPPKPrivate: Function;
            verifyPPKMAC: Function;
            decryptKey: Function;
        }

        namespace Sftp {
            // SFTPStream.STATUS_CODE from ssh2-streams.
            interface StatusCode {
                OK: number;
                EOF: number;
                NO_SUCH_FILE: number;
                PERMISSION_DENIED: number;
                FAILURE: number;
                BAD_MESSAGE: number;
                NO_CONNECTION: number;
                CONNECTION_LOST: number;
                OP_UNSUPPORTED: number;
            }

            // SFTPStream.OPEN_MODE from ssh2-streams.
            interface OpenMode {
                READ: number;
                WRITE: number;
                APPEND: number;
                CREAT: number;
                TRUNC: number;
                EXCL: number;
            }

            interface Wrapper extends NodeJS.EventEmitter {
                //TODO: extends `ssh2-streams.SFTPStream`
            }
        }
    }

    var ssh2: ssh2.Client;

    export = ssh2;
}

