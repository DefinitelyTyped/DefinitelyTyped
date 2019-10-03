
// Type definitions for mock-req-res 1.1
// Project: https://github.com/davesag/mock-req-res#readme
// Definitions by: Sandor Turanszky <https://github.com/sandorTuranszky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import express = require('express');
import sinon = require('sinon');

declare namespace mockReqRes {
	interface Dictionary<T> {
		[key: string]: T;
	}

	type RequestPayload = Dictionary<any>;

	type ResponsePayload = Dictionary<any>;

	interface RequestOutput extends express.Request {
		get: sinon.SinonStub;
	}

	interface ResponseOutput extends express.Response {
		cookie: sinon.SinonSpy;
		clearCookie: sinon.SinonSpy;
		download: sinon.SinonSpy;
		format: sinon.SinonSpy;
		getHeader: sinon.SinonSpy;
		json: sinon.SinonSpy;
		jsonp: sinon.SinonSpy;
		send: sinon.SinonSpy;
		sendFile: sinon.SinonSpy;
		sendStatus: sinon.SinonSpy;
		setHeader: sinon.SinonSpy;
		redirect: sinon.SinonSpy;
		render: sinon.SinonSpy;
		end: sinon.SinonSpy;
		set: sinon.SinonSpy;
		type: sinon.SinonSpy;
		get: sinon.SinonStub;
		status: sinon.SinonStub;
		vary: sinon.SinonStub;
	}

	function mockRequest(options?: RequestPayload): RequestOutput;

	function mockResponse(options?: ResponsePayload): ResponseOutput;
}

export = mockReqRes;
