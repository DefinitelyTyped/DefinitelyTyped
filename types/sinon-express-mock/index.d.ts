// Type definitions for sinon-express-mock 1.3
// Project: https://github.com/danawoodman/sinon-express-mock#readme
// Definitions by: Jared Chapiewsky <https://github.com/jpchip>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Sinon from "sinon";

export namespace mockReq {
	interface MockReq {
		accepts: Sinon.SinonStub;
		acceptsCharsets: Sinon.SinonStub;
		acceptsEncodings: Sinon.SinonStub;
		acceptsLanguages: Sinon.SinonStub;
		body: object;
		flash: Sinon.SinonStub;
		get: Sinon.SinonStub;
		is: Sinon.SinonStub;
		params: object;
		query: object;
		session: object;
	}
}

export namespace mockRes {
	interface MockRes {
		append: Sinon.SinonStub;
		attachement: Sinon.SinonStub;
		clearCookie: Sinon.SinonStub;
		cookie: Sinon.SinonStub;
		download: Sinon.SinonStub;
		end: Sinon.SinonStub;
		format: object;
		get: Sinon.SinonStub;
		headersSent: Sinon.SinonStub;
		json: Sinon.SinonStub;
		jsonp: Sinon.SinonStub;
		links: Sinon.SinonStub;
		locals: object;
		location: Sinon.SinonStub;
		redirect: Sinon.SinonStub;
		render: Sinon.SinonStub;
		send: Sinon.SinonStub;
		sendFile: Sinon.SinonStub;
		sendStatus: Sinon.SinonStub;
		set: Sinon.SinonStub;
		status: Sinon.SinonStub;
		type: Sinon.SinonStub;
		vary: Sinon.SinonStub;
	}
}

export function mockReq(options?: object): mockReq.MockReq;

export function mockRes(options?: object): mockRes.MockRes;
