// HELP NEEDED: If possible, find a better way to define Server.models, Request.models and ResponseToolkit.models
// They are dynamic types extended from SchwiftyModel.

import { Plugin, Request, ResponseToolkit, Server } from "@hapi/hapi";
import * as Joi from "joi";
import * as Knex from "knex";
import * as Objection from "objection";

export type ModelClass = typeof Model | typeof Objection.Model;

export class Model extends Objection.Model {
    static getJoiSchema(patch?: boolean): Joi.Schema;
    static field(name: string): Joi.Schema;
    static joiSchema: Joi.Schema;
}

export interface RegistrationOptions {
    knex?: Knex | Knex.Config | undefined;
    models?: ModelClass[] | string | undefined;
    migrationsDir?: string | undefined;
    teardownOnStop?: boolean | undefined;
    migrateOnStart?: boolean | "latest" | "rollback" | undefined;
}

export function assertCompatible(
    ModelA: typeof Model,
    ModelB: typeof Model,
    message?: string,
): void | Error;

export const plugin: Plugin<RegistrationOptions>;

export interface RegisteredModels {
    [key: string]: ModelClass;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                      Hapi Decorations                                     +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 * Merge decorations into hapi objects.
 */
declare module "@hapi/hapi" {
    interface Server {
        schwifty: (
            config:
                | ModelClass
                | ModelClass[]
                | {
                    knex: Knex | Knex.Config;
                    models: ModelClass[];
                    migrationsDir: string;
                },
        ) => void;
        knex: () => Knex;
        models: (all?: boolean) => RegisteredModels;
    }

    interface Request {
        knex: () => Knex;
        models: (all?: boolean) => RegisteredModels;
    }

    interface ResponseToolkit {
        knex: () => Knex;
        models: (all?: boolean) => RegisteredModels;
    }
}
