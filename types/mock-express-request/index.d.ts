import { Request } from "express";

declare function MockExpressRequest(options?: object): Request;

export = MockExpressRequest;
