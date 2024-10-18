import { RequestHandler } from "express";
import { URITemplate } from "uri-templates";

declare function uriTemplateRoute(template: string | URITemplate, middleware: RequestHandler): RequestHandler;

export = uriTemplateRoute;
