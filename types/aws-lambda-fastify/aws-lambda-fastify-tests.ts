import awsLambdaFastify from "aws-lambda-fastify";
import { Callback, Context } from "aws-lambda/handler";
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { RouteGenericInterface } from "fastify/types/route";
import { IncomingMessage, Server, ServerResponse } from "http";

const app = fastify();
const proxy = awsLambdaFastify(app, { binaryMimeTypes: ["application/octet-stream"] });

const handler = proxy;
const handlerWithCallback = (
    event: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
    context: Context,
    callback:
        | Callback<FastifyReply<Server, IncomingMessage, ServerResponse, RouteGenericInterface, unknown>>
        | undefined,
) => proxy;
const handlerFunction = (event: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>, context: Context) =>
    proxy;
const handlerWithAsync = async (
    event: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
    context: Context,
) => proxy;
