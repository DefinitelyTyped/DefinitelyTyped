import fastifyRateLimit = require("fastify-rate-limit");
import * as IORedis from 'ioredis';
import { FastifyRequest, DefaultQuery } from "fastify";
import { IncomingMessage } from "http";

fastifyRateLimit();

const fastifyRateLimitOptions: fastifyRateLimit.FastifyRateLimitOptions<FastifyRequest<IncomingMessage, DefaultQuery, {test: string}>> = {
    max: 3,
    timeWindow: 5000,
    cache: 10000,
    whitelist: ['127.0.0.1'],
    redis: new IORedis({ host: '127.0.0.1' }),
    skipOnError: true, // default false
    keyGenerator: (req) => {
        return req.headers['x-real-ip']
        || req.headers['x-client-ip']
        || req.headers['x-forwarded-for']
        || req.params.test
        || req.ip;
    },
};
