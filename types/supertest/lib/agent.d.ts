import superagent = require('superagent');
import Test = require('./test');
import { AgentOptions, App } from "../types";

declare class TestAgent extends superagent.agent<Test> {
    constructor (
        app?: App,
        options?: AgentOptions,
    );

    host(host: string): this;

    "M-SEARCH"(url: string): Test;

    "m-search"(url: string): Test;

    ACL(url: string): Test;

    BIND(url: string): Test;

    CHECKOUT(url: string): Test;

    CONNECT(url: string): Test;

    COPY(url: string): Test;

    DELETE(url: string): Test;

    GET(url: string): Test;

    HEAD(url: string): Test;

    LINK(url: string): Test;

    LOCK(url: string): Test;

    MERGE(url: string): Test;

    MKACTIVITY(url: string): Test;

    MKCALENDAR(url: string): Test;

    MKCOL(url: string): Test;

    MOVE(url: string): Test;

    NOTIFY(url: string): Test;

    OPTIONS(url: string): Test;

    PATCH(url: string): Test;

    POST(url: string): Test;

    PROPFIND(url: string): Test;

    PROPPATCH(url: string): Test;

    PURGE(url: string): Test;

    PUT(url: string): Test;

    REBIND(url: string): Test;

    REPORT(url: string): Test;

    SEARCH(url: string): Test;

    SOURCE(url: string): Test;

    SUBSCRIBE(url: string): Test;

    TRACE(url: string): Test;

    UNBIND(url: string): Test;

    UNLINK(url: string): Test;

    UNLOCK(url: string): Test;

    UNSUBSCRIBE(url: string): Test;

    acl(url: string): Test;

    bind(url: string): Test;

    checkout(url: string): Test;

    connect(url: string): Test;

    copy(url: string): Test;

    del(url: string): Test;

    delete(url: string): Test;

    get(url: string): Test;

    head(url: string): Test;

    link(url: string): Test;

    lock(url: string): Test;

    merge(url: string): Test;

    mkactivity(url: string): Test;

    mkcalendar(url: string): Test;

    mkcol(url: string): Test;

    move(url: string): Test;

    notify(url: string): Test;

    options(url: string): Test;

    patch(url: string): Test;

    post(url: string): Test;

    propfind(url: string): Test;

    proppatch(url: string): Test;

    purge(url: string): Test;

    put(url: string): Test;

    rebind(url: string): Test;

    report(url: string): Test;

    search(url: string): Test;

    source(url: string): Test;

    subscribe(url: string): Test;

    trace(url: string): Test;

    unbind(url: string): Test;

    unlink(url: string): Test;

    unlock(url: string): Test;

    unsubscribe(url: string): Test;
}

export = TestAgent;
