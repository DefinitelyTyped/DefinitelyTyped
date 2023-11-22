import AgentBase = require('../agent-base');
import request = require('../..');
import Response = require('./response');
import methods = require('methods');
import { CookieJar } from 'cookiejar';

type CallbackHandler = (err: any, res: Response) => void;

interface Options {
    ca?: any;
    key?: any;
    pfx?: any;
    cert?: any;
    rejectUnauthorized?: boolean;
}

type Request = typeof request.Request;

type HttpMethod = (url: string, callback?: CallbackHandler) => Request;

type AgentMethods = {
    [key in typeof methods[number]]: HttpMethod
}

declare class Agent extends AgentBase implements AgentMethods {
    constructor(options?: Options);

    jar: CookieJar;

    "M-SEARCH"(url: string, callback?: CallbackHandler): Request;

    "m-search"(url: string, callback?: CallbackHandler): Request;

    ACL(url: string, callback?: CallbackHandler): Request;

    BIND(url: string, callback?: CallbackHandler): Request;

    CHECKOUT(url: string, callback?: CallbackHandler): Request;

    CONNECT(url: string, callback?: CallbackHandler): Request;

    COPY(url: string, callback?: CallbackHandler): Request;

    DELETE(url: string, callback?: CallbackHandler): Request;

    GET(url: string, callback?: CallbackHandler): Request;

    HEAD(url: string, callback?: CallbackHandler): Request;

    LINK(url: string, callback?: CallbackHandler): Request;

    LOCK(url: string, callback?: CallbackHandler): Request;

    MERGE(url: string, callback?: CallbackHandler): Request;

    MKACTIVITY(url: string, callback?: CallbackHandler): Request;

    MKCALENDAR(url: string, callback?: CallbackHandler): Request;

    MKCOL(url: string, callback?: CallbackHandler): Request;

    MOVE(url: string, callback?: CallbackHandler): Request;

    NOTIFY(url: string, callback?: CallbackHandler): Request;

    OPTIONS(url: string, callback?: CallbackHandler): Request;

    PATCH(url: string, callback?: CallbackHandler): Request;

    POST(url: string, callback?: CallbackHandler): Request;

    PROPFIND(url: string, callback?: CallbackHandler): Request;

    PROPPATCH(url: string, callback?: CallbackHandler): Request;

    PURGE(url: string, callback?: CallbackHandler): Request;

    PUT(url: string, callback?: CallbackHandler): Request;

    REBIND(url: string, callback?: CallbackHandler): Request;

    REPORT(url: string, callback?: CallbackHandler): Request;

    SEARCH(url: string, callback?: CallbackHandler): Request;

    SOURCE(url: string, callback?: CallbackHandler): Request;

    SUBSCRIBE(url: string, callback?: CallbackHandler): Request;

    TRACE(url: string, callback?: CallbackHandler): Request;

    UNBIND(url: string, callback?: CallbackHandler): Request;

    UNLINK(url: string, callback?: CallbackHandler): Request;

    UNLOCK(url: string, callback?: CallbackHandler): Request;

    UNSUBSCRIBE(url: string, callback?: CallbackHandler): Request;

    acl(url: string, callback?: CallbackHandler): Request;

    bind(url: string, callback?: CallbackHandler): Request;

    checkout(url: string, callback?: CallbackHandler): Request;

    connect(url: string, callback?: CallbackHandler): Request;

    copy(url: string, callback?: CallbackHandler): Request;

    delete(url: string, callback?: CallbackHandler): Request;

    del(url: string, callback?: CallbackHandler): Request;

    get(url: string, callback?: CallbackHandler): Request;

    head(url: string, callback?: CallbackHandler): Request;

    link(url: string, callback?: CallbackHandler): Request;

    lock(url: string, callback?: CallbackHandler): Request;

    merge(url: string, callback?: CallbackHandler): Request;

    mkactivity(url: string, callback?: CallbackHandler): Request;

    mkcalendar(url: string, callback?: CallbackHandler): Request;

    mkcol(url: string, callback?: CallbackHandler): Request;

    move(url: string, callback?: CallbackHandler): Request;

    notify(url: string, callback?: CallbackHandler): Request;

    options(url: string, callback?: CallbackHandler): Request;

    patch(url: string, callback?: CallbackHandler): Request;

    post(url: string, callback?: CallbackHandler): Request;

    propfind(url: string, callback?: CallbackHandler): Request;

    proppatch(url: string, callback?: CallbackHandler): Request;

    purge(url: string, callback?: CallbackHandler): Request;

    put(url: string, callback?: CallbackHandler): Request;

    rebind(url: string, callback?: CallbackHandler): Request;

    report(url: string, callback?: CallbackHandler): Request;

    search(url: string, callback?: CallbackHandler): Request;

    source(url: string, callback?: CallbackHandler): Request;

    subscribe(url: string, callback?: CallbackHandler): Request;

    trace(url: string, callback?: CallbackHandler): Request;

    unbind(url: string, callback?: CallbackHandler): Request;

    unlink(url: string, callback?: CallbackHandler): Request;

    unlock(url: string, callback?: CallbackHandler): Request;

    unsubscribe(url: string, callback?: CallbackHandler): Request;
}

export = Agent;
