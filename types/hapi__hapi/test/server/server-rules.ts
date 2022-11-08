// https://github.com/hapijs/hapi/blob/master/API.md#-serversettings
import { Lifecycle, RouteOptions, Server } from "@hapi/hapi";
import Joi = require("joi");

declare module '@hapi/hapi' {
    interface RouteRules {
        omitFromPayload?: string[];
        ipWhitelist?: string[];
        pemissions?: string[];
    }
}

const server = new Server({ port: 8000 });

const ipWhitelistFactor = (ips: string[]): Lifecycle.Method => {
    return () => 'ok';
};

const omit = (...args: any[]) => 'ok';

server.rules((rules, info) => {
    if (!rules) {
        return null;
    }

    const {
        ipWhitelist,
        omitFromPayload,
        pemissions
    } = rules;

    const opts: Partial<RouteOptions> = {
        pre: []
    };

    if (ipWhitelist && ipWhitelist.length) {
        opts.pre?.push({
            method: ipWhitelistFactor(ipWhitelist),
            assign: 'asad',
            failAction: 'error'
        });
    }

    if (omitFromPayload && omitFromPayload.length) {
        opts.pre?.push({
            method: (req) => omit(req.payload)
        });
    }

    if (pemissions && pemissions.length) {
        opts.auth = {
            scope: pemissions.map(p => `+${p}`)
        };
    }

    return opts;
}, {
    validate: {
        schema: Joi.object({
            ipWhitelist: Joi.array().items(Joi.string()),
            omitFromPayload: Joi.array().items(Joi.string()),
            pemissions: Joi.array().items(Joi.string())
        })
    }
});

server.start();
