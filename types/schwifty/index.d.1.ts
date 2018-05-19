// Type definitions for schwifty 4.0.
// Project: https://github.com/hapipal/schwifty
// Definitions by: ozum <https://github.com/ozum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// HELP WANTED: If possible, find a better way to define Server.models, Request.models and ResponseToolkit.models
// They are dynamic types extended from SchwiftyModel.

import * as Objection from "objection";
import * as Joi from "joi";
import {
    Server,
    Request,
    ResponseToolkit,
    Plugin,
    ServerRegisterPluginObject
} from "hapi";
import * as Knex from "knex";

type Model = typeof SchwiftyModel | typeof Objection.Model;

declare class SchwiftyModel extends Objection.Model {
    static getJoiSchema(patch?: boolean): Joi.Schema;
    joiSchema: Joi.Schema;
}

interface RegistrationOptions {
    knex?: Knex | Knex.Config;
    models?: Array<Model> | string;
    migrationsDir?: string;
    teardownOnStop?: boolean;
    migrateOnStart?: boolean | "latest" | "rollback";
}

interface SchwiftyExtras {
    assertCompatible: (
        ModelA: typeof SchwiftyModel,
        ModelB: typeof SchwiftyModel,
        message?: string
    ) => void | Error;
    Model: typeof SchwiftyModel;
}

declare const Schwifty: Plugin<RegistrationOptions> & SchwiftyExtras;

export const plugin: Plugin<RegistrationOptions>;

//export = Schwifty;

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
                | Model
                | Array<Model>
                | {
                      knex: Knex | Knex.Config;
                      models: Array<Model>;
                      migrationsDir: string;
                  }
        ) => void;
        knex: () => Knex;
        models: (all?: boolean) => { [key: string]: typeof SchwiftyModel };
    }

    interface Request {
        knex: () => Knex;
        models: (all?: boolean) => { [key: string]: typeof SchwiftyModel };
    }

    interface ResponseToolkit {
        knex: () => Knex;
        models: (all?: boolean) => { [key: string]: typeof SchwiftyModel };
    }
}
