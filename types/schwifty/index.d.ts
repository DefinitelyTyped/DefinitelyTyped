// Type definitions for schwifty 4.0
// Project: https://github.com/hapipal/schwifty
// Definitions by: ozum <https://github.com/ozum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// HELP NEEDED: If possible, find a better way to define Server.models, Request.models and ResponseToolkit.models
// They are dynamic types extended from SchwiftyModel.

import * as Objection from "objection";
import * as Joi from "joi";
import { Server, Request, ResponseToolkit, Plugin } from "hapi";
import * as Knex from "knex";

export type ModelClass = typeof Model | typeof Objection.Model;

export class Model extends Objection.Model {
    static getJoiSchema(patch?: boolean): Joi.Schema;
    joiSchema: Joi.Schema;
}

export interface RegistrationOptions {
    knex?: Knex | Knex.Config;
    models?: ModelClass[] | string;
    migrationsDir?: string;
    teardownOnStop?: boolean;
    migrateOnStart?: boolean | "latest" | "rollback";
}

export function assertCompatible(
    ModelA: typeof Model,
    ModelB: typeof Model,
    message?: string
): void | Error;

export const plugin: Plugin<RegistrationOptions>;

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                      Hapi Decorations                                     +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 * Merge decorations into hapi objects.
 */
declare module "hapi" {
    interface Server {
        schwifty: (
            config:
                | ModelClass
                | ModelClass[]
                | {
                      knex: Knex | Knex.Config;
                      models: ModelClass[];
                      migrationsDir: string;
                  }
        ) => void;
        knex: () => Knex;
        models: (all?: boolean) => { [key: string]: typeof Model };
    }

    interface Request {
        knex: () => Knex;
        models: (all?: boolean) => { [key: string]: typeof Model };
    }

    interface ResponseToolkit {
        knex: () => Knex;
        models: (all?: boolean) => { [key: string]: typeof Model };
    }
}
