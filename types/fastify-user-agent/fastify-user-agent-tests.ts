import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import FastifyUserAgent from "fastify-user-agent";

const app = Fastify();
app.register(FastifyUserAgent);

app.get("/", async (req: FastifyRequest, reply: FastifyReply) => {
    reply.status(200).send({
        family: req.userAgent.family,
        major: req.userAgent.major,
        minor: req.userAgent.minor,
        patch: req.userAgent.patch,
        source: req.userAgent.source,
        os: req.userAgent.os,
        device: req.userAgent.device,
        toAgent: req.userAgent.toAgent(),
        toString: req.userAgent.toString(),
        toVersion: req.userAgent.toVersion(),
        toJSON: req.userAgent.toJSON(),
    });
});
