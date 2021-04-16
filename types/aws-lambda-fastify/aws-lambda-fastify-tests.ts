import awsLambdaFastify from './index';
import fastify from 'fastify';

const app = fastify();
const proxy = awsLambdaFastify(app, { binaryMimeTypes: ['application/octet-stream'] });

const handler = proxy;
const handlerWithCallback = (event, context, callback) => proxy(event, context, callback);
const handlerFunction = (event, context) => proxy(event, context);
const handlerWithAsync = async (event, context) => proxy(event, context);