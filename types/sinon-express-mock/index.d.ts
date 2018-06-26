// Type definitions for sinon-express-mock 1.3
// Project: https://github.com/danawoodman/sinon-express-mock#readme
// Definitions by: Jared Chapiewsky <https://github.com/jpchip>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    SinonStub,
} from "sinon";

import {
    Request,
    Response,
} from "express";

export namespace mockReq {
    interface MockReq {
        accepts: SinonStub;
        acceptsCharsets: SinonStub;
        acceptsEncodings: SinonStub;
        acceptsLanguages: SinonStub;
        body: object;
        flash: SinonStub;
        get: SinonStub;
        is: SinonStub;
        params: object;
        query: object;
        session: object;
    }
}

export namespace mockRes {
    interface MockRes {
        append: SinonStub;
        attachement: SinonStub;
        clearCookie: SinonStub;
        cookie: SinonStub;
        download: SinonStub;
        end: SinonStub;
        format: object;
        get: SinonStub;
        headersSent: SinonStub;
        json: SinonStub;
        jsonp: SinonStub;
        links: SinonStub;
        locals: object;
        location: SinonStub;
        redirect: SinonStub;
        render: SinonStub;
        send: SinonStub;
        sendFile: SinonStub;
        sendStatus: SinonStub;
        set: SinonStub;
        status: SinonStub;
        type: SinonStub;
        vary: SinonStub;
    }
}

export function mockReq<T extends object>(options?: T): mockReq.MockReq & T & Request;

export function mockRes<T extends object>(options?: T): mockRes.MockRes & T & Response;
