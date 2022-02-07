import * as Joi from "joi";
import * as Schwifty from "@hapipal/schwifty";

declare module '@hapipal/schwifty' {
    interface RegisteredModels {
        Dog: typeof Dog;
    }
}

export default class Dog extends Schwifty.Model {
    static tableName = "Dog";

    static joiSchema: Joi.Schema = Joi.object({
        id: Joi.number(),
        name: Joi.string()
    });

    id?: number | undefined;
    name?: string | undefined;
}
