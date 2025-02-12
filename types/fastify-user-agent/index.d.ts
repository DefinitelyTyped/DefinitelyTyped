import { FastifyPluginCallback } from "fastify";
import { Agent } from "useragent";

declare module "fastify" {
    interface FastifyRequest {
        userAgent: Agent;
    }
}

declare function fastifyUserAgent(): ReturnType<FastifyPluginCallback>;
export = fastifyUserAgent;
