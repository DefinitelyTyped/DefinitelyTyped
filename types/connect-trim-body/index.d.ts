import { RequestHandler } from "express";

declare function connectTrimBodyMiddleware(): RequestHandler;

export = connectTrimBodyMiddleware;
