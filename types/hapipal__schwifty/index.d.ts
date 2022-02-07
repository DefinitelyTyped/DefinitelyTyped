// Type definitions for schwifty 5.0
// Project: https://github.com/hapipal/schwifty
// Definitions by: ozum <https://github.com/ozum>
//                 timcosta <https://github.com/timcosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// HELP NEEDED: If possible, find a better way to define Server.models, Request.models and ResponseToolkit.models
// They are dynamic types extended from SchwiftyModel.

import * as Objection from "objection";
import * as Joi from "joi";
import { Server, Request, ResponseToolkit, Plugin } from "@hapi/hapi";
import { Knex } from "knex";

export type ModelClass = typeof Model | typeof Objection.Model;

export class Model extends Objection.Model {
    static getJoiSchema(patch?: boolean): Joi.Schema;
    static field(name: string): Joi.Schema;
    static joiSchema: Joi.Schema;
    static joiSchemaPatch: Joi.Schema;

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
    message?: string
): void | Error;

export const plugin: Plugin<RegistrationOptions>;

export const migrationsStubPath: string;

export const sandbox: Symbol;
export const bindKnex: Symbol;

export interface RegisteredModels {
    [key: string]: ModelClass;
}

/* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + +
 +                      Hapi Decorations                                     +
 + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + */

/**
 * This interface can be overwritten to modify what you want your namespace
 * to actually return. For example:
 *
 * @example
 *
 * declare module '@hapi/schwifty' {
 *    type AuthModels = {
 *        Members: Schwifty.Model
 *        Admin: Schwifty.Model
 *        Mananger: Schwifty.Model
 *    }
 *
 *    type OathModels = {
 *        Witness: Schwifty.Model
 *        Promissory: Schwifty.Model
 *        CrownCourt: Schwifty.Model
 *    }
 *
 *    interface SchwiftyDecorator {
 *        (namespace: 'auth'): AuthModels
 *        (namespace: 'oath'): OathModels
 *    }
 * }
 *
 */
export interface SchwiftyDecorator {

    (all?: boolean): RegisteredModels
    (namespace?: string): RegisteredModels
}

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
                  }
        ) => void;
        knex: () => Knex;
        models: SchwiftyDecorator;
    }

    interface Request {
        knex: () => Knex;
        models: SchwiftyDecorator;
    }

    interface ResponseToolkit {
        knex: () => Knex;
        models: SchwiftyDecorator;
    }
}
