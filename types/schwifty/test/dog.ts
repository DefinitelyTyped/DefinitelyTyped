import * as Joi from "joi";
import * as Schwifty from "schwifty";

export default class Dog extends Schwifty.Model {
    static tableName = "Dog";

    joiSchema: Joi.Schema = Joi.object({
        id: Joi.number(),
        name: Joi.string()
    });

    id?: number;
    name?: string;
}
