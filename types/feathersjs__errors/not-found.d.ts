import { RequestHandler } from 'express';

declare function notFound(): RequestHandler;

declare namespace notFound {}

export = notFound;
