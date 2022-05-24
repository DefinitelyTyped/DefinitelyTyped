import awsLambdaFastify from 'aws-lambda-fastify';
import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { Context, Callback } from 'aws-lambda/handler';
import { RouteGenericInterface } from 'fastify/types/route';
import { Server, IncomingMessage, ServerResponse } from 'http';

const app = fastify();
const proxy = awsLambdaFastify(app, { binaryMimeTypes: ['application/octet-stream'] });

const handler = proxy;
const handlerWithCallback = (event: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
    context: Context,
    callback: Callback<FastifyReply<Server, IncomingMessage, ServerResponse, RouteGenericInterface, unknown>> | undefined) => proxy;
const handlerFunction = (event: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>, context: Context) => proxy;
const handlerWithAsync = async (event: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>, context: Context) => proxy;
