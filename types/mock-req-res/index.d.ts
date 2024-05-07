import { Request, Response } from "express";
import { SinonSpy, SinonStub } from "sinon";

declare namespace mockReqRes {
    interface Dictionary<T> {
        [key: string]: T;
    }

    type RequestPayload = Dictionary<any>;

    type ResponsePayload = Dictionary<any>;

    interface RequestOutput extends Request {
        get: SinonStub;
    }

    interface ResponseOutput extends Response {
        cookie: SinonSpy;
        clearCookie: SinonSpy;
        download: SinonSpy;
        format: SinonSpy;
        getHeader: SinonSpy;
        json: SinonSpy;
        jsonp: SinonSpy;
        send: SinonSpy;
        sendFile: SinonSpy;
        sendStatus: SinonSpy;
        setHeader: SinonSpy;
        redirect: SinonSpy;
        render: SinonSpy;
        end: SinonSpy;
        set: SinonSpy;
        type: SinonSpy;
        get: SinonStub;
        status: SinonStub;
        vary: SinonStub;
    }

    function mockRequest(options?: RequestPayload): RequestOutput;

    function mockResponse(options?: ResponsePayload): ResponseOutput;

    interface Mock {
        mockRequest(options?: RequestPayload): RequestOutput;

        mockResponse(options?: ResponsePayload): ResponseOutput;
    }
}

declare function mockReqRes(): mockReqRes.Mock;

export = mockReqRes;
