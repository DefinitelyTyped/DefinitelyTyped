/// <reference types="node" />

import { EventEmitter } from "events";
import * as http from "http";

type Qop = "auth" | "none";
type Algorithm = "MD5" | "MD5-sess";

type CheckedRequestListener = (
    req: http.IncomingMessage & { user?: string | undefined },
    res: http.ServerResponse,
) => void;
type BasicChecker = (username: string, password: string, callback: (isAuthorized: boolean) => void) => void;
type DigestChecker = (username: string, callback: (hash?: string) => void) => void;

interface BasicResult<T extends boolean = boolean> {
    user?: string | undefined;
    pass?: T | undefined;
}
type DigestResult<T extends boolean = boolean> = BasicResult<T> & {
    stale?: true | undefined;
};
type ResultEmitter = (result: BasicResult | DigestResult | Error) => void;

type Nonce = [string, number, number];

interface ClientOptions {
    username: string;
    realm: string;
    nonce: string;
    uri: string;
    algorithm: Algorithm;
    response: string;
    qop?: "auth" | undefined;
    nc?: string | undefined;
    cnonce?: string | undefined;
}

interface BasicOptions {
    /**
     * Authentication realm, by default it is 'users'.
     * @default 'users'
     */
    realm?: string | undefined;

    /**
     * File where user details are stored.
     * - Line format is {user:pass} or {user:passHash} for basic access.
     * - Line format is {user:realm:passHash} for digest access.
     */
    file?: string | undefined;

    /**
     * Message for failed authentication 401 page.
     * @default '401 Unauthorized'
     */
    msg401?: string | undefined;

    /**
     * Message for failed authentication 407 page.
     * @default '407 Proxy authentication required
     */
    msg407?: string | undefined;

    /**
     * Content type for failed authentication page.
     * @default 'text/plain'
     */
    contentType?: string | undefined;

    /**
     * Set this to true, if you want to use it with http-proxy (https://github.com/http-party/node-http-proxy).
     * @default false
     */
    proxy?: boolean | undefined;

    /**
     * Set this to true, if you don't want req.user to be filled with authentication info.
     */
    skipUser?: boolean | undefined;
}

type DigestOptions = BasicOptions & {
    /**
     * Quality of protection that is used only for digest access authentication
     * - 'auth' is set by default.
     * - 'none' this option is disabling protection.
     * @default 'auth
     */
    qop?: Qop | undefined;

    /**
     * Algorithm that will be used only for digest access authentication.
     * 'MD5' or 'MD5-sess' can be set.
     * @default 'MD5'
     */
    algorithm?: Algorithm | undefined;
};

declare abstract class Base extends EventEmitter {
    constructor(options: BasicOptions, checker?: BasicChecker | DigestChecker);

    on(event: "success", callback: (result: BasicResult<true> | DigestResult<true>) => void): this;
    on(event: "fail", callback: (result: BasicResult<false> | DigestResult<false>) => void): this;
    on(event: "error", callback: (err: Error) => void): this;

    check(callback?: CheckedRequestListener): CheckedRequestListener;
    abstract processLine(userLine: string): void;
    abstract parseAuthorization(header: string): string | ClientOptions | undefined;
    abstract findUser(
        req: http.IncomingMessage,
        hashOrClientOptions: string | ClientOptions,
        callback: ResultEmitter,
    ): void;
    abstract generateHeader(result?: DigestResult): string;
    private ask(res: http.ServerResponse, result: BasicResult | DigestResult): void;
    private isAuthenticated(req: http.IncomingMessage, callback: ResultEmitter): void;
    private loadUsers(): void;
}

declare class Basic extends Base {
    constructor(options: BasicOptions, checker?: BasicChecker);

    private validate(hash: string, password: string): boolean;

    processLine(userLine: string): void;
    generateHeader(): string;
    parseAuthorization(header: string): string | undefined;
    findUser(req: http.IncomingMessage, hash: string, callback: ResultEmitter): void;
}

declare class Digest extends Base {
    constructor(options: DigestOptions, checker?: DigestChecker);

    private nonces: Nonce[];
    private validate(ha2: string, clientOptions: ClientOptions, hash: string): boolean;
    private removeNonces(nonces: Nonce[]): void;
    private validateNonce(nonce: string, qop: Qop, nc: string): boolean;
    private askNonce(): string;

    processLine(userLine: string): void;
    generateHeader(result: DigestResult): string;
    parseAuthorization(header: string): string | undefined;
    findUser(req: http.IncomingMessage, clientOptions: ClientOptions, callback: ResultEmitter): void;
}

declare function basic(options: BasicOptions, checker?: BasicChecker): Basic;
declare function digest(options: DigestOptions, checker?: DigestChecker): Digest;

export { basic, BasicChecker, BasicOptions, digest, DigestChecker, DigestOptions };
